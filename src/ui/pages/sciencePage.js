/**
 * MARS PULSE - Interactive Scientific Mars Map Page
 * Integrates authentic NASA landing sites, USGS geological units,
 * MOLA topography/elevation datums, colony science stations, and planetary hazard overlays.
 *
 * All planetary observations and landing coordinates are authentic records from
 * NASA Planetary Data System (PDS) and USGS Astrogeology Science Center.
 */

import { NASA_LANDING_SITES, SCIENTIFIC_GEOLOGY_UNITS, COLONY_SCIENCE_STATIONS } from '../../data/scienceData.js';
import { HAZARD_ZONES } from '../../data/hazardData.js';

export class SciencePage {
  constructor(container, colonyState, router, callbacks = {}) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
    this.callbacks = callbacks;

    // Active Layer Toggles
    this.layers = {
      landingSites: true,
      geology: true,
      scienceStations: true,
      hazards: true,
      elevation: true
    };

    this.selectedItemType = 'landingSite'; // 'landingSite' | 'geology' | 'station' | 'hazard'
    this.selectedItemId = 'perseverance-jezero';
  }

  render() {
    const viewMode = this.colonyState.viewMode;
    const activeItem = this.getSelectedItemData();

    this.container.innerHTML = `
      <div class="science-page-layout">
        <!-- 1. Top Science Controls & Layer Toggles Bar -->
        <div class="science-top-bar glass-panel">
          <div class="science-brand-title">
            <span class="icon-pulse">🔬</span>
            <div class="title-group">
              <span class="main-title">PLANETARY SCIENCE OBSERVATORY</span>
              <span class="sub-title">USGS ASTROGEOLOGY • NASA PDS ARCHIVES • MOLA TOPOGRAPHY</span>
            </div>
          </div>

          <!-- 2D / 3D Mode Toggle -->
          <div class="mode-toggles">
            <button id="btn-science-toggle-3d" class="toggle-pill ${viewMode === '3D' ? 'active' : ''}" title="View in 3D Mars Colony">
              <span>🔮 3D DOME</span>
            </button>
            <button id="btn-science-toggle-2d" class="toggle-pill ${viewMode === '2D' ? 'active' : ''}" title="View in 2D Planetary Topographic Map">
              <span>🗺️ 2D MAP</span>
            </button>
          </div>
        </div>

        <!-- 2. Science Content Grid -->
        <div class="science-grid-container">
          <!-- Left Column: Layer Filters & Catalog Lists -->
          <aside class="science-sidebar glass-panel">
            <!-- Authentic Data Citation Notice -->
            <div class="nasa-citation-banner">
              <span class="banner-badge">AUTHENTIC SCIENCE DATA</span>
              <p>Planetary coordinates and instruments derived from NASA PDS Geosciences Node & USGS Astrogeology records.</p>
            </div>

            <!-- Layer Toggle Checkboxes -->
            <div class="layer-toggles-section">
              <div class="section-label">ACTIVE MAP LAYERS</div>
              <div class="toggles-list">
                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-landing" ${this.layers.landingSites ? 'checked' : ''} />
                  <span class="toggle-icon">🚀</span>
                  <span class="toggle-name">NASA Landing Sites</span>
                  <span class="toggle-count">(${NASA_LANDING_SITES.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-geology" ${this.layers.geology ? 'checked' : ''} />
                  <span class="toggle-icon">🌋</span>
                  <span class="toggle-name">USGS Geological Units</span>
                  <span class="toggle-count">(${SCIENTIFIC_GEOLOGY_UNITS.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-stations" ${this.layers.scienceStations ? 'checked' : ''} />
                  <span class="toggle-icon">📡</span>
                  <span class="toggle-name">Colony Science Nodes</span>
                  <span class="toggle-count">(${COLONY_SCIENCE_STATIONS.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-hazards" ${this.layers.hazards ? 'checked' : ''} />
                  <span class="toggle-icon">⚠️</span>
                  <span class="toggle-name">Planetary Hazard Corridors</span>
                  <span class="toggle-count">(${HAZARD_ZONES.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-elevation" ${this.layers.elevation ? 'checked' : ''} />
                  <span class="toggle-icon">🏔️</span>
                  <span class="toggle-name">MOLA Elevation Contours</span>
                  <span class="toggle-count">(Datum: -2.6km)</span>
                </label>
              </div>
            </div>

            <!-- Interactive Item Selector -->
            <div class="science-items-list-section">
              <div class="section-label">SELECT EXPLORATION TARGET</div>

              <!-- Landing Sites Accordion / List -->
              ${this.layers.landingSites ? `
                <div class="sub-group-title">NASA & INTERNATIONAL LANDING SITES</div>
                <div class="item-cards-group">
                  ${NASA_LANDING_SITES.map(s => `
                    <button class="science-item-btn ${this.selectedItemId === s.id ? 'active' : ''}" data-type="landingSite" data-id="${s.id}">
                      <div class="item-name">${s.name}</div>
                      <div class="item-sub">${s.target} • ${s.coordinates}</div>
                    </button>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Geological Units -->
              ${this.layers.geology ? `
                <div class="sub-group-title">USGS GEOLOGICAL UNITS (CHRYSE BASIN)</div>
                <div class="item-cards-group">
                  ${SCIENTIFIC_GEOLOGY_UNITS.map(g => `
                    <button class="science-item-btn ${this.selectedItemId === g.id ? 'active' : ''}" data-type="geology" data-id="${g.id}">
                      <div class="item-name">${g.name}</div>
                      <div class="item-sub">${g.type} • ${g.molaElevationDatum}</div>
                    </button>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Colony Science Stations -->
              ${this.layers.scienceStations ? `
                <div class="sub-group-title">COLONY IN-SITU RESEARCH STATIONS</div>
                <div class="item-cards-group">
                  ${COLONY_SCIENCE_STATIONS.map(st => `
                    <button class="science-item-btn ${this.selectedItemId === st.id ? 'active' : ''}" data-type="station" data-id="${st.id}">
                      <div class="item-name">${st.name}</div>
                      <div class="item-sub">${st.instrument}</div>
                    </button>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Hazard Zones -->
              ${this.layers.hazards ? `
                <div class="sub-group-title">PLANETARY HAZARDS & RISK CORRIDORS</div>
                <div class="item-cards-group">
                  ${HAZARD_ZONES.map(hz => `
                    <button class="science-item-btn ${this.selectedItemId === hz.id ? 'active' : ''}" data-type="hazard" data-id="${hz.id}">
                      <div class="item-name">${hz.name}</div>
                      <div class="item-sub">Severity: ${hz.severity}/5 • ${hz.typeLabel}</div>
                    </button>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </aside>

          <!-- Right Column: Detailed Scientific Inspector Card -->
          <main class="science-inspector-card glass-panel">
            ${this.renderInspectorContent(activeItem)}
          </main>
        </div>
      </div>
    `;

    this.setupEvents();
  }

  getSelectedItemData() {
    if (this.selectedItemType === 'landingSite') {
      return {
        type: 'landingSite',
        data: NASA_LANDING_SITES.find(s => s.id === this.selectedItemId) || NASA_LANDING_SITES[0]
      };
    } else if (this.selectedItemType === 'geology') {
      return {
        type: 'geology',
        data: SCIENTIFIC_GEOLOGY_UNITS.find(g => g.id === this.selectedItemId) || SCIENTIFIC_GEOLOGY_UNITS[0]
      };
    } else if (this.selectedItemType === 'station') {
      return {
        type: 'station',
        data: COLONY_SCIENCE_STATIONS.find(st => st.id === this.selectedItemId) || COLONY_SCIENCE_STATIONS[0]
      };
    } else if (this.selectedItemType === 'hazard') {
      return {
        type: 'hazard',
        data: HAZARD_ZONES.find(hz => hz.id === this.selectedItemId) || HAZARD_ZONES[0]
      };
    }
    return { type: 'landingSite', data: NASA_LANDING_SITES[0] };
  }

  renderInspectorContent(activeItem) {
    if (!activeItem || !activeItem.data) {
      return `<div class="inspector-empty">Select a scientific site or geological formation from the left panel.</div>`;
    }

    const { type, data } = activeItem;

    if (type === 'landingSite') {
      return `
        <div class="inspector-header">
          <div class="inspector-badge cyan">NASA PLANETARY ARCHIVE</div>
          <h2 class="inspector-title">${data.name}</h2>
          <div class="inspector-subtitle">${data.agency} • ${data.target}</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">COORDINATES</span>
            <span class="ins-val cyan">${data.coordinates}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">MOLA ELEVATION</span>
            <span class="ins-val green">${data.elevationMeters} m</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">LANDING DATE</span>
            <span class="ins-val">${data.landingDate}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">MISSION STATUS</span>
            <span class="ins-val gold">${data.activeStatus}</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>PRIMARY OBJECTIVE</h3>
          <p class="ins-desc">${data.primaryObjective}</p>
        </div>

        <div class="inspector-section">
          <h3>SCIENTIFIC INSTRUMENT SUITE</h3>
          <div class="instruments-tags-wrap">
            ${data.instruments.map(inst => `<span class="instrument-tag">${inst}</span>`).join('')}
          </div>
        </div>

        <div class="inspector-section dataset-box">
          <h3>DATASET PROVENANCE & ARCHIVE CITATION</h3>
          <p class="citation-text"><strong>Citation:</strong> ${data.datasetCitation}</p>
          <a href="${data.pdsArchiveUrl}" target="_blank" rel="noopener noreferrer" class="pds-link-btn">
            <span>Explore PDS Planetary Data System Node</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;
    } else if (type === 'geology') {
      return `
        <div class="inspector-header">
          <div class="inspector-badge purple">USGS ASTROGEOLOGY UNIT</div>
          <h2 class="inspector-title">${data.name}</h2>
          <div class="inspector-subtitle">${data.type} • ${data.ageGa}</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">MOLA DATUM</span>
            <span class="ins-val cyan">${data.molaElevationDatum}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">ROUGHNESS INDEX</span>
            <span class="ins-val">${data.roughnessIndex}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">BEARING CAPACITY</span>
            <span class="ins-val green">${data.loadBearingCapacity}</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>MINERALOGICAL COMPOSITION</h3>
          <p class="ins-desc">${data.mineralogy}</p>
        </div>

        <div class="inspector-section dataset-box">
          <h3>GEOLOGICAL CITATION</h3>
          <p class="citation-text">Derived from USGS Geologic Map of Mars (SIM-3292) & Mars Express OMEGA / MRO CRISM multispectral reflectance libraries.</p>
        </div>
      `;
    } else if (type === 'station') {
      return `
        <div class="inspector-header">
          <div class="inspector-badge gold">COLONY IN-SITU RESEARCH NODE</div>
          <h2 class="inspector-title">${data.name}</h2>
          <div class="inspector-subtitle">Local Grid: (${data.coordinates.x}, ${data.coordinates.z})</div>
        </div>

        <div class="inspector-section">
          <h3>PRIMARY RESEARCH PURPOSE</h3>
          <p class="ins-desc">${data.purpose}</p>
        </div>

        <div class="inspector-section">
          <h3>INSTRUMENTATION & TELEMETRY</h3>
          <div class="ins-metric-card">
            <span class="ins-label">INSTRUMENT</span>
            <span class="ins-val cyan">${data.instrument}</span>
          </div>
          <div class="ins-metric-card" style="margin-top: 10px;">
            <span class="ins-label">RECENT TELEMETRY / OUTPUT</span>
            <span class="ins-val green">${data.sampleOutput}</span>
          </div>
        </div>
      `;
    } else if (type === 'hazard') {
      return `
        <div class="inspector-header">
          <div class="inspector-badge red">PLANETARY HAZARD CORRIDOR</div>
          <h2 class="inspector-title">${data.name}</h2>
          <div class="inspector-subtitle">${data.typeLabel} • Severity Level ${data.severity}/5</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">SEVERITY</span>
            <span class="ins-val red">${data.severity} / 5</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">HAZARD RADIUS</span>
            <span class="ins-val gold">${data.radius} meters</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">AFFECTED EDGES</span>
            <span class="ins-val cyan">${data.affectedEdges ? data.affectedEdges.length : 0} road segments</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>OPERATIONAL ADVISORY</h3>
          <p class="ins-desc">${data.description}</p>
        </div>

        <div class="inspector-section dataset-box">
          <h3>ROUTER MITIGATION</h3>
          <p class="citation-text">When navigating in <strong>Safer Profile</strong>, Dijkstra pathfinder penalizes edges passing through this sector by ${(data.severity * 85)}% to guarantee autonomous vehicle safety.</p>
        </div>
      `;
    }
  }

  setupEvents() {
    // 1. View Mode Toggles (2D vs 3D)
    const btn3D = document.getElementById('btn-science-toggle-3d');
    const btn2D = document.getElementById('btn-science-toggle-2d');

    if (btn3D) {
      btn3D.addEventListener('click', () => {
        this.colonyState.setViewMode('3D');
        this.render();
      });
    }

    if (btn2D) {
      btn2D.addEventListener('click', () => {
        this.colonyState.setViewMode('2D');
        this.render();
      });
    }

    // 2. Layer Toggle Checkboxes
    const chkLanding = document.getElementById('layer-chk-landing');
    const chkGeology = document.getElementById('layer-chk-geology');
    const chkStations = document.getElementById('layer-chk-stations');
    const chkHazards = document.getElementById('layer-chk-hazards');
    const chkElevation = document.getElementById('layer-chk-elevation');

    if (chkLanding) chkLanding.addEventListener('change', (e) => { this.layers.landingSites = e.target.checked; this.render(); });
    if (chkGeology) chkGeology.addEventListener('change', (e) => { this.layers.geology = e.target.checked; this.render(); });
    if (chkStations) chkStations.addEventListener('change', (e) => { this.layers.scienceStations = e.target.checked; this.render(); });
    if (chkHazards) chkHazards.addEventListener('change', (e) => { this.layers.hazards = e.target.checked; this.render(); });
    if (chkElevation) chkElevation.addEventListener('change', (e) => { this.layers.elevation = e.target.checked; this.render(); });

    // 3. Item Selection
    document.querySelectorAll('.science-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedItemType = btn.dataset.type;
        this.selectedItemId = btn.dataset.id;
        this.render();
      });
    });
  }
}
