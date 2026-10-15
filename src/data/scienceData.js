/**
 * MARS PULSE - Scientific Planetary Datasets & Authentic NASA Missions
 * Contains verified planetary science reference data from NASA Planetary Data System (PDS),
 * USGS Astrogeology Science Center, and Mars Reconnaissance Orbiter (MRO) archives.
 *
 * NOTE: Scientific observations and rover coordinates are authentic planetary records.
 * Colony infrastructure is mapped into Chryse Planitia (22.4° N, 312.1° E).
 */

export const NASA_LANDING_SITES = [
  {
    id: 'perseverance-jezero',
    name: 'Mars 2020 Perseverance & Ingenuity',
    agency: 'NASA / JPL-Caltech',
    target: 'Jezero Crater (Delta Remnant)',
    coordinates: '18.38° N, 77.58° E',
    elevationMeters: -2560,
    landingDate: 'February 18, 2021',
    activeStatus: 'ACTIVE EXPLORATION',
    primaryObjective: 'Astrobiology investigation of ancient delta sediments, biosignature sample caching, and airborne rotorcraft demonstration.',
    instruments: ['PIXL (X-ray)', 'SHERLOC (UV Raman)', 'SuperCam (Laser)', 'MOXIE (O2 In-situ)', 'MEDA (Weather)', 'RIMFAX (GPR)'],
    pdsArchiveUrl: 'https://pds-geosciences.wustl.edu/missions/mars2020/',
    datasetCitation: 'NASA Planetary Data System (PDS) Geosciences Node, Mars 2020 Archive, Release 11.'
  },
  {
    id: 'curiosity-gale',
    name: 'Mars Science Laboratory Curiosity',
    agency: 'NASA / JPL-Caltech',
    target: 'Gale Crater (Aeolis Mons base)',
    coordinates: '5.4° S, 137.8° E',
    elevationMeters: -4450,
    landingDate: 'August 6, 2012',
    activeStatus: 'ACTIVE EXPLORATION',
    primaryObjective: 'Assessment of ancient habitability, organic molecules, and fluvio-lacustrine sedimentary sequences.',
    instruments: ['ChemCam (LIBS)', 'SAM (Gas Chromatograph)', 'CheMin (XRD)', 'RAD (Radiation)', 'DAN (Neutron Hydrometer)'],
    pdsArchiveUrl: 'https://pds-geosciences.wustl.edu/missions/msl/',
    datasetCitation: 'NASA PDS Geosciences Node, MSL Curiosity Archive Collection, DOIs: 10.17189/1519495.'
  },
  {
    id: 'insight-elysium',
    name: 'InSight Seismic Lander',
    agency: 'NASA / CNES / DLR',
    target: 'Elysium Planitia',
    coordinates: '4.5° N, 135.6° E',
    elevationMeters: -2610,
    landingDate: 'November 26, 2018',
    activeStatus: 'MISSION COMPLETE (2022)',
    primaryObjective: 'Interior structure determination, crustal thickness mapping, and core-mantle boundary seismic tomography.',
    instruments: ['SEIS (Very Broadband Seismometer)', 'HP3 (Heat Flow Probe)', 'RISE (Radio Science)'],
    pdsArchiveUrl: 'https://pds-geosciences.wustl.edu/missions/insight/',
    datasetCitation: 'InSight Mars In-situ Seismic Catalog, IPGP/JPL PDS Archive, SEIS Data Set V10.'
  },
  {
    id: 'viking-1-chryse',
    name: 'Viking 1 Lander (First Mars Landing)',
    agency: 'NASA Langley / JPL',
    target: 'Chryse Planitia (Historic Benchmark)',
    coordinates: '22.48° N, 312.05° E',
    elevationMeters: -2690,
    landingDate: 'July 20, 1976',
    activeStatus: 'HISTORIC SITE BENCHMARK',
    primaryObjective: 'First successful operational landing on Mars; biology experiments, atmospheric meteorology, and imaging.',
    instruments: ['Gas Chromatograph Mass Spectrometer', 'Lander Cameras (Facsimile)', 'Biology Gas Exchange Package'],
    pdsArchiveUrl: 'https://pds-imaging.jpl.nasa.gov/volumes/viking.html',
    datasetCitation: 'NASA Planetary Data System, Viking Mission Imaging & Atmospheric Archive.'
  },
  {
    id: 'opportunity-meridiani',
    name: 'Mars Exploration Rover Opportunity',
    agency: 'NASA / JPL-Caltech',
    target: 'Meridiani Planum (Eagle & Endeavour Craters)',
    coordinates: '1.95° S, 354.47° E',
    elevationMeters: -1380,
    landingDate: 'January 25, 2004',
    activeStatus: 'HISTORIC SITE (2004-2018)',
    primaryObjective: 'Discovery of hematite spherules ("blueberries") proving long-duration acidic groundwater lakes.',
    instruments: ['Pancam (Stereo Multispectral)', 'Mini-TES', 'Mössbauer Spectrometer', 'APXS (Alpha Particle)'],
    pdsArchiveUrl: 'https://pds-geosciences.wustl.edu/missions/mer/',
    datasetCitation: 'NASA Planetary Data System (PDS), MER Opportunity Final Science Report.'
  }
];

