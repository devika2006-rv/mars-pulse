/**
 * MARS PULSE - Clean Top Navigation Component
 * Features active route highlighting for all 6 pages (Home, Navigate, Science Map,
 * Mission Planner, Facilities, Emergency Centre), Offline Pack Cache download,
 * and Offline Local Mesh simulation.
 */

import { offlineManager } from '../../simulation/offlineManager.js';

export class TopNav {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
    this.render();
    this.setupEvents();
  }

  render() {
    const activePage = this.colonyState.currentPage;
    const hasActiveEmergency = !!this.colonyState.activeScenario;
    const isOffline = this.colonyState.telemetry.isOfflineDemo;
    const cacheInfo = offlineManager.getCacheStatus();

    this.container.innerHTML = `
      <header id="top-nav" class="glass-nav">
        <!-- Logo & Brand -->
        <a href="#/home" class="brand-link" title="Return to MARS PULSE Home">
          <div class="pulse-indicator"></div>
          <div class="brand-text">
            <span class="brand-title">MARS<span>PULSE</span></span>
            <span class="brand-sub">COLONY NAVIGATION</span>
          </div>
        </a>

        <!-- Main Navigation Links (All 6 Pages) -->
        <nav class="nav-links" aria-label="Main Navigation">
          <a href="#/home" class="nav-item ${activePage === 'home' ? 'active' : ''}" data-page="home">
            <span class="nav-icon">🪐</span>
            <span class="nav-label">Home</span>
          </a>
          <a href="#/navigate" class="nav-item ${activePage === 'navigate' ? 'active' : ''}" data-page="navigate">
            <span class="nav-icon">🧭</span>
            <span class="nav-label">Navigate</span>
          </a>
          <a href="#/science" class="nav-item ${activePage === 'science' ? 'active' : ''}" data-page="science">
            <span class="nav-icon">🔬</span>
            <span class="nav-label">Science Map</span>
          </a>
          <a href="#/planner" class="nav-item ${activePage === 'planner' ? 'active' : ''}" data-page="planner">
            <span class="nav-icon">🚀</span>
            <span class="nav-label">Mission Planner</span>
          </a>
          <a href="#/facilities" class="nav-item ${activePage === 'facilities' ? 'active' : ''}" data-page="facilities">
            <span class="nav-icon">🏢</span>
            <span class="nav-label">Facilities</span>
          </a>
          <a href="#/emergency" class="nav-item ${activePage === 'emergency' ? 'active' : ''} ${hasActiveEmergency ? 'has-alert' : ''}" data-page="emergency">
            <span class="nav-icon">🚨</span>
            <span class="nav-label">Emergency</span>
            ${hasActiveEmergency ? '<span class="nav-alert-dot" title="Active Emergency Simulation Running"></span>' : ''}
          </a>
        </nav>

        <!-- Right Utilities -->
        <div class="nav-utilities">
          <!-- Offline Cache Download Pack Button -->
          <button id="btn-download-cache-pack" class="btn-cache-pill ${cacheInfo.isDownloaded ? 'cached' : ''}" title="Download Colony Offline Data Pack for 100% offline navigation">
            <span class="cache-icon">💾</span>
            <span id="cache-pack-text">${cacheInfo.isDownloaded ? `CACHED (${cacheInfo.sizeFormatted})` : 'DOWNLOAD OFFLINE PACK'}</span>
          </button>

          <!-- Satellite / Offline Mesh Indicator Pill -->
          <button id="btn-nav-offline-pill" class="network-pill ${isOffline ? 'offline' : ''}" title="Toggle between Satellite Uplink and Offline Subterranean Mesh">
            <span class="pill-dot">●</span>
            <span id="nav-network-text">${isOffline ? 'OFFLINE MESH: ACTIVE' : 'SATELLITE MESH: ONLINE'}</span>
          </button>

          <!-- Help Button -->
          <button id="btn-open-help" class="btn-help-nav" title="How to use MARS PULSE">
            <span class="help-q">?</span>
            <span class="help-text">Guide</span>
          </button>
        </div>
      </header>
    `;
  }

  setupEvents() {
    const helpBtn = document.getElementById('btn-open-help');
    if (helpBtn) {
      helpBtn.addEventListener('click', () => {
        this.colonyState.showOnboarding();
      });
    }

    const offlineBtn = document.getElementById('btn-nav-offline-pill');
    if (offlineBtn) {
      offlineBtn.addEventListener('click', () => {
        const isOffline = this.colonyState.toggleOfflineDemo();
        offlineBtn.classList.toggle('offline', isOffline);
        const textEl = document.getElementById('nav-network-text');
        if (textEl) {
          textEl.textContent = isOffline ? 'OFFLINE MESH: ACTIVE' : 'SATELLITE MESH: ONLINE';
        }
      });
    }

    const cacheBtn = document.getElementById('btn-download-cache-pack');
    if (cacheBtn) {
      cacheBtn.addEventListener('click', async () => {
        const textEl = document.getElementById('cache-pack-text');
        if (textEl) textEl.textContent = 'CACHING COLONY...';
        const res = await offlineManager.downloadColonyCache();
        if (textEl) textEl.textContent = `CACHED (${res.sizeFormatted})`;
        cacheBtn.classList.add('cached');
        alert(`Colony Offline Pack Saved!\n• Facilities: 15\n• Road Graph: 38 nodes, 42 edges\n• Science Catalog: 5 NASA Landing Sites, 4 Geology Units\n• Total Storage: ${res.sizeFormatted}\n\nMARS PULSE can now navigate 100% offline without network connectivity.`);
      });
    }
  }

  update() {
    this.render();
    this.setupEvents();
  }
}
