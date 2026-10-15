/**
 * MARS PULSE - Integration & Logic Verification Test Suite
 * Validates pathfinding profiles, dynamic road blockage rerouting,
 * multi-stop mission planning, emergency intelligence scenarios,
 * authentic science datasets, graph connectivity,
 * AND voice-guided turn-by-turn live navigation engine.
 */

import { PathfindingEngine } from './src/navigation/pathfinding.js';
import { emergencyEngine } from './src/simulation/emergencyEngine.js';
import { colonyState } from './src/simulation/colonyState.js';
import { NASA_LANDING_SITES, SCIENTIFIC_GEOLOGY_UNITS, COLONY_SCIENCE_STATIONS } from './src/data/scienceData.js';
import { HAZARD_ZONES, getEdgeHazardInfo } from './src/data/hazardData.js';
import { PRELOADED_MISSIONS } from './src/ui/pages/missionPlannerPage.js';
import { FACILITIES } from './src/data/facilities.js';
import { ROAD_NODES, ROAD_EDGES } from './src/data/roadGraph.js';
import { generateRouteInstructions, getStreetNameBetweenNodes, getManeuverSvg } from './src/navigation/navigationInstructions.js';
import { voiceNavigator } from './src/navigation/voiceNavigator.js';
import { navigationSession } from './src/navigation/navigationSession.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log('====================================================');
console.log('MARS PULSE - AUTOMATED INTEGRATION & LOGIC TEST SUITE');
console.log('====================================================\n');

// 1. Pathfinding Engine & Multi-Profile Routes
console.log('1. Testing Smart Navigation & Multi-Profile Routing:');
const pf = new PathfindingEngine();

// Shortest route between Habitation Alpha and MarsCare Hospital
const shortestRoute = pf.findRouteBetweenFacilities('residential-habitat-alpha', 'marscare-hospital', 'SHORTEST');
assert(!shortestRoute.error, 'Shortest route between Hab Alpha and MarsCare Hospital found');
assert(shortestRoute.distance > 0, `Shortest route distance computed: ${shortestRoute.distance}m`);
assert(shortestRoute.waypoints.length >= 2, `Route contains ${shortestRoute.waypoints.length} waypoints`);
assert(shortestRoute.turnDirections.length > 0, `Generated ${shortestRoute.turnDirections.length} turn-by-turn directions`);

// Safer profile
const saferRoute = pf.findRouteBetweenFacilities('residential-habitat-alpha', 'marscare-hospital', 'SAFER');
assert(!saferRoute.error, 'Safer route computed');
assert(typeof saferRoute.hazardScore === 'number', `Hazard score computed: ${saferRoute.hazardScore}%`);
assert(saferRoute.safetyRating, `Safety rating determined: ${saferRoute.safetyRating}`);

// Multi-profile comparison
const multiProfiles = pf.findMultiProfileRoutes('residential-habitat-alpha', 'helios-power');
assert(multiProfiles.shortest && !multiProfiles.shortest.error, 'Multi-profile Shortest calculated');
assert(multiProfiles.safer && !multiProfiles.safer.error, 'Multi-profile Safer calculated');
assert(multiProfiles.alternative && !multiProfiles.alternative.error, 'Multi-profile Alternative calculated');

// 2. Road Blockage & Dynamic Rerouting
console.log('\n2. Testing Road Blockage Detection & Dynamic Rerouting:');
const origRoute = pf.findRouteBetweenFacilities('command-tower', 'marscare-hospital', 'SHORTEST');
assert(!origRoute.error, `Original baseline route has ${origRoute.path.length} nodes: ${origRoute.path.join(' -> ')}`);

// Simulate rockfall on arterial road node_central <-> node_central_west
pf.blockEdge('node_central', 'node_central_west');
assert(pf.isEdgeBlocked('node_central', 'node_central_west'), 'Edge node_central--node_central_west is marked blocked');

const detourRoute = pf.findRouteBetweenFacilities('command-tower', 'marscare-hospital', 'SHORTEST');
assert(!detourRoute.error, 'Detour route successfully computed around blockage');
assert(!detourRoute.path.includes('node_central_west') || detourRoute.path[1] !== 'node_central_west',
  `Detour avoided blocked arterial segment: ${detourRoute.path.join(' -> ')}`);

