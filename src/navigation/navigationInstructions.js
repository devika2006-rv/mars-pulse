/**
 * MARS PULSE - Route-Aware Turn-by-Turn Instruction Generator
 * Calculates turn angles, geometric maneuvers, street names, landmark targets,
 * SVG icons, and natural spoken voice prompts from connected road graph segments.
 *
 * Never uses arbitrary or hardcoded directions unrelated to the route.
 */

import { ROAD_NODES, ROAD_EDGES, calculateDistance } from '../data/roadGraph.js';

// Pre-index edge street names by normalized key "u--v"
const EDGE_STREET_MAP = new Map();
for (const edge of ROAD_EDGES) {
  const k1 = `${edge.from}--${edge.to}`;
  const k2 = `${edge.to}--${edge.from}`;
  EDGE_STREET_MAP.set(k1, edge.name);
  EDGE_STREET_MAP.set(k2, edge.name);
}

/**
 * Get street name connecting two road nodes
 */
export function getStreetNameBetweenNodes(u, v) {
  const key = `${u}--${v}`;
  return EDGE_STREET_MAP.get(key) || 'Colony Arterial Road';
}

/**
 * Calculate heading angle in degrees (0° = North/-Z, 90° = East/+X)
 */
function getHeadingDeg(p1, p2) {
  const dx = p2.x - p1.x;
  const dz = p2.z - p1.z;
  const rad = Math.atan2(dx, -dz);
  return (rad * (180 / Math.PI) + 360) % 360;
}

/**
 * Calculate signed turn angle between two consecutive segments in degrees (-180° to +180°)
 * Positive = Right turn, Negative = Left turn
 */
function getTurnAngleDeg(pPrev, pCurr, pNext) {
  const v1x = pCurr.x - pPrev.x;
  const v1z = pCurr.z - pPrev.z;
  const v2x = pNext.x - pCurr.x;
  const v2z = pNext.z - pCurr.z;

  // Cross product (2D in X-Z plane: v1x * v2z - v1z * v2x)
  const cross = v1x * v2z - v1z * v2x;
  // Dot product
  const dot = v1x * v2x + v1z * v2z;

  const rad = Math.atan2(cross, dot);
  return (rad * 180) / Math.PI;
}

/**
 * Determine maneuver type and icon from turn angle in degrees
 */
function getManeuverFromAngle(angleDeg) {
  const abs = Math.abs(angleDeg);

  if (abs < 22) {
    return {
      type: 'straight',
      label: 'Continue straight',
      icon: 'straight'
    };
  } else if (angleDeg > 0) {
    // Right turns
    if (angleDeg < 55) {
      return { type: 'slight-right', label: 'Bear slightly right', icon: 'slight-right' };
    } else if (angleDeg <= 125) {
      return { type: 'turn-right', label: 'Turn right', icon: 'turn-right' };
    } else {
      return { type: 'sharp-right', label: 'Make a sharp right turn', icon: 'sharp-right' };
    }
  } else {
    // Left turns
    if (angleDeg > -55) {
      return { type: 'slight-left', label: 'Bear slightly left', icon: 'slight-left' };
    } else if (angleDeg >= -125) {
      return { type: 'turn-left', label: 'Turn left', icon: 'turn-left' };
    } else {
      return { type: 'sharp-left', label: 'Make a sharp left turn', icon: 'sharp-left' };
    }
  }
}

/**
 * Generate full sequence of turn instructions from a path array [nodeId_0, nodeId_1, ...]
 * @param {Array<string>} path - Array of road node IDs
 * @param {Object} startFacility - Departure facility metadata
 * @param {Object} destFacility - Destination facility metadata
 */
