/**
 * MARS PULSE - Emergency Intelligence Engine
 * Handles interactive simulations, dependency cascades, blocked path rerouting,
 * and one-click 'Return to Safe Location' emergency evacuation.
 *
 * All scenarios are labeled as [DEMO SIMULATION].
 */

import { EMERGENCY_SCENARIOS } from '../data/emergencyScenarios.js';
import { PathfindingEngine } from '../navigation/pathfinding.js';
import { colonyState } from './colonyState.js';

export class EmergencyEngine {
  constructor() {
    this.pathfinder = new PathfindingEngine();
  }

  /**
   * One-Click "Return to Safe Location"
   * Immediately calculates the fastest and safest route back to SafeHaven Emergency Shelter
   */
  returnToSafeLocation() {
    const userFacId = colonyState.navigation.startFacilityId || colonyState.userLocation.facilityId || 'residential-habitat-alpha';
    const safeFacilityId = 'safehaven-shelter';

    // Calculate safest route avoiding hazard corridors
    const route = this.pathfinder.findRouteBetweenFacilities(userFacId, safeFacilityId, 'SAFER');

    const evacuationScenario = {
      id: 'RETURN_TO_SAFETY',
      title: '[DEMO SIMULATION] Emergency Evacuation: Return to Safe Location',
      shortTitle: 'Evacuation to Shelter',
      severity: 'EMERGENCY',
      badgeColor: '#00FFCC',
      description: 'One-Click Emergency Return activated. Navigation engine calculated the lowest-risk safe corridor to SafeHaven Emergency Bunker.',
      triggerFacilityId: userFacId,
      targetFacilityId: safeFacilityId,
      originFacilityId: userFacId,
      navigation: {
        routePrompt: `Emergency Safe Path: Navigating to SafeHaven Shelter (${route.distance}m, Est. ${route.travelTimeMinutes} min).`,
        mode: 'EMERGENCY_SAFE_RETURN'
      },
      actionGuide: [
        { step: 1, title: 'Safe Haven Target Locked', text: 'SafeHaven Emergency Shelter blast doors and life-support reception prepared.' },
        { step: 2, title: 'Lowest Hazard Trajectory Plotted', text: `Route generated with ${route.hazardScore}% hazard exposure score via reinforced corridors.` },
        { step: 3, title: 'Priority Clearance Signal', text: 'Citizen transponder pulsed beacon for right-of-way transit.' },
        { step: 4, title: 'Autonomous Air Quality Check', text: 'Shelter atmospheric scrubber levels verified nominal (100% capacity).' }
      ],
      route
    };

    colonyState.setNavigation({
      startFacilityId: userFacId,
      destinationFacilityId: safeFacilityId,
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'EMERGENCY_SAFE_RETURN'
    });

    colonyState.setScenario({
      ...evacuationScenario,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility(safeFacilityId);
    return { scenario: evacuationScenario, route };
  }

  /**
   * Trigger Blocked Path (Regolith Rockfall) Scenario & Dynamic Rerouting
   */
  triggerBlockedPath() {
    const scenario = EMERGENCY_SCENARIOS.BLOCKED_PATH;

    // 1. Block the critical edge in the pathfinding network
    const blockedEdge = scenario.blockedEdge;
    this.pathfinder.blockEdge(blockedEdge.u, blockedEdge.v);

    // 2. Calculate alternate route around the blockage
    const route = this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode,
      'SHORTEST'
    );

    // 3. Update state
    colonyState.setNavigation({
      startFacilityId: scenario.originFacilityId,
      destinationFacilityId: scenario.targetFacilityId,
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'DYNAMIC_REROUTE_BLOCKED_PATH'
    });

    colonyState.setScenario({
      ...scenario,
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility(scenario.targetFacilityId);
    return { scenario, route };
  }

  /**
   * Trigger Communications Failure Scenario
   */
  triggerCommFailure() {
    const scenario = EMERGENCY_SCENARIOS.COMM_FAILURE;

    // Mark colony telemetry with communications degradation
    colonyState.updateFacility('command-tower', {
      emergencyAlert: 'Orbital uplink severed by solar proton flux. Switched to subterranean fiber.',
      visualEffect: 'PULSE_WARNING'
    });

    const route = this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode,
      'SAFER'
    );

    colonyState.setNavigation({
      startFacilityId: scenario.originFacilityId,
      destinationFacilityId: scenario.targetFacilityId,
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'OFFLINE_INERTIAL_GUIDANCE'
    });

    colonyState.setScenario({
      ...scenario,
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility(scenario.targetFacilityId);
    return { scenario, route };
  }

  /**
   * Trigger Rover Breakdown Scenario
   */
  triggerRoverBreakdown() {
    const scenario = EMERGENCY_SCENARIOS.ROVER_BREAKDOWN;

    // Dispatch recovery crew from SafeHaven Shelter to breakdown coordinates
    const route = this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode,
      'SHORTEST'
    );

    colonyState.updateFacility('safehaven-shelter', {
      emergencyAlert: 'Heavy Hauler RR-01 dispatched with auxiliary oxygen transfer umbilical.',
      visualEffect: 'MEDEVAC_ACTIVE'
    });

    colonyState.setNavigation({
      startFacilityId: 'safehaven-shelter',
      destinationFacilityId: 'residential-habitat-beta',
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'ROVER_RESCUE_DISPATCH'
    });

    colonyState.setScenario({
      ...scenario,
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility('safehaven-shelter');
    return { scenario, route };
  }

  /**
   * Trigger Oxygen Hub Alpha Failure scenario
   */
  triggerOxygenFailure() {
    const scenario = EMERGENCY_SCENARIOS.OXYGEN_FAILURE;
    
    colonyState.updateFacility('oxygen-hub-alpha', {
      status: 'OFFLINE',
      health: 12,
      emergencyAlert: scenario.effects.failedFacility.alertMessage,
      visualEffect: 'FIRE_AND_ALARM'
    });

    colonyState.updateFacility('oxygen-hub-beta', {
      status: 'OPERATIONAL',
      emergencyAlert: scenario.effects.alternativeFacility.boostMessage,
      visualEffect: 'FAILOVER_ACTIVE'
    });

    const route = this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode
    );

    colonyState.setNavigation({
      startFacilityId: 'command-tower',
      destinationFacilityId: 'oxygen-hub-beta',
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'EMERGENCY_O2_REROUTE'
    });

    colonyState.setScenario({
      ...scenario,
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility('oxygen-hub-alpha');
    return { scenario, route };
  }

  /**
   * Trigger Code Red Medical Trauma scenario
   */
  triggerMedicalEmergency() {
    const scenario = EMERGENCY_SCENARIOS.MEDICAL_EMERGENCY;

    colonyState.updateFacility('residential-habitat-alpha', {
      status: 'WARNING',
      health: 80,
      emergencyAlert: scenario.effects.patientLocation.alertMessage,
      visualEffect: 'PULSE_WARNING'
    });

    const hospitalSearch = this.pathfinder.findNearestOperationalFacility(
      scenario.navigation.startNode,
      'hospital',
      colonyState.getAllFacilities()
    );

    const targetHospital = hospitalSearch ? hospitalSearch.facility : colonyState.getFacility('marscare-hospital');
    const route = hospitalSearch ? hospitalSearch.route : this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode
    );

    if (targetHospital) {
      colonyState.updateFacility(targetHospital.id, {
        emergencyAlert: `Trauma Bay 1 & Hyperbaric Pod reserved for incoming critical casualty from Ares Hab Alpha.`,
        visualEffect: 'HOSPITAL_ACTIVE'
      });
    }

    colonyState.setNavigation({
      startFacilityId: 'residential-habitat-alpha',
      destinationFacilityId: targetHospital ? targetHospital.id : 'marscare-hospital',
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'MEDEVAC_PRIORITY'
    });

    colonyState.setScenario({
      ...scenario,
      targetFacilityId: targetHospital ? targetHospital.id : 'marscare-hospital',
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility('residential-habitat-alpha');
    return { scenario, route };
  }

  /**
   * Trigger Helios Power Station Failure scenario
   */
  triggerPowerFailure() {
    const scenario = EMERGENCY_SCENARIOS.POWER_FAILURE;

    colonyState.updateFacility('helios-power', {
      status: 'CRITICAL',
      health: 22,
      emergencyAlert: scenario.effects.failedFacility.alertMessage,
      visualEffect: 'BLACKOUT_FLICKER'
    });

    for (const affected of scenario.effects.affectedFacilities) {
      colonyState.updateFacility(affected.id, {
        status: 'WARNING',
        health: affected.health,
        emergencyAlert: affected.reason,
        visualEffect: 'POWER_WARNING'
      });
    }

    colonyState.updateFacility('safehaven-shelter', {
      emergencyAlert: 'SafeHaven Geothermal Backup grid supplying 4.8 MW baseline to medical & life support.',
      visualEffect: 'BACKUP_ACTIVE'
    });

    const route = this.pathfinder.findPath(
      scenario.navigation.startNode,
      scenario.navigation.endNode
    );

    colonyState.setNavigation({
      startFacilityId: 'command-tower',
      destinationFacilityId: 'helios-power',
      activeRoute: route,
      isNavigating: true,
      navigationReason: 'POWER_ENGINEERING_DISPATCH'
    });

    colonyState.setScenario({
      ...scenario,
      route,
      activeTimestamp: new Date().toLocaleTimeString()
    });

    colonyState.selectFacility('helios-power');
    return { scenario, route };
  }

  /**
   * Reset simulation and return colony to nominal operations
   */
  resetScenario() {
    this.pathfinder.resetNetwork();
    colonyState.resetAll();
    return true;
  }
}

export const emergencyEngine = new EmergencyEngine();