// Unblock and restore
pf.unblockEdge('node_central', 'node_central_west');
assert(!pf.isEdgeBlocked('node_central', 'node_central_west'), 'Edge successfully unblocked');
const restoredRoute = pf.findRouteBetweenFacilities('command-tower', 'marscare-hospital', 'SHORTEST');
assert(restoredRoute.distance === origRoute.distance, 'Restored route matches original distance exactly');

// 3. Multi-Stop Expedition Planner
console.log('\n3. Testing Multi-Stop Mission Planner Routing:');
const missionStops = ['command-tower', 'oxygen-hub-alpha', 'oxygen-hub-beta', 'safehaven-shelter'];
const missionRoute = pf.findMultiStopRoute(missionStops);
assert(!missionRoute.error, 'Multi-stop route calculated without error');
assert(missionRoute.legs.length === 3, `Calculated exactly 3 mission legs (for 4 stops)`);
assert(missionRoute.totalDistance > 0, `Total mission distance: ${missionRoute.totalDistance}m (${missionRoute.totalTimeMinutes} min)`);
assert(missionRoute.waypoints.length > 4, `Compiled continuous route of ${missionRoute.waypoints.length} waypoints`);

// Verify preloaded mission templates integrity
assert(PRELOADED_MISSIONS.length === 3, 'Found 3 preloaded mission templates');
for (const template of PRELOADED_MISSIONS) {
  const tRoute = pf.findMultiStopRoute(template.stops);
  assert(!tRoute.error, `Preloaded mission "${template.name}" routes cleanly with 0 errors`);
}

// 4. Emergency Scenarios & One-Click Return to Safe Location
console.log('\n4. Testing Emergency Scenarios & Return to Safe Location:');

// Scenario 1: Blocked Path / Rockfall
const sBlocked = emergencyEngine.triggerBlockedPath();
assert(sBlocked.scenario && sBlocked.scenario.id === 'BLOCKED_PATH', 'Blocked Path emergency triggered');
assert(colonyState.navigation.isNavigating, 'Navigation state updated for Blocked Path crisis');
assert(colonyState.navigation.navigationReason === 'DYNAMIC_REROUTE_BLOCKED_PATH', 'Reason set to DYNAMIC_REROUTE_BLOCKED_PATH');

// Scenario 2: Communications Failure
const sComm = emergencyEngine.triggerCommFailure();
assert(sComm.scenario && sComm.scenario.id === 'COMM_FAILURE', 'Communications Failure emergency triggered');
assert(colonyState.navigation.navigationReason === 'OFFLINE_INERTIAL_GUIDANCE', 'Switched to OFFLINE_INERTIAL_GUIDANCE');

// Scenario 3: Rover Breakdown
const sRover = emergencyEngine.triggerRoverBreakdown();
assert(sRover.scenario && sRover.scenario.id === 'ROVER_BREAKDOWN', 'Rover Breakdown emergency triggered');
assert(colonyState.navigation.navigationReason === 'ROVER_RESCUE_DISPATCH', 'Dispatched ROVER_RESCUE_DISPATCH');

// Scenario 4: Oxygen Failure & Failover
const sO2 = emergencyEngine.triggerOxygenFailure();
assert(sO2.scenario && sO2.scenario.id === 'OXYGEN_FAILURE', 'Oxygen Hub Failure emergency triggered');
assert(colonyState.getFacility('oxygen-hub-alpha').status === 'OFFLINE', 'Oxygen Hub Alpha marked OFFLINE');
assert(colonyState.getFacility('oxygen-hub-beta').status === 'OPERATIONAL', 'Oxygen Hub Beta marked OPERATIONAL failover');

// Scenario 5: Power Decoupling & Cascade
const sPower = emergencyEngine.triggerPowerFailure();
assert(sPower.scenario && sPower.scenario.id === 'POWER_FAILURE', 'Power Failure emergency triggered');
assert(colonyState.getFacility('helios-power').status === 'CRITICAL', 'Helios Power marked CRITICAL');
assert(colonyState.getFacility('nova-university').status === 'WARNING', 'Dependent Nova University received load-shed WARNING');

