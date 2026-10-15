/**
 * MARS PULSE - Central 3D Scene Initializer & Render Orchestrator
 * Coordinates Three.js WebGL renderer, procedural terrain, galaxy sky,
 * giant transparent biodome, architecture, flying vehicles, cyber-route renderer,
 * camera controls, and raycasting.
 */

import * as THREE from 'three';
import { createSky } from './createSky.js';
import { createTerrain } from './createTerrain.js';
import { createDome } from './createDome.js';
import { createBuildings } from './createBuildings.js';
import { createVehicles } from './createVehicles.js';
import { RouteRenderer } from '../navigation/renderRoute.js';
import { ColonyCameraController } from './cameraControls.js';
import { colonyState } from '../simulation/colonyState.js';

export function initializeScene(canvasContainer, callbacks = {}) {
  // 1. Scene & Atmosphere Fog
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080B18);
  scene.fog = new THREE.FogExp2(0x141026, 0.0016); // Atmospheric depth

  // 1b. Global Ambient Illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(
    48,
    window.innerWidth / window.innerHeight,
    0.5,
    2200
  );

  // 3. WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    powerPreference: 'high-performance',
    antialias: true,
    alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  canvasContainer.appendChild(renderer.domElement);

  // 4. Procedural Scene Submodules
  const sky = createSky(scene);
  const terrain = createTerrain(scene);
  const dome = createDome(scene);
  const buildings = createBuildings(scene);
  const vehicles = createVehicles(scene);
  const routeRenderer = new RouteRenderer(scene);

  // 5. Camera Controller
  const cameraController = new ColonyCameraController(
    camera,
    renderer.domElement,
    callbacks.onIntroFinished
  );

  // 6. Interactive Raycasting (Hover & Click Selection)
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onPointerMove(event) {
    if (colonyState.viewMode !== '3D') return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(buildings.raycastTargets, false);

    if (intersects.length > 0) {
      const target = intersects[0].object;
      const facId = target.userData.facilityId;
      colonyState.setHoveredFacility(facId);
      renderer.domElement.style.cursor = 'pointer';

      if (callbacks.onFacilityHover) {
        callbacks.onFacilityHover(target.userData.facilityData, event.clientX, event.clientY);
      }
    } else {
      colonyState.setHoveredFacility(null);
      renderer.domElement.style.cursor = 'default';
      if (callbacks.onFacilityHover) {
        callbacks.onFacilityHover(null);
      }
    }
  }

  function onPointerClick(event) {
    if (colonyState.viewMode !== '3D') return;
    if (cameraController.isCinematicIntro) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(buildings.raycastTargets, false);

    if (intersects.length > 0) {
      const target = intersects[0].object;
      const facId = target.userData.facilityId;
      colonyState.selectFacility(facId);

      if (callbacks.onFacilitySelect) {
        callbacks.onFacilitySelect(target.userData.facilityData);
      }
    }
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('click', onPointerClick);

  // 7. Window Resize Handler
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  window.addEventListener('resize', onWindowResize);

  // 8. Animation & Render Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = Math.min(0.1, clock.getDelta());
    const elapsedTime = clock.getElapsedTime();

    // Update submodules
    sky.update(delta, elapsedTime);
    terrain.update(delta);
    dome.update(delta, elapsedTime);
    vehicles.update(delta, elapsedTime);
    buildings.update(delta, elapsedTime, colonyState);
    routeRenderer.update(delta, elapsedTime);
    cameraController.update(delta);

    // Render 3D Scene
    renderer.render(scene, camera);
  }

  animate();

  return {
    scene,
    camera,
    renderer,
    cameraController,
    routeRenderer,
    buildings,
    dome,
    dispose: () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('click', onPointerClick);
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
    }
  };
}
