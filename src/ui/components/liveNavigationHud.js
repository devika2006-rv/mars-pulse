/**
 * MARS PULSE - Live Voice-Guided Navigation HUD Component
 * Google Maps-inspired distraction-free live navigation interface:
 * - Prominent top turn maneuver card with large SVG arrow and distance
 * - Bottom floating bar with remaining distance/time, speed, voice controls,
 *   mute/unmute, repeat prompt, pause/resume, route list drawer, and End Navigation.
 */

import { navigationSession } from '../../navigation/navigationSession.js';
import { voiceNavigator } from '../../navigation/voiceNavigator.js';
import { getManeuverSvg } from '../../navigation/navigationInstructions.js';

export class LiveNavigationHud {
  constructor(container, colonyState, callbacks = {}) {
    this.container = container;
    this.colonyState = colonyState;
    this.callbacks = callbacks;
    this.showRouteDrawer = false;
    this.showVoiceSettings = false;

    // Subscribe to session updates
    this.unsubscribeSession = navigationSession.subscribe((eventType, data) => {
      this.render();
      if (eventType === 'STEP_CHANGED' || eventType === 'NAV_STARTED') {
        if (this.callbacks.onStepChanged && data.step && data.step.waypoint) {
          this.callbacks.onStepChanged(data.step.waypoint);
        }
      }
    });
  }

  destroy() {
    if (this.unsubscribeSession) {
      this.unsubscribeSession();
    }
  }