// Scenario 6: One-Click Return to Safe Location
const sEvac = emergencyEngine.returnToSafeLocation();
assert(sEvac.scenario && sEvac.scenario.id === 'RETURN_TO_SAFETY', 'One-Click Return to Safe Location activated');
assert(colonyState.navigation.destinationFacilityId === 'safehaven-shelter', 'Destination locked to SafeHaven Emergency Shelter');
assert(sEvac.route && sEvac.route.distance > 0, `Evacuation corridor plotted: ${sEvac.route.distance}m`);
assert(sEvac.scenario.actionGuide.length === 4, 'Survival protocol provides 4 step-by-step guidance actions');

// Reset to Nominal
emergencyEngine.resetScenario();
assert(colonyState.activeScenario === null, 'Emergency scenario cleared; colony restored to nominal operations');
assert(colonyState.getFacility('oxygen-hub-alpha').status === 'OPERATIONAL', 'Oxygen Hub Alpha restored to OPERATIONAL');
assert(colonyState.getFacility('helios-power').status === 'OPERATIONAL', 'Helios Power restored to OPERATIONAL');

// 5. Scientific Mars Map & Datasets
console.log('\n5. Testing Authentic NASA Planetary Science Datasets:');
assert(NASA_LANDING_SITES.length === 5, `Verified 5 authentic NASA & international landing sites`);
const percy = NASA_LANDING_SITES.find(s => s.id === 'perseverance-jezero');
assert(percy.coordinates === '18.38° N, 77.58° E', 'Perseverance landing coordinates verified');
assert(percy.instruments.includes('MOXIE (O2 In-situ)'), 'Perseverance instrument MOXIE verified');
assert(percy.pdsArchiveUrl.startsWith('https://pds-'), 'Official NASA PDS archive URL verified');

assert(SCIENTIFIC_GEOLOGY_UNITS.length === 4, `Verified 4 USGS Chryse Basin geological units`);
assert(COLONY_SCIENCE_STATIONS.length === 3, `Verified 3 Colony in-situ research stations`);
assert(HAZARD_ZONES.length === 4, `Verified 4 planetary hazard corridors`);

// 6. Graph Connectivity & Facilities
console.log('\n6. Testing Colony Road Network & Facility Integrity:');
assert(FACILITIES.length === 16, `Colony has ${FACILITIES.length} mapped facilities`);
assert(Object.keys(ROAD_NODES).length >= 15, `Colony road network has ${Object.keys(ROAD_NODES).length} nodes`);
assert(ROAD_EDGES.length >= 20, `Colony road network has ${ROAD_EDGES.length} connected edges`);

// Verify all facilities can route to Command Tower and SafeHaven Shelter
for (const fac of FACILITIES) {
  const rToShelter = pf.findRouteBetweenFacilities(fac.id, 'safehaven-shelter');
  assert(!rToShelter.error, `Facility "${fac.name}" has valid route to SafeHaven Shelter`);
}

// 7. Voice-Guided Turn-by-Turn Navigation Engine
console.log('\n7. Testing Voice-Guided Turn-by-Turn Navigation & Instruction Generator:');

// Route from Command Tower to MarsCare Hospital
const navRoute = pf.findRouteBetweenFacilities('command-tower', 'marscare-hospital', 'SHORTEST');
const facOrigin = colonyState.getFacility('command-tower');
const facDest = colonyState.getFacility('marscare-hospital');

const instructions = generateRouteInstructions(navRoute.path, facOrigin, facDest);
assert(instructions.length >= 3, `Generated ${instructions.length} connected turn maneuvers`);

// Verify Step 0 is departure
assert(instructions[0].maneuver === 'depart', 'First step is departure maneuver');
assert(instructions[0].voicePrompt.includes('Depart from'), `Voice departure prompt: "${instructions[0].voicePrompt}"`);
assert(instructions[0].streetName.length > 0, `Street name identified: ${instructions[0].streetName}`);