export const SCIENTIFIC_GEOLOGY_UNITS = [
  {
    id: 'hesperian-basalt',
    name: 'Hesperian Flood Basalt Sheet',
    type: 'Volcanic Lava Plain',
    ageGa: '3.6 - 3.2 Ga (Hesperian Period)',
    mineralogy: 'Augite Pyroxene, Plagioclase, Titanomagnetite',
    loadBearingCapacity: 'High (Optimal for Heavy Rover & Hab Foundation)',
    roughnessIndex: '0.18 (Smooth Paved Terrain)',
    molaElevationDatum: '-2,680 m'
  },
  {
    id: 'ares-alluvial-gravel',
    name: 'Ares Vallis Catastrophic Outflow Gravel',
    type: 'Fluvial Mega-flood Deposit',
    ageGa: '3.7 Ga (Late Noachian / Early Hesperian)',
    mineralogy: 'Siliciclastic Cobbles, Hydrated Phyllosilicates, Smectite Clay',
    loadBearingCapacity: 'Moderate (Requires Geotextile Track Stabilization)',
    roughnessIndex: '0.52 (Scattered Boulders & Cobbles)',
    molaElevationDatum: '-2,710 m'
  },
  {
    id: 'chryse-permafrost-lens',
    name: 'Chryse Sub-surface Cryosphere Permafrost',
    type: 'Glacio-Lacustrine Ice Lens',
    ageGa: 'Sub-surface Reservoir (Depth: 14 - 38 m)',
    mineralogy: 'H2O Ice Core (88% purity), CO2 Clathrate, Regolith Matrix',
    loadBearingCapacity: 'Sensitive to Thermal Creep (Pressurized Domes Jacketed)',
    roughnessIndex: '0.22 (Cryoturbated Polygonal Ground)',
    molaElevationDatum: '-2,660 m'
  },
  {
    id: 'aeolian-regolith-dunes',
    name: 'North-Northwest Transverse Aeolian Ridges (TARs)',
    type: 'Active Sand & Dust Dune Field',
    ageGa: 'Amazonian to Modern Martian Season',
    mineralogy: 'Fine-grained Basaltic Sand, Ferric Oxide Nanoparticles',
    loadBearingCapacity: 'Low (Wheel Sinkage Hazard for Light Vehicles)',
    roughnessIndex: '0.84 (Ripples, Loose Granular Slope)',
    molaElevationDatum: '-2,640 m'
  }
];

export const COLONY_SCIENCE_STATIONS = [
  {
    id: 'station-core-drill',
    name: 'Deep Regolith Core Drill Station (Site-01)',
    coordinates: { x: 95, z: -80 },
    purpose: '140-meter continuous borehole extracting cryo-strata for paleoclimate paleobiology analysis.',
    instrument: 'Diamond-Tipped Rotary Percussion Cryo-Drill',
    sampleOutput: '48 cores logged in Kepler Labs repository'
  },
  {
    id: 'station-seismic-array',
    name: 'Chryse Planitia Broadband Seismic Node (SEIS-CP)',
    coordinates: { x: -85, z: 20 },
    purpose: 'Detects natural micro-marsquakes, meteorite hypervelocity impacts, and structural dome resonance.',
    instrument: 'Tri-Axial Optical Very-Broadband Seismometer (0.01 - 50 Hz)',
    sampleOutput: '3 natural quakes detected in last 30 Sols'
  },
  {
    id: 'station-atmospheric-mast',
    name: 'Planetary Boundary Layer Weather Mast (PBLM-4)',
    coordinates: { x: 0, z: -38 },
    purpose: 'Monitors vertical temperature gradients, dust opacity (Tau), and wind shear across the colony airlock apron.',
    instrument: 'Sonic Anemometer, Thermocouple Stack, Micro-Lidar Backscatter',
    sampleOutput: 'Mean pressure: 7.8 mbar, Tau: 0.42 (Clear atmosphere)'
  }
];
