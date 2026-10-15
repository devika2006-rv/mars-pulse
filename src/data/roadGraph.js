/**
 * MARS PULSE - Colony Road Network, Districts & Air-lanes Graph
 * Defines named roads, junctions, and district boundaries for the Google Maps colony navigation engine.
 */

export const ROAD_NODES = {
  // Central Hub Nodes
  'node_central': { id: 'node_central', name: 'Central Plaza Junction', x: 0, y: 0.2, z: 0, facilityId: 'command-tower' },
  'node_central_north': { id: 'node_central_north', name: 'North Boulevard Junction', x: 0, y: 0.2, z: -35 },
  'node_central_south': { id: 'node_central_south', name: 'Agora South Crossing', x: -10, y: 0.2, z: 25, facilityId: 'community-centre' },
  'node_central_east': { id: 'node_central_east', name: 'East Energy Way', x: 35, y: 0.2, z: 0 },
  'node_central_west': { id: 'node_central_west', name: 'West Habitat Concourse', x: -35, y: 0.2, z: -15 },

  // West & Northwest Sector Nodes (Habitats, Hospital, SafeHaven, School)
  'node_west_1': { id: 'node_west_1', name: 'MarsCare Emergency Ramp', x: -70, y: 0.2, z: 40, facilityId: 'marscare-hospital' },
  'node_west_2': { id: 'node_west_2', name: 'Oxygen Beta Cryo Junction', x: -90, y: 0.2, z: -35, facilityId: 'oxygen-hub-beta' },
  'node_west_3': { id: 'node_west_3', name: 'SafeHaven Blast Tunnel Entrance', x: -100, y: 0.2, z: 15, facilityId: 'safehaven-shelter' },
  'node_west_junction': { id: 'node_west_junction', name: 'West Ring Junction', x: -65, y: 0.2, z: 5 },
  'node_northwest_1': { id: 'node_northwest_1', name: 'Horizon Youth Promenade', x: -45, y: 0.2, z: -80, facilityId: 'horizon-school' },
  'node_northwest_2': { id: 'node_northwest_2', name: 'Olympus Hab Link', x: -25, y: 0.2, z: -60, facilityId: 'residential-habitat-beta' },
  'node_northwest_junction': { id: 'node_northwest_junction', name: 'Northwest Ringway', x: -55, y: 0.2, z: -45 },

  // North Sector (AquaCycle, Water distribution)
  'node_north_1': { id: 'node_north_1', name: 'AquaCycle Aqueduct Access', x: 30, y: 0.2, z: -90, facilityId: 'aquacycle-water' },
  'node_north_junction': { id: 'node_north_junction', name: 'North Ring Spine', x: 10, y: 0.2, z: -70 },

  // East & Northeast Sector (Nova University, Research Lab, Helios Power)
  'node_east_1': { id: 'node_east_1', name: 'Helios Reactor High-Tension Ring', x: 110, y: 0.2, z: -25, facilityId: 'helios-power' },
  'node_east_2': { id: 'node_east_2', name: 'Nova University Campus Gate', x: 65, y: 0.2, z: -50, facilityId: 'nova-university' },
  'node_east_3': { id: 'node_east_3', name: 'Kepler Labs Sensor Ridge', x: 90, y: 0.2, z: -75, facilityId: 'research-laboratory' },
  'node_east_junction': { id: 'node_east_junction', name: 'East Industrial Junction', x: 65, y: 0.2, z: -15 },

  // South & Southeast Sector (Eden Greenhouse, O2 Hub Alpha, Spaceport, Storage)
  'node_south_1': { id: 'node_south_1', name: 'Eden Biosphere Cargo Bay', x: 45, y: 0.2, z: 75, facilityId: 'eden-greenhouse' },
  'node_south_2': { id: 'node_south_2', name: 'Gateway Spaceport Terminal Bay', x: 20, y: 0.2, z: 120, facilityId: 'mars-gateway-spaceport' },
  'node_southeast_1': { id: 'node_southeast_1', name: 'Oxygen Alpha Trunkline Gate', x: 80, y: 0.2, z: 55, facilityId: 'oxygen-hub-alpha' },
  'node_southeast_junction': { id: 'node_southeast_junction', name: 'Southeast Ringway', x: 45, y: 0.2, z: 40 },
  'node_south_junction': { id: 'node_south_junction', name: 'Spaceport Approach Avenue', x: 15, y: 0.2, z: 65 },
  'node_southwest_1': { id: 'node_southwest_1', name: 'Apex Logistics Freight Bay', x: -60, y: 0.2, z: 95, facilityId: 'resource-storage-centre' },
  'node_southwest_junction': { id: 'node_southwest_junction', name: 'Southwest Freight Corridor', x: -40, y: 0.2, z: 65 }
};

