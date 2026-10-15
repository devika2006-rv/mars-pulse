/**
 * MARS PULSE - Giant Transparent Protective Biodome & Containment Base
 * Encloses the entire Martian colony inside a futuristic transparent geodesic dome
 * with structural meridian ribs, metallic containment ring, apex weather scrubber beacon,
 * and animated plasma energy rings.
 */

import * as THREE from 'three';

export function createDome(scene) {
  const domeGroup = new THREE.Group();
  domeGroup.name = 'protectiveDomeGroup';

  const domeRadius = 158;
  const domeHeight = 110;

  // 1. TRANSPARENT GLASS DOME SHELL
  const domeGeo = new THREE.SphereGeometry(
    domeRadius,
    64,
    36,
    0,
    Math.PI * 2,
    0,
    Math.PI * 0.505
  );

  // High-performance crystal-clear glass material (depthWrite: false avoids z-fighting with buildings)
  const domeMat = new THREE.MeshStandardMaterial({
    color: 0x6be8ff,
    transparent: true,
    opacity: 0.14,
    roughness: 0.1,
    metalness: 0.25,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const domeShell = new THREE.Mesh(domeGeo, domeMat);
  domeShell.position.y = 0.5;
  domeGroup.add(domeShell);

  // 2. GEODESIC STRUCTURAL LATTICE & WIREFRAME OVERLAY
  const wireGeo = new THREE.WireframeGeometry(domeGeo);
  const wireMat = new THREE.LineBasicMaterial({
    color: 0x42E8F5,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const domeWireframe = new THREE.LineSegments(wireGeo, wireMat);
  domeWireframe.position.y = 0.5;
  domeGroup.add(domeWireframe);

  // 3. HORIZONTAL LATITUDE STRUCTURAL RINGS (5 Sleek Titanium Rings)
  const ringHeights = [20, 50, 80, 110, 138];
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x3d5475,
    emissive: 0x142036,
    metalness: 0.85,
    roughness: 0.35,
    transparent: true,
    opacity: 0.85
  });

  const glowRingMat = new THREE.MeshBasicMaterial({
    color: 0x42E8F5,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  ringHeights.forEach((h) => {
    // Calculate radius of sphere at height h: R_slice = sqrt(R^2 - h^2)
    const rSlice = Math.sqrt(Math.max(1, domeRadius * domeRadius - h * h));
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(rSlice, 0.35, 8, 48),
      ringMat
    );
    torus.rotation.x = Math.PI / 2;
    torus.position.y = h;
    domeGroup.add(torus);

    // Glowing energy strip on ring
    const glowStrip = new THREE.Mesh(
      new THREE.TorusGeometry(rSlice + 0.1, 0.18, 4, 48),
      glowRingMat
    );
    glowStrip.rotation.x = Math.PI / 2;
    glowStrip.position.y = h;
    domeGroup.add(glowStrip);
  });

  // 4. VERTICAL MERIDIAN RIBS (16 Curved Arches)
  const ribCount = 16;
  for (let i = 0; i < ribCount; i++) {
    const angle = (i / ribCount) * Math.PI * 2;
    const archPoints = [];
    for (let step = 0; step <= 24; step++) {
      const phi = (step / 24) * (Math.PI * 0.5);
      const r = domeRadius + 0.2;
      const x = Math.sin(phi) * Math.cos(angle) * r;
      const z = Math.sin(phi) * Math.sin(angle) * r;
      const y = Math.cos(phi) * r;
      archPoints.push(new THREE.Vector3(x, y, z));
    }

    const archCurve = new THREE.CatmullRomCurve3(archPoints);
    const archGeo = new THREE.TubeGeometry(archCurve, 24, 0.32, 6, false);
    const archMesh = new THREE.Mesh(archGeo, ringMat);
    domeGroup.add(archMesh);
  }

  // 5. APEX ATMOSPHERIC SCRUBBER & WEATHER CONTROL SPIRE
  const apexGroup = new THREE.Group();
  apexGroup.position.set(0, domeRadius - 2, 0);

  const apexCap = new THREE.Mesh(
    new THREE.CylinderGeometry(8, 12, 5, 16),
    ringMat
  );
  apexGroup.add(apexCap);

  const apexSpire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 2.2, 22, 8),
    new THREE.MeshStandardMaterial({ color: 0xdddfec, metalness: 0.9, roughness: 0.2 })
  );
  apexSpire.position.y = 12;
  apexGroup.add(apexSpire);

  const apexBeacon = new THREE.Mesh(
    new THREE.SphereGeometry(2.0, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0x42E8F5 })
  );
  apexBeacon.position.y = 24;
  apexGroup.add(apexBeacon);

  const apexLight = new THREE.PointLight(0x42E8F5, 3.0, 120);
  apexLight.position.y = 25;
  apexGroup.add(apexLight);

  domeGroup.add(apexGroup);

  // 6. PERIMETER CONTAINMENT PLATFORM & FOUNDATION BASE
  const baseOuterR = domeRadius + 7;
  const baseInnerR = domeRadius - 3;
  const baseHeight = 3.5;

  const baseGeo = new THREE.RingGeometry(baseInnerR, baseOuterR, 64);
  baseGeo.rotateX(-Math.PI / 2);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x161c2c,
    metalness: 0.85,
    roughness: 0.35,
    side: THREE.DoubleSide
  });
  const basePlatform = new THREE.Mesh(baseGeo, baseMat);
  basePlatform.position.y = 1.0;
  basePlatform.receiveShadow = true;
  domeGroup.add(basePlatform);

  // Segmented Foundation Wall
  const wallGeo = new THREE.CylinderGeometry(baseOuterR, baseOuterR + 2, baseHeight, 64, 1, true);
  const wallMesh = new THREE.Mesh(wallGeo, baseMat);
  wallMesh.position.y = baseHeight / 2;
  domeGroup.add(wallMesh);

  // 7. ANIMATED PERIMETER ENERGY RINGS (Pulsing Cyan & Violet)
  const energyRingGeo = new THREE.TorusGeometry(domeRadius, 0.9, 8, 64);
  energyRingGeo.rotateX(Math.PI / 2);

  const energyMatCyan = new THREE.MeshBasicMaterial({
    color: 0x42E8F5,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
  });
  const energyRingCyan = new THREE.Mesh(energyRingGeo, energyMatCyan);
  energyRingCyan.position.y = 2.2;
  domeGroup.add(energyRingCyan);

  const energyMatViolet = new THREE.MeshBasicMaterial({
    color: 0x7446F2,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });
  const energyRingViolet = new THREE.Mesh(energyRingGeo, energyMatViolet);
  energyRingViolet.position.y = 2.7;
  energyRingViolet.scale.set(1.01, 1.01, 1.01);
  domeGroup.add(energyRingViolet);

  // 8. 16 ANCHORED FOUNDATION AIRLOCK PYLONS
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const pylon = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 6, 8),
      ringMat
    );
    pylon.position.set(Math.cos(a) * domeRadius, 3, Math.sin(a) * domeRadius);
    pylon.rotation.y = -a;
    domeGroup.add(pylon);

    // Indicator status light on pylon
    const pLight = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 3, 0.4),
      glowRingMat
    );
    pLight.position.set(Math.cos(a) * (domeRadius + 4.1), 3.5, Math.sin(a) * (domeRadius + 4.1));
    pLight.rotation.y = -a;
    domeGroup.add(pLight);
  }

  // 9. INTERNAL BIOLUMINESCENT SPORES / PARTICLES (250 Gentle Floating Lights)
  const sporeCount = 250;
  const sporeGeo = new THREE.BufferGeometry();
  const sporePos = new Float32Array(sporeCount * 3);
  const sporeVel = [];

  for (let i = 0; i < sporeCount; i++) {
    const r = Math.random() * (domeRadius * 0.85);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * (Math.PI * 0.42);

    sporePos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
    sporePos[i * 3 + 1] = Math.cos(phi) * r * 0.6 + 2;
    sporePos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;

    sporeVel.push({
      x: (Math.random() - 0.5) * 0.3,
      y: (Math.random() - 0.5) * 0.2,
      z: (Math.random() - 0.5) * 0.3
    });
  }

  sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3));
  const sporeMat = new THREE.PointsMaterial({
    color: 0x66ffcc,
    size: 1.6,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sporeParticles = new THREE.Points(sporeGeo, sporeMat);
  domeGroup.add(sporeParticles);

  scene.add(domeGroup);

  // Dome mode state: 'TRANSPARENT' | 'HOLOGRAPHIC' | 'OPEN'
  let currentMode = 'TRANSPARENT';

  return {
    group: domeGroup,
    setMode: (mode) => {
      currentMode = mode;
      if (mode === 'OPEN') {
        domeShell.visible = false;
        domeWireframe.material.opacity = 0.08;
      } else if (mode === 'HOLOGRAPHIC') {
        domeShell.visible = true;
        domeMat.opacity = 0.36;
        domeMat.color.setHex(0x42E8F5);
        domeWireframe.visible = true;
        domeWireframe.material.opacity = 0.55;
      } else {
        // 'TRANSPARENT' (Default Crystal Clear)
        domeShell.visible = true;
        domeMat.opacity = 0.16;
        domeMat.color.setHex(0x6be8ff);
        domeWireframe.visible = true;
        domeWireframe.material.opacity = 0.22;
      }
    },
    getMode: () => currentMode,
    update: (delta, time) => {
      // Counter-rotating energy rings
      energyRingCyan.rotation.z = time * 0.4;
      energyRingViolet.rotation.z = -time * 0.3;

      // Pulsing energy ring scale
      const pulse = 1 + Math.sin(time * 3) * 0.008;
      energyRingCyan.scale.set(pulse, pulse, pulse);

      // Apex beacon pulse
      apexBeacon.scale.setScalar(1 + Math.sin(time * 5) * 0.18);
      apexLight.intensity = 2.4 + Math.sin(time * 4) * 0.8;

      // Drift internal bioluminescent spores
      const pos = sporeGeo.attributes.position.array;
      for (let i = 0; i < sporeCount; i++) {
        pos[i * 3] += sporeVel[i].x * delta * 12;
        pos[i * 3 + 1] += sporeVel[i].y * delta * 8;
        pos[i * 3 + 2] += sporeVel[i].z * delta * 12;

        const dist = Math.hypot(pos[i * 3], pos[i * 3 + 2]);
        if (dist > domeRadius * 0.85 || pos[i * 3 + 1] > domeHeight || pos[i * 3 + 1] < 1) {
          pos[i * 3] = (Math.random() - 0.5) * 80;
          pos[i * 3 + 1] = Math.random() * 40 + 5;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
      }
      sporeGeo.attributes.position.needsUpdate = true;
    }
  };
}