  render() {
    if (!navigationSession.isActive) {
      this.container.innerHTML = '';
      return;
    }

    const currentStep = navigationSession.getCurrentStep();
    const totalSteps = navigationSession.getTotalSteps();
    const stepIdx = navigationSession.currentStepIndex;
    const isPaused = navigationSession.isPaused;
    const isAuto = navigationSession.isAutoAdvancing;
    const isMuted = voiceNavigator.isMuted;
    const remainingDist = navigationSession.getRemainingDistance();
    const remainingMins = navigationSession.getRemainingMinutes();
    const isArrived = currentStep && currentStep.maneuver === 'arrive';

    const voices = voiceNavigator.getVoices();
    const currentVoiceURI = voiceNavigator.selectedVoice ? voiceNavigator.selectedVoice.voiceURI : '';

    this.container.innerHTML = `
      <div class="live-nav-fullscreen-overlay">
        <!-- 1. TOP TURN INSTRUCTION CARD (Google Maps Style) -->
        <div class="live-turn-card glass-panel ${isArrived ? 'arrival-glow' : ''}">
          <div class="turn-icon-box ${currentStep ? currentStep.maneuver : 'straight'}">
            ${currentStep ? getManeuverSvg(currentStep.icon, 36) : getManeuverSvg('straight', 36)}
          </div>

          <div class="turn-instruction-content">
            <div class="turn-distance-badge">
              ${isArrived ? 'DESTINATION REACHED' : `In ${currentStep ? currentStep.distanceFormatted : '0 m'}`}
            </div>
            <div class="turn-primary-text">
              ${currentStep ? currentStep.displayPrimary : 'Proceed along colony road'}
            </div>
            <div class="turn-secondary-text">
              ${currentStep ? currentStep.displaySecondary : ''}
            </div>
          </div>

          <div class="top-quick-actions">
            <!-- Repeat Audio Button -->
            <button id="btn-live-repeat-voice" class="live-round-btn" title="Repeat spoken instruction (Audio)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            </button>
            <!-- Mute / Unmute Button -->
            <button id="btn-live-mute-voice" class="live-round-btn ${isMuted ? 'muted' : ''}" title="${isMuted ? 'Unmute voice guidance' : 'Mute voice guidance'}">
              ${isMuted ? `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              ` : `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              `}
            </button>
          </div>
        </div>

        <!-- 2. ROUTE OVERVIEW DRAWER (Slide-Up, Toggleable) -->
        ${this.showRouteDrawer ? `
          <div class="live-route-steps-drawer glass-panel">
            <div class="drawer-header">
              <span class="drawer-title">📋 FULL ROUTE MANEUVERS (${totalSteps} STEPS)</span>
              <button id="btn-close-route-drawer" class="drawer-close-btn">✕</button>
            </div>
            <div class="drawer-steps-list">
              ${navigationSession.instructions.map((step, idx) => `
                <div class="drawer-step-row ${idx === stepIdx ? 'active' : ''}" data-index="${idx}">
                  <span class="row-step-icon">${getManeuverSvg(step.icon, 20)}</span>
                  <div class="row-step-text">
                    <div class="row-step-primary">${step.displayPrimary}</div>
                    <div class="row-step-sub">${step.displaySecondary}</div>
                  </div>
                  <span class="row-step-dist">${step.distanceFormatted}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 3. VOICE SETTINGS MODAL (Optional dropdown) -->
        ${this.showVoiceSettings ? `
          <div class="voice-settings-popup glass-panel">
            <div class="popup-header">
              <span>🎙️ Voice Synthesizer Settings</span>
              <button id="btn-close-voice-settings" class="drawer-close-btn">✕</button>
            </div>
            <div class="popup-body">
              <label class="setting-label">VOICE ENGINE / LANGUAGE</label>
              <select id="select-voice-uri" class="voice-select-field">
                ${voices.map(v => `
                  <option value="${v.voiceURI}" ${v.voiceURI === currentVoiceURI ? 'selected' : ''}>
                    ${v.name} (${v.lang})
                  </option>
                `).join('')}
              </select>
              <p class="voice-note">Audio powered by browser SpeechSynthesis API. Ensure your device volume is turned up.</p>
            </div>
          </div>
        ` : ''}

        <!-- 4. BOTTOM NAVIGATION STATUS & CONTROL BAR -->
        <div class="live-nav-bottom-bar glass-panel">
          <!-- Left: Trip Metrics -->
          <div class="nav-metrics-group">
            <div class="trip-time-box">
              <span class="trip-time-val green">${remainingMins}</span>
              <span class="trip-time-unit">MIN</span>
            </div>
            <div class="trip-distance-box">
              <span class="trip-dist-val cyan">${remainingDist} m</span>
              <span class="trip-speed-val">@ ${navigationSession.simulatedSpeedKmH} km/h (Rover)</span>
            </div>
          </div>

          <!-- Center: Step & Simulation Navigation Controls -->
          <div class="nav-controls-center">
            <button id="btn-nav-prev-step" class="nav-ctrl-btn" title="Previous Maneuver" ${stepIdx === 0 ? 'disabled' : ''}>
              ◀
            </button>
            <button id="btn-nav-toggle-pause" class="nav-ctrl-btn play-pause-btn ${isPaused ? 'paused' : ''}" title="${isPaused ? 'Resume Navigation' : 'Pause Navigation'}">
              ${isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button id="btn-nav-next-step" class="nav-ctrl-btn" title="Next Maneuver" ${stepIdx >= totalSteps - 1 ? 'disabled' : ''}>
              ▶
            </button>
            <button id="btn-nav-toggle-drawer" class="nav-ctrl-btn route-list-btn" title="Show all turns">
              📋 Turns (${stepIdx + 1}/${totalSteps})
            </button>
            <button id="btn-open-voice-settings" class="nav-ctrl-btn voice-gear-btn" title="Voice & Language Settings">
              ⚙️ Voice
            </button>
          </div>

          <!-- Right: Exit Live Navigation -->
          <div class="nav-controls-right">
            <button id="btn-end-navigation" class="btn-end-nav-pill" title="End Live Navigation Guidance">
              <span class="end-icon">✕</span>
              <span>End Navigation</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.setupEvents();
  }

  setupEvents() {
    // 1. Repeat voice instruction
    const btnRepeat = document.getElementById('btn-live-repeat-voice');
    if (btnRepeat) {
      btnRepeat.addEventListener('click', () => {
        navigationSession.repeatCurrentInstruction();
      });
    }

    // 2. Mute/Unmute
    const btnMute = document.getElementById('btn-live-mute-voice');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        voiceNavigator.toggleMute();
        this.render();
      });
    }

    // 3. Previous Step
    const btnPrev = document.getElementById('btn-nav-prev-step');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        navigationSession.prevStep();
      });
    }

    // 4. Next Step
    const btnNext = document.getElementById('btn-nav-next-step');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        navigationSession.nextStep();
      });
    }

    // 5. Pause / Resume
    const btnPause = document.getElementById('btn-nav-toggle-pause');
    if (btnPause) {
      btnPause.addEventListener('click', () => {
        navigationSession.togglePause();
        this.render();
      });
    }

    // 6. Route Drawer Toggle
    const btnDrawer = document.getElementById('btn-nav-toggle-drawer');
    const btnCloseDrawer = document.getElementById('btn-close-route-drawer');

    if (btnDrawer) {
      btnDrawer.addEventListener('click', () => {
        this.showRouteDrawer = !this.showRouteDrawer;
        this.render();
      });
    }
    if (btnCloseDrawer) {
      btnCloseDrawer.addEventListener('click', () => {
        this.showRouteDrawer = false;
        this.render();
      });
    }

    // Drawer row click to jump
    document.querySelectorAll('.drawer-step-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.dataset.index, 10);
        navigationSession.jumpToStep(idx);
        this.showRouteDrawer = false;
        this.render();
      });
    });

    // 7. Voice Settings Toggle
    const btnVoiceGear = document.getElementById('btn-open-voice-settings');
    const btnCloseVoice = document.getElementById('btn-close-voice-settings');
    const selectVoice = document.getElementById('select-voice-uri');

    if (btnVoiceGear) {
      btnVoiceGear.addEventListener('click', () => {
        this.showVoiceSettings = !this.showVoiceSettings;
        this.render();
      });
    }
    if (btnCloseVoice) {
      btnCloseVoice.addEventListener('click', () => {
        this.showVoiceSettings = false;
        this.render();
      });
    }
    if (selectVoice) {
      selectVoice.addEventListener('change', (e) => {
        voiceNavigator.setVoice(e.target.value);
        voiceNavigator.speak('Voice navigation configured for Martian surface transit.', true);
      });
    }

    // 8. End Navigation Button
    const btnEnd = document.getElementById('btn-end-navigation');
    if (btnEnd) {
      btnEnd.addEventListener('click', () => {
        navigationSession.stop();
        if (this.callbacks.onEndNavigation) {
          this.callbacks.onEndNavigation();
        }
      });
    }
  }
}