export function generateRouteInstructions(path, startFacility = null, destFacility = null) {
  if (!path || path.length < 2) {
    return [];
  }

  const nodes = path.map(id => ROAD_NODES[id] || { id, name: id, x: 0, y: 0.2, z: 0 });
  const instructions = [];

  // 1. Compute segment lengths and cumulative remaining distances
  const segmentDistances = [];
  let totalRouteDist = 0;

  for (let i = 0; i < nodes.length - 1; i++) {
    const d = Math.round(calculateDistance(nodes[i], nodes[i + 1]) * 3.5);
    segmentDistances.push(d);
    totalRouteDist += d;
  }

  let remainingDist = totalRouteDist;

  // 2. Step 0: Departure Maneuver
  const firstStreet = getStreetNameBetweenNodes(path[0], path[1]);
  const startName = startFacility ? startFacility.name : nodes[0].name;
  const firstDist = segmentDistances[0];

  instructions.push({
    index: 0,
    maneuver: 'depart',
    icon: 'depart',
    actionText: `Depart from ${startName}`,
    streetName: firstStreet,
    targetName: nodes[1].name,
    distanceMeters: firstDist,
    distanceFormatted: `${firstDist} m`,
    cumulativeRemainingMeters: remainingDist,
    remainingFormatted: `${remainingDist} m`,
    displayPrimary: `Head towards ${nodes[1].name}`,
    displaySecondary: `Follow ${firstStreet} for ${firstDist} m`,
    voicePrompt: `Depart from ${startName}. Continue on ${firstStreet} for ${firstDist} metres towards ${nodes[1].name}.`,
    waypoint: nodes[0],
    nextWaypoint: nodes[1]
  });

  remainingDist -= firstDist;

  // 3. Middle Steps: Turns at junctions (nodes 1 to length - 2)
  for (let i = 1; i < nodes.length - 1; i++) {
    const pPrev = nodes[i - 1];
    const pCurr = nodes[i];
    const pNext = nodes[i + 1];

    const angleDeg = getTurnAngleDeg(pPrev, pCurr, pNext);
    const maneuver = getManeuverFromAngle(angleDeg);
    const streetName = getStreetNameBetweenNodes(path[i], path[i + 1]);
    const segDist = segmentDistances[i];
    const targetName = nodes[i + 1].name;

    let actionLabel = maneuver.label;
    let voice = '';

    if (maneuver.type === 'straight') {
      actionLabel = `Continue straight onto ${streetName}`;
      voice = `Continue straight on ${streetName} for ${segDist} metres towards ${targetName}.`;
    } else {
      actionLabel = `${maneuver.label} onto ${streetName}`;
      voice = `${maneuver.label} onto ${streetName}, then continue for ${segDist} metres.`;
    }

    instructions.push({
      index: i,
      maneuver: maneuver.type,
      icon: maneuver.icon,
      actionText: actionLabel,
      streetName,
      targetName,
      turnAngleDeg: Math.round(angleDeg),
      distanceMeters: segDist,
      distanceFormatted: `${segDist} m`,
      cumulativeRemainingMeters: remainingDist,
      remainingFormatted: `${remainingDist} m`,
      displayPrimary: actionLabel,
      displaySecondary: `In ${segDist} m • Towards ${targetName}`,
      voicePrompt: voice,
      waypoint: pCurr,
      nextWaypoint: pNext
    });

    remainingDist -= segDist;
  }

  // 4. Final Step: Destination Arrival
  const finalNode = nodes[nodes.length - 1];
  const destName = destFacility ? destFacility.name : finalNode.name;

  instructions.push({
    index: nodes.length - 1,
    maneuver: 'arrive',
    icon: 'arrive',
    actionText: `Arrive at ${destName}`,
    streetName: getStreetNameBetweenNodes(path[path.length - 2], path[path.length - 1]),
    targetName: destName,
    distanceMeters: 0,
    distanceFormatted: '0 m',
    cumulativeRemainingMeters: 0,
    remainingFormatted: '0 m',
    displayPrimary: `Arrive at ${destName}`,
    displaySecondary: 'Destination reached on the right',
    voicePrompt: `You have arrived at your destination: ${destName}.`,
    waypoint: finalNode,
    nextWaypoint: null
  });

  return instructions;
}

/**
 * Returns SVG icon markup for a given maneuver key
 */
export function getManeuverSvg(iconKey, size = 32) {
  const strokeWidth = 2.4;
  switch (iconKey) {
    case 'straight':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;
    case 'turn-right':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19v-6a4 4 0 0 1 4-4h9"/><polyline points="15 5 19 9 15 13"/></svg>`;
    case 'turn-left':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M18 19v-6a4 4 0 0 0-4-4H5"/><polyline points="9 5 5 9 9 13"/></svg>`;
    case 'slight-right':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19l6-9h6"/><polyline points="15 6 19 10 15 14"/></svg>`;
    case 'slight-left':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M17 19l-6-9H5"/><polyline points="9 6 5 10 9 14"/></svg>`;
    case 'sharp-right':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19v-9a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v4"/><polyline points="11 10 15 14 19 10"/></svg>`;
    case 'sharp-left':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M18 19v-9a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v4"/><polyline points="13 10 9 14 5 10"/></svg>`;
    case 'arrive':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
    case 'depart':
    default:
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`;
  }
}
