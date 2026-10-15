/**
 * MARS PULSE - Dedicated Smart Navigation Page
 * Spacious map viewport with multi-profile routing (Shortest, Safer, Alternative),
 * Google Maps-inspired live voice-guided turn-by-turn navigation,
 * dynamic road blockage rerouting, and distraction-free live HUD.
 */

import { FACILITY_CATEGORIES } from '../../data/facilities.js';
import { navigationSession } from '../../navigation/navigationSession.js';
import { voiceNavigator } from '../../navigation/voiceNavigator.js';
import { LiveNavigationHud } from '../components/liveNavigationHud.js';

export class NavigatePage {
  constructor(container, colonyState, router, callbacks = {}) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
    this.callbacks = callbacks;

    this.searchQuery = '';
    this.selectedOriginId = this.colonyState.navigation.startFacilityId || this.colonyState.userLocation.facilityId;
    this.selectedDestinationId = this.colonyState.navigation.destinationFacilityId || null;
    this.selectedProfile = 'SHORTEST'; // 'SHORTEST' | 'SAFER' | 'ALTERNATIVE'

    // Multi-profile precalculated cache
    this.multiProfileData = null;

    // Road blockage simulation state
    this.isRoadBlockedSimulated = false;
    this.blockedEdgeNotice = null;

