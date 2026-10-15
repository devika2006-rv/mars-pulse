/**
 * MARS PULSE - Hazard Zones, Planetary Obstacles & Edge Risk Ratings
 * Defines simulated planetary environmental hazards for hazard-aware navigation.
 */

export const HAZARD_ZONES = [
  {
    id: 'hz-crater-slope',
    name: 'Northwest Crater Rim Fault Zone',
    type: 'STEEP_SLOPE',
    typeLabel: 'Steep Regolith Slope (>24°)',
    center: { x: -60, z: -50 },
    radius: 38,
    severity: 4, // 1 to 5
    color: '#FF725E',
    description: 'Unconsolidated talus slope prone to rover slippage and regolith slides. Rover speed restricted to 8 km/h.',
    affectedEdges: ['node_central_west--node_northwest_junction', 'node_northwest_junction--node_northwest_1']
  },
  {
    id: 'hz-radiation-ridge',
    name: 'Helios East Solar Flux Ridge',
    type: 'RADIATION_CORRIDOR',
    typeLabel: 'Solar Particle Event (SPE) Exposed Ridge',
    center: { x: 105, z: -20 },
    radius: 40,
    severity: 5,
    color: '#FF3366',
    description: 'Elevated basaltic plateau outside secondary magnetic containment shield. Unprotected EVA duration strictly limited.',
    affectedEdges: ['node_central_east--node_east_junction', 'node_east_junction--node_east_1']
  },
  {
    id: 'hz-dust-devil',
    name: 'Southern Basin Dust Devil Alley',
    type: 'DUST_DEVIL',
    typeLabel: 'Dust Devil Vortex & Electrostatic Alley',
    center: { x: 10, z: 95 },
    radius: 46,
    severity: 3,
    color: '#FFBE69',
    description: 'Frequent thermal vortices with fine ferric electrostatic suspension. Optical sensor degradation risk.',
    affectedEdges: ['node_south_junction--node_south_2', 'node_southwest_junction--node_south_2']
  },
  {
    id: 'hz-sinkhole',
    name: 'Southwest Regolith Cavity',
    type: 'LOOSE_REGOLITH',
    typeLabel: 'Sub-surface Lava Tube Creep Void',
    center: { x: -50, z: 80 },
    radius: 32,
    severity: 3,
    color: '#FF725E',
    description: 'Low-density volcanic ash sub-base. Heavy freight vehicles (> 12 tonnes) must divert to reinforced concrete arterials.',
    affectedEdges: ['node_southwest_junction--node_southwest_1', 'node_west_1--node_southwest_junction']
  }
];

/**
 * Returns hazard rating multiplier (1.0 = clear, >1.0 = penalized) and risk score for an edge
 */
export function getEdgeHazardInfo(u, v, activeHazards = HAZARD_ZONES) {
  const edgeKey = u < v ? `${u}--${v}` : `${v}--${u}`;
  let maxSeverity = 0;
  let matchingHazard = null;

  for (const hz of activeHazards) {
    if (hz.affectedEdges && hz.affectedEdges.includes(edgeKey)) {
      if (hz.severity > maxSeverity) {
        maxSeverity = hz.severity;
        matchingHazard = hz;
      }
    }
  }

  return {
    edgeKey,
    hasHazard: maxSeverity > 0,
    severity: maxSeverity,
    hazard: matchingHazard,
    // Multiplier for Dijkstra cost calculation in 'SAFER' route profile
    weightMultiplier: maxSeverity === 0 ? 1.0 : (1.0 + maxSeverity * 0.85)
  };
}
