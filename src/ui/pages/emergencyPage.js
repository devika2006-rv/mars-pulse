/**
 * MARS PULSE - Dedicated Emergency Intelligence Centre Page
 * Manages 4+ crisis simulations (Blocked Path, Comm Failure, Rover Breakdown, Oxygen/Power Contingency),
 * one-click 'Return to Safe Location' evacuation, step-by-step survival guidance,
 * and automated failover rerouting.
 *
 * ALL SCENARIOS ARE LABELED AS [DEMO SIMULATION].
 */

import { emergencyEngine } from '../../simulation/emergencyEngine.js';

export class EmergencyPage {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
  }

  render() {
    const scenario = this.colonyState.activeScenario;
    const hasEmergency = !!scenario;
    const nav = this.colonyState.navigation;
    const allFacilities = this.colonyState.getAllFacilities();
    const affectedFacilities = allFacilities.filter(f => f.status === 'OFFLINE' || f.status === 'CRITICAL' || f.status === 'WARNING');

    this.container.innerHTML = `
      <section class="emergency-page-layout">
        <div class="emergency-container">
          <!-- Page Header & One-Click Return to Safety Hero Action -->
          <div class="emergency-header-card glass-panel">
            <div class="emergency-badge-row">
              <span class="badge-danger">🚨 EMERGENCY INTELLIGENCE</span>
              <span class="badge-demo">[DEMO SIMULATION]</span>
            </div>

            <div class="header-main-flex">
              <div class="header-text-block">
                <h1 class="page-title">Colony Emergency Response & Survival Centre</h1>
                <p class="page-sub">
                  Test automated lifeline protocols and emergency survival navigation. In the event of primary life-support disruptions, 
                  roadway blockages, rover breakdowns, or power grid scrams, MARS PULSE computes instant bypass routes 
                  to operational backups and shelters across Chryse Colony.
                </p>
              </div>

              <!-- ONE-CLICK RETURN TO SAFE LOCATION CTA -->
              <div class="evacuation-cta-card">
                <button id="btn-return-to-safety" class="btn-return-safety-pulse" title="Calculate immediate lowest-risk evacuation path to SafeHaven Shelter">
                  <span class="shield-pulse-icon">🛡️</span>
                  <div class="btn-text-wrap">
                    <span class="btn-main-title">RETURN TO SAFE LOCATION</span>
                    <span class="btn-sub-title">1-Click Evacuation to SafeHaven Shelter</span>
                  </div>
                </button>
              </div>
            </div>

            <div class="header-action-bar">
              ${hasEmergency ? `
                <button id="btn-emergency-reset" class="btn-reset-scenario">
                  <span>🔄 Reset Scenario (Return to Nominal Operations)</span>
                </button>
              ` : `
                <div class="nominal-tag">
                  <span class="green-dot">●</span>
                  <span>Grid Status: 100% Operational • Zero Active Contingencies</span>
                </div>
              `}
            </div>
          </div>

          <!-- ACTIVE INCIDENT BANNER & STEP-BY-STEP GUIDANCE -->
          ${hasEmergency ? `
            <div class="active-incident-card glass-panel alert-pulse">
              <div class="incident-top">
                <div class="incident-badge">
                  <span class="blink-dot">●</span>
                  <span>ACTIVE INCIDENT: ${scenario.title || scenario.shortTitle || scenario.name}</span>
                </div>
                <div class="incident-time">Simulated MTC: ${scenario.activeTimestamp || '14:26 MTC'}</div>
              </div>

              <h2 class="incident-title">${scenario.description}</h2>
              <p class="incident-cascade"><strong>Severity Level:</strong> ${scenario.severity || 'CRITICAL'}</p>

              <!-- Quick Route Preview & Map Link -->
              <div class="incident-action-box">
                <div class="route-preview-meta">
                  <span class="p-label">AUTOMATED ACTION:</span>
                  <span class="p-val">${scenario.navigation ? (scenario.navigation.routePrompt || scenario.navigation.mode) : 'Autonomous Lifeline Reroute'}</span>
                  ${nav.activeRoute ? `
                    <span class="p-dist">• Distance: <strong>${nav.activeRoute.distance} m</strong> (${nav.activeRoute.travelTimeMinutes} min)</span>
                  ` : ''}
                </div>
                <button id="btn-view-emergency-route" class="btn-primary-emergency">
                  <span>View Emergency Route on Colony Map</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                </button>
              </div>

              <!-- STEP-BY-STEP SURVIVAL GUIDANCE CHECKLIST -->
              ${scenario.actionGuide && scenario.actionGuide.length > 0 ? `
                <div class="survival-guidance-section">
                  <h3 class="guidance-title">📋 STEP-BY-STEP EMERGENCY SURVIVAL PROTOCOL</h3>
                  <div class="guidance-steps-list">
                    ${scenario.actionGuide.map((stepItem, sIdx) => {
                      const title = typeof stepItem === 'string' ? `Step ${sIdx + 1}` : stepItem.title;
                      const text = typeof stepItem === 'string' ? stepItem : stepItem.text;
                      return `
                        <div class="guidance-step-card">
                          <div class="step-num">${sIdx + 1}</div>
                          <div class="step-content">
                            <strong class="step-name">${title}</strong>
                            <p class="step-desc">${text}</p>
                          </div>
                          <span class="step-status-check">✓ Active</span>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="nominal-status-banner glass-panel">
              <div class="nominal-icon">🛡️</div>
              <div class="nominal-content">
                <h3>Colony Lifeline Grid is Operating Nominally</h3>
                <p>All colony infrastructure is online. Atmospheric pressure is 7.8 mbar, oxygen lines are pressurized, and grid power is nominal at 52.4 MW.</p>
              </div>
            </div>
          `}

          <!-- SIMULATION CONTROLS GRID (ALL 4 REQUIRED CRISIS SCENARIOS) -->
          <div class="simulations-section">
            <div class="section-title-row">
              <h2 class="section-title">Emergency Survival Scenarios [Demo Simulations]</h2>
              <span class="section-sub">Select any crisis below to simulate failures and demonstrate automated rerouting:</span>
            </div>

            <div class="scenarios-grid">
              <!-- Scenario 1: Blocked Path / Regolith Rockfall -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'BLOCKED_PATH' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge rockfall">ROAD OBSTRUCTION</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>⚠️ Regolith Rockfall: Blocked Path</h3>
                <p class="scenario-desc">
                  Talus rockfall collapses over Central-West Concourse. Navigation graph dynamically severs the blocked edge and routes traffic via outer ringway.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Central Arterial Roadway (45 m³ boulders)</div>
                  <div><strong>Automated Fallback:</strong> Dynamic recalculation via North Ringway</div>
                </div>
                <button id="btn-trigger-blocked-sim" class="btn-scenario-action rockfall">
                  <span>${scenario && scenario.id === 'BLOCKED_PATH' ? 'Scenario Active' : 'Simulate Blocked Path'}</span>
                </button>
              </div>

              <!-- Scenario 2: Communications Failure -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'COMM_FAILURE' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge comm">BLACKOUT</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>📡 Solar Flare: Comm Failure</h3>
                <p class="scenario-desc">
                  X-class coronal mass ejection ionizes Mars atmosphere, blinding orbital satellites. Navigation switches to local subterranean fiber & dead-reckoning.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Orbital Relays & Colony Satellite Mesh</div>
                  <div><strong>Automated Fallback:</strong> Autonomous IMU Dead-Reckoning & Fiber</div>
                </div>
                <button id="btn-trigger-comm-sim" class="btn-scenario-action comm">
                  <span>${scenario && scenario.id === 'COMM_FAILURE' ? 'Scenario Active' : 'Simulate Comm Failure'}</span>
                </button>
              </div>

              <!-- Scenario 3: Rover Breakdown -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'ROVER_BREAKDOWN' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge rover">MECHANICAL FAILURE</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>🚜 Rover Breakdown: Traction Failure</h3>
                <p class="scenario-desc">
                  Pressurized Rover PR-04 suffers drive inverter seizure in Southeast sector with 45 minutes of life support. Dispatches emergency recovery crawler.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Pressurized Expedition Rover PR-04</div>
                  <div><strong>Automated Fallback:</strong> SafeHaven Medevac Hauler dispatched</div>
                </div>
                <button id="btn-trigger-rover-sim" class="btn-scenario-action rover">
                  <span>${scenario && scenario.id === 'ROVER_BREAKDOWN' ? 'Scenario Active' : 'Simulate Rover Breakdown'}</span>
                </button>
              </div>

              <!-- Scenario 4: Oxygen Contingency -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'OXYGEN_FAILURE' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge o2">LIFE SUPPORT</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>💨 Oxygen Hub Alpha Rupture</h3>
                <p class="scenario-desc">
                  Cryogenic manifold failure at Oxygen Hub Alpha cuts central line. Automated failover switches supply load to Oxygen Hub Beta.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Oxygen Hub Alpha (drops to 12% health)</div>
                  <div><strong>Automated Fallback:</strong> Oxygen Hub Beta surged to 125% output</div>
                </div>
                <button id="btn-trigger-o2-sim" class="btn-scenario-action o2">
                  <span>${scenario && scenario.id === 'OXYGEN_FAILURE' ? 'Scenario Active' : 'Simulate O2 Failure'}</span>
                </button>
              </div>

              <!-- Scenario 5: Power Grid Decoupling -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'POWER_FAILURE' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge power">GRID SCRAM</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>⚡ Helios Fusion Core Decoupling</h3>
                <p class="scenario-desc">
                  Magnetic field oscillation scrams Helios Tokamak. 4 dependent facilities shed load while SafeHaven Geothermal RTG activates baseline power.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Helios Power (0 MW output) & 4 facilities</div>
                  <div><strong>Automated Fallback:</strong> SafeHaven Geothermal Grid online</div>
                </div>
                <button id="btn-trigger-power-sim" class="btn-scenario-action power">
                  <span>${scenario && scenario.id === 'POWER_FAILURE' ? 'Scenario Active' : 'Simulate Power Scram'}</span>
                </button>
              </div>

              <!-- Scenario 6: Medical Emergency -->
              <div class="scenario-card glass-panel ${scenario && scenario.id === 'MEDICAL_EMERGENCY' ? 'active-sim' : ''}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge medical">TRAUMA CODE RED</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>🚑 Ares Habitat Medical Trauma</h3>
                <p class="scenario-desc">
                  Decompression injury casualty in Ares Habitat Alpha airlock requiring urgent hyperbaric surgery at MarsCare Medical Center.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Ares Habitat Sector Alpha</div>
                  <div><strong>Automated Fallback:</strong> MarsCare Hospital Trauma Bay 1 reserved</div>
                </div>
                <button id="btn-trigger-med-sim" class="btn-scenario-action medical">
                  <span>${scenario && scenario.id === 'MEDICAL_EMERGENCY' ? 'Scenario Active' : 'Simulate Code Red Trauma'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.setupEvents();
  }

  setupEvents() {
    // 1. One-Click Return to Safe Location
    const btnReturnSafe = document.getElementById('btn-return-to-safety');
    if (btnReturnSafe) {
      btnReturnSafe.addEventListener('click', () => {
        emergencyEngine.returnToSafeLocation();
        this.router.navigate('navigate');
      });
    }

    // 2. Scenario Triggers
    const btnBlocked = document.getElementById('btn-trigger-blocked-sim');
    const btnComm = document.getElementById('btn-trigger-comm-sim');
    const btnRover = document.getElementById('btn-trigger-rover-sim');
    const btnO2 = document.getElementById('btn-trigger-o2-sim');
    const btnPower = document.getElementById('btn-trigger-power-sim');
    const btnMed = document.getElementById('btn-trigger-med-sim');

    if (btnBlocked) {
      btnBlocked.addEventListener('click', () => {
        emergencyEngine.triggerBlockedPath();
        this.render();
      });
    }

    if (btnComm) {
      btnComm.addEventListener('click', () => {
        emergencyEngine.triggerCommFailure();
        this.render();
      });
    }

    if (btnRover) {
      btnRover.addEventListener('click', () => {
        emergencyEngine.triggerRoverBreakdown();
        this.render();
      });
    }

    if (btnO2) {
      btnO2.addEventListener('click', () => {
        emergencyEngine.triggerOxygenFailure();
        this.render();
      });
    }

    if (btnPower) {
      btnPower.addEventListener('click', () => {
        emergencyEngine.triggerPowerFailure();
        this.render();
      });
    }

    if (btnMed) {
      btnMed.addEventListener('click', () => {
        emergencyEngine.triggerMedicalEmergency();
        this.render();
      });
    }

    // 3. Reset Scenario
    const btnReset = document.getElementById('btn-emergency-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        emergencyEngine.resetScenario();
        this.render();
      });
    }

    // 4. View Emergency Route on Map
    const btnViewRoute = document.getElementById('btn-view-emergency-route');
    if (btnViewRoute) {
      btnViewRoute.addEventListener('click', () => {
        this.router.navigate('navigate');
      });
    }
  }
}
