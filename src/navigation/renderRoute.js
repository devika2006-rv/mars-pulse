/**
 * MARS PULSE - 3D Cyber-Route Renderer
 * Renders luminous, animated holographic paths on colony roads with traveling energy pulses
 * and holographic waypoint beacons for departure and destination facilities.
 */

import * as THREE from 'three';

export class RouteRenderer {
  constructor(scene) {
    this.scene = scene;
    this.routeGroup = new THREE.Group();
    this.routeGroup.name = 'navigationRoute';
    this.scene.add(this.routeGroup);

    this.activeCurve = null;
    this.pulseMesh = null;
    this.pulseProgress = 0;
    this.startBeacon = null;
    this.destBeacon = null;
    this.isRendering = false;
  }

  /**
   * Render a route from an array of waypoints [{x, y, z}]
   */
  renderRoute(waypoints, routeColor = 0x42E8F5, isEmergency = false) {
    this.clearRoute();

    if (!waypoints || waypoints.length < 2) {
      return;
    }

    // Elevate points slightly above terrain road surface (y = 0.45)
    const curvePoints = waypoints.map(wp => new THREE.Vector3(wp.x, 0.45, wp.z));
    
    // Create Catmull-Rom spline with gentle tension to follow roads
    this.activeCurve = new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.15);

    // 1. Core Glowing Cyber Ribbon / Tube
    const tubeGeo = new THREE.TubeGeometry(this.activeCurve, Math.max(20, waypoints.length * 15), 0.4, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: routeColor,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    this.routeGroup.add(tubeMesh);

    // 2. Outer Translucent Energy Aura Tube
    const auraGeo = new THREE.TubeGeometry(this.activeCurve, Math.max(20, waypoints.length * 15), 0.95, 8, false);
    const auraMat = new THREE.MeshBasicMaterial({
      color: isEmergency ? 0xFF3366 : routeColor,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    this.routeGroup.add(auraMesh);

    // 3. Traveling Photon / Energy Pulse Mesh
    const pulseGeo = new THREE.SphereGeometry(1.1, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      blending: THREE.AdditiveBlending
    });
    this.pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
    this.routeGroup.add(this.pulseMesh);

    const pulseLight = new THREE.PointLight(routeColor, 3.0, 18);
    this.pulseMesh.add(pulseLight);

    // 4. Waypoint Holographic Beacons (Start & Destination)
    const startPt = curvePoints[0];
    const destPt = curvePoints[curvePoints.length - 1];

    this.startBeacon = this.createBeacon(startPt, 0x33FF88, 'START');
    this.destBeacon = this.createBeacon(destPt, isEmergency ? 0xFF3366 : 0x42E8F5, 'DESTINATION');

    this.routeGroup.add(this.startBeacon.group);
    this.routeGroup.add(this.destBeacon.group);

    this.pulseProgress = 0;
    this.isRendering = true;
  }

  /**
   * Create a holographic waypoint beacon with pulsating concentric ground rings and vertical light column
   */
  createBeacon(pos, colorHex, label) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0.25, pos.z);

    // Vertical Light Column Beam
    const beamGeo = new THREE.CylinderGeometry(0.5, 1.8, 22, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 11;
    grp.add(beam);

    // Ground Pulsing Ring
    const ringGeo = new THREE.RingGeometry(3.5, 4.5, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    grp.add(ring);

    // Floating Diamond Waypoint Crest
    const crestGeo = new THREE.OctahedronGeometry(1.6);
    const crestMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      wireframe: true
    });
    const crest = new THREE.Mesh(crestGeo, crestMat);
    crest.position.y = 23;
    grp.add(crest);

    return {
      group: grp,
      ring,
      crest,
      update: (delta, time) => {
        crest.rotation.y += delta * 1.5;
        crest.rotation.x = Math.sin(time * 2) * 0.3;
        ring.scale.setScalar(1 + Math.sin(time * 4) * 0.2);
      }
    };
  }

  /**
   * Clear active route graphics
   */
  clearRoute() {
    while (this.routeGroup.children.length > 0) {
      const obj = this.routeGroup.children[0];
      this.routeGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this.activeCurve = null;
    this.pulseMesh = null;
    this.startBeacon = null;
    this.destBeacon = null;
    this.isRendering = false;
  }

  /**
   * Per-frame animation update
   */
  update(delta, time) {
    if (!this.isRendering || !this.activeCurve) return;

    // Advance traveling photon pulse
    this.pulseProgress = (this.pulseProgress + delta * 0.45) % 1.0;
    const pt = this.activeCurve.getPointAt(this.pulseProgress);
    if (this.pulseMesh && pt) {
      this.pulseMesh.position.copy(pt);
    }

    if (this.startBeacon) this.startBeacon.update(delta, time);
    if (this.destBeacon) this.destBeacon.update(delta, time);
  }
}
