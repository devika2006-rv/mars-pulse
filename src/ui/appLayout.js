/**
 * MARS PULSE - Application Layout & Multi-Page View Coordinator
 * Manages clean top navigation, page routing, modal drawers, and responsive viewports for:
 * - Home (Hero & 3D Orbit Preview)
 * - Navigate (Smart Mars Navigation & Turn HUD)
 * - Science Map (Interactive Planetary Datasets, NASA Sites, USGS Geology)
 * - Mission Planner (Multi-Stop Expedition Itineraries)
 * - Facilities (Searchable Colony Directory)
 * - Emergency Centre (Crisis Scenarios & Safe Return)
 */

import { TopNav } from './components/topNav.js';
import { OnboardingModal } from './components/onboardingModal.js';
import { FacilityModal } from './components/facilityModal.js';
import { HomePage } from './pages/homePage.js';
import { NavigatePage } from './pages/navigatePage.js';
import { SciencePage } from './pages/sciencePage.js';
import { MissionPlannerPage } from './pages/missionPlannerPage.js';
import { FacilitiesPage } from './pages/facilitiesPage.js';
import { EmergencyPage } from './pages/emergencyPage.js';
import { colonyState } from '../simulation/colonyState.js';

export class AppLayout {
  constructor(uiContainer, router, callbacks = {}) {
    this.uiContainer = uiContainer;
    this.router = router;
    this.callbacks = callbacks;

    this.initDOM();
    this.initComponents();
    this.subscribeToState();

    // Initial render
    this.renderCurrentPage();
  }

  initDOM() {
    this.uiContainer.innerHTML = `
      <!-- 1. Top Navigation Bar Slot -->
      <div id="top-nav-slot"></div>

      <!-- 2. Active Page Content Slot -->
      <main id="page-content-slot" class="page-viewport"></main>

      <!-- 3. Facility Detail Modal Slot -->
      <div id="facility-modal-slot"></div>

      <!-- 4. Onboarding Guidance Modal Slot -->
      <div id="onboarding-modal-slot"></div>
    `;

    this.topNavSlot = document.getElementById('top-nav-slot');
    this.pageContentSlot = document.getElementById('page-content-slot');
    this.facilityModalSlot = document.getElementById('facility-modal-slot');
    this.onboardingModalSlot = document.getElementById('onboarding-modal-slot');

    this.map2DContainer = document.getElementById('map-2d-container');
    this.canvas3DContainer = document.getElementById('canvas-container');
  }

  initComponents() {
    this.topNav = new TopNav(this.topNavSlot, colonyState, this.router);
    this.onboardingModal = new OnboardingModal(this.onboardingModalSlot, colonyState, this.router);
    this.facilityModal = new FacilityModal(this.facilityModalSlot, colonyState, this.router);

    this.homePage = new HomePage(this.pageContentSlot, colonyState, this.router);
    this.navigatePage = new NavigatePage(this.pageContentSlot, colonyState, this.router, {
      onCalculateRoute: (originId, destId, profile) => {
        if (this.callbacks.onCalculateRoute) {
          return this.callbacks.onCalculateRoute(originId, destId, profile);
        }
      },
      onSimulateRoadBlockage: (originId, destId) => {
        if (this.callbacks.onSimulateRoadBlockage) {
          return this.callbacks.onSimulateRoadBlockage(originId, destId);
        }
      },
      onClearRoadBlockage: (originId, destId) => {
        if (this.callbacks.onClearRoadBlockage) {
          return this.callbacks.onClearRoadBlockage(originId, destId);
        }
      },
      onClearRoute: () => {
        if (this.callbacks.onClearRoute) this.callbacks.onClearRoute();
      },
      onZoomIn: () => {
        if (this.callbacks.onZoomIn) this.callbacks.onZoomIn();
      },
      onZoomOut: () => {
        if (this.callbacks.onZoomOut) this.callbacks.onZoomOut();
      },
      onRecenterResident: () => {
        if (this.callbacks.onRecenterResident) this.callbacks.onRecenterResident();
      },
      onRecenterAll: () => {
        if (this.callbacks.onRecenterAll) this.callbacks.onRecenterAll();
      },
      onToggleTraffic: () => {
        if (this.callbacks.onToggleTraffic) return this.callbacks.onToggleTraffic();
      },
      onPlayFlythrough: () => {
        if (this.callbacks.onPlayFlythrough) this.callbacks.onPlayFlythrough();
      },
      onFocusFacility: (fac) => {
        if (this.callbacks.onFocusFacility) this.callbacks.onFocusFacility(fac);
      }
    });

    this.sciencePage = new SciencePage(this.pageContentSlot, colonyState, this.router, {
      onFocusLocation: (coords) => {
        if (this.callbacks.onFocusFacility) this.callbacks.onFocusFacility({ coords });
      }
    });

    this.missionPlannerPage = new MissionPlannerPage(this.pageContentSlot, colonyState, this.router);
    this.facilitiesPage = new FacilitiesPage(this.pageContentSlot, colonyState, this.router);
    this.emergencyPage = new EmergencyPage(this.pageContentSlot, colonyState, this.router);

    // Initial Onboarding Check
    if (!colonyState.onboardingDismissed) {
      this.onboardingModal.render();
    }
  }

