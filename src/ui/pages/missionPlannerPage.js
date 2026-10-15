/**
 * MARS PULSE - Multi-Stop Expedition & Mission Planner Page
 * Allows colonists to build complex multi-waypoint itineraries, compute continuous routes,
 * reorder stops, calculate cumulative distances/times, and persist missions in localStorage.
 */

import { PathfindingEngine } from '../../navigation/pathfinding.js';

const STORAGE_KEY = 'mars_pulse_saved_missions_v1';

export const PRELOADED_MISSIONS = [
  {
    id: 'mission-life-support',
    name: 'Colony Life-Support Integrity Audit',
    category: 'CRITICAL_INFRASTRUCTURE',
    badgeColor: '#00FFCC',
    description: 'Inspect all atmospheric cracking, water filtration, and backup power stations across Chryse Colony.',
    stops: ['command-tower', 'oxygen-hub-alpha', 'oxygen-hub-beta', 'aquacycle-water', 'safehaven-shelter']
  },
  {
    id: 'mission-geology-survey',
    name: 'Ares Basin Geological Survey Run',
    category: 'EXPEDITION_RESEARCH',
    badgeColor: '#A855F7',
    description: 'Collect permafrost core samples and deploy seismic array node along Chryse perimeter.',
    stops: ['research-laboratory', 'eden-greenhouse', 'safehaven-shelter', 'nova-university', 'command-tower']
  },
  {
    id: 'mission-med-distribution',
    name: 'Medical & Cryo-Ration Distribution',
    category: 'HABITAT_LOGISTICS',
    badgeColor: '#FF725E',
    description: 'Deliver emergency trauma kits, fresh greenhouse crops, and education tablets to residential sectors.',
    stops: ['marscare-hospital', 'residential-habitat-alpha', 'eden-greenhouse', 'horizon-school', 'residential-habitat-beta']
  }
];

export class MissionPlannerPage {
  constructor(container, colonyState, router, callbacks = {}) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
    this.callbacks = callbacks;
    this.pathfinder = new PathfindingEngine();

    // Default mission active stops
    this.currentStops = ['command-tower', 'oxygen-hub-alpha', 'oxygen-hub-beta', 'safehaven-shelter'];
    this.savedMissions = this.loadSavedMissions();
    this.routeCalculation = null;