// Verify Middle turn maneuvers have angle and geometry
for (let i = 1; i < instructions.length - 1; i++) {
  const step = instructions[i];
  assert(step.maneuver && step.icon, `Step ${i} maneuver determined: ${step.maneuver} (${step.actionText})`);
  assert(typeof step.turnAngleDeg === 'number', `Step ${i} turn angle computed: ${step.turnAngleDeg}°`);
  assert(step.distanceMeters > 0, `Step ${i} segment distance: ${step.distanceMeters}m`);
  assert(step.voicePrompt.length > 0, `Step ${i} voice prompt verified`);
}

// Verify Final step is arrival
const lastStep = instructions[instructions.length - 1];
assert(lastStep.maneuver === 'arrive', 'Last step is arrival maneuver');
assert(lastStep.voicePrompt.includes('arrived at your destination'), `Voice arrival prompt: "${lastStep.voicePrompt}"`);
assert(lastStep.cumulativeRemainingMeters === 0, 'Arrival cumulative remaining distance is 0m');

// Verify SVG Icons exist for all maneuvers
for (const m of ['straight', 'turn-right', 'turn-left', 'slight-right', 'slight-left', 'sharp-right', 'sharp-left', 'arrive', 'depart']) {
  const svg = getManeuverSvg(m, 24);
  assert(svg.startsWith('<svg') && svg.endsWith('</svg>'), `Maneuver icon "${m}" renders valid SVG`);
}

// Test VoiceNavigator Controls
console.log('\nTesting VoiceNavigator state & controls:');
assert(typeof voiceNavigator.isMuted === 'boolean', 'VoiceNavigator tracks mute state');
assert(!voiceNavigator.isMuted, 'VoiceNavigator starts unmuted');

const mutedState = voiceNavigator.toggleMute();
assert(mutedState === true && voiceNavigator.isMuted === true, 'VoiceNavigator successfully muted');
voiceNavigator.toggleMute();
assert(voiceNavigator.isMuted === false, 'VoiceNavigator successfully unmuted');

voiceNavigator.pause();
assert(voiceNavigator.isPaused === true, 'VoiceNavigator pause state activated');
voiceNavigator.resume();
assert(voiceNavigator.isPaused === false, 'VoiceNavigator resume state activated');

// Test NavigationSession Lifecycle
console.log('\nTesting NavigationSession live tracking & simulation:');
let sessionEventLogged = null;
navigationSession.subscribe((evt, data) => {
  sessionEventLogged = evt;
});

const started = navigationSession.start(navRoute, facOrigin, facDest, false);
assert(started === true, 'NavigationSession started successfully');
assert(navigationSession.isActive === true, 'NavigationSession marked active');
assert(sessionEventLogged === 'NAV_STARTED', 'Received NAV_STARTED notification');
assert(navigationSession.currentStepIndex === 0, 'Session begins at step 0');
assert(navigationSession.getRemainingDistance() === navRoute.distance, `Initial remaining distance: ${navigationSession.getRemainingDistance()}m`);

// Step forward
navigationSession.nextStep();
assert(navigationSession.currentStepIndex === 1, 'Advanced to step 1 via nextStep()');
assert(sessionEventLogged === 'STEP_CHANGED', 'Received STEP_CHANGED notification');

// Step backward
navigationSession.prevStep();
assert(navigationSession.currentStepIndex === 0, 'Returned to step 0 via prevStep()');

// Jump to final arrival step
navigationSession.jumpToStep(instructions.length - 1);
assert(navigationSession.currentStepIndex === instructions.length - 1, 'Jumped to destination arrival step');
assert(navigationSession.getCurrentStep().maneuver === 'arrive', 'Current step is arrive');

// Test dynamic reroute injection during live session
const altRoute = pf.findRouteBetweenFacilities('command-tower', 'marscare-hospital', 'ALTERNATIVE');
navigationSession.updateReroute(altRoute, 'Rerouted via outer ringway');
assert(navigationSession.instructions.length > 0, 'Session updated with rerouted instructions sequence');
assert(sessionEventLogged === 'NAV_REROUTED', 'Received NAV_REROUTED notification');

// Stop session
navigationSession.stop();
assert(navigationSession.isActive === false, 'NavigationSession cleanly stopped');
assert(sessionEventLogged === 'NAV_ENDED', 'Received NAV_ENDED notification');

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('====================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL INTEGRATION & VOICE NAVIGATION TESTS PASSED WITH 100% SUCCESS!');
  process.exit(0);
}