  renderCurrentPage() {
    const page = colonyState.currentPage;
    const params = colonyState.currentRouteParams;

    // 1. Update Top Navigation Active Highlight
    this.topNav.update();

    // 2. Adjust Viewport Canvas Visibility and Pointer Events
    this.updateViewportVisibility(page);

    // 3. Render Page
    this.pageContentSlot.className = `page-viewport page-${page}`;
    
    if (page === 'home') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(true);
      this.homePage.render();
    } else if (page === 'navigate') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(false);
      this.navigatePage.render();
      if (params && (params.to || params.focus)) {
        this.navigatePage.handleRouteParams(params);
      }
    } else if (page === 'science') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(true);
      this.sciencePage.render();
    } else if (page === 'planner') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(true);
      this.missionPlannerPage.render();
    } else if (page === 'facilities') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(true);
      this.facilitiesPage.render();
    } else if (page === 'emergency') {
      if (this.callbacks.onSetCameraHomeOrbit) this.callbacks.onSetCameraHomeOrbit(true);
      this.emergencyPage.render();
    }

    // Scroll to top of content on page change
    this.pageContentSlot.scrollTop = 0;
  }

  updateViewportVisibility(page) {
    if (!this.map2DContainer || !this.canvas3DContainer) return;

    const viewMode = colonyState.viewMode;

    if (page === 'home') {
      this.canvas3DContainer.style.display = 'block';
      this.canvas3DContainer.style.opacity = '1';
      this.canvas3DContainer.style.pointerEvents = 'none';
      this.canvas3DContainer.style.zIndex = '1';

      this.map2DContainer.style.display = 'none';
      this.map2DContainer.style.opacity = '0';
      this.map2DContainer.style.pointerEvents = 'none';
      this.map2DContainer.style.zIndex = '0';
    } else if (page === 'navigate') {
      // Full Interactive Map mode
      if (viewMode === '3D') {
        this.canvas3DContainer.style.display = 'block';
        this.canvas3DContainer.style.opacity = '1';
        this.canvas3DContainer.style.pointerEvents = 'auto';
        this.canvas3DContainer.style.zIndex = '2';

        this.map2DContainer.style.display = 'none';
        this.map2DContainer.style.opacity = '0';
        this.map2DContainer.style.pointerEvents = 'none';
        this.map2DContainer.style.zIndex = '0';
      } else {
        this.map2DContainer.style.display = 'block';
        this.map2DContainer.style.opacity = '1';
        this.map2DContainer.style.pointerEvents = 'auto';
        this.map2DContainer.style.zIndex = '2';

        this.canvas3DContainer.style.display = 'none';
        this.canvas3DContainer.style.opacity = '0';
        this.canvas3DContainer.style.pointerEvents = 'none';
        this.canvas3DContainer.style.zIndex = '0';

        if (this.callbacks.onResize2DMap) {
          this.callbacks.onResize2DMap();
        }
      }
    } else {
      // Science, Planner, Facilities & Emergency: content is glass UI over subtle Martian backdrop
      this.canvas3DContainer.style.display = 'block';
      this.canvas3DContainer.style.opacity = '0.35';
      this.canvas3DContainer.style.pointerEvents = 'none';
      this.canvas3DContainer.style.zIndex = '1';

      this.map2DContainer.style.display = 'none';
      this.map2DContainer.style.opacity = '0';
      this.map2DContainer.style.pointerEvents = 'none';
      this.map2DContainer.style.zIndex = '0';
    }
  }

  subscribeToState() {
    colonyState.subscribe((changeType, payload) => {
      if (changeType === 'PAGE_CHANGED') {
        this.renderCurrentPage();
      } else if (changeType === 'VIEW_MODE_CHANGED') {
        this.updateViewportVisibility(colonyState.currentPage);
      } else if (changeType === 'FACILITY_MODAL_OPENED') {
        this.facilityModal.render();
      } else if (changeType === 'FACILITY_MODAL_CLOSED') {
        this.facilityModal.render();
      } else if (changeType === 'ONBOARDING_CHANGED') {
        this.onboardingModal.render();
      } else if (changeType === 'SCENARIO_CHANGED') {
        this.topNav.update();
        if (colonyState.currentPage === 'home') {
          this.homePage.render();
        } else if (colonyState.currentPage === 'emergency') {
          this.emergencyPage.render();
        }
      } else if (changeType === 'COLONY_RESET') {
        this.topNav.update();
        this.renderCurrentPage();
      }
    });
  }
}
