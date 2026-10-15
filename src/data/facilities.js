/**
 * MARS PULSE - Colony Facilities Local Dataset
 * Complete local offline dataset of 15 essential colony structures.
 */

export const FACILITIES = [
  {
    id: 'command-tower',
    name: 'Central Command Tower',
    shortName: 'Command Tower',
    category: 'command',
    categoryLabel: 'Command & Control',
    icon: 'tower-control',
    coords: { x: 0, y: 0, z: 0 },
    roadNode: 'node_central',
    elevation: 0,
    status: 'OPERATIONAL', // OPERATIONAL, WARNING, CRITICAL, OFFLINE
    health: 98,
    occupancy: '142 / 200 personnel',
    powerSource: 'Helios Grid Main',
    powerConsumption: '450 kW',
    oxygenSupply: 'Direct Line Alpha',
    description: 'The administrative heart of the Martian colony. Houses colony council, planetary atmospheric monitoring, orbital uplink arrays, and planetary defense management.',
    services: [
      'Colony Administration & Governance',
      'Orbital Communication Uplink',
      'Atmospheric & Weather Radar',
      'Automated Traffic Control (Skyways)',
      'Planetary Emergency Broadcast System'
    ],
    resources: {
      power: 98,
      oxygen: 99,
      water: 95,
      structural: 100
    },
    synonyms: ['command', 'headquarters', 'hq', 'tower', 'central', 'control', 'admin', 'council'],
    emergencyRole: 'Central Emergency Dispatch & Evacuation Coordinator'
  },
  {
    id: 'marscare-hospital',
    name: 'MarsCare Medical Center',
    shortName: 'MarsCare Hospital',
    category: 'hospital',
    categoryLabel: 'Healthcare',
    icon: 'cross',
    coords: { x: -75, y: 0, z: 45 },
    roadNode: 'node_west_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 96,
    occupancy: '84 / 120 beds',
    powerSource: 'Helios Grid Sub-B (Dual Redundant)',
    powerConsumption: '620 kW',
    oxygenSupply: 'Alpha + Internal Cryo Reservoir',
    description: 'Premier tertiary healthcare and zero-gravity trauma surgery facility. Equipped with radiation therapy wards, hyperbaric chambers, and neonatal pods.',
    services: [
      'Emergency Trauma Surgery & Intensive Care',
      'Low-G Adaptation Medicine',
      'Atmospheric Decompression & Barotrauma Treatment',
      'Cosmic Radiation Therapy & Cellular Regeneration',
      '24/7 Medevac Hover-Ambulance Bay'
    ],
    resources: {
      power: 96,
      oxygen: 98,
      water: 92,
      medicalSupplies: 94
    },
    synonyms: ['hospital', 'medical', 'clinic', 'doctor', 'surgery', 'health', 'er', 'ambulance', 'medcare', 'trauma', 'treatment'],
    emergencyRole: 'Primary Medical Disaster Receiving Station'
  },
  {
    id: 'nova-university',
    name: 'Nova Martian University',
    shortName: 'Nova University',
    category: 'education',
    categoryLabel: 'Education & Research',
    icon: 'graduation-cap',
    coords: { x: 70, y: 0, z: -55 },
    roadNode: 'node_east_2',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 94,
    occupancy: '610 / 800 researchers & students',
    powerSource: 'Helios Grid Main',
    powerConsumption: '380 kW',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'Higher education and advanced astrophysical engineering campus. Trains the next generation of Martian engineers, astrobiologists, and terraforming scientists.',
    services: [
      'Astrobiology & Terraforming Sciences',
      'Quantum Computation & Sub-surface Geophysics',
      'Martian Habitat Structural Engineering',
      'Student Residential Quarters',
      'Open Knowledge Archive & Planetarium'
    ],
    resources: {
      power: 94,
      oxygen: 95,
      water: 90,
      compute: 99
    },
    synonyms: ['university', 'college', 'academy', 'campus', 'school', 'research', 'students', 'education', 'learning', 'nova'],
    emergencyRole: 'Secondary Citizen Shelter & Scientific Crisis Assessment'
  },
  {
    id: 'horizon-school',
    name: 'Horizon Youth Academy',
    shortName: 'Horizon School',
    category: 'education',
    categoryLabel: 'Education',
    icon: 'book-open',
    coords: { x: -45, y: 0, z: -85 },
    roadNode: 'node_northwest_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 99,
    occupancy: '215 / 300 children',
    powerSource: 'Helios Grid Sub-A',
    powerConsumption: '190 kW',
    oxygenSupply: 'Oxygen Hub Beta',
    description: 'Comprehensive primary and secondary learning environment designed with pressurized play biomes, simulated Earth gardens, and low-gravity athletic gymnasiums.',
    services: [
      'Primary & Intermediate Schooling',
      'Simulated Earth Ecology Experience Lab',
      'Youth Low-G Gymnastics & Conditioning',
      'Safe Family Reunification Station'
    ],
    resources: {
      power: 99,
      oxygen: 99,
      water: 96,
      studentWelfare: 100
    },
    synonyms: ['school', 'academy', 'kids', 'children', 'youth', 'kindergarten', 'elementary', 'horizon'],
    emergencyRole: 'Priority Evacuation Assembly Point Alpha'
  },
  {
    id: 'oxygen-hub-alpha',
    name: 'Oxygen Hub Alpha',
    shortName: 'O2 Hub Alpha',
    category: 'oxygen',
    categoryLabel: 'Life Support',
    icon: 'wind',
    coords: { x: 85, y: 0, z: 60 },
    roadNode: 'node_southeast_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 97,
    occupancy: 'Automated (12 Tech Crew)',
    powerSource: 'Helios Dedicated High-Tension Feed',
    powerConsumption: '850 kW',
    oxygenSupply: 'Primary Sub-surface Electrolysis & MOXIE IV Array',
    description: 'Primary life support infrastructure processing atmospheric CO2 and underground perchlorate ice into medical and breathable grade O2 (12,000 m³/hr).',
    services: [
      'Atmospheric CO2 Cracking (MOXIE-IV Megawatt Array)',
      'Cryogenic Liquid Oxygen Liquefaction & Buffering',
      'High-pressure Pipeline Grid Distribution to Sectors A, B, C',
      'Mobile EVA Suit Recharging Stations'
    ],
    resources: {
      power: 97,
      oxygenProduction: '12,400 L/min',
      reserveCapacity: '98%',
      pressurePurity: '99.98%'
    },
    synonyms: ['oxygen', 'o2', 'air', 'breathing', 'atmosphere', 'life support', 'alpha', 'tank', 'refill', 'gas'],
    emergencyRole: 'Primary Colony Atmospheric Grid Provider'
  },
  {
    id: 'oxygen-hub-beta',
    name: 'Oxygen Hub Beta',
    shortName: 'O2 Hub Beta',
    category: 'oxygen',
    categoryLabel: 'Life Support (Reserve)',
    icon: 'wind',
    coords: { x: -95, y: 0, z: -40 },
    roadNode: 'node_west_2',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 99,
    occupancy: 'Automated (8 Tech Crew)',
    powerSource: 'Helios Grid Auxiliary + Geo-thermal Tap',
    powerConsumption: '720 kW',
    oxygenSupply: 'Secondary Ice-Electrolysis Plant',
    description: 'Redundant secondary atmospheric synthesis plant built directly over glacial basalt lava tubes. Supplies western habitats and serves as primary emergency failover.',
    services: [
      'Sub-glacial Ice Mining & Electrolytic O2 Generation',
      'Deep-tube Underground Cryogenic Reserve Silos (180-day capacity)',
      'Automated Rapid-Pressurization Failover Valves',
      'Western Sector Oxygen Trunkline Distribution'
    ],
    resources: {
      power: 99,
      oxygenProduction: '9,800 L/min',
      reserveCapacity: '100%',
      pressurePurity: '99.99%'
    },
    synonyms: ['oxygen beta', 'o2 beta', 'backup oxygen', 'air backup', 'reserve air', 'failover oxygen', 'beta'],
    emergencyRole: 'Automated Failover Grid for Entire Settlement'
  },
  {
    id: 'residential-habitat-alpha',
    name: 'Ares Habitat Sector Alpha',
    shortName: 'Residential Sector A',
    category: 'residential',
    categoryLabel: 'Residential',
    icon: 'home',
    coords: { x: -40, y: 0, z: -40 },
    roadNode: 'node_central_west',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 98,
    occupancy: '1,420 / 1,600 residents',
    powerSource: 'Helios Grid Sub-A',
    powerConsumption: '510 kW',
    oxygenSupply: 'Oxygen Hub Beta + Local Recyclers',
    description: 'High-density geodesic residential biodome cluster offering private apartments, communal dining gardens, natural lighting spectrum simulation, and social lounges.',
    services: [
      'Private Modular Living Units (Quads & Family Pods)',
      'Circadian Lighting Emulation Chambers',
      'Internal Graywater Recycling Loop',
      'Community Kitchens & Dining Commons'
    ],
    resources: {
      power: 98,
      oxygen: 97,
      water: 94,
      residentComfort: 96
    },
    synonyms: ['homes', 'house', 'living', 'housing', 'apartments', 'residential', 'hab', 'habitat', 'ares', 'residents'],
    emergencyRole: 'Primary Civilian Residence Sector'
  },
  {
    id: 'residential-habitat-beta',
    name: 'Olympus Habitat Sector Beta',
    shortName: 'Residential Sector B',
    category: 'residential',
    categoryLabel: 'Residential',
    icon: 'home',
    coords: { x: -20, y: 0, z: -65 },
    roadNode: 'node_northwest_2',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 97,
    occupancy: '1,180 / 1,400 residents',
    powerSource: 'Helios Grid Sub-A',
    powerConsumption: '480 kW',
    oxygenSupply: 'Oxygen Hub Alpha / Beta Crosslink',
    description: 'Secondary residential biosphere featuring modular terrace housing, family education pods, and direct subterranean connection to Eden Greenhouse and Horizon School.',
    services: [
      'Terraced Habitation Quarters',
      'Childcare and Play Hubs',
      'Subterranean Transit Tram Access',
      'Private Acoustic Isolation Pods'
    ],
    resources: {
      power: 97,
      oxygen: 98,
      water: 95,
      residentComfort: 94
    },
    synonyms: ['habitat beta', 'hab b', 'homes north', 'apartments 2', 'residential beta'],
    emergencyRole: 'Civilian Evacuation Shelter Support'
  },
  {
    id: 'eden-greenhouse',
    name: 'Eden Hydroponic Biosphere',
    shortName: 'Eden Greenhouse',
    category: 'food',
    categoryLabel: 'Agriculture & Food',
    icon: 'sprout',
    coords: { x: 45, y: 0, z: 80 },
    roadNode: 'node_south_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 99,
    occupancy: '65 Agronomists & 120 Harvest Drones',
    powerSource: 'Helios Grid Main + Solar Skylight Concentrators',
    powerConsumption: '740 kW',
    oxygenSupply: 'Net Positive Producer (+1,500 L/min to Grid)',
    description: 'Massive double-walled geodesic botanical sanctuary. Cultivates spirulina algae, fast-cycle genetically enhanced potatoes, microgreens, dwarf wheat, and artificial pollinator apiaries.',
    services: [
      'Vertical Hydroponic & Aeroponic Food Production',
      'Spirulina & Chlorella Protein Bioreactors',
      'Botanical Carbon Scrubbing & Natural O2 Enrichment',
      'Seed Bank & Genetic Crop Vault'
    ],
    resources: {
      power: 99,
      water: 96,
      cropYieldRate: '104% (Nominal)',
      biomassIndex: 'Optimum'
    },
    synonyms: ['greenhouse', 'food', 'farm', 'hydroponic', 'agriculture', 'crops', 'plants', 'vegetables', 'eden', 'garden', 'eat'],
    emergencyRole: 'Emergency Food Rations Depot & Auxiliary Biological O2 Buffer'
  },
  {
    id: 'aquacycle-water',
    name: 'AquaCycle Hydrology Complex',
    shortName: 'AquaCycle Water Plant',
    category: 'water',
    categoryLabel: 'Water Reclamation',
    icon: 'droplets',
    coords: { x: 30, y: 0, z: -95 },
    roadNode: 'node_north_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 96,
    occupancy: 'Automated (14 Specialists)',
    powerSource: 'Helios Grid Sub-B',
    powerConsumption: '610 kW',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'Sub-surface ice melting, thermal distillation, and closed-loop nanofiltration works. Recycles 99.4% of all colony water with zero wastewater discharge.',
    services: [
      'Glacial Permafrost Sub-surface Extraction Well',
      'Nanotube Membrane Filtration & Mineralization',
      'Colony Potable Drinking Water Distribution',
      'Agricultural Graywater Treatment'
    ],
    resources: {
      power: 96,
      cleanWaterReserve: '4,200,000 Liters',
      dailyPurityIndex: '99.997%',
      flowRate: '1,800 L/min'
    },
    synonyms: ['water', 'drink', 'water plant', 'filtration', 'recycle', 'aquacycle', 'ice', 'hydrology', 'potable'],
    emergencyRole: 'Emergency Water Reserves & Fire Suppression Supply'
  },
  {
    id: 'helios-power',
    name: 'Helios Fusion & Solar Complex',
    shortName: 'Helios Power Station',
    category: 'power',
    categoryLabel: 'Power & Energy',
    icon: 'zap',
    coords: { x: 115, y: 0, z: -25 },
    roadNode: 'node_east_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 98,
    occupancy: '30 Nuclear & Plasma Physicists',
    powerSource: 'Deuterium-Helium-3 Compact Tokamak Reactor + 40MW Photovoltaic Field',
    powerConsumption: 'Producer (+52 MW Total Output)',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'The energetic engine of Mars Pulse. Operates an advanced magnetic-confinement D-He3 fusion core supplemented by high-efficiency bifacial solar tracking arrays.',
    services: [
      '50 MW Primary Magnetic Fusion Core',
      '40 MW Solar Photovoltaic & Thermal Salt Storage Basin',
      'High-Temperature Superconducting Distribution Ring',
      'Emergency Flywheel & Solid-State Supercapacitor Banks'
    ],
    resources: {
      reactorOutput: '52.4 MW',
      gridFrequency: '60.00 Hz',
      reserveCapacitors: '99.4%',
      coolantTemperature: '480 K (Nominal)'
    },
    synonyms: ['power', 'electricity', 'energy', 'helios', 'fusion', 'solar', 'generator', 'reactor', 'grid', 'battery'],
    emergencyRole: 'Primary Colony Energy Heartbeat'
  },
  {
    id: 'safehaven-shelter',
    name: 'SafeHaven Deep Blast Shelter',
    shortName: 'SafeHaven Shelter',
    category: 'shelter',
    categoryLabel: 'Emergency Defense',
    icon: 'shield-alert',
    coords: { x: -105, y: 0, z: 15 },
    roadNode: 'node_west_3',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 100,
    occupancy: 'Standby (Capacity: 3,500 people)',
    powerSource: 'Independent Geothermal + RTG Battery Banks',
    powerConsumption: '95 kW (Standby)',
    oxygenSupply: 'Autonomous Chemical O2 Candles (120-Day Supply)',
    description: 'Subterranean bunker carved into deep basalt bedrock 40 meters beneath the surface. Shielded against Class-X solar particle events, meteor strikes, and hull breaches.',
    services: [
      'Heavy Regolith & Lead Radiation Shielding (100% CME Protection)',
      'Independent Sealed Life Support & Closed-Circuit Atmosphere',
      'Long-life Caloric Nutrition & Medical Stockpiles',
      'Emergency Colony Command Backup Bunker'
    ],
    resources: {
      power: 100,
      oxygen: 100,
      water: 100,
      bunkerIntegrity: '100% Sealed'
    },
    synonyms: ['shelter', 'bunker', 'safe', 'safehaven', 'emergency shelter', 'fallout', 'storm', 'radiation', 'hide', 'blast'],
    emergencyRole: 'Ultimate Colony Catastrophe Fallback Haven'
  },
  {
    id: 'mars-gateway-spaceport',
    name: 'Mars Gateway Orbital Spaceport',
    shortName: 'Gateway Spaceport',
    category: 'spaceport',
    categoryLabel: 'Logistics & Aerospace',
    icon: 'rocket',
    coords: { x: 20, y: 0, z: 125 },
    roadNode: 'node_south_2',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 95,
    occupancy: '120 Flight Crew, Logistics & Ground Crew',
    powerSource: 'Helios Grid Dedicated Line',
    powerConsumption: '920 kW',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'Planetary arrival and departure terminal featuring three heavy-lift vertical landing pads, cryogenic methane fuel depots, and passenger disembarkation airlocks.',
    services: [
      'VTOL Heavy-Cargo & Shuttle Landing Pads (Pads Alpha, Beta, Gamma)',
      'Liquid CH4 & LOX Cryogenic Refueling Rig',
      'Orbital Transfer Shuttles & Trans-Earth Evacuation Shuttles',
      'Automated Drone Cargo Sorting & Decontamination Hangar'
    ],
    resources: {
      power: 95,
      fuelReserves: '88% Methane / 94% LOX',
      padAvailability: '2 of 3 Ready',
      trafficStatus: 'Clear'
    },
    synonyms: ['spaceport', 'shuttle', 'rocket', 'landing', 'pad', 'gateway', 'flight', 'launch', 'airport', 'hangar', 'spacecraft'],
    emergencyRole: 'Planetary Evacuation & Orbital Relief Reception'
  },
  {
    id: 'research-laboratory',
    name: 'Kepler Astrobiology Labs',
    shortName: 'Kepler Research Lab',
    category: 'research',
    categoryLabel: 'Research & Development',
    icon: 'flask-conical',
    coords: { x: 95, y: 0, z: -80 },
    roadNode: 'node_east_3',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 97,
    occupancy: '95 Scientists & Engineers',
    powerSource: 'Helios Grid Sub-B',
    powerConsumption: '420 kW',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'Class-4 biosafety containment and subsurface geological drill core laboratory. Actively investigating fossil biosignatures and synthesized extremophile bacteria.',
    services: [
      'Deep Crustal Sample Core Spectrometry',
      'Extremophile Genetic Modification Cleanrooms',
      'Superconducting Quantum Sensor Array',
      'Direct Fiber Conduit to Nova University'
    ],
    resources: {
      power: 97,
      containmentStatus: 'Level 4 Nominal',
      vacuumPurity: '99.99%',
      cryoTemp: '4.2 Kelvin'
    },
    synonyms: ['lab', 'laboratory', 'research', 'kepler', 'science', 'astrobiology', 'experiments', 'analysis'],
    emergencyRole: 'Chemical & Biological Hazard Analysis'
  },
  {
    id: 'community-centre',
    name: 'Red Sands Agora & Community Hub',
    shortName: 'Community Agora',
    category: 'community',
    categoryLabel: 'Civic & Culture',
    icon: 'users',
    coords: { x: -15, y: 0, z: 20 },
    roadNode: 'node_central_south',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 99,
    occupancy: '340 residents present',
    powerSource: 'Helios Grid Sub-A',
    powerConsumption: '220 kW',
    oxygenSupply: 'Direct Line Alpha',
    description: 'Vibrant civic atrium hosting cultural amphitheater performances, social dining pavilions, holographic Earth heritage museum, and recreational gatherings.',
    services: [
      'Civic Amphitheater & Assembly Hall',
      'Earth Cultural Heritage Hologram Gallery',
      'Citizen Mental Health & Recreation Lounge',
      'Community Bulletin & Voting Terminal'
    ],
    resources: {
      power: 99,
      oxygen: 99,
      water: 98,
      communityMorale: 'High (94%)'
    },
    synonyms: ['community', 'agora', 'plaza', 'gathering', 'hall', 'social', 'civic', 'meeting', 'culture', 'hub'],
    emergencyRole: 'Civilian Information Center & Family Broadcast Center'
  },
  {
    id: 'resource-storage-centre',
    name: 'Apex Automated Logistics Depot',
    shortName: 'Resource Storage',
    category: 'logistics',
    categoryLabel: 'Logistics & Supplies',
    icon: 'boxes',
    coords: { x: -65, y: 0, z: 100 },
    roadNode: 'node_southwest_1',
    elevation: 0,
    status: 'OPERATIONAL',
    health: 98,
    occupancy: 'Automated (6 Logistics Officers)',
    powerSource: 'Helios Grid Sub-A',
    powerConsumption: '310 kW',
    oxygenSupply: 'Oxygen Hub Alpha',
    description: 'Robotic high-bay warehouse housing vital replacement parts, spare rover drives, construction 3D printer regolith feedstock, and medical emergency kits.',
    services: [
      'Automated High-Density Pallet Retrieval (ASRS)',
      'Spare Life-Support Filter & Seal Vaults',
      'Regolith-Composite 3D Printing Consumables',
      'Emergency Ration Pallets (365-day strategic stockpile)'
    ],
    resources: {
      power: 98,
      inventoryHealth: '99.2%',
      automatedRobots: '48 / 48 Online',
      strategicReserve: 'Optimal'
    },
    synonyms: ['storage', 'warehouse', 'supplies', 'resources', 'depot', 'logistics', 'materials', 'cargo', 'inventory'],
    emergencyRole: 'Strategic Emergency Material Distribution'
  }
];

export const FACILITY_CATEGORIES = [
  { id: 'all', label: 'All Facilities', icon: 'grid' },
  { id: 'command', label: 'Command', icon: 'tower-control' },
  { id: 'hospital', label: 'Medical', icon: 'cross' },
  { id: 'oxygen', label: 'Oxygen', icon: 'wind' },
  { id: 'education', label: 'Education', icon: 'graduation-cap' },
  { id: 'residential', label: 'Habitats', icon: 'home' },
  { id: 'food', label: 'Food & Bio', icon: 'sprout' },
  { id: 'water', label: 'Water', icon: 'droplets' },
  { id: 'power', label: 'Power', icon: 'zap' },
  { id: 'shelter', label: 'Shelter', icon: 'shield-alert' },
  { id: 'spaceport', label: 'Spaceport', icon: 'rocket' }
];