    // Live navigation HUD instance
    this.liveNavHud = null;
  }

  render() {
    const facilities = this.colonyState.getAllFacilities();
    const nav = this.colonyState.navigation;
    const isNavigating = nav.isNavigating && nav.activeRoute;
    const isLiveNav = navigationSession.isActive;
    const viewMode = this.colonyState.viewMode;
    const domeMode = this.colonyState.domeMode;

    const originFacility = this.colonyState.getFacility(this.selectedOriginId) || this.colonyState.getFacility('residential-habitat-alpha');
    const destFacility = this.selectedDestinationId ? this.colonyState.getFacility(this.selectedDestinationId) : null;

    // Filter destination candidates
    const filteredDestinations = facilities.filter(f => {
      if (f.id === this.selectedOriginId) return false;
      if (!this.searchQuery) return true;
      const q = this.searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(q) ||
        f.categoryLabel.toLowerCase().includes(q) ||
        (f.synonyms && f.synonyms.some(s => s.toLowerCase().includes(q)))
      );
    });

    this.container.innerHTML = `
      <div class="navigate-page-overlay ${isLiveNav ? 'live-nav-active' : ''}">
        <!-- 1. TOP VIEW MODE & DOME CONTROLS BAR (Hidden during distraction-free live navigation on mobile, accessible on desktop) -->
        <div class="map-view-bar glass-panel ${isLiveNav ? 'live-mode-compact' : ''}">
          <div class="mode-toggles">
            <button id="btn-toggle-3d" class="toggle-pill ${viewMode === '3D' ? 'active' : ''}" title="Switch to 3D Dome Colony">
              <span>🔮 3D DOME</span>
            </button>
            <button id="btn-toggle-2d" class="toggle-pill ${viewMode === '2D' ? 'active' : ''}" title="Switch to 2D Top-Down Navigation Map">
              <span>🗺️ 2D MAP</span>
            </button>
          </div>

          <!-- Dome Protective Shell Mode Selector (Visible in 3D Mode) -->
          <div id="dome-controls" class="dome-mode-group" style="${viewMode === '3D' ? 'display: flex;' : 'display: none;'}">
            <span class="group-label">SHIELD:</span>
            <button id="btn-dome-glass" class="dome-btn ${domeMode === 'TRANSPARENT' ? 'active' : ''}" data-mode="TRANSPARENT">GLASS</button>
            <button id="btn-dome-holo" class="dome-btn ${domeMode === 'HOLOGRAPHIC' ? 'active' : ''}" data-mode="HOLOGRAPHIC">HOLO</button>
            <button id="btn-dome-open" class="dome-btn ${domeMode === 'OPEN' ? 'active' : ''}" data-mode="OPEN">OPEN</button>
          </div>

          <button id="btn-play-flythrough" class="btn-flythrough-pill" title="Play Cinematic 3D Colony Flythrough">
            🎬 FLYTHROUGH
          </button>
        </div>

        <!-- 2. FLOATING GOOGLE MAPS CONTROLS (Right side) -->
        <div class="floating-map-controls ${isLiveNav ? 'live-mode-offset' : ''}">
          <div class="gmaps-ctrl-group">
            <button id="btn-map-zoom-in" class="ctrl-btn" title="Zoom In (+)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <button id="btn-map-zoom-out" class="ctrl-btn" title="Zoom Out (−)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>

          <div class="gmaps-ctrl-group">
            <button id="btn-map-recenter-user" class="ctrl-btn" title="Recenter on Rover Beacon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/></svg>
            </button>
            <button id="btn-map-overview" class="ctrl-btn" title="Colony Overview">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
            </button>
            <button id="btn-map-traffic" class="ctrl-btn active" title="Toggle Skyways & Ground Traffic Lanes">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 18H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v3"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/><path d="M19 18h2c.6 0 1-.4 1-1v-4l-3-4H9"/></svg>
            </button>
          </div>
        </div>

        <!-- 3. ROUTE PLANNING PANEL (Left Floating Side Panel, Hidden during Live Navigation) -->
        ${!isLiveNav ? `
          <aside class="route-planning-card glass-panel" id="route-planning-panel">
            <div class="planner-header">
              <div class="planner-title">
                <span class="icon-pulse">🧭</span>
                <span>Smart Mars Navigation</span>
              </div>
              ${isNavigating ? `
                <button id="btn-clear-active-route" class="btn-clear-subtle" title="Clear Route">✕ Clear</button>
              ` : ''}
            </div>

            <!-- Origin Input -->
            <div class="location-input-group">
              <label class="input-label">STARTING LOCATION</label>
              <div class="input-wrapper">
                <span class="input-pin-icon green">●</span>
                <select id="select-origin" class="select-location">
                  ${facilities.map(f => `
                    <option value="${f.id}" ${f.id === this.selectedOriginId ? 'selected' : ''}>
                      ${f.name} ${f.id === this.colonyState.userLocation.facilityId ? '(My Location)' : ''}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>

            <!-- Destination Input -->
            <div class="location-input-group">
              <label class="input-label">DESTINATION</label>
              <div class="input-wrapper">
                <span class="input-pin-icon red">▲</span>
                <input 
                  type="text" 
                  id="input-destination-search" 
                  class="search-input-field" 
                  placeholder="${destFacility ? destFacility.name : 'Search hospital, oxygen, greenhouse...'}"
                  value="${destFacility ? destFacility.name : ''}"
                  autocomplete="off"
                />
                ${destFacility ? `
                  <button id="btn-clear-dest" class="btn-clear-input" title="Change destination">✕</button>
                ` : ''}
              </div>

              <!-- Destination Autocomplete Suggestions Dropdown -->
              <div id="dest-suggestions" class="suggestions-dropdown" style="display: none;">
                ${filteredDestinations.slice(0, 8).map(f => `
                  <div class="suggestion-item" data-id="${f.id}">
                    <div class="sugg-name">${f.name}</div>
                    <div class="sugg-meta">${f.categoryLabel} • ~${Math.round(Math.hypot(f.coords.x + 40, f.coords.z + 40) * 3.5)}m</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Quick Category Suggestions -->
            <div class="quick-chips-row">
              <span class="chips-label">QUICK:</span>
              <button class="quick-chip" data-query="hospital">🏥 Hospital</button>
              <button class="quick-chip" data-query="oxygen">💨 Oxygen</button>
              <button class="quick-chip" data-query="water">💧 Water</button>
              <button class="quick-chip" data-query="food">🌱 Food</button>
              <button class="quick-chip" data-query="power">⚡ Power</button>
              <button class="quick-chip" data-query="shelter">🛡 Shelter</button>
            </div>

            <!-- ROUTE PROFILE SELECTOR TABS (Shortest vs Safer vs Alternative) -->
            <div class="route-profiles-container">
              <div class="profiles-header-label">ROUTE PROFILE</div>
              <div class="profile-tabs-row">
                <button class="profile-tab-btn ${this.selectedProfile === 'SHORTEST' ? 'active' : ''}" data-profile="SHORTEST" title="Distance-optimized trajectory">
                  <span class="prof-icon">🚀</span>
                  <span class="prof-name">Shortest</span>
                </button>
                <button class="profile-tab-btn ${this.selectedProfile === 'SAFER' ? 'active' : ''}" data-profile="SAFER" title="Hazard-avoidance trajectory">
                  <span class="prof-icon">🛡️</span>
                  <span class="prof-name">Safer</span>
                </button>
                <button class="profile-tab-btn ${this.selectedProfile === 'ALTERNATIVE' ? 'active' : ''}" data-profile="ALTERNATIVE" title="Perimeter ringway bypass">
                  <span class="prof-icon">🔄</span>
                  <span class="prof-name">Alternative</span>
                </button>
              </div>
            </div>

            <!-- Action: Show Route Button -->
            ${!isNavigating ? `
              <button id="btn-show-route" class="btn-primary-glow full-width" ${!this.selectedDestinationId ? 'disabled' : ''}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                <span>Calculate & Show Route</span>
              </button>
            ` : ''}

            <!-- Calculated Route Summary & Multi-Profile Comparison -->
            ${isNavigating ? `
              <div class="calculated-route-box">
                <!-- Blocked Path Alert Notification (if simulated) -->
                ${this.blockedEdgeNotice ? `
                  <div class="route-blockage-alert">
                    <span class="block-icon">⚠️</span>
                    <div class="block-text">
                      <strong>ROADWAY OBSTRUCTION:</strong> ${this.blockedEdgeNotice}
                    </div>
                  </div>
                ` : ''}

                <div class="route-metrics-bar">
                  <div class="metric">
                    <span class="metric-label">DISTANCE</span>
                    <span class="metric-value cyan">${nav.activeRoute.distance} m</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">EST. TIME</span>
                    <span class="metric-value green">${nav.activeRoute.travelTimeMinutes} min</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">HAZARD SCORE</span>
                    <span class="metric-value ${nav.activeRoute.hazardScore > 30 ? 'red' : 'gold'}">
                      ${nav.activeRoute.hazardScore || 0}%
                    </span>
                  </div>
                </div>

                <div class="route-endpoints">
                  <div class="endpoint">
                    <span class="point-dot origin">●</span>
                    <span class="point-text">${originFacility ? originFacility.name : 'Origin'}</span>
                  </div>
                  <div class="endpoint-divider">↓</div>
                  <div class="endpoint">
                    <span class="point-dot dest">▲</span>
                    <span class="point-text">${destFacility ? destFacility.name : 'Destination'}</span>
                  </div>
                </div>

                <!-- Simulation Tools: Road Blockage & Dynamic Rerouting -->
                <div class="route-simulation-actions">
                  ${!this.isRoadBlockedSimulated ? `
                    <button id="btn-simulate-blockage" class="btn-simulate-hazard-pill" title="Demonstrate blocked path detection and immediate dynamic rerouting">
                      ⚠️ Simulate Road Blockage & Reroute
                    </button>
                  ` : `
                    <button id="btn-clear-blockage" class="btn-clear-blockage-pill" title="Clear obstruction and restore original arterial route">
                      ✓ Clear Blockage & Restore Route
                    </button>
                  `}
                </div>

                <!-- START VOICE NAVIGATION CTA (Google Maps Inspired) -->
                <button id="btn-start-voice-nav" class="btn-start-nav-google full-width" title="Start live turn-by-turn spoken guidance">
                  <span class="start-nav-icon">🧭</span>
                  <div class="start-nav-text">
                    <span class="start-main">START VOICE NAVIGATION</span>
                    <span class="start-sub">Live spoken turn-by-turn guidance</span>
                  </div>
                </button>
                <div class="voice-audio-disclaimer">
                  <span>🔊 Audio uses browser SpeechSynthesis. Press Start to initiate. (Simulated Mars positioning)</span>
                </div>
              </div>
            ` : ''}
          </aside>
        ` : ''}

        <!-- 4. DEDICATED LIVE NAVIGATION HUD SLOT -->
        <div id="live-nav-slot"></div>
      </div>
    `;

    this.setupEvents();

    // Mount LiveNavigationHud if active
    if (isLiveNav) {
      const slot = document.getElementById('live-nav-slot');
      if (slot) {
        if (!this.liveNavHud) {
          this.liveNavHud = new LiveNavigationHud(slot, this.colonyState, {
            onStepChanged: (wp) => {
              if (this.callbacks.onFocusFacility && wp) {
                this.callbacks.onFocusFacility({ coords: wp });
              }
            },
            onEndNavigation: () => {
              this.colonyState.setFocusedNavigation(false);
              this.render();
            }
          });
        }
        this.liveNavHud.render();
      }
    } else {
      if (this.liveNavHud) {
        this.liveNavHud.destroy();
        this.liveNavHud = null;
      }
    }
  }

  setupEvents() {
    // 1. View Mode Toggles (2D vs 3D)
    const btn3D = document.getElementById('btn-toggle-3d');
    const btn2D = document.getElementById('btn-toggle-2d');

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

    // 2. Dome Shield Modes
    ['glass', 'holo', 'open'].forEach(modeKey => {
      const btn = document.getElementById(`btn-dome-${modeKey}`);
      if (btn) {
        btn.addEventListener('click', () => {
          this.colonyState.setDomeMode(btn.dataset.mode);
          this.render();
        });
      }
    });

    // 3. Flythrough Button
    const btnFly = document.getElementById('btn-play-flythrough');
    if (btnFly) {
      btnFly.addEventListener('click', () => {
        if (this.callbacks.onPlayFlythrough) this.callbacks.onPlayFlythrough();
      });
    }

    // 4. Map Zoom / Recenter Controls
    const zoomIn = document.getElementById('btn-map-zoom-in');
    const zoomOut = document.getElementById('btn-map-zoom-out');
    const recenter = document.getElementById('btn-map-recenter-user');
    const overview = document.getElementById('btn-map-overview');
    const traffic = document.getElementById('btn-map-traffic');

    if (zoomIn) zoomIn.addEventListener('click', () => this.callbacks.onZoomIn && this.callbacks.onZoomIn());
    if (zoomOut) zoomOut.addEventListener('click', () => this.callbacks.onZoomOut && this.callbacks.onZoomOut());
    if (recenter) recenter.addEventListener('click', () => this.callbacks.onRecenterResident && this.callbacks.onRecenterResident());
    if (overview) overview.addEventListener('click', () => this.callbacks.onRecenterAll && this.callbacks.onRecenterAll());
    if (traffic) {
      traffic.addEventListener('click', () => {
        if (this.callbacks.onToggleTraffic) {
          const isT = this.callbacks.onToggleTraffic();
          traffic.classList.toggle('active', isT);
        }
      });
    }

    // 5. Origin Select
    const selectOrigin = document.getElementById('select-origin');
    if (selectOrigin) {
      selectOrigin.addEventListener('change', (e) => {
        this.selectedOriginId = e.target.value;
        if (this.selectedDestinationId) {
          this.calculateAndShowRoute();
        }
      });
    }

    // 6. Destination Search & Suggestions Dropdown
    const destInput = document.getElementById('input-destination-search');
    const suggestionsDrop = document.getElementById('dest-suggestions');
    const clearDestBtn = document.getElementById('btn-clear-dest');

    if (destInput && suggestionsDrop) {
      destInput.addEventListener('focus', () => {
        suggestionsDrop.style.display = 'block';
      });

      destInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
        const updatedInput = document.getElementById('input-destination-search');
        if (updatedInput) {
          updatedInput.focus();
          const len = updatedInput.value.length;
          updatedInput.setSelectionRange(len, len);
          const drop = document.getElementById('dest-suggestions');
          if (drop) drop.style.display = 'block';
        }
      });
    }

    // Suggestion item click
    document.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const facId = item.dataset.id;
        this.selectDestination(facId);
      });
    });

    if (clearDestBtn) {
      clearDestBtn.addEventListener('click', () => {
        this.selectedDestinationId = null;
        this.searchQuery = '';
        navigationSession.stop();
        this.colonyState.clearNavigation();
        if (this.callbacks.onClearRoute) this.callbacks.onClearRoute();
        this.render();
      });
    }

    // Quick chips
    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.query;
        const facs = this.colonyState.getAllFacilities();
        const match = facs.find(f => 
          f.category === q || 
          f.id.includes(q) || 
          (f.synonyms && f.synonyms.includes(q))
        );
        if (match) {
          this.selectDestination(match.id);
        }
      });
    });

    // 7. Route Profile Tabs
    document.querySelectorAll('.profile-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedProfile = btn.dataset.profile;
        if (this.selectedDestinationId) {
          this.calculateAndShowRoute();
        } else {
          this.render();
        }
      });
    });

    // 8. Calculate & Show Route Button
    const btnShowRoute = document.getElementById('btn-show-route');
    if (btnShowRoute) {
      btnShowRoute.addEventListener('click', () => {
        this.calculateAndShowRoute();
      });
    }

    // 9. Clear Active Route
    const btnClearRoute = document.getElementById('btn-clear-active-route');
    if (btnClearRoute) {
      btnClearRoute.addEventListener('click', () => {
        this.selectedDestinationId = null;
        navigationSession.stop();
        this.colonyState.clearNavigation();
        if (this.callbacks.onClearRoute) this.callbacks.onClearRoute();
        this.render();
      });
    }

    // 10. Simulate Road Blockage & Dynamic Rerouting
    const btnBlock = document.getElementById('btn-simulate-blockage');
    if (btnBlock) {
      btnBlock.addEventListener('click', () => {
        this.isRoadBlockedSimulated = true;
        this.blockedEdgeNotice = 'Regolith collapse on primary arterial road. Pathfinding engine recalculated safe alternate detour.';
        if (this.callbacks.onSimulateRoadBlockage) {
          const rerouted = this.callbacks.onSimulateRoadBlockage(this.selectedOriginId, this.selectedDestinationId);
          if (navigationSession.isActive && rerouted) {
            navigationSession.updateReroute(rerouted, 'Regolith rockfall detected on primary arterial road');
          }
        }
        this.render();
      });
    }

    // Clear Blockage
    const btnClearBlock = document.getElementById('btn-clear-blockage');
    if (btnClearBlock) {
      btnClearBlock.addEventListener('click', () => {
        this.isRoadBlockedSimulated = false;
        this.blockedEdgeNotice = null;
        if (this.callbacks.onClearRoadBlockage) {
          const restored = this.callbacks.onClearRoadBlockage(this.selectedOriginId, this.selectedDestinationId);
          if (navigationSession.isActive && restored) {
            navigationSession.updateReroute(restored, 'Obstruction cleared, route restored');
          }
        }
        this.calculateAndShowRoute();
      });
    }

    // 11. START VOICE NAVIGATION (Google Maps Mode)
    const btnStartVoice = document.getElementById('btn-start-voice-nav');
    if (btnStartVoice) {
      btnStartVoice.addEventListener('click', () => {
        const nav = this.colonyState.navigation;
        if (!nav.activeRoute) return;

        const originFacility = this.colonyState.getFacility(this.selectedOriginId) || this.colonyState.getFacility('residential-habitat-alpha');
        const destFacility = this.selectedDestinationId ? this.colonyState.getFacility(this.selectedDestinationId) : null;

        // Start live navigation session
        navigationSession.start(nav.activeRoute, originFacility, destFacility, true);
        this.colonyState.setFocusedNavigation(true);
        this.render();

        // Focus 3D/2D camera on starting position
        if (this.callbacks.onFocusFacility && originFacility) {
          this.callbacks.onFocusFacility(originFacility);
        }
      });
    }
  }

  selectDestination(facilityId) {
    this.selectedDestinationId = facilityId;
    this.searchQuery = '';
    const fac = this.colonyState.getFacility(facilityId);
    if (fac) {
      this.colonyState.selectFacility(facilityId);
      this.calculateAndShowRoute();
    }
  }

  calculateAndShowRoute() {
    if (!this.selectedDestinationId) return;
    const originId = this.selectedOriginId;
    const destId = this.selectedDestinationId;
    const profile = this.selectedProfile;

    if (this.callbacks.onCalculateRoute) {
      const routeResult = this.callbacks.onCalculateRoute(originId, destId, profile);
      if (routeResult && !routeResult.error) {
        if (navigationSession.isActive) {
          navigationSession.updateReroute(routeResult, `Profile changed to ${profile}`);
        }
        this.render();
      }
    }
  }

  handleRouteParams(params) {
    if (params.to) {
      this.selectDestination(params.to);
    } else if (params.focus) {
      const fac = this.colonyState.getFacility(params.focus);
      if (fac) {
        this.colonyState.selectFacility(fac.id);
        if (this.callbacks.onFocusFacility) this.callbacks.onFocusFacility(fac);
      }
    }
  }
}