// Facility ID to primary road node mapping
export const FACILITY_TO_NODE = {
  'command-tower': 'node_central',
  'marscare-hospital': 'node_west_1',
  'nova-university': 'node_east_2',
  'horizon-school': 'node_northwest_1',
  'oxygen-hub-alpha': 'node_southeast_1',
  'oxygen-hub-beta': 'node_west_2',
  'residential-habitat-alpha': 'node_central_west',
  'residential-habitat-beta': 'node_northwest_2',
  'eden-greenhouse': 'node_south_1',
  'aquacycle-water': 'node_north_1',
  'helios-power': 'node_east_1',
  'safehaven-shelter': 'node_west_3',
  'mars-gateway-spaceport': 'node_south_2',
  'research-laboratory': 'node_east_3',
  'community-centre': 'node_central_south',
  'resource-storage-centre': 'node_southwest_1'
};

// Named Road Segments (edges) connecting the nodes with street names
export const ROAD_EDGES = [
  // Central Hub Connections
  { from: 'node_central', to: 'node_central_north', name: 'Central North Way' },
  { from: 'node_central', to: 'node_central_south', name: 'Agora Avenue' },
  { from: 'node_central', to: 'node_central_east', name: 'Helios Boulevard' },
  { from: 'node_central', to: 'node_central_west', name: 'Ares Concourse' },

  // North Corridor
  { from: 'node_central_north', to: 'node_north_junction', name: 'Olympus Transit Spine' },
  { from: 'node_north_junction', to: 'node_north_1', name: 'Aqueduct Approach' },
  { from: 'node_north_junction', to: 'node_northwest_2', name: 'North Hab Parkway' },
  { from: 'node_north_junction', to: 'node_east_2', name: 'Nova Campus Link' },

  // Northwest & Hab Connections
  { from: 'node_central_west', to: 'node_northwest_junction', name: 'Ares Ringway' },
  { from: 'node_central_west', to: 'node_west_junction', name: 'West Sector Expressway' },
  { from: 'node_northwest_junction', to: 'node_northwest_1', name: 'Horizon Youth Promenade' },
  { from: 'node_northwest_junction', to: 'node_northwest_2', name: 'Olympus Hab Corridor' },
  { from: 'node_northwest_junction', to: 'node_west_2', name: 'Cryo Pipeline Road' },

  // West & Medical / Shelter
  { from: 'node_west_junction', to: 'node_west_1', name: 'Trauma Bay Access' },
  { from: 'node_west_junction', to: 'node_west_2', name: 'O2 Beta Service Road' },
  { from: 'node_west_junction', to: 'node_west_3', name: 'SafeHaven Defense Way' },
  { from: 'node_west_1', to: 'node_west_3', name: 'Emergency Medevac Tunnel' },
  { from: 'node_west_1', to: 'node_southwest_junction', name: 'Southwest Freight Spur' },

  // East & Science / Power
  { from: 'node_central_east', to: 'node_east_junction', name: 'Energy Grid Highway' },
  { from: 'node_east_junction', to: 'node_east_1', name: 'Tokamak Reactor Ring' },
  { from: 'node_east_junction', to: 'node_east_2', name: 'University South Way' },
  { from: 'node_east_junction', to: 'node_southeast_junction', name: 'East Outer Bypass' },
  { from: 'node_east_2', to: 'node_east_3', name: 'Kepler Science Drive' },
  { from: 'node_east_3', to: 'node_east_1', name: 'Research Power Feed Road' },

  // South & Biosphere / Spaceport / Storage
  { from: 'node_central_south', to: 'node_south_junction', name: 'Spaceport Avenue' },
  { from: 'node_central_south', to: 'node_southeast_junction', name: 'Eden Green Boulevard' },
  { from: 'node_central_south', to: 'node_southwest_junction', name: 'Logistics Access Way' },
  { from: 'node_south_junction', to: 'node_south_1', name: 'Biosphere Cargo Lane' },
  { from: 'node_south_junction', to: 'node_south_2', name: 'Spaceport Launch Highway' },
  { from: 'node_southeast_junction', to: 'node_southeast_1', name: 'Oxygen Alpha Trunkway' },
  { from: 'node_southeast_junction', to: 'node_south_1', name: 'Agricultural Perimeter' },
  { from: 'node_south_1', to: 'node_south_2', name: 'Spaceport Cargo Connector' },
  { from: 'node_southwest_junction', to: 'node_southwest_1', name: 'Apex Depot Terminal Road' },
  { from: 'node_southwest_junction', to: 'node_south_2', name: 'Spaceport West Arterial' },
  { from: 'node_southwest_1', to: 'node_west_1', name: 'Medical Supply Corridor' }
];

