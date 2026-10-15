/**
 * MARS PULSE - Facility Details Modal Component
 * Displays comprehensive facility specs, life-support telemetry, and services on demand,
 * eliminating visual clutter from the main navigation screen.
 */

export class FacilityModal {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
  }

  render() {
    const facilityId = this.colonyState.facilityDetailModalId;
    if (!facilityId) {
      this.container.innerHTML = '';
      return;
    }

    const facility = this.colonyState.getFacility(facilityId);
    if (!facility) {
      this.container.innerHTML = '';
      return;
    }

    const statusClass = facility.status.toLowerCase();
    const healthVal = facility.health !== undefined ? facility.health : 98;

    this.container.innerHTML = `
      <div class="modal-backdrop" id="facility-modal-backdrop">
        <div class="facility-modal glass-panel" role="dialog" aria-modal="true" aria-labelledby="modal-fac-name">
          <div class="modal-top">
            <div class="fac-meta-row">
              <span class="status-badge ${statusClass}">${facility.status}</span>
              <span class="category-tag">${facility.categoryLabel}</span>
            </div>
            <button id="btn-close-fac-modal" class="modal-close-btn" title="Close details">✕</button>
          </div>

          <h2 id="modal-fac-name" class="facility-modal-title">${facility.name}</h2>
          <div class="facility-modal-sub">Colony Sector ID: <code>${facility.id}</code></div>

          ${facility.emergencyAlert ? `
            <div class="emergency-alert-banner">
              <span class="alert-icon">⚠</span>
              <span class="alert-text">${facility.emergencyAlert}</span>
            </div>
          ` : ''}

          <!-- Health Integrity Bar -->
          <div class="health-meter-wrap">
            <div class="meter-header">
              <span>OPERATIONAL INTEGRITY</span>
              <span class="meter-val ${healthVal < 40 ? 'danger' : ''}">${healthVal}%</span>
            </div>
            <div class="meter-bar">
              <div class="meter-fill ${healthVal < 40 ? 'danger' : ''}" style="width: ${healthVal}%;"></div>
            </div>
          </div>

          <p class="facility-modal-desc">${facility.description}</p>

          <!-- Specs Grid -->
          <div class="specs-grid">
            <div class="spec-card">
              <div class="spec-label">POWER SUPPLY</div>
              <div class="spec-val">${facility.powerConsumption || '350 kW'}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">OXYGEN LINE</div>
              <div class="spec-val">${facility.oxygenSupply || 'Direct Life-Support Grid'}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">CREW CAPACITY</div>
              <div class="spec-val">${facility.occupancy || 'Standard Crew'}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">EMERGENCY ROLE</div>
              <div class="spec-val">${facility.emergencyRole || 'Civilian Support'}</div>
            </div>
          </div>

          <!-- Services List -->
          <div class="services-section">
            <div class="section-label">AVAILABLE FACILITY SERVICES</div>
            <div class="services-tags">
              ${(facility.services && facility.services.length > 0)
                ? facility.services.map(s => `<span class="service-tag">✓ ${s}</span>`).join('')
                : '<span class="service-tag">Standard Colony Utilities</span>'
              }
            </div>
          </div>

          <!-- Actions -->
          <div class="modal-action-row">
            <button id="btn-modal-navigate" class="btn-primary-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              <span>Navigate Here</span>
            </button>
            <button id="btn-modal-view-map" class="btn-secondary-glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
              <span>View on Map</span>
            </button>
          </div>
        </div>
      </div>
    `;

    this.setupEvents(facility);
  }

  setupEvents(facility) {
    const closeBtn = document.getElementById('btn-close-fac-modal');
    const backdrop = document.getElementById('facility-modal-backdrop');
    const navBtn = document.getElementById('btn-modal-navigate');
    const mapBtn = document.getElementById('btn-modal-view-map');

    const close = () => {
      this.colonyState.closeFacilityModal();
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) close();
      });
    }

    if (navBtn) {
      navBtn.addEventListener('click', () => {
        close();
        this.router.navigate('navigate', { to: facility.id });
      });
    }

    if (mapBtn) {
      mapBtn.addEventListener('click', () => {
        close();
        this.router.navigate('navigate', { focus: facility.id });
      });
    }
  }
}
