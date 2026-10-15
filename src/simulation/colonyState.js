/**
 * MARS PULSE - Colony State Management
 * Observable reactive state store managing facilities, emergencies, active routes,
 * 2D/3D view modes, and colony telemetry.
 */

import { FACILITIES } from '../data/facilities.js';

class ColonyStateStore {
  constructor() {
    this.facilities = JSON.parse(JSON.stringify(FACILITIES));
    this.facilityMap = new Map(this.facilities.map(f => [f.id, f]));
    
    this.viewMode = '3D'; // '3D' (Interactive 3D Dome Colony) or '2D' (Top-down Google Maps)
    this.domeMode = 'TRANSPARENT'; // 'TRANSPARENT', 'HOLOGRAPHIC', 'OPEN'
    this.activeScenario = null;
    this.selectedFacilityId = 'command-tower';
    this.hoveredFacilityId = null;
    
    this.userLocation = {
      facilityId: 'residential-habitat-alpha',
      name: 'Ares Habitat Sector Alpha',
      coords: { x: -40, y: 0, z: -40 },
      role: 'Citizen Beacon (MP-2050)'
    };

    this.navigation = {
      startFacilityId: 'residential-habitat-alpha',
      destinationFacilityId: null,
      activeRoute: null,
      isNavigating: false,
      turnDirections: []
    };

    this.telemetry = {
      sol: 428,
      marsTime: '14:26 MTC',
      atmosphericPressure: '7.8 mbar',
      surfaceTemperature: '-58°C',
      colonyPopulation: '4,150',
      totalPowerOutput: '52.4 MW',
      oxygenReserveDays: 142,
      isOfflineDemo: false
    };

    this.currentPage = 'home'; // 'home' | 'navigate' | 'facilities' | 'emergency'
    this.currentRouteParams = {};
    this.isFocusedNavigation = false;
    this.facilityDetailModalId = null;
    this.onboardingDismissed = false;
    try {
      this.onboardingDismissed = localStorage.getItem('mars_pulse_onboarded') === 'true';
    } catch (e) {}

    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(changeType, payload) {
    for (const listener of this.listeners) {
      listener(changeType, payload, this);
    }
  }

  setPage(page, params = {}) {
    this.currentPage = page;
    this.currentRouteParams = params;
    this.notify('PAGE_CHANGED', { page, params });
  }

  setFocusedNavigation(isFocused) {
    if (this.isFocusedNavigation === isFocused) return;
    this.isFocusedNavigation = isFocused;
    this.notify('FOCUSED_NAV_CHANGED', isFocused);
  }

  openFacilityModal(facilityId) {
    this.facilityDetailModalId = facilityId;
    this.notify('FACILITY_MODAL_OPENED', facilityId);
  }

  closeFacilityModal() {
    this.facilityDetailModalId = null;
    this.notify('FACILITY_MODAL_CLOSED', null);
  }

  dismissOnboarding() {
    this.onboardingDismissed = true;
    try {
      localStorage.setItem('mars_pulse_onboarded', 'true');
    } catch (e) {}
    this.notify('ONBOARDING_CHANGED', false);
  }

  showOnboarding() {
    this.onboardingDismissed = false;
    this.notify('ONBOARDING_CHANGED', true);
  }

  setViewMode(mode) {
    if (this.viewMode === mode) return;
    this.viewMode = mode;
    this.notify('VIEW_MODE_CHANGED', mode);
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === '2D' ? '3D' : '2D';
    this.notify('VIEW_MODE_CHANGED', this.viewMode);
    return this.viewMode;
  }

  setDomeMode(mode) {
    if (this.domeMode === mode) return;
    this.domeMode = mode;
    this.notify('DOME_MODE_CHANGED', mode);
  }

  getFacility(id) {
    return this.facilityMap.get(id);
  }

  getAllFacilities() {
    return this.facilities;
  }

  selectFacility(id) {
    if (this.selectedFacilityId === id) return;
    this.selectedFacilityId = id;
    this.notify('FACILITY_SELECTED', id);
  }

  setHoveredFacility(id) {
    if (this.hoveredFacilityId === id) return;
    this.hoveredFacilityId = id;
    this.notify('FACILITY_HOVERED', id);
  }

  updateFacility(id, updates) {
    const facility = this.facilityMap.get(id);
    if (!facility) return;
    Object.assign(facility, updates);
    this.notify('FACILITY_UPDATED', facility);
  }

  setScenario(scenario) {
    this.activeScenario = scenario;
    this.notify('SCENARIO_CHANGED', scenario);
  }

  clearScenario() {
    this.activeScenario = null;
    this.notify('SCENARIO_CHANGED', null);
  }

  setNavigation(navUpdate) {
    Object.assign(this.navigation, navUpdate);
    this.notify('NAVIGATION_UPDATED', this.navigation);
  }

  clearNavigation() {
    this.navigation = {
      startFacilityId: this.userLocation.facilityId,
      destinationFacilityId: null,
      activeRoute: null,
      isNavigating: false,
      turnDirections: []
    };
    this.notify('NAVIGATION_CLEARED', null);
  }

  toggleOfflineDemo() {
    this.telemetry.isOfflineDemo = !this.telemetry.isOfflineDemo;
    this.notify('TELEMETRY_UPDATED', this.telemetry);
    return this.telemetry.isOfflineDemo;
  }

  resetAll() {
    this.facilities = JSON.parse(JSON.stringify(FACILITIES));
    this.facilityMap = new Map(this.facilities.map(f => [f.id, f]));
    this.activeScenario = null;
    this.clearNavigation();
    this.notify('COLONY_RESET', null);
  }
}

export const colonyState = new ColonyStateStore();
