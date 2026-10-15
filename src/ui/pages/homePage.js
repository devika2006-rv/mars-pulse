/**
 * MARS PULSE - Home Landing Page
 * Features cinematic 3D colony backdrop, clear mission statement,
 * prominent call-to-action buttons, compact telemetry strip, and active emergency alert.
 */

export class HomePage {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
  }

  render() {
    const hasEmergency = !!this.colonyState.activeScenario;
    const scenario = this.colonyState.activeScenario;
    const tele = this.colonyState.telemetry;

    this.container.innerHTML = `
      <section class="home-page-layout">
        <!-- Center Hero Card -->
        <div class="hero-container">
          <div class="hero-card glass-panel">
            <div class="hero-badge">
              <span class="badge-dot">●</span>
              <span>AFTERNET MISSION SOL ${tele.sol} • MARS REBUILD</span>
            </div>

            <h1 class="hero-heading">Your next destination is just a route away.</h1>
            <p class="hero-lead">
              Evacuated from Earth in 2050, over 4,000 colonists rely on MARS PULSE for intelligent 
              3D colony navigation, life-support grid routing, and emergency lifeline navigation across the Martian frontier.
            </p>

            <!-- Primary Action Buttons -->
            <div class="hero-actions">
              <a href="#/navigate" class="btn-primary-hero" id="btn-home-explore">
                <span class="btn-icon">🧭</span>
                <span class="btn-text">Explore Colony</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <a href="#/facilities" class="btn-secondary-hero" id="btn-home-facilities">
                <span class="btn-icon">🏢</span>
                <span class="btn-text">Find a Facility</span>
              </a>
            </div>

            <!-- Active Emergency Notification Area (Visible ONLY when an alert is active) -->
            ${hasEmergency ? `
              <div class="hero-emergency-banner" id="hero-emergency-alert">
                <div class="emergency-icon-pulse">🚨</div>
                <div class="emergency-text-wrap">
                  <div class="emergency-title">ACTIVE COLONY ALERT: ${scenario.title || scenario.shortTitle || scenario.name}</div>
                  <div class="emergency-desc">${scenario.description}</div>
                </div>
                <a href="#/emergency" class="btn-alert-link">
                  <span>Review Incident</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>
            ` : ''}

            <!-- Compact Colony Status Summary -->
            <div class="hero-telemetry-strip">
              <div class="telemetry-box">
                <span class="t-label">SOL</span>
                <span class="t-val">${tele.sol}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">MARS TIME</span>
                <span class="t-val">${tele.marsTime}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">POPULATION</span>
                <span class="t-val">${tele.colonyPopulation}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">O2 GRID</span>
                <span class="t-val status-green">NOMINAL</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">POWER OUTPUT</span>
                <span class="t-val">${tele.totalPowerOutput}</span>
              </div>
            </div>
          </div>

          <!-- Feature Pillars -->
          <div class="feature-pillars">
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🗺️</div>
              <h3>100% Offline Colony Graph</h3>
              <p>Fully client-side road network and A* pathfinding. Guaranteed navigation during satellite loss.</p>
            </div>
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🔮</div>
              <h3>Living 3D Dome Colony</h3>
              <p>Interactive procedural biodome, 15 distinctive facilities, flying skimmers, and road corridors.</p>
            </div>
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🚨</div>
              <h3>Emergency Intelligence</h3>
              <p>Automated failover rerouting during life-support breaches, trauma medevac, and power grid scrams.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupEvents() {}
}