    this.calculateRoute();
  }

  loadSavedMissions() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading saved missions:', e);
    }
    return [...PRELOADED_MISSIONS];
  }

  persistSavedMissions() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.savedMissions));
    } catch (e) {}
  }

  calculateRoute() {
    if (this.currentStops.length >= 2) {
      this.routeCalculation = this.pathfinder.findMultiStopRoute(this.currentStops);
    } else {
      this.routeCalculation = null;
    }
  }

  render() {
    const facilities = this.colonyState.getAllFacilities();
    const result = this.routeCalculation;

    this.container.innerHTML = `
      <div class="planner-page-layout">
        <!-- 1. Top Header -->
        <div class="planner-top-bar glass-panel">
          <div class="planner-title-group">
            <span class="icon-pulse">🚀</span>
            <div class="titles">
              <h1 class="main-title">EXPEDITION MISSION PLANNER</h1>
              <p class="sub-title">MULTI-WAYPOINT TRAJECTORIES • RISK-AWARE MULTI-SEGMENT ROUTING</p>
            </div>
          </div>

          <div class="top-actions">
            <button id="btn-save-current-mission" class="btn-action-outline">
              💾 Save Mission Itinerary
            </button>
            <button id="btn-launch-mission-route" class="btn-primary-glow" ${!result || result.error ? 'disabled' : ''}>
              ▶ Execute Route on Colony Map
            </button>
          </div>
        </div>

        <!-- 2. Main Planner Columns -->
        <div class="planner-grid-container">
          <!-- Left Column: Waypoint Stop Builder -->
          <div class="stops-builder-column glass-panel">
            <div class="column-header">
              <div class="col-title">
                <span>STOPS & WAYPOINTS SEQUENCE</span>
                <span class="stops-counter">(${this.currentStops.length} STOPS)</span>
              </div>
              <button id="btn-add-stop-row" class="btn-add-stop">+ Add Stop</button>
            </div>

            <!-- Preloaded Templates Row -->
            <div class="mission-templates-row">
              <span class="template-label">TEMPLATES:</span>
              ${PRELOADED_MISSIONS.map(m => `
                <button class="btn-template-pill" data-id="${m.id}" title="${m.description}">
                  ${m.name.split(' ')[0]} ${m.name.split(' ')[1] || ''}
                </button>
              `).join('')}
            </div>

            <!-- Ordered Stops List -->
            <div class="stops-sequence-list" id="stops-list-container">
              ${this.currentStops.map((stopFacId, idx) => {
                const fac = this.colonyState.getFacility(stopFacId) || { name: stopFacId };
                return `
                  <div class="stop-item-card" data-index="${idx}">
                    <div class="stop-number ${idx === 0 ? 'origin' : (idx === this.currentStops.length - 1 ? 'dest' : '')}">
                      ${idx + 1}
                    </div>

                    <div class="stop-select-wrap">
                      <select class="stop-facility-select" data-index="${idx}">
                        ${facilities.map(f => `
                          <option value="${f.id}" ${f.id === stopFacId ? 'selected' : ''}>
                            ${f.name} (${f.categoryLabel})
                          </option>
                        `).join('')}
                      </select>
                    </div>

                    <div class="stop-controls">
                      <button class="btn-move-stop btn-move-up" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">▲</button>
                      <button class="btn-move-stop btn-move-down" data-index="${idx}" ${idx === this.currentStops.length - 1 ? 'disabled' : ''} title="Move Down">▼</button>
                      <button class="btn-remove-stop" data-index="${idx}" ${this.currentStops.length <= 2 ? 'disabled' : ''} title="Remove Stop">✕</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Saved Missions Management -->
            <div class="saved-missions-section">
              <div class="sub-label">SAVED MISSIONS IN LOCAL STORAGE</div>
              <div class="saved-missions-list">
                ${this.savedMissions.map((sm, smIdx) => `
                  <div class="saved-mission-item">
                    <div class="sm-info">
                      <span class="sm-name">${sm.name}</span>
                      <span class="sm-stops">${sm.stops.length} Waypoints</span>
                    </div>
                    <div class="sm-btns">
                      <button class="btn-load-sm" data-index="${smIdx}">Load</button>
                      <button class="btn-delete-sm" data-index="${smIdx}">✕</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Itinerary Details & Leg-by-Leg Metrics -->
          <div class="mission-summary-column glass-panel">
            <div class="column-header">
              <div class="col-title">MISSION ITINERARY & RISK ANALYSIS</div>
              ${result && !result.error ? `
                <span class="safety-badge ${result.safetyRating.includes('RISK') ? 'warning' : 'optimal'}">
                  ${result.safetyRating} (${result.hazardScore}% Risk)
                </span>
              ` : ''}
            </div>

            ${!result ? `
              <div class="empty-notice">Add at least 2 stops to calculate multi-waypoint itinerary.</div>
            ` : result.error ? `
              <div class="error-notice">⚠️ ${result.error}</div>
            ` : `
              <!-- Mission KPI Metrics Grid -->
              <div class="mission-metrics-row">
                <div class="mission-metric">
                  <span class="mm-label">TOTAL DISTANCE</span>
                  <span class="mm-val cyan">${result.totalDistance} m</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">TOTAL TRAVEL TIME</span>
                  <span class="mm-val green">${result.totalTimeMinutes} min</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">EXPEDITION LEGS</span>
                  <span class="mm-val">${result.legs.length} Legs</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">TOTAL WAYPOINTS</span>
                  <span class="mm-val gold">${result.waypoints.length}</span>
                </div>
              </div>

              <!-- Leg-by-Leg Breakdown -->
              <div class="legs-breakdown-list">
                <div class="sub-label">STEP-BY-STEP MISSION LEGS</div>
                ${result.legs.map((leg, lIdx) => {
                  const fromFac = this.colonyState.getFacility(leg.from);
                  const toFac = this.colonyState.getFacility(leg.to);
                  return `
                    <div class="mission-leg-card">
                      <div class="leg-header">
                        <span class="leg-tag">LEG ${lIdx + 1}</span>
                        <span class="leg-names">${fromFac ? fromFac.name : leg.from} ➔ ${toFac ? toFac.name : leg.to}</span>
                        <span class="leg-distance">${leg.distance} m (${leg.time} min)</span>
                      </div>
                      <div class="leg-instructions">
                        ${leg.turnDirections.map(td => `
                          <div class="leg-instruction-row">
                            <span class="dir-bullet">▪</span>
                            <span class="dir-text">${td.instruction}</span>
                            <span class="dir-dist">${td.distance}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    this.setupEvents();
  }

  setupEvents() {
    // 1. Facility select change
    document.querySelectorAll('.stop-facility-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const idx = parseInt(e.target.dataset.index, 10);
        this.currentStops[idx] = e.target.value;
        this.calculateRoute();
        this.render();
      });
    });

    // 2. Move up
    document.querySelectorAll('.btn-move-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (idx > 0) {
          const temp = this.currentStops[idx - 1];
          this.currentStops[idx - 1] = this.currentStops[idx];
          this.currentStops[idx] = temp;
          this.calculateRoute();
          this.render();
        }
      });
    });

    // 3. Move down
    document.querySelectorAll('.btn-move-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (idx < this.currentStops.length - 1) {
          const temp = this.currentStops[idx + 1];
          this.currentStops[idx + 1] = this.currentStops[idx];
          this.currentStops[idx] = temp;
          this.calculateRoute();
          this.render();
        }
      });
    });

    // 4. Remove stop
    document.querySelectorAll('.btn-remove-stop').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (this.currentStops.length > 2) {
          this.currentStops.splice(idx, 1);
          this.calculateRoute();
          this.render();
        }
      });
    });

    // 5. Add Stop
    const btnAdd = document.getElementById('btn-add-stop-row');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        const all = this.colonyState.getAllFacilities();
        // Pick one not yet in list or default to hospital
        const unused = all.find(f => !this.currentStops.includes(f.id));
        this.currentStops.push(unused ? unused.id : all[0].id);
        this.calculateRoute();
        this.render();
      });
    }

    // 6. Preloaded Templates
    document.querySelectorAll('.btn-template-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const template = PRELOADED_MISSIONS.find(m => m.id === btn.dataset.id);
        if (template) {
          this.currentStops = [...template.stops];
          this.calculateRoute();
          this.render();
        }
      });
    });

    // 7. Save Current Mission
    const btnSave = document.getElementById('btn-save-current-mission');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const name = prompt('Enter a name for this Expedition Mission:', `Expedition ${new Date().toLocaleDateString()}`);
        if (name && name.trim()) {
          this.savedMissions.push({
            id: `mission-${Date.now()}`,
            name: name.trim(),
            category: 'CUSTOM_EXPEDITION',
            stops: [...this.currentStops]
          });
          this.persistSavedMissions();
          this.render();
        }
      });
    }

    // 8. Load Saved Mission
    document.querySelectorAll('.btn-load-sm').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (this.savedMissions[idx]) {
          this.currentStops = [...this.savedMissions[idx].stops];
          this.calculateRoute();
          this.render();
        }
      });
    });

    // 9. Delete Saved Mission
    document.querySelectorAll('.btn-delete-sm').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        this.savedMissions.splice(idx, 1);
        this.persistSavedMissions();
        this.render();
      });
    });

    // 10. Execute Route on Colony Map
    const btnLaunch = document.getElementById('btn-launch-mission-route');
    if (btnLaunch) {
      btnLaunch.addEventListener('click', () => {
        if (!this.routeCalculation || this.routeCalculation.error) return;

        const firstFac = this.currentStops[0];
        const lastFac = this.currentStops[this.currentStops.length - 1];

        // Format active route for colonyState
        const fullRoute = {
          distance: this.routeCalculation.totalDistance,
          travelTimeMinutes: this.routeCalculation.totalTimeMinutes,
          waypoints: this.routeCalculation.waypoints,
          turnDirections: this.routeCalculation.turnDirections,
          hazardScore: this.routeCalculation.hazardScore,
          safetyRating: this.routeCalculation.safetyRating,
          isMultiStop: true,
          stopsCount: this.currentStops.length
        };

        this.colonyState.setNavigation({
          startFacilityId: firstFac,
          destinationFacilityId: lastFac,
          activeRoute: fullRoute,
          isNavigating: true,
          navigationReason: 'MULTI_STOP_EXPEDITION'
        });

        // Navigate to the Navigate map page
        this.router.navigate('navigate');
      });
    }
  }
}