// Defined Colony Districts for Topographic Map
export const COLONY_DISTRICTS = [
  { id: 'dist_command', name: 'Central Command Plaza', x: 0, z: 0, radius: 36, color: 'rgba(75, 141, 255, 0.12)', border: 'rgba(75, 141, 255, 0.4)' },
  { id: 'dist_ares', name: 'Ares Habitation District', x: -35, z: -35, radius: 42, color: 'rgba(255, 190, 105, 0.12)', border: 'rgba(255, 190, 105, 0.4)' },
  { id: 'dist_medical', name: 'Medical & Trauma Campus', x: -75, z: 35, radius: 38, color: 'rgba(255, 114, 94, 0.12)', border: 'rgba(255, 114, 94, 0.4)' },
  { id: 'dist_o2_beta', name: 'Cryo Life Support Reserve', x: -95, z: -35, radius: 32, color: 'rgba(66, 232, 245, 0.12)', border: 'rgba(66, 232, 245, 0.4)' },
  { id: 'dist_safehaven', name: 'SafeHaven Bunker Perimeter', x: -105, z: 15, radius: 30, color: 'rgba(234, 242, 255, 0.1)', border: 'rgba(234, 242, 255, 0.35)' },
  { id: 'dist_horizon', name: 'Horizon Youth District', x: -45, z: -80, radius: 32, color: 'rgba(216, 93, 255, 0.12)', border: 'rgba(216, 93, 255, 0.4)' },
  { id: 'dist_water', name: 'AquaCycle Hydrology Sector', x: 30, z: -90, radius: 34, color: 'rgba(66, 232, 245, 0.12)', border: 'rgba(66, 232, 245, 0.4)' },
  { id: 'dist_nova', name: 'Nova Academic Campus', x: 75, z: -60, radius: 45, color: 'rgba(116, 70, 242, 0.14)', border: 'rgba(116, 70, 242, 0.4)' },
  { id: 'dist_helios', name: 'Helios Fusion & Energy Basin', x: 110, z: -25, radius: 42, color: 'rgba(255, 170, 0, 0.12)', border: 'rgba(255, 170, 0, 0.4)' },
  { id: 'dist_o2_alpha', name: 'Oxygen Hub Alpha Complex', x: 80, z: 55, radius: 34, color: 'rgba(66, 232, 245, 0.12)', border: 'rgba(66, 232, 245, 0.4)' },
  { id: 'dist_eden', name: 'Eden Agricultural Biosphere', x: 45, z: 75, radius: 38, color: 'rgba(51, 255, 136, 0.14)', border: 'rgba(51, 255, 136, 0.4)' },
  { id: 'dist_spaceport', name: 'Mars Gateway Spaceport', x: 25, z: 120, radius: 44, color: 'rgba(116, 70, 242, 0.15)', border: 'rgba(216, 93, 255, 0.4)' },
  { id: 'dist_storage', name: 'Apex Logistics Freight Yard', x: -60, z: 95, radius: 32, color: 'rgba(255, 190, 105, 0.1)', border: 'rgba(255, 190, 105, 0.35)' }
];

// Helper to compute Euclidean distance between two nodes
export function calculateDistance(nodeA, nodeB) {
  const dx = nodeA.x - nodeB.x;
  const dy = nodeA.y - nodeB.y;
  const dz = nodeA.z - nodeB.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
