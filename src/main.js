/**
 * MARS PULSE - Main Application Controller
 * Coordinates multi-page client-side router, 2D Google Maps engine,
 * 3D WebGL colony scene, pathfinding engine, and responsive UI layouts.
 */

import './styles/main.css';
import { initializeScene } from './scene/createScene.js';
import { ColonyMap2D } from './map/colonyMap2D.js';
import { AppLayout } from './ui/appLayout.js';
import { AppRouter } from './router/router.js';
import { PathfindingEngine } from './navigation/pathfinding.js';
import { colonyState } from './simulation/colonyState.js';

window.addEventListener('DOMContentLoaded', () => {
  const canvasContainer = document.getElementById('canvas-container');
  const canvas2D = document.getElementById('colony-map-2d');
  const uiContainer = document.getElementById('ui-container');
  const pathfinder = new PathfindingEngine();

  let sceneObj = null;
  let map2D = null;

  // 1. Initialize 2D Google Maps Engine
  map2D = new ColonyMap2D(canvas2D, {
    onSelect: (fac) => {
      colonyState.selectFacility(fac.id);
      if (sceneObj) {
        sceneObj.cameraController.focusOnFacility(fac.coords, 0.8);
      }
    }
  });

  // 2. Initialize Router
  const router = new AppRouter(colonyState);

  // 3. Initialize Layout Controller
  const appLayout = new AppLayout(uiContainer, router, {
    onCalculateRoute: (originId, destId, profile = 'SHORTEST') => {
      const routeResult = pathfinder.findRouteBetweenFacilities(originId, destId, profile);
      if (routeResult.error) {
        alert(`Navigation Error: ${routeResult.error}`);
        return routeResult;
      }

      colonyState.setNavigation({
        startFacilityId: originId,
        destinationFacilityId: destId,
        activeRoute: routeResult,
        isNavigating: true,
        turnDirections: routeResult.turnDirections
      });

      // Frame route on 2D Google Maps view
      map2D.fitBounds(routeResult.waypoints);

      // Render 3D Route with profile-specific aesthetic
      if (sceneObj) {
        const targetFac = colonyState.getFacility(destId);
        const isEmergency = targetFac && (targetFac.status === 'OFFLINE' || targetFac.status === 'WARNING');
        let routeColor = 0x42E8F5; // Default Shortest cyan
        if (profile === 'SAFER') routeColor = 0x00FFCC; // Safer emerald
        if (profile === 'ALTERNATIVE') routeColor = 0xA855F7; // Alternative violet
        if (isEmergency) routeColor = 0xFF3366; // Coral emergency

        sceneObj.routeRenderer.renderRoute(routeResult.waypoints, routeColor, isEmergency);
        if (targetFac) {
          sceneObj.cameraController.focusOnFacility(targetFac.coords, 1.2);
        }
      }

      return routeResult;
    },

    onSimulateRoadBlockage: (originId, destId) => {
      // Block key arterial road edge (Central-West concourse)
      pathfinder.blockEdge('node_central', 'node_central_west');
      pathfinder.blockEdge('node_central_west', 'node_west_1');

      // Recalculate detour
      const rerouted = pathfinder.findRouteBetweenFacilities(originId, destId, 'SHORTEST');
      if (!rerouted.error) {
        colonyState.setNavigation({
          startFacilityId: originId,
          destinationFacilityId: destId,
          activeRoute: rerouted,
          isNavigating: true,
          navigationReason: 'DYNAMIC_REROUTE_BLOCKED_ROAD'
        });

        map2D.fitBounds(rerouted.waypoints);
        if (sceneObj) {
          sceneObj.routeRenderer.renderRoute(rerouted.waypoints, 0xFFAA00, true);
        }
      }
      return rerouted;
    },

    onClearRoadBlockage: (originId, destId) => {
      pathfinder.resetNetwork();
      const restored = pathfinder.findRouteBetweenFacilities(originId, destId, 'SHORTEST');
      if (!restored.error) {
        colonyState.setNavigation({
          startFacilityId: originId,
          destinationFacilityId: destId,
          activeRoute: restored,
          isNavigating: true
        });

        map2D.fitBounds(restored.waypoints);
        if (sceneObj) {
          sceneObj.routeRenderer.renderRoute(restored.waypoints, 0x42E8F5, false);
        }
      }
      return restored;
    },

    onClearRoute: () => {
      colonyState.clearNavigation();
      if (sceneObj) {
        sceneObj.routeRenderer.clearRoute();
      }
    },

    onPlayFlythrough: () => {
      colonyState.setViewMode('3D');
      if (sceneObj) {
        sceneObj.cameraController.playCinematicFlythrough();
      }
    },

    onSetCameraHomeOrbit: (enabled) => {
      if (sceneObj && sceneObj.cameraController) {
        sceneObj.cameraController.setHomePreview(enabled);
      }
    },

    onResize2DMap: () => {
      if (map2D) map2D.resize();
    },

    onZoomIn: () => {
      if (colonyState.viewMode === '2D') {
        map2D.zoomIn();
      } else if (sceneObj) {
        sceneObj.camera.position.multiplyScalar(0.85);
      }
    },

    onZoomOut: () => {
      if (colonyState.viewMode === '2D') {
        map2D.zoomOut();
      } else if (sceneObj) {
        sceneObj.camera.position.multiplyScalar(1.15);
      }
    },

    onRecenterResident: () => {
      map2D.recenterOnResident();
      if (sceneObj) {
        sceneObj.cameraController.focusOnFacility(colonyState.userLocation.coords, 1.0);
      }
    },

    onRecenterAll: () => {
      map2D.recenterOverview();
      if (sceneObj) {
        sceneObj.cameraController.resetToOverview(1.0);
      }
    },

    onToggleTraffic: () => {
      return map2D.toggleTraffic();
    },

    onFocusFacility: (fac) => {
      map2D.panTo(fac.coords.x, fac.coords.z, 4.5);
      if (sceneObj) {
        sceneObj.cameraController.focusOnFacility(fac.coords, 1.0);
      }
    }
  });

  // 4. Initialize 3D WebGL Scene
  sceneObj = initializeScene(canvasContainer, {
    onFacilitySelect: (fac) => {
      if (colonyState.viewMode === '3D' && colonyState.currentPage === 'navigate') {
        colonyState.selectFacility(fac.id);
        map2D.panTo(fac.coords.x, fac.coords.z);
      }
    }
  });

  // 5. Subscribe to State for Route & Emergencies
  colonyState.subscribe((changeType, payload) => {
    if (changeType === 'NAVIGATION_UPDATED') {
      const nav = colonyState.navigation;
      if (nav.isNavigating && nav.activeRoute) {
        map2D.fitBounds(nav.activeRoute.waypoints);

        if (sceneObj) {
          const isEmergency = nav.navigationReason && nav.navigationReason.includes('EMERGENCY');
          const color = isEmergency ? 0xFF3366 : (nav.navigationReason === 'MEDEVAC_PRIORITY' ? 0xFF725E : 0x42E8F5);
          sceneObj.routeRenderer.renderRoute(nav.activeRoute.waypoints, color, isEmergency);

          const destFac = colonyState.getFacility(nav.destinationFacilityId);
          if (destFac) {
            sceneObj.cameraController.focusOnFacility(destFac.coords, 1.2);
          }
        }
      }
    } else if (changeType === 'NAVIGATION_CLEARED' || changeType === 'COLONY_RESET') {
      if (sceneObj) {
        sceneObj.routeRenderer.clearRoute();
      }
    } else if (changeType === 'DOME_MODE_CHANGED') {
      if (sceneObj && sceneObj.dome) {
        sceneObj.dome.setMode(payload);
      }
    }
  });

  // 6. Start Router after components and listeners are set up
  router.init();

  // PWA SW
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(err => {
        console.log('SW registration note:', err);
      });
    });
  }
});
