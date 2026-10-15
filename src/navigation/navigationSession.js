/**
 * MARS PULSE - Live Turn-by-Turn Navigation Session Engine
 * Coordinates live route progression, simulated rover positioning,
 * voice announcements at distance thresholds, auto-advance simulation,
 * and dynamic rerouting updates.
 */

import { generateRouteInstructions } from './navigationInstructions.js';
import { voiceNavigator } from './voiceNavigator.js';
import { colonyState } from '../simulation/colonyState.js';

export class NavigationSession {
  constructor() {
    this.isActive = false;
    this.isPaused = false;
    this.isAutoAdvancing = false;
    this.autoTimer = null;

    this.route = null;
    this.startFacility = null;
    this.destFacility = null;
    this.instructions = [];
    this.currentStepIndex = 0;

    this.simulatedSpeedKmH = 28; // Standard pressurized Martian rover cruise speed
    this.subscribers = new Set();
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notify(eventType, payload) {
    for (const sub of this.subscribers) {
      try {
        sub(eventType, payload, this);
      } catch (err) {
        console.warn('Nav session subscriber error:', err);
      }
    }
  }

  /**
   * Start a new live turn-by-turn navigation session
   */
  start(route, startFacility, destFacility, autoPlay = true) {
    this.stop(); // Clean any previous session

    if (!route || !route.path || route.path.length < 2) {
      console.warn('Cannot start navigation: route path has fewer than 2 nodes.');
      return false;
    }

    this.route = route;
    this.startFacility = startFacility;
    this.destFacility = destFacility;

    // Generate route-aware instructions
    this.instructions = generateRouteInstructions(route.path, startFacility, destFacility);
    this.currentStepIndex = 0;
    this.isActive = true;
    this.isPaused = false;

    // Position rover at departure waypoint
    if (this.instructions.length > 0) {
      const firstWp = this.instructions[0].waypoint;
      colonyState.userLocation.coords = { x: firstWp.x, y: firstWp.y || 0.2, z: firstWp.z };
      colonyState.userLocation.name = startFacility ? startFacility.name : firstWp.name;
    }

    // Speak initial departure instruction
    if (this.instructions.length > 0) {
      voiceNavigator.speak(this.instructions[0].voicePrompt, true);
    }

    this.notify('NAV_STARTED', {
      instructions: this.instructions,
      currentStep: this.instructions[0]
    });

    if (autoPlay) {
      this.startAutoAdvance();
    }

    return true;
  }

  /**
   * Get current active turn instruction object
   */
  getCurrentStep() {
    return this.instructions[this.currentStepIndex] || null;
  }

  /**
   * Get total number of steps
   */
  getTotalSteps() {
    return this.instructions.length;
  }

  /**
   * Get remaining distance in meters from current step
   */
  getRemainingDistance() {
    const curr = this.getCurrentStep();
    return curr ? curr.cumulativeRemainingMeters : 0;
  }

  /**
   * Get estimated remaining time in minutes
   */
  getRemainingMinutes() {
    const distMeters = this.getRemainingDistance();
    return (distMeters / 60).toFixed(1);
  }

  /**
   * Advance to the next turn maneuver
   */
  nextStep() {
    if (!this.isActive || this.currentStepIndex >= this.instructions.length - 1) {
      return;
    }

    this.currentStepIndex++;
    const step = this.getCurrentStep();

    // Update vehicle position to active waypoint
    if (step && step.waypoint) {
      colonyState.userLocation.coords = { x: step.waypoint.x, y: step.waypoint.y || 0.2, z: step.waypoint.z };
    }

    // Voice announcement for the new step
    if (step) {
      if (step.maneuver === 'arrive') {
        voiceNavigator.announceArrival(this.destFacility ? this.destFacility.name : step.targetName);
        this.stopAutoAdvance();
        this.notify('NAV_ARRIVED', step);
      } else {
        voiceNavigator.speak(step.voicePrompt);
      }
    }

    this.notify('STEP_CHANGED', {
      stepIndex: this.currentStepIndex,
      step
    });
  }

  /**
   * Step backward to the previous maneuver
   */
  prevStep() {
    if (!this.isActive || this.currentStepIndex <= 0) {
      return;
    }

    this.currentStepIndex--;
    const step = this.getCurrentStep();

    if (step && step.waypoint) {
      colonyState.userLocation.coords = { x: step.waypoint.x, y: step.waypoint.y || 0.2, z: step.waypoint.z };
    }

    if (step) {
      voiceNavigator.speak(step.voicePrompt, true);
    }

    this.notify('STEP_CHANGED', {
      stepIndex: this.currentStepIndex,
      step
    });
  }

  /**
   * Jump directly to an arbitrary step
   */
  jumpToStep(index) {
    if (!this.isActive || index < 0 || index >= this.instructions.length) return;
    this.currentStepIndex = index;
    const step = this.getCurrentStep();

    if (step && step.waypoint) {
      colonyState.userLocation.coords = { x: step.waypoint.x, y: step.waypoint.y || 0.2, z: step.waypoint.z };
    }

    if (step) {
      voiceNavigator.speak(step.voicePrompt, true);
    }

    this.notify('STEP_CHANGED', {
      stepIndex: this.currentStepIndex,
      step
    });
  }

  /**
   * Repeat current instruction audio
   */
  repeatCurrentInstruction() {
    const step = this.getCurrentStep();
    if (step) {
      voiceNavigator.speak(step.voicePrompt, true);
    }
  }

  /**
   * Toggle pause/resume
   */
  togglePause() {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    return this.isPaused;
  }

  pause() {
    this.isPaused = true;
    this.stopAutoAdvance();
    voiceNavigator.pause();
    this.notify('NAV_PAUSED', { stepIndex: this.currentStepIndex });
  }

  resume() {
    this.isPaused = false;
    voiceNavigator.resume();
    this.repeatCurrentInstruction();
    this.startAutoAdvance();
    this.notify('NAV_RESUMED', { stepIndex: this.currentStepIndex });
  }

  /**
   * Toggle simulated auto-advance
   */
  toggleAutoAdvance() {
    if (this.isAutoAdvancing) {
      this.stopAutoAdvance();
    } else {
      this.startAutoAdvance();
    }
    return this.isAutoAdvancing;
  }

  startAutoAdvance(stepIntervalMs = 3800) {
    this.stopAutoAdvance();
    this.isAutoAdvancing = true;

    this.autoTimer = setInterval(() => {
      if (!this.isActive || this.isPaused) return;

      if (this.currentStepIndex < this.instructions.length - 1) {
        this.nextStep();
      } else {
        this.stopAutoAdvance();
      }
    }, stepIntervalMs);

    this.notify('AUTO_ADVANCE_CHANGED', true);
  }

  stopAutoAdvance() {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
    this.isAutoAdvancing = false;
    this.notify('AUTO_ADVANCE_CHANGED', false);
  }

  /**
   * Handle dynamic reroute update while session is active
   */
  updateReroute(newRoute, detourReason = 'Road blockage detected') {
    if (!this.isActive || !newRoute || !newRoute.path) return;

    this.route = newRoute;
    const oldStepCount = this.instructions.length;
    this.instructions = generateRouteInstructions(newRoute.path, this.startFacility, this.destFacility);
    this.currentStepIndex = 0;

    voiceNavigator.announceReroute(detourReason);

    this.notify('NAV_REROUTED', {
      instructions: this.instructions,
      currentStep: this.instructions[0],
      oldStepCount
    });
  }

  /**
   * Stop and end the navigation session cleanly
   */
  stop() {
    this.stopAutoAdvance();
    voiceNavigator.cancel();

    this.isActive = false;
    this.isPaused = false;
    this.currentStepIndex = 0;
    this.instructions = [];

    this.notify('NAV_ENDED', null);
  }
}

export const navigationSession = new NavigationSession();
