/**
 * MARS PULSE - Autonomous Flying Vehicles, Hover Speeders & Airlanes
 * Creates at least 3 distinct procedural hover vehicles:
 * 1. Civilian Speedpod (Streamlined teardrop aerodyne, glass canopy, 4 blue hover pads)
 * 2. Medevac Emergency Rapid Cruiser (Twin hull, high-speed thruster, flashing emergency beacons)
 * 3. Heavy Cargo Skimmer (Ducted hover thrusters, cargo pallet containers, amber hazard lights)
 * Smoothly animates them along 3D Catmull-Rom spline curves with banking and engine glow.
 */

import * as THREE from 'three';

export function createVehicles(scene) {
  const vehiclesGroup = new THREE.Group();
  vehiclesGroup.name = 'vehiclesGroup';

  const matHullWhite = new THREE.MeshStandardMaterial({ color: 0xe8ecf5, metalness: 0.8, roughness: 0.25 });
  const matHullDark = new THREE.MeshStandardMaterial({ color: 0x1f2335, metalness: 0.9, roughness: 0.3 });
  const matHullRed = new THREE.MeshStandardMaterial({ color: 0xe63946, metalness: 0.7, roughness: 0.3 });
  const matHullYellow = new THREE.MeshStandardMaterial({ color: 0xf4a261, metalness: 0.6, roughness: 0.4 });
  const matGlassCyan = new THREE.MeshPhysicalMaterial({ color: 0x42e8f5, transmission: 0.9, transparent: true, opacity: 0.5 });
  const matGlowCyan = new THREE.MeshBasicMaterial({ color: 0x42E8F5 });
  const matGlowAmber = new THREE.MeshBasicMaterial({ color: 0xFFBE69 });
  const matGlowRed = new THREE.MeshBasicMaterial({ color: 0xFF3366 });

  // -------------------------------------------------------------
  // DESIGN 1: CIVILIAN SPEEDPOD (Aerodynamic Commuter)
  // -------------------------------------------------------------
  function buildSpeedpod() {
    const grp = new THREE.Group();

    // Fuselage (Streamlined teardrop)
    const bodyGeo = new THREE.CylinderGeometry(0.8, 1.4, 6, 12);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, matHullWhite);
    grp.add(body);

    // Glass Canopy
    const canopyGeo = new THREE.SphereGeometry(1.0, 12, 8);
    canopyGeo.scale(0.8, 0.7, 1.8);
    const canopy = new THREE.Mesh(canopyGeo, matGlassCyan);
    canopy.position.set(0, 0.7, 0.6);
    grp.add(canopy);

    // 4 Luminous Hover Engine Pods on side outriggers
    const padPositions = [
      { x: -1.6, z: 1.5 },
      { x: 1.6, z: 1.5 },
      { x: -1.8, z: -1.8 },
      { x: 1.8, z: -1.8 }
    ];

    padPositions.forEach(p => {
      const pMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 8), matHullDark);
      pMesh.position.set(p.x, -0.4, p.z);
      grp.add(pMesh);

      const glow = new THREE.Mesh(new THREE.CircleGeometry(0.42, 8), matGlowCyan);
      glow.rotation.x = Math.PI / 2;
      glow.position.set(p.x, -0.58, p.z);
      grp.add(glow);
    });

    // Dual Headlights
    const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), matGlowCyan);
    h1.position.set(-0.6, 0, 3.0);
    const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), matGlowCyan);
    h2.position.set(0.6, 0, 3.0);
    grp.add(h1);
    grp.add(h2);

    // Rear Ion Thruster
    const thruster = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 0.8, 8), matHullDark);
    thruster.rotation.x = Math.PI / 2;
    thruster.position.set(0, 0, -3.2);
    grp.add(thruster);

    const thrusterGlow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 8), matGlowCyan);
    thrusterGlow.rotation.y = Math.PI;
    thrusterGlow.position.set(0, 0, -3.65);
    grp.add(thrusterGlow);

    return grp;
  }

  // -------------------------------------------------------------
  // DESIGN 2: MEDEVAC EMERGENCY RAPID CRUISER
  // -------------------------------------------------------------
  function buildMedevacCruiser() {
    const grp = new THREE.Group();

    // Main fuselage with medical red livery
    const hullGeo = new THREE.BoxGeometry(2.8, 1.4, 7.5);
    const hull = new THREE.Mesh(hullGeo, matHullWhite);
    grp.add(hull);

    // Red racing / medical stripes
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.85, 0.4, 7.5), matHullRed);
    stripe.position.y = 0.1;
    grp.add(stripe);

    // Forward Trauma Cockpit
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 2.5), matGlassCyan);
    canopy.position.set(0, 0.9, 1.8);
    grp.add(canopy);

    // Flashing Emergency Lightbar on roof
    const lightbar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.25, 0.4), matGlowRed);
    lightbar.position.set(0, 1.45, 0.4);
    grp.add(lightbar);

    const emLight = new THREE.PointLight(0xFF3366, 1.8, 25);
    emLight.position.set(0, 1.8, 0.4);
    grp.add(emLight);

    // High-speed Twin Vector Thrusters
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.2, 8), matHullDark);
    t1.rotation.x = Math.PI / 2;
    t1.position.set(-0.9, 0, -4.0);
    const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.2, 8), matHullDark);
    t2.rotation.x = Math.PI / 2;
    t2.position.set(0.9, 0, -4.0);
    grp.add(t1);
    grp.add(t2);

    const tg1 = new THREE.Mesh(new THREE.CircleGeometry(0.55, 8), matGlowCyan);
    tg1.rotation.y = Math.PI;
    tg1.position.set(-0.9, 0, -4.65);
    const tg2 = new THREE.Mesh(new THREE.CircleGeometry(0.55, 8), matGlowCyan);
    tg2.rotation.y = Math.PI;
    tg2.position.set(0.9, 0, -4.65);
    grp.add(tg1);
    grp.add(tg2);

    return {
      mesh: grp,
      update: (delta, time) => {
        // Strobe emergency lights
        const strobe = Math.sin(time * 16) > 0;
        lightbar.material = strobe ? matGlowRed : matGlowCyan;
        emLight.color.setHex(strobe ? 0xFF3366 : 0x42E8F5);
        emLight.intensity = strobe ? 2.5 : 0.8;
      }
    };
  }

  // -------------------------------------------------------------
  // DESIGN 3: HEAVY CARGO SKIMMER
  // -------------------------------------------------------------
  function buildCargoSkimmer() {
    const grp = new THREE.Group();

    // Main heavy utility flatbed
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.2, 8.5), matHullDark);
    grp.add(chassis);

    // Elevated forward Cab
    const cab = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.8, 2.4), matHullYellow);
    cab.position.set(0, 1.2, 2.5);
    grp.add(cab);

    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.9, 0.4), matGlassCyan);
    cabGlass.position.set(0, 1.4, 3.75);
    grp.add(cabGlass);

    // 2 Cargo Pallet Containers strapped on flatbed
    const cargoA = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.6, 2.2), matHullSlate_local());
    cargoA.position.set(0, 1.2, -0.2);
    grp.add(cargoA);

    const cargoB = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.6, 2.2), matHullWhite);
    cargoB.position.set(0, 1.2, -2.6);
    grp.add(cargoB);

    // 4 Ducted Hover Turbines
    const turbinePositions = [
      { x: -2.4, z: 2.0 },
      { x: 2.4, z: 2.0 },
      { x: -2.4, z: -2.0 },
      { x: 2.4, z: -2.0 }
    ];

    turbinePositions.forEach(p => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.25, 6, 12), matHullDark);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(p.x, 0, p.z);
      grp.add(ring);

      const glow = new THREE.Mesh(new THREE.CircleGeometry(0.7, 8), matGlowAmber);
      glow.rotation.x = Math.PI / 2;
      glow.position.set(p.x, -0.2, p.z);
      grp.add(glow);
    });

    return grp;
  }

  function matHullSlate_local() {
    return new THREE.MeshStandardMaterial({ color: 0x3d4b64, roughness: 0.5 });
  }

  // -------------------------------------------------------------
  // FLIGHT AIR-LANES (3D Smooth Closed Splines)
  // -------------------------------------------------------------
  // Lane 1: Outer Colony Ring Air-lane (Clockwise, high-speed, altitude Y = 10-14)
  const lanePoints1 = [
    new THREE.Vector3(0, 12, -70),
    new THREE.Vector3(75, 14, -50),
    new THREE.Vector3(90, 11, 20),
    new THREE.Vector3(45, 10, 85),
    new THREE.Vector3(-40, 12, 75),
    new THREE.Vector3(-85, 13, 20),
    new THREE.Vector3(-75, 11, -55),
    new THREE.Vector3(-30, 10, -75)
  ];
  const curve1 = new THREE.CatmullRomCurve3(lanePoints1, true, 'centripetal');

  // Lane 2: Hospital - Central - Spaceport Express Air-lane (Altitude Y = 8-12)
  const lanePoints2 = [
    new THREE.Vector3(-70, 9, 45), // MarsCare Hospital
    new THREE.Vector3(-30, 11, 20),
    new THREE.Vector3(0, 12, 0),    // Central Command
    new THREE.Vector3(20, 10, 50),
    new THREE.Vector3(25, 8, 110),  // Gateway Spaceport
    new THREE.Vector3(-20, 10, 85),
    new THREE.Vector3(-60, 11, 70)
  ];
  const curve2 = new THREE.CatmullRomCurve3(lanePoints2, true, 'catmullrom', 0.2);

  // Lane 3: Industrial Supply Ring (Helios Power -> O2 Alpha -> Water -> Greenhouse, Altitude Y = 6-9)
  const lanePoints3 = [
    new THREE.Vector3(100, 8, -25), // Helios Power
    new THREE.Vector3(80, 7, 50),   // O2 Hub Alpha
    new THREE.Vector3(40, 8, 70),   // Eden Greenhouse
    new THREE.Vector3(10, 7, 20),
    new THREE.Vector3(25, 8, -80),  // AquaCycle Water
    new THREE.Vector3(75, 9, -60)   // Nova Univ
  ];
  const curve3 = new THREE.CatmullRomCurve3(lanePoints3, true, 'centripetal');

  // Active Vehicle Instances
  const vehicleInstances = [];

  // 1. Civilian Speedpod A (Lane 1)
  const speedpodA = buildSpeedpod();
  vehiclesGroup.add(speedpodA);
  vehicleInstances.push({
    mesh: speedpodA,
    curve: curve1,
    progress: 0.1,
    speed: 0.035, // complete circuit in ~28s
    baseScale: 1.0,
    bobOffset: 0
  });

  // 2. Civilian Speedpod B (Lane 1, opposing phase)
  const speedpodB = buildSpeedpod();
  vehiclesGroup.add(speedpodB);
  vehicleInstances.push({
    mesh: speedpodB,
    curve: curve1,
    progress: 0.6,
    speed: 0.032,
    baseScale: 0.95,
    bobOffset: Math.PI
  });

  // 3. Medevac Emergency Rapid Cruiser (Lane 2)
  const medevacObj = buildMedevacCruiser();
  vehiclesGroup.add(medevacObj.mesh);
  vehicleInstances.push({
    mesh: medevacObj.mesh,
    curve: curve2,
    progress: 0.35,
    speed: 0.048, // fast emergency flyer
    baseScale: 1.1,
    bobOffset: 1.2,
    customUpdate: medevacObj.update
  });

  // 4. Heavy Cargo Skimmer (Lane 3)
  const cargoSkimmer = buildCargoSkimmer();
  vehiclesGroup.add(cargoSkimmer);
  vehicleInstances.push({
    mesh: cargoSkimmer,
    curve: curve3,
    progress: 0.8,
    speed: 0.022, // slower heavy cargo flight
    baseScale: 1.0,
    bobOffset: 2.5
  });

  // 5. Secondary Civilian Speedpod on Lane 3
  const speedpodC = buildSpeedpod();
  vehiclesGroup.add(speedpodC);
  vehicleInstances.push({
    mesh: speedpodC,
    curve: curve3,
    progress: 0.25,
    speed: 0.028,
    baseScale: 0.9,
    bobOffset: 0.8
  });

  // 6. Spaceport VTOL Shuttle (slowly hovering near Pad 02)
  const vtolShuttle = buildSpeedpod();
  vtolShuttle.scale.set(1.4, 1.4, 1.4);
  vehiclesGroup.add(vtolShuttle);
  vehicleInstances.push({
    mesh: vtolShuttle,
    curve: new THREE.CatmullRomCurve3([
      new THREE.Vector3(45, 18, 135),
      new THREE.Vector3(48, 22, 140),
      new THREE.Vector3(42, 23, 130),
      new THREE.Vector3(45, 18, 135)
    ], true),
    progress: 0.0,
    speed: 0.012,
    baseScale: 1.4,
    bobOffset: 1.5
  });

  scene.add(vehiclesGroup);

  return {
    group: vehiclesGroup,
    update: (delta, time) => {
      for (const v of vehicleInstances) {
        // Increment spline progression
        v.progress = (v.progress + delta * v.speed) % 1.0;

        // Position on curve
        const pos = v.curve.getPointAt(v.progress);
        const tangent = v.curve.getTangentAt(v.progress).normalize();

        // Subtle hover bobbing
        const bob = Math.sin(time * 3 + v.bobOffset) * 0.35;
        v.mesh.position.set(pos.x, pos.y + bob, pos.z);

        // Orient vehicle towards forward movement vector
        const lookTarget = pos.clone().add(tangent);
        v.mesh.lookAt(lookTarget);

        // Bank into turns (Roll angle proportional to curvature)
        const nextProgress = (v.progress + 0.02) % 1.0;
        const nextTangent = v.curve.getTangentAt(nextProgress).normalize();
        const turnCross = tangent.clone().cross(nextTangent);
        const bankAngle = turnCross.y * 3.5;
        v.mesh.rotateZ(-bankAngle);

        if (v.customUpdate) {
          v.customUpdate(delta, time);
        }
      }
    }
  };
}
