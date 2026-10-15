/**
 * MARS PULSE - Cinematic Camera Controller & Smooth Interactive Controls
 * Manages OrbitControls, 5-shot cinematic flythrough sequence, smooth fly-to focusing,
 * zoom/pan safety limits, and camera preset views.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class ColonyCameraController {
  constructor(camera, domElement, onIntroComplete = null) {
    this.camera = camera;
    this.domElement = domElement;
    this.onIntroComplete = onIntroComplete;

    // Interactive OrbitControls
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.minDistance = 18;
    this.controls.maxDistance = 450;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // Never clip under terrain horizon
    this.controls.target.set(0, 10, 0);

    // Initial Overview Camera Position
    this.defaultPosition = new THREE.Vector3(120, 95, 140);
    this.defaultTarget = new THREE.Vector3(0, 10, 0);

    // Cinematic Intro State - false by default for instant map usability
    this.isCinematicIntro = false;
    this.isAmbientHomeOrbit = true; // Ambient rotation on Home page
    this.introElapsed = 0;
    this.introDuration = 10.5; // 10.5 seconds total
    this.controls.enabled = false;

    // Smooth Fly-to Animation State
    this.flyAnimation = null;

    // Setup 5-shot spline path for introduction sequence
    this.setupIntroSpline();

    // Position camera at default overview
    this.camera.position.copy(this.defaultPosition);
    this.camera.lookAt(this.defaultTarget);
  }

  setHomePreview(enabled) {
    this.isAmbientHomeOrbit = enabled;
    if (enabled) {
      this.controls.enabled = false;
    } else {
      this.controls.enabled = true;
      if (this.camera.position.length() > 300 || this.camera.position.length() < 30) {
        this.camera.position.copy(this.defaultPosition);
        this.controls.target.copy(this.defaultTarget);
      }
    }
  }

  setupIntroSpline() {
    // 5 Shot Keyframes:
    // Shot 1: Deep space galaxy overlooking Mars
    // Shot 2: Atmospheric descent toward the red horizon
    // Shot 3: Revealing the sprawling colony and domes
    // Shot 4: Low altitude glide past Eden greenhouse & habitats
    // Shot 5: Swooping up toward Central Command Tower and settling into overview

    const cameraPoints = [
      new THREE.Vector3(-220, 320, 380),
      new THREE.Vector3(-140, 220, 280),
      new THREE.Vector3(-80, 120, 180),
      new THREE.Vector3(40, 45, 95),
      new THREE.Vector3(90, 75, 120),
      this.defaultPosition.clone()
    ];

    const targetPoints = [
      new THREE.Vector3(0, 80, 0),
      new THREE.Vector3(0, 40, 0),
      new THREE.Vector3(-20, 20, 0),
      new THREE.Vector3(45, 10, 80),
      new THREE.Vector3(0, 25, 0),
      this.defaultTarget.clone()
    ];

    this.introCameraCurve = new THREE.CatmullRomCurve3(cameraPoints, false, 'catmullrom', 0.2);
    this.introTargetCurve = new THREE.CatmullRomCurve3(targetPoints, false, 'catmullrom', 0.2);
  }

  /**
   * Play cinematic flythrough sequence on demand
   */
  playCinematicFlythrough() {
    this.isCinematicIntro = true;
    this.introElapsed = 0;
    this.controls.enabled = false;
    const firstCam = this.introCameraCurve.getPointAt(0);
    const firstTarget = this.introTargetCurve.getPointAt(0);
    this.camera.position.copy(firstCam);
    this.camera.lookAt(firstTarget);
  }

  /**
   * Skip cinematic flythrough immediately and transition into interactive mode
   */
  skipIntro() {
    this.isCinematicIntro = false;
    this.controls.enabled = true;
    this.camera.position.copy(this.defaultPosition);
    this.controls.target.copy(this.defaultTarget);
    this.controls.update();

    if (this.onIntroComplete) {
      this.onIntroComplete();
    }
  }

  /**
   * Smoothly focus camera onto a facility
   */
  focusOnFacility(facilityCoords, duration = 1.2) {
    if (this.isCinematicIntro) {
      this.skipIntro();
    }

    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();

    const offsetDirection = new THREE.Vector3(
      facilityCoords.x === 0 ? 30 : Math.sign(facilityCoords.x) * 45,
      35,
      facilityCoords.z === 0 ? 45 : Math.sign(facilityCoords.z) * 45
    );

    const endTarget = new THREE.Vector3(facilityCoords.x, (facilityCoords.y || 0) + 10, facilityCoords.z);
    const endPos = new THREE.Vector3().addVectors(endTarget, offsetDirection);

    this.flyAnimation = {
      startTime: performance.now(),
      duration: duration * 1000,
      startPos,
      endPos,
      startTarget,
      endTarget
    };
  }

  /**
   * Reset camera to default overview
   */
  resetToOverview(duration = 1.0) {
    this.focusOnPoint(this.defaultPosition, this.defaultTarget, duration);
  }

  /**
   * Set Tactical / Top-Down Map View
   */
  setTacticalMapView(duration = 1.0) {
    this.focusOnPoint(new THREE.Vector3(0, 240, 2), new THREE.Vector3(0, 0, 0), duration);
  }

  /**
   * Set Navigation Isometric View
   */
  setNavigationView(duration = 1.0) {
    this.focusOnPoint(new THREE.Vector3(45, 55, 75), new THREE.Vector3(0, 5, 10), duration);
  }

  /**
   * Generic point-to-point camera interpolation
   */
  focusOnPoint(endPos, endTarget, duration = 1.0) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();

    this.flyAnimation = {
      startTime: performance.now(),
      duration: duration * 1000,
      startPos,
      endPos: endPos.clone(),
      startTarget,
      endTarget: endTarget.clone()
    };
  }

  /**
   * Cubic ease-in-out curve
   */
  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  /**
   * Per-frame camera update
   */
  update(delta) {
    // 1. Cinematic Playback
    if (this.isCinematicIntro) {
      this.introElapsed += delta;
      const rawT = Math.min(1.0, this.introElapsed / this.introDuration);
      const t = this.easeInOutCubic(rawT);

      const camPos = this.introCameraCurve.getPointAt(t);
      const targetPos = this.introTargetCurve.getPointAt(t);

      this.camera.position.copy(camPos);
      this.camera.lookAt(targetPos);

      if (rawT >= 1.0) {
        this.skipIntro();
      }
      return;
    }

    // 1b. Ambient Home Page Orbit
    if (this.isAmbientHomeOrbit) {
      const time = performance.now() * 0.00008;
      const radius = 210;
      this.camera.position.x = Math.cos(time) * radius;
      this.camera.position.z = Math.sin(time) * radius;
      this.camera.position.y = 85 + Math.sin(time * 2) * 10;
      this.camera.lookAt(0, 12, 0);
      return;
    }

    // 2. Smooth Fly-to Animation
    if (this.flyAnimation) {
      const now = performance.now();
      const elapsed = now - this.flyAnimation.startTime;
      const progress = Math.min(1.0, elapsed / this.flyAnimation.duration);
      const ease = this.easeInOutCubic(progress);

      this.camera.position.lerpVectors(this.flyAnimation.startPos, this.flyAnimation.endPos, ease);
      this.controls.target.lerpVectors(this.flyAnimation.startTarget, this.flyAnimation.endTarget, ease);

      if (progress >= 1.0) {
        this.flyAnimation = null;
      }
    }

    // 3. Update OrbitControls
    if (this.controls.enabled) {
      this.controls.update();
    }
  }
}
