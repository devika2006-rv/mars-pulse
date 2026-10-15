/**
 * MARS PULSE - Emergency Intelligence Scenarios
 * Defines interactive crisis simulations, dependency graphs, automated responses,
 * and step-by-step survival guidance.
 *
 * ALL SCENARIOS ARE LABELED AS [DEMO SIMULATION].
 */

export const EMERGENCY_SCENARIOS = {
  BLOCKED_PATH: {
    id: 'BLOCKED_PATH',
    title: '[DEMO SIMULATION] Regolith Rockfall: Arterial Road Blocked',
    shortTitle: 'Blocked Path / Rockfall',
    icon: 'mountain-alert',
    severity: 'WARNING',
    badgeColor: '#FF725E',
    description: 'A seismic tremor on the Northwest Crater Rim triggered a talus rockfall, completely obstructing the Central-West Arterial Concourse. Autonomous navigation must detect the blockage and compute an alternate detour.',
    triggerFacilityId: 'command-tower',
    targetFacilityId: 'marscare-hospital',
    originFacilityId: 'command-tower',
    blockedEdge: { u: 'node_central', v: 'node_central_west', name: 'Central-West Concourse' },
    effects: {
      roadStatus: 'BLOCKED_BY_DEBRIS',
      affectedSection: 'Central-West Concourse (Sector 2)',
      debrisVolume: '45 m³ Basalt Boulders',
      clearingTeam: 'Heavy Loader Rover dispatched from Maintenance Depot'
    },
    navigation: {
      routePrompt: 'Central-West Road severed! Autonomous rerouting engaged via North Orbital Ringway to MarsCare Hospital.',
      startNode: 'node_central',
      endNode: 'node_west_1', // MarsCare Hospital
      mode: 'DYNAMIC_REROUTE'
    },
    actionGuide: [
      { step: 1, title: 'Hazard Detection', text: 'Inertial sensors on Transit Rover-03 flagged road obstruction on Central-West Concourse.' },
      { step: 2, title: 'Network Graph Update', text: 'Central Navigation graph dynamically severed edge node_central <-> node_central_west.' },
      { step: 3, title: 'Alternate Route Calculation', text: 'Dijkstra recalculator discovered alternate route via North Concourse (+210m, safe clearance).' },
      { step: 4, title: 'Rover Fleet Advisory', text: 'Autonomous beacons broadcasted road closure to all active hovercraft & pressurized rovers.' }
    ]
  },

  COMM_FAILURE: {
    id: 'COMM_FAILURE',
    title: '[DEMO SIMULATION] Solar Particle Storm: Orbital Relay Blackout',
    shortTitle: 'Communications Failure',
    icon: 'radio-off',
    severity: 'EMERGENCY',
    badgeColor: '#FFAA00',
    description: 'An X-class solar flare has ionized Mars upper ionosphere, blinding Mars Relay Orbiters (MRO / Odyssey) and severing high-bandwidth surface uplinks. Colony switches to hardened subterranean fiber & autonomous inertial navigation.',
    triggerFacilityId: 'command-tower',
    targetFacilityId: 'research-laboratory',
    originFacilityId: 'residential-habitat-alpha',
    effects: {
      orbitalRelay: 'OFFLINE (High Ion Flux)',
      localMesh: 'DEGRADED (Subterranean Fiber Only)',
      gnssPositioning: 'UNAVAILABLE - Switched to Dead-Reckoning IMU',
      emergencyAction: 'All long-range surface EVAs ordered to hold position or return to nearest shelter.'
    },
    navigation: {
      routePrompt: 'Uplink severed: Switched to Local Inertial Offline Navigation. Escorting citizens to Kepler Research Hub.',
      startNode: 'node_central_west',
      endNode: 'node_north_1',
      mode: 'AUTONOMOUS_DEAD_RECKONING'
    },
    actionGuide: [
      { step: 1, title: 'Ion Flux Spike Detected', text: 'Planetary Weather Mast logged extreme solar proton event exceeding 100 MeV.' },
      { step: 2, title: 'Autonomous Fallback', text: 'Local Colony Mesh switched from orbital relay to underground shielded fiber optics.' },
      { step: 3, title: 'Inertial Guidance Mode', text: 'Rover navigation algorithms calibrated with optical odometry and landmark matching.' },
      { step: 4, title: 'Expedition Recall', text: 'Automated audible klaxons triggered in peripheral science stations.' }
    ]
  },

  ROVER_BREAKDOWN: {
    id: 'ROVER_BREAKDOWN',
    title: '[DEMO SIMULATION] Rover Stranded: Traction Motor Burnout',
    shortTitle: 'Rover Breakdown',
    icon: 'truck-alert',
    severity: 'CRITICAL',
    badgeColor: '#FF3366',
    description: 'Pressurized Expedition Rover PR-04 suffered a catastrophic high-torque electric motor burnout along South-East Ringway. Life support batteries have 45 minutes remaining. Immediate medevac recovery team required.',
    triggerFacilityId: 'residential-habitat-beta',
    targetFacilityId: 'safehaven-shelter',
    originFacilityId: 'residential-habitat-beta',
    effects: {
      strandedUnit: 'Rover PR-04 (Occupants: 3 researchers)',
      subsystemStatus: 'Drive Inverter: DEAD | Life Support: 42 mins reserve | Cabin: 101 kPa',
      rescueRover: 'Heavy Hauler RR-01 mobilized from SafeHaven Emergency Shelter'
    },
    navigation: {
      routePrompt: 'Emergency Medevac Corridor: Dispatching rescue hauler to stranded rover location near Sector South-East.',
      startNode: 'node_south_1', // SafeHaven Shelter
      endNode: 'node_southeast_junction',
      mode: 'RESCUE_MEDEVAC'
    },
    actionGuide: [
      { step: 1, title: 'Distress Beacon Received', text: 'Rover PR-04 transmitted mechanical lockup code via short-range UHF transponder.' },
      { step: 2, title: 'Rescue Hauler Mobilization', text: 'SafeHaven Emergency Shelter rescue crew boarded twin-tracked recovery crawler.' },
      { step: 3, title: 'Fastest Safe Corridor Plotted', text: 'High-speed rescue trajectory illuminated avoiding loose regolith hazards.' },
      { step: 4, title: 'Auxiliary Oxygen Coupling', text: 'Recovery crew equipped with cryo-oxygen transfer umbilical and tow winch.' }
    ]
  },

  OXYGEN_FAILURE: {
    id: 'OXYGEN_FAILURE',
    title: '[DEMO SIMULATION] Oxygen Hub Alpha Cryo-Manifold Rupture',
    shortTitle: 'Oxygen Hub Failure',
    icon: 'wind-alert',
    severity: 'CRITICAL',
    badgeColor: '#FF3366',
    description: 'Primary MOXIE-IV cracking manifold at Oxygen Hub Alpha has suffered a catastrophic pressure loss. Sector atmosphere buffering is dropping rapidly. Failover to Oxygen Hub Beta engaged.',
    triggerFacilityId: 'oxygen-hub-alpha',
    targetFacilityId: 'oxygen-hub-beta',
    originFacilityId: 'command-tower',
    effects: {
      failedFacility: {
        id: 'oxygen-hub-alpha',
        status: 'OFFLINE',
        health: 12,
        alertMessage: 'Primary manifold ruptured! Atmospheric pressure collapsed. Venting cryo-buffer.',
        visualEffect: 'FIRE_AND_ALARM',
        resourceDeltas: {
          oxygenProduction: '0 L/min (FAILED)',
          reserveCapacity: '8% (Evacuating)',
          pressurePurity: 'UNSAFE'
        }
      },
      alternativeFacility: {
        id: 'oxygen-hub-beta',
        status: 'OPERATIONAL',
        health: 100,
        boostMessage: 'Automated Cryo-Reservoir failover valve ENGAGED. Sub-glacial production surged to 16,500 L/min to stabilize grid.',
        visualEffect: 'FAILOVER_ACTIVE'
      }
    },
    navigation: {
      routePrompt: 'Rerouting life support maintenance & refuel convoys to Oxygen Hub Beta via West Concourse.',
      startNode: 'node_central',
      endNode: 'node_west_2', // Oxygen Hub Beta
      mode: 'EMERGENCY_SUPPLY_CONVOY'
    },
    actionGuide: [
      { step: 1, title: 'Manifold Breach Flagged', text: 'Pressure sensor OM-42 registered rapid depressurization in Sector Alpha.' },
      { step: 2, title: 'Isolation Valves Sealed', text: 'Automatic pyro-valves isolated breached storage tank within 1.2 seconds.' },
      { step: 3, title: 'Secondary Hub Boost', text: 'Oxygen Hub Beta cryo-cracking compressor ramped to 125% rated output.' },
      { step: 4, title: 'Emergency Route Dispatched', text: 'Illuminated safe transit corridor between Command Centre and Hub Beta.' }
    ]
  },

  POWER_FAILURE: {
    id: 'POWER_FAILURE',
    title: '[DEMO SIMULATION] Helios Tokamak Core Magnetic Decoupling',
    shortTitle: 'Helios Grid Failure',
    icon: 'zap-off',
    severity: 'DISASTER',
    badgeColor: '#FFAA00',
    description: 'Magnetic confinement field fluctuation at Helios Fusion Complex. Tokamak reactor scrams into emergency dampening. Total grid loss imminent.',
    triggerFacilityId: 'helios-power',
    targetFacilityId: 'safehaven-shelter',
    originFacilityId: 'command-tower',
    effects: {
      failedFacility: {
        id: 'helios-power',
        status: 'CRITICAL',
        health: 24,
        alertMessage: 'Magnetic containment compromised! Fusion plasma dumped to cryo-heatsinks. Grid output: 0 MW.',
        visualEffect: 'BLACKOUT_FLICKER'
      },
      affectedFacilities: [
        {
          id: 'nova-university',
          status: 'WARNING',
          health: 65,
          reason: 'Grid power severed. Running on 30-minute auxiliary battery pack. High-compute arrays suspended.'
        },
        {
          id: 'research-laboratory',
          status: 'WARNING',
          health: 60,
          reason: 'Auxiliary generators engaged. Cryogenic sample vaults at risk if unpowered > 4 hours.'
        },
        {
          id: 'mars-gateway-spaceport',
          status: 'WARNING',
          health: 70,
          reason: 'Flight landing radar offline. Ground operations restricted to emergency beacon guidance.'
        },
        {
          id: 'aquacycle-water',
          status: 'WARNING',
          health: 75,
          reason: 'Nanofiltration pumps operating at 40% capacity on emergency solar buffer.'
        }
      ],
      backupSource: {
        name: 'SafeHaven Geothermal RTG & Solar Reserves',
        status: 'ENGAGED',
        capacity: 'Supplying 4.8 MW emergency baseline to life-support systems.'
      }
    },
    navigation: {
      routePrompt: 'Critical Power Grid Response: Dispatching Engineering Rapid Reaction Team to Helios Power.',
      startNode: 'node_central',
      endNode: 'node_east_1', // Helios Power
      mode: 'RAPID_RESPONSE'
    },
    actionGuide: [
      { step: 1, title: 'Fusion Safety Scram', text: 'Helios Fusion Reactor tripped into safety scram. Colony grid drops 52 MW.' },
      { step: 2, title: 'Cascading Dependency Shedding', text: 'Dependency Engine isolated 4 non-critical facilities to safeguard life support.' },
      { step: 3, title: 'Geothermal Baseload Online', text: 'SafeHaven Geothermal RTG kicked in within 80ms, powering hospital & water filtration.' },
      { step: 4, title: 'Engineering Team Dispatched', text: 'Emergency engineering rapid intervention squad routed along East Concourse.' }
    ]
  },

  MEDICAL_EMERGENCY: {
    id: 'MEDICAL_EMERGENCY',
    title: '[DEMO SIMULATION] Code Red Trauma: Airlock Decompression Injury',
    shortTitle: 'Medical Trauma',
    icon: 'cross-alert',
    severity: 'EMERGENCY',
    badgeColor: '#FF725E',
    description: 'Emergency Beacon activated in Ares Habitat Sector Alpha. A colonist suffered severe decompression trauma and fractures during external airlock maintenance.',
    triggerFacilityId: 'residential-habitat-alpha',
    targetFacilityId: 'marscare-hospital',
    originFacilityId: 'residential-habitat-alpha',
    effects: {
      patientLocation: {
        id: 'residential-habitat-alpha',
        status: 'WARNING',
        health: 82,
        alertMessage: 'Decompression injury in Airlock 3! Medevac hover-ambulance dispatched.',
        visualEffect: 'PULSE_WARNING'
      },
      receivingHospital: {
        id: 'marscare-hospital',
        status: 'OPERATIONAL',
        health: 98,
        alertMessage: 'Trauma Bay 1 & Hyperbaric Decompression Pod prepped. Surgical team standing by.',
        visualEffect: 'HOSPITAL_ACTIVE'
      }
    },
    navigation: {
      routePrompt: 'Priority Medevac Route: Ares Habitat Alpha -> MarsCare Medical Center Trauma Ramp.',
      startNode: 'node_central_west', // Hab Alpha
      endNode: 'node_west_1', // MarsCare Hospital
      mode: 'MEDEVAC_PRIORITY'
    },
    actionGuide: [
      { step: 1, title: 'Citizen Distress Beacon', text: 'Bio-telemetry monitor in Habitation Airlock 3 alerted MarsCare emergency triage.' },
      { step: 2, title: 'Nearest Trauma Centre Selected', text: 'Navigation engine verified MarsCare Hospital has an active hyperbaric decompression pod.' },
      { step: 3, title: 'Green Corridor Clearance', text: 'All civilian traffic holds at perimeter intersections for inbound Medevac hovercraft.' },
      { step: 4, title: 'Direct Patient Transfer', text: 'Estimated transit time 2.1 minutes via West Arterial Concourse.' }
    ]
  }
};
