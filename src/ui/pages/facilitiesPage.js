/**
 * MARS PULSE - Dedicated Facilities Directory Page
 * Searchable, category-filtered directory of all 15 Martian colony facilities
 * with clear status badges, distance from resident beacon, and quick navigation actions.
 */

import { FACILITY_CATEGORIES } from '../../data/facilities.js';

export class FacilitiesPage {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
    this.activeCategory = 'all';
    this.searchQuery = '';
  }

  render() {
    const allFacilities = this.colonyState.getAllFacilities();
    const userLoc = this.colonyState.userLocation.coords;

    // Filter by category and search query
    const filtered = allFacilities.filter(f => {
      const catMatch = this.activeCategory === 'all' || f.category === this.activeCategory;
      if (!catMatch) return false;

      if (!this.searchQuery) return true;
      const q = this.searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(q) ||
        f.categoryLabel.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        (f.synonyms && f.synonyms.some(s => s.toLowerCase().includes(q))) ||
        (f.services && f.services.some(s => s.toLowerCase().includes(q)))
      );
    });

    this.container.innerHTML = `
      <section class="facilities-page-layout">
        <div class="facilities-container">
          <!-- Page Header -->
          <div class="facilities-header-card glass-panel">
            <div class="header-pre-badge">MARTIAN INFRASTRUCTURE DIRECTORY</div>
            <h1 class="page-title">Colony Facilities & Habitats</h1>
            <p class="page-sub">
              Explore 15 vital colony sectors supporting 4,150 residents. Check real-time life-support grid status, 
              view locations on the colony map, and calculate instant walking or rover routes.
            </p>

            <!-- Search Bar -->
            <div class="directory-search-bar">
              <svg class="search-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                id="dir-search-input" 
                class="dir-search-input" 
                placeholder="Search by facility name, sector, or service (e.g. oxygen, trauma, greenhouse, water)..."
                value="${this.searchQuery}"
                autocomplete="off"
              />
              ${this.searchQuery ? '<button id="btn-clear-dir-search" class="btn-clear-search">✕</button>' : ''}
            </div>

            <!-- Category Filter Tabs -->
            <div class="category-tabs-scroll">
              ${FACILITY_CATEGORIES.map(cat => `
                <button class="cat-tab-btn ${this.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
                  <span>${cat.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Results Summary -->
          <div class="results-meta-row">
            <span>SHOWING ${filtered.length} OF ${allFacilities.length} FACILITIES</span>
            ${this.activeCategory !== 'all' ? `<span class="active-filter-badge">Category: ${this.activeCategory}</span>` : ''}
          </div>

          <!-- Facilities Cards Grid -->
          <div class="facilities-grid">
            ${filtered.length > 0 ? filtered.map(f => {
              const statusClass = f.status.toLowerCase();
              const distFromUser = Math.round(Math.hypot(f.coords.x - userLoc.x, f.coords.z - userLoc.z) * 3.5);
              return `
                <article class="facility-grid-card glass-panel status-${statusClass}" data-id="${f.id}">
                  <div class="card-top-row">
                    <span class="category-pill">${f.categoryLabel}</span>
                    <span class="status-badge ${statusClass}">${f.status}</span>
                  </div>

                  <h3 class="card-facility-title">${f.name}</h3>
                  <div class="card-dist-meta">
                    <span class="pin-icon">📍</span>
                    <span>~${distFromUser} m from Ares Hab</span>
                    <span class="dot-separator">•</span>
                    <span>Zone: ${f.id.split('-')[0].toUpperCase()}</span>
                  </div>

                  <p class="card-facility-desc">${f.description}</p>

                  ${f.emergencyAlert ? `
                    <div class="card-alert-strip">
                      <span>⚠ ${f.emergencyAlert}</span>
                    </div>
                  ` : ''}

                  <!-- Key Telemetry Row -->
                  <div class="card-stats-row">
                    <div class="mini-stat">
                      <span class="ms-lbl">POWER</span>
                      <span class="ms-val">${f.powerConsumption || '350 kW'}</span>
                    </div>
                    <div class="mini-stat">
                      <span class="ms-lbl">CREW</span>
                      <span class="ms-val">${f.occupancy ? f.occupancy.split('/')[0] : 'Nominal'}</span>
                    </div>
                    <div class="mini-stat">
                      <span class="ms-lbl">ROLE</span>
                      <span class="ms-val">${f.emergencyRole ? f.emergencyRole.split(' ')[0] : 'Civilian'}</span>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="card-actions-row">
                    <button class="btn-card-nav btn-primary-card" data-action="navigate" data-id="${f.id}" title="Calculate route to this facility">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                      <span>Navigate Here</span>
                    </button>

                    <button class="btn-card-view btn-secondary-card" data-action="view-map" data-id="${f.id}" title="Center this facility on the colony map">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
                      <span>View on Map</span>
                    </button>

                    <button class="btn-card-details" data-action="details" data-id="${f.id}" title="View full technical specs">
                      <span>Specs</span>
                    </button>
                  </div>
                </article>
              `;
            }).join('') : `
              <div class="empty-results-card glass-panel">
                <div class="empty-icon">🔍</div>
                <h3>No colony facilities found</h3>
                <p>No facilities match your search query "${this.searchQuery}". Try searching for "hospital", "oxygen", "school", or clear filters.</p>
                <button id="btn-reset-dir-filter" class="btn-secondary-hero">Reset Filters</button>
              </div>
            `}
          </div>
        </div>
      </section>
    `;

    this.setupEvents();
  }

  setupEvents() {
    // Search input
    const searchInput = document.getElementById('dir-search-input');
    const clearBtn = document.getElementById('btn-clear-dir-search');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.render();
        const updated = document.getElementById('dir-search-input');
        if (updated) {
          updated.focus();
          const len = updated.value.length;
          updated.setSelectionRange(len, len);
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }

    // Category tabs
    document.querySelectorAll('.cat-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.cat;
        this.render();
      });
    });

    // Reset filters button
    const resetBtn = document.getElementById('btn-reset-dir-filter');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.activeCategory = 'all';
        this.searchQuery = '';
        this.render();
      });
    }

    // Card action buttons
    this.container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const id = btn.dataset.id;

        if (action === 'navigate') {
          this.router.navigate('navigate', { to: id });
        } else if (action === 'view-map') {
          this.router.navigate('navigate', { focus: id });
        } else if (action === 'details') {
          this.colonyState.openFacilityModal(id);
        }
      });
    });

    // Clicking card opens details
    this.container.querySelectorAll('.facility-grid-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        this.colonyState.openFacilityModal(id);
      });
    });
  }
}
