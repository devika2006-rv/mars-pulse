/**
 * MARS PULSE - Procedural Colony Architecture & Facility Generators
 * Procedurally models all 15 distinctive Martian colony facilities using layered geometry,
 * custom materials, emissive lighting, geodesic domes, and interactive selection highlights.
 */

import * as THREE from 'three';
import { FACILITIES } from '../data/facilities.js';

export function createBuildings(scene) {
  const buildingsGroup = new THREE.Group();
  buildingsGroup.name = 'buildingsGroup';

  // Shared reusable materials for performance
  const matMetalDark = new THREE.MeshStandardMaterial({
    color: 0x1b1f2e,
    metalness: 0.85,
    roughness: 0.35
  });

  const matHullWhite = new THREE.MeshStandardMaterial({
    color: 0xdddfec,
    metalness: 0.4,
    roughness: 0.45
  });

  const matHullSlate = new THREE.MeshStandardMaterial({
    color: 0x485268,
    metalness: 0.6,
    roughness: 0.4
  });

  const matGlassCyan = new THREE.MeshStandardMaterial({
    color: 0x42e8f5,
    transparent: true,
    opacity: 0.55,
    roughness: 0.15,
    metalness: 0.25,
    depthWrite: false
  });

  const matGlassGreen = new THREE.MeshStandardMaterial({
    color: 0x55ff88,
    transparent: true,
    opacity: 0.55,
    roughness: 0.15,
    metalness: 0.2,
    depthWrite: false
  });

  const matGlowCyan = new THREE.MeshBasicMaterial({
    color: 0x42E8F5
  });

  const matGlowAmber = new THREE.MeshBasicMaterial({
    color: 0xFFBE69
  });

  const matGlowRed = new THREE.MeshBasicMaterial({
    color: 0xFF3366
  });

  const matGlowGreen = new THREE.MeshBasicMaterial({
    color: 0x33FF88
  });

  const matGlowBlue = new THREE.MeshBasicMaterial({
    color: 0x4B8DFF
  });

  // Track interactive objects for raycasting and visual state updates
  const buildingMeshes = new Map(); // facilityId -> { group, highlightRing, alarmMesh, update() }
  const raycastTargets = [];

  // -------------------------------------------------------------
  // 1. CENTRAL COMMAND TOWER
  // -------------------------------------------------------------
  function buildCommandTower(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Multi-tier hexagonal base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(14, 16, 4, 6), matHullSlate);
    base.position.y = 2;
    base.castShadow = true;
    base.receiveShadow = true;
    grp.add(base);

    // Mid tower section
    const midTower = new THREE.Mesh(new THREE.CylinderGeometry(8, 12, 28, 6), matHullWhite);
    midTower.position.y = 18;
    midTower.castShadow = true;
    grp.add(midTower);

    // Upper Spire
    const upperSpire = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 7, 24, 6), matMetalDark);
    upperSpire.position.y = 44;
    upperSpire.castShadow = true;
    grp.add(upperSpire);

    // Needle Antenna
    const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 1.2, 18, 8), matHullWhite);
    needle.position.y = 65;
    grp.add(needle);

    // Vertical glowing cyan strips along tower edges (6 strips)
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.35, 26, 0.35), matGlowCyan);
      strip.position.set(Math.cos(a) * 9.8, 18, Math.sin(a) * 9.8);
      grp.add(strip);
    }

    // Crown Observation Deck (Translucent glass ring)
    const crownGlass = new THREE.Mesh(new THREE.CylinderGeometry(11, 7, 5, 16), matGlassCyan);
    crownGlass.position.y = 35;
    grp.add(crownGlass);

    // Rotating Crown Beacon
    const beaconLight = new THREE.PointLight(0x42E8F5, 2.5, 45);
    beaconLight.position.y = 72;
    grp.add(beaconLight);

    const rotatingBeacon = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 8), matGlowCyan);
    rotatingBeacon.position.y = 72;
    grp.add(rotatingBeacon);

    // Base entrance canopy and plaza steps
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(6, 1.5, 8), matMetalDark);
    canopy.position.set(0, 3, 14);
    grp.add(canopy);

    return {
      group: grp,
      update: (delta, time) => {
        rotatingBeacon.scale.setScalar(1 + Math.sin(time * 4) * 0.15);
        beaconLight.intensity = 2.2 + Math.sin(time * 3) * 0.6;
      }
    };
  }

  // -------------------------------------------------------------
  // 2. MARSCARE HOSPITAL
  // -------------------------------------------------------------
  function buildHospital(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Main multi-wing hospital complex
    const centralPod = new THREE.Mesh(new THREE.CylinderGeometry(12, 14, 10, 16), matHullWhite);
    centralPod.position.y = 5;
    centralPod.castShadow = true;
    grp.add(centralPod);

    // Trauma surgical wing
    const wingA = new THREE.Mesh(new THREE.BoxGeometry(22, 8, 12), matHullWhite);
    wingA.position.set(-8, 4, 0);
    wingA.castShadow = true;
    grp.add(wingA);

    // Hyperbaric & ICU wing
    const wingB = new THREE.Mesh(new THREE.BoxGeometry(14, 9, 20), matHullSlate);
    wingB.position.set(8, 4.5, 6);
    wingB.castShadow = true;
    grp.add(wingB);

    // Upper medical research floor
    const upperFloor = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 4, 16), matGlassCyan);
    upperFloor.position.y = 12;
    grp.add(upperFloor);

    // Glowing 3D Medical Cross on Roof
    const crossMat = new THREE.MeshBasicMaterial({ color: 0x42E8F5 });
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.8, 7.5), crossMat);
    crossV.position.set(0, 14.5, 0);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.8, 2.4), crossMat);
    crossH.position.set(0, 14.5, 0);
    grp.add(crossV);
    grp.add(crossH);

    // Medical Beacon PointLight
    const medLight = new THREE.PointLight(0x42E8F5, 2.0, 35);
    medLight.position.set(0, 16, 0);
    grp.add(medLight);

    // Medevac Ambulance Approach ramp
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(8, 0.5, 12), matMetalDark);
    ramp.position.set(0, 0.25, -14);
    grp.add(ramp);

    return {
      group: grp,
      update: (delta, time, state) => {
        // Pulse faster if active medical emergency
        const isEmergency = state && state.status === 'EMERGENCY' || grp.userData.isEmergencyActive;
        const rate = isEmergency ? 8 : 2;
        const pulse = Math.sin(time * rate) * 0.5 + 0.5;
        crossMat.color.setHex(isEmergency ? (pulse > 0.5 ? 0xFF3366 : 0xFFFFFF) : 0x42E8F5);
        medLight.color.setHex(isEmergency ? 0xFF3366 : 0x42E8F5);
        medLight.intensity = 1.8 + pulse * 1.5;
      }
    };
  }

  // -------------------------------------------------------------
  // 3. NOVA MARTIAN UNIVERSITY
  // -------------------------------------------------------------
  function buildUniversity(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Central Glass Atrium Dome
    const atriumGeo = new THREE.SphereGeometry(11, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const atrium = new THREE.Mesh(atriumGeo, matGlassCyan);
    atrium.position.y = 0.5;
    grp.add(atrium);

    // Atrium internal glowing knowledge archive core
    const coreMesh = new THREE.Mesh(new THREE.CylinderGeometry(3, 4, 8, 8), matGlowBlue);
    coreMesh.position.y = 4;
    grp.add(coreMesh);

    // Campus Pavilion A (Astrophysics Wing)
    const pavA = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 10), matHullWhite);
    pavA.position.set(-15, 6, -8);
    pavA.castShadow = true;
    grp.add(pavA);

    // Campus Pavilion B (Terraforming Bio-labs)
    const pavB = new THREE.Mesh(new THREE.BoxGeometry(12, 15, 14), matHullSlate);
    pavB.position.set(16, 7.5, -6);
    pavB.castShadow = true;
    grp.add(pavB);

    // Elevated enclosed walkway tubes connecting atrium to pavilions
    const tubeA = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 12, 8), matGlassCyan);
    tubeA.rotation.z = Math.PI / 2;
    tubeA.position.set(-8, 5, -4);
    grp.add(tubeA);

    const tubeB = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 12, 8), matGlassCyan);
    tubeB.rotation.z = -Math.PI / 2;
    tubeB.position.set(8, 5, -3);
    grp.add(tubeB);

    return {
      group: grp,
      update: (delta, time) => {
        coreMesh.rotation.y += delta * 0.3;
      }
    };
  }

  // -------------------------------------------------------------
  // 4. HORIZON SCHOOL
  // -------------------------------------------------------------
  function buildSchool(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Curved semi-circular educational wing
    const curveGeo = new THREE.CylinderGeometry(14, 15, 6, 16, 1, false, 0, Math.PI * 1.2);
    const mainBuilding = new THREE.Mesh(curveGeo, matHullWhite);
    mainBuilding.position.y = 3;
    mainBuilding.castShadow = true;
    grp.add(mainBuilding);

    // Solar panel array roof
    const solarRoof = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 0.6, 16, 1, false, 0, Math.PI * 1.2), matMetalDark);
    solarRoof.position.y = 6.3;
    grp.add(solarRoof);

    // Enclosed play biome dome
    const playDome = new THREE.Mesh(new THREE.SphereGeometry(6, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), matGlassGreen);
    playDome.position.set(-4, 0.5, 4);
    grp.add(playDome);

    // Playful amber light strip
    const strip = new THREE.Mesh(new THREE.TorusGeometry(14, 0.3, 4, 16, Math.PI * 1.2), matGlowAmber);
    strip.rotation.x = Math.PI / 2;
    strip.position.y = 5.2;
    grp.add(strip);

    return {
      group: grp,
      update: () => {}
    };
  }

  // -------------------------------------------------------------
  // 5. OXYGEN HUB ALPHA
  // -------------------------------------------------------------
  function buildOxygenHubAlpha(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Heavy reinforced foundation pad
    const pad = new THREE.Mesh(new THREE.BoxGeometry(26, 1.5, 22), matMetalDark);
    pad.position.y = 0.75;
    grp.add(pad);

    // Primary Cryogenic Cylindrical Tanks (Dual Tanks)
    const tankGeo = new THREE.CylinderGeometry(5.5, 5.5, 16, 16);
    const capGeo = new THREE.SphereGeometry(5.5, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);

    const tank1 = new THREE.Mesh(tankGeo, matHullWhite);
    tank1.position.set(-6, 9.5, 0);
    tank1.castShadow = true;
    grp.add(tank1);

    const cap1 = new THREE.Mesh(capGeo, matHullWhite);
    cap1.position.set(-6, 17.5, 0);
    grp.add(cap1);

    const tank2 = new THREE.Mesh(tankGeo, matHullWhite);
    tank2.position.set(6, 9.5, 0);
    tank2.castShadow = true;
    grp.add(tank2);

    const cap2 = new THREE.Mesh(capGeo, matHullWhite);
    cap2.position.set(6, 17.5, 0);
    grp.add(cap2);

    // Atmospheric Cracking (MOXIE-IV) Cooling Tower
    const coolingTower = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 6.5, 12, 12, 1, true), matHullSlate);
    coolingTower.position.set(0, 7.5, -6);
    grp.add(coolingTower);

    // Manifold pipes linking tanks and cooling tower
    const pipeA = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 14, 8), matMetalDark);
    pipeA.rotation.z = Math.PI / 2;
    pipeA.position.set(0, 11, 0);
    grp.add(pipeA);

    // Vertical Oxygen Level Indicator Bars (Glowing Cyan)
    const o2Indicator1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 0.5), matGlowCyan);
    o2Indicator1.position.set(-6, 9.5, 5.6);
    grp.add(o2Indicator1);

    const o2Indicator2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 0.5), matGlowCyan);
    o2Indicator2.position.set(6, 9.5, 5.6);
    grp.add(o2Indicator2);

    // Emergency Alarm Beacon (normally off/dim, pulses red during failure)
    const alarmBeacon = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8), matGlowRed);
    alarmBeacon.position.set(0, 15, -6);
    alarmBeacon.visible = false;
    grp.add(alarmBeacon);

    const alarmLight = new THREE.PointLight(0xFF3366, 0, 40);
    alarmLight.position.set(0, 16, -6);
    grp.add(alarmLight);

    // Smoke/Sparks particles for emergency failure
    const sparkCount = 40;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = (Math.random() - 0.5) * 6;
      sparkPos[i * 3 + 1] = 12 + Math.random() * 8;
      sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xff3322,
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const sparkSystem = new THREE.Points(sparkGeo, sparkMat);
    sparkSystem.visible = false;
    grp.add(sparkSystem);

    return {
      group: grp,
      update: (delta, time, state) => {
        const isOffline = state && state.status === 'OFFLINE';
        if (isOffline) {
          // Failure Mode: Pulse red alarm, enable sparks
          alarmBeacon.visible = true;
          sparkSystem.visible = true;
          const flash = Math.sin(time * 12) > 0 ? 1 : 0;
          alarmLight.intensity = flash * 3.5;
          o2Indicator1.material = matGlowRed;
          o2Indicator2.material = matGlowRed;

          // Animate sparks
          const sp = sparkGeo.attributes.position.array;
          for (let i = 0; i < sparkCount; i++) {
            sp[i * 3 + 1] += delta * 12;
            if (sp[i * 3 + 1] > 24) {
              sp[i * 3 + 1] = 10;
              sp[i * 3] = (Math.random() - 0.5) * 6;
              sp[i * 3 + 2] = (Math.random() - 0.5) * 6;
            }
          }
          sparkGeo.attributes.position.needsUpdate = true;
        } else {
          // Nominal Mode
          alarmBeacon.visible = false;
          sparkSystem.visible = false;
          alarmLight.intensity = 0;
          o2Indicator1.material = matGlowCyan;
          o2Indicator2.material = matGlowCyan;
        }
      }
    };
  }

  // -------------------------------------------------------------
  // 6. OXYGEN HUB BETA (Failover Reserve)
  // -------------------------------------------------------------
  function buildOxygenHubBeta(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Bedrock anchored foundation
    const foundation = new THREE.Mesh(new THREE.CylinderGeometry(15, 17, 3, 8), matMetalDark);
    foundation.position.y = 1.5;
    grp.add(foundation);

    // Triple Cryogenic Storage Tanks in triangular cluster
    const tankPositions = [
      { x: -5, z: -3 },
      { x: 5, z: -3 },
      { x: 0, z: 6 }
    ];

    tankPositions.forEach(p => {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 14, 14), matHullWhite);
      tank.position.set(p.x, 8.5, p.z);
      tank.castShadow = true;
      grp.add(tank);

      const cap = new THREE.Mesh(new THREE.SphereGeometry(4.2, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), matHullWhite);
      cap.position.set(p.x, 15.5, p.z);
      grp.add(cap);
    });

    // Sub-glacial Extraction Well Drill Tower
    const derrick = new THREE.Mesh(new THREE.CylinderGeometry(2, 4.5, 22, 4), matHullSlate);
    derrick.position.set(0, 12, 0);
    grp.add(derrick);

    // Failover Boost Indicator Rings
    const boostRing = new THREE.Mesh(new THREE.TorusGeometry(12, 0.4, 6, 24), matGlowCyan);
    boostRing.rotation.x = Math.PI / 2;
    boostRing.position.y = 4;
    grp.add(boostRing);

    return {
      group: grp,
      update: (delta, time, state) => {
        // If failover is active, pulse cyan brightly
        const isBoosted = state && state.emergencyAlert && state.emergencyAlert.includes('failover');
        if (isBoosted) {
          boostRing.scale.setScalar(1 + Math.sin(time * 6) * 0.1);
          boostRing.material = matGlowCyan;
        }
      }
    };
  }

  // -------------------------------------------------------------
  // 7. RESIDENTIAL HABITATS (ARES ALPHA & OLYMPUS BETA)
  // -------------------------------------------------------------
  function buildResidentialHabitats(pos, namePrefix) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Stepped Circular Pod Terraces
    const terraceBase = new THREE.Mesh(new THREE.CylinderGeometry(18, 20, 3, 16), matHullSlate);
    terraceBase.position.y = 1.5;
    grp.add(terraceBase);

    // Cluster of 4 geodesic habitat pods
    const podOffsets = [
      { x: -7, z: -6, r: 6.5, h: 5 },
      { x: 7, z: -6, r: 6.0, h: 4.8 },
      { x: -6, z: 6, r: 5.8, h: 4.5 },
      { x: 6, z: 6, r: 6.2, h: 5.2 }
    ];

    podOffsets.forEach((p, idx) => {
      const podGeo = new THREE.SphereGeometry(p.r, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const pod = new THREE.Mesh(podGeo, matHullWhite);
      pod.position.set(p.x, 2.5, p.z);
      pod.castShadow = true;
      grp.add(pod);

      // Warm interior illuminated window bands
      const windowRing = new THREE.Mesh(new THREE.TorusGeometry(p.r * 0.85, 0.25, 4, 16), matGlowAmber);
      windowRing.rotation.x = Math.PI / 2;
      windowRing.position.set(p.x, 4.5, p.z);
      grp.add(windowRing);
    });

    // Central social lounge dome (translucent)
    const loungeDome = new THREE.Mesh(new THREE.SphereGeometry(7, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), matGlassCyan);
    loungeDome.position.set(0, 3, 0);
    grp.add(loungeDome);

    // Connecting airlock tunnels
    const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 16, 8), matMetalDark);
    tunnel.rotation.z = Math.PI / 2;
    tunnel.position.set(0, 2.5, 0);
    grp.add(tunnel);

    return {
      group: grp,
      update: () => {}
    };
  }

  // -------------------------------------------------------------
  // 8. EDEN HYDROPONIC GREENHOUSE
  // -------------------------------------------------------------
  function buildGreenhouse(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Circular base wall
    const base = new THREE.Mesh(new THREE.CylinderGeometry(19, 20, 2.5, 24), matMetalDark);
    base.position.y = 1.25;
    grp.add(base);

    // Large Geodesic Glass Dome (Icosahedron / Polyhedron geodesic lattice)
    const domeGeo = new THREE.IcosahedronGeometry(18, 2);
    // Slice lower half to make clean hemisphere
    const posAttr = domeGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      if (posAttr.getY(i) < 0) {
        posAttr.setY(i, 0);
      }
    }
    domeGeo.computeVertexNormals();

    const glassDome = new THREE.Mesh(domeGeo, matGlassGreen);
    glassDome.position.y = 2.5;
    grp.add(glassDome);

    // Geodesic Wireframe Structural Ribs
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(domeGeo),
      new THREE.LineBasicMaterial({ color: 0x228844, transparent: true, opacity: 0.7 })
    );
    wireframe.position.y = 2.5;
    grp.add(wireframe);

    // Inside: Terraced Hydroponic Racks & Foliage
    const gardenBase = new THREE.Mesh(new THREE.CylinderGeometry(14, 15, 1.2, 16), new THREE.MeshStandardMaterial({ color: 0x114422 }));
    gardenBase.position.y = 2.2;
    grp.add(gardenBase);

    // 4 Concentric rows of hydroponic crop beds
    for (let r = 3; r <= 12; r += 3) {
      const cropRing = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.6, 6, 16),
        new THREE.MeshStandardMaterial({ color: 0x33aa44, roughness: 0.9 })
      );
      cropRing.rotation.x = Math.PI / 2;
      cropRing.position.y = 3.0;
      grp.add(cropRing);
    }

    // Central Botanical Oxygenating Tower
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.0, 12, 8), matHullWhite);
    spire.position.y = 8;
    grp.add(spire);

    // Ambient interior biological glow light
    const bioLight = new THREE.PointLight(0x55ff88, 2.4, 45);
    bioLight.position.set(0, 8, 0);
    grp.add(bioLight);

    return {
      group: grp,
      update: (delta, time) => {
        bioLight.intensity = 2.2 + Math.sin(time * 2) * 0.4;
      }
    };
  }

  // -------------------------------------------------------------
  // 9. AQUACYCLE WATER PLANT
  // -------------------------------------------------------------
  function buildWaterPlant(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Foundation
    const pad = new THREE.Mesh(new THREE.BoxGeometry(22, 1.5, 22), matHullSlate);
    pad.position.y = 0.75;
    grp.add(pad);

    // Triple Nanofiltration Distillation Towers
    const towerGeo = new THREE.CylinderGeometry(3.5, 3.5, 15, 16);
    const towerPositions = [
      { x: -6, z: -5 },
      { x: 6, z: -5 },
      { x: 0, z: 6 }
    ];

    towerPositions.forEach((tp, i) => {
      const tower = new THREE.Mesh(towerGeo, matHullWhite);
      tower.position.set(tp.x, 8.5, tp.z);
      tower.castShadow = true;
      grp.add(tower);

      // Water level observation slit
      const slit = new THREE.Mesh(new THREE.BoxGeometry(0.3, 11, 0.3), matGlowCyan);
      slit.position.set(tp.x, 8.5, tp.z + 3.6);
      grp.add(slit);
    });

    // Aeration Basin (Circular reservoir with swirling liquid surface)
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(5, 5.5, 3, 16), matMetalDark);
    basin.position.set(0, 2.5, -5);
    grp.add(basin);

    const waterSurface = new THREE.Mesh(new THREE.CircleGeometry(4.8, 16), matGlassCyan);
    waterSurface.rotation.x = -Math.PI / 2;
    waterSurface.position.set(0, 4.1, -5);
    grp.add(waterSurface);

    // Interconnecting aqueduct pipes
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 12, 8), matMetalDark);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0, 12, -5);
    grp.add(pipe);

    return {
      group: grp,
      update: (delta, time) => {
        waterSurface.rotation.z += delta * 0.5;
      }
    };
  }

  // -------------------------------------------------------------
  // 10. HELIOS FUSION & SOLAR POWER STATION
  // -------------------------------------------------------------
  function buildHeliosPower(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Octagonal Reactor Citadel Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(16, 18, 4, 8), matMetalDark);
    base.position.y = 2;
    grp.add(base);

    // Tokamak Reactor Vessel Cylinder
    const tokamak = new THREE.Mesh(new THREE.CylinderGeometry(9, 10, 16, 16), matHullSlate);
    tokamak.position.y = 11;
    tokamak.castShadow = true;
    grp.add(tokamak);

    // Glowing Toroidal Plasma Confinement Ring
    const plasmaGeo = new THREE.TorusGeometry(10.2, 1.2, 12, 24);
    const plasmaMat = new THREE.MeshBasicMaterial({ color: 0xFFBE69 });
    const plasmaRing = new THREE.Mesh(plasmaGeo, plasmaMat);
    plasmaRing.rotation.x = Math.PI / 2;
    plasmaRing.position.y = 11;
    grp.add(plasmaRing);

    // Secondary high-energy cyan field ring
    const fieldRing = new THREE.Mesh(new THREE.TorusGeometry(11.5, 0.5, 8, 24), matGlowCyan);
    fieldRing.rotation.x = Math.PI / 2;
    fieldRing.position.y = 13;
    grp.add(fieldRing);

    // Central Core Pulse Light
    const coreLight = new THREE.PointLight(0xFFBE69, 3.0, 50);
    coreLight.position.set(0, 11, 0);
    grp.add(coreLight);

    // Bank of Angled Photovoltaic Arrays (4 solar wings)
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const wingGroup = new THREE.Group();
      wingGroup.position.set(Math.cos(a) * 22, 0.5, Math.sin(a) * 22);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 6, 6), matMetalDark);
      pole.position.y = 3;
      wingGroup.add(pole);

      const panel = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 5), matHullSlate);
      panel.position.y = 6;
      panel.rotation.x = 0.45;
      panel.rotation.y = a;
      wingGroup.add(panel);

      grp.add(wingGroup);
    }

    return {
      group: grp,
      update: (delta, time, state) => {
        const isCritical = state && (state.status === 'CRITICAL' || state.status === 'OFFLINE');
        if (isCritical) {
          // Failure mode: Blackout flicker, dying amber spark
          const flicker = Math.random() > 0.65 ? Math.random() * 0.6 : 0.05;
          plasmaMat.color.setHex(0xFF3300);
          fieldRing.visible = Math.random() > 0.8;
          coreLight.intensity = flicker;
          plasmaRing.scale.setScalar(1 + (Math.random() - 0.5) * 0.1);
        } else {
          // Nominal output
          plasmaMat.color.setHex(0xFFBE69);
          fieldRing.visible = true;
          plasmaRing.rotation.z += delta * 0.8;
          coreLight.intensity = 2.8 + Math.sin(time * 5) * 0.6;
        }
      }
    };
  }

  // -------------------------------------------------------------
  // 11. SAFEHAVEN DEEP BLAST SHELTER
  // -------------------------------------------------------------
  function buildSafeHaven(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Sloped Regolith Bunker Berm
    const bermGeo = new THREE.ConeGeometry(18, 9, 8);
    const bermMat = new THREE.MeshStandardMaterial({ color: 0x5a2d1f, roughness: 0.95 });
    const berm = new THREE.Mesh(bermGeo, bermMat);
    berm.position.y = 4.5;
    grp.add(berm);

    // Massive Steel Blast Airlock Doors
    const blastFrame = new THREE.Mesh(new THREE.BoxGeometry(12, 7, 5), matMetalDark);
    blastFrame.position.set(0, 3.5, 9);
    grp.add(blastFrame);

    const doorA = new THREE.Mesh(new THREE.BoxGeometry(4.8, 5.5, 1), matHullSlate);
    doorA.position.set(-2.5, 3.5, 11);
    grp.add(doorA);

    const doorB = new THREE.Mesh(new THREE.BoxGeometry(4.8, 5.5, 1), matHullSlate);
    doorB.position.set(2.5, 3.5, 11);
    grp.add(doorB);

    // Emergency Defense Beacon Mast
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.8, 18, 6), matHullWhite);
    mast.position.set(0, 14, 0);
    grp.add(mast);

    const beacon = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8), matGlowAmber);
    beacon.position.set(0, 23, 0);
    grp.add(beacon);

    const shelterLight = new THREE.PointLight(0xFFBE69, 1.8, 30);
    shelterLight.position.set(0, 23, 0);
    grp.add(shelterLight);

    return {
      group: grp,
      update: (delta, time) => {
        beacon.scale.setScalar(1 + Math.sin(time * 3) * 0.15);
      }
    };
  }

  // -------------------------------------------------------------
  // 12. MARS GATEWAY SPACEPORT & PROCEDURAL SHUTTLE
  // -------------------------------------------------------------
  function buildSpaceport(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Elevated Terminal & Cargo Gantry
    const terminal = new THREE.Mesh(new THREE.BoxGeometry(28, 8, 14), matHullSlate);
    terminal.position.set(-10, 4, -14);
    terminal.castShadow = true;
    grp.add(terminal);

    // Control Tower Spire
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.5, 20, 8), matHullWhite);
    tower.position.set(-20, 10, -14);
    grp.add(tower);

    // Radar dish on tower
    const dish = new THREE.Mesh(new THREE.SphereGeometry(3, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.4), matMetalDark);
    dish.position.set(-20, 21, -14);
    grp.add(dish);

    // PROCEDURAL ORBITAL SHUTTLE SPACECRAFT (Landed on Pad 01)
    const shuttle = new THREE.Group();
    shuttle.name = 'gatewayShuttle';
    shuttle.position.set(0, 2.5, 0); // Position on pad

    // Fuselage
    const fuseGeo = new THREE.ConeGeometry(3.5, 18, 8);
    fuseGeo.rotateX(Math.PI / 2);
    const fuse = new THREE.Mesh(fuseGeo, matHullWhite);
    fuse.position.z = 2;
    shuttle.add(fuse);

    // Cockpit Tinted Canopy
    const cockpit = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 8), matGlassCyan);
    cockpit.scale.set(0.8, 0.7, 1.8);
    cockpit.position.set(0, 1.6, 5);
    shuttle.add(cockpit);

    // Delta Wings
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(9, -7);
    wingShape.lineTo(9, -9);
    wingShape.lineTo(-9, -9);
    wingShape.lineTo(-9, -7);
    wingShape.closePath();

    const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.6, bevelEnabled: false });
    wingGeo.rotateX(-Math.PI / 2);
    const wings = new THREE.Mesh(wingGeo, matMetalDark);
    wings.position.set(0, 0, 2);
    shuttle.add(wings);

    // Vertical Stabilizers (Twin Fins)
    const finA = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4, 3), matHullWhite);
    finA.position.set(-4, 2, -6);
    finA.rotation.z = -0.2;
    shuttle.add(finA);

    const finB = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4, 3), matHullWhite);
    finB.position.set(4, 2, -6);
    finB.rotation.z = 0.2;
    shuttle.add(finB);

    // Twin Rocket Engine Nozzles with Blue Ion Standby Glow
    const nozzleA = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 2.5, 8), matMetalDark);
    nozzleA.rotation.x = Math.PI / 2;
    nozzleA.position.set(-2, 0.2, -7.5);
    shuttle.add(nozzleA);

    const nozzleB = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 2.5, 8), matMetalDark);
    nozzleB.rotation.x = Math.PI / 2;
    nozzleB.position.set(2, 0.2, -7.5);
    shuttle.add(nozzleB);

    const nozzleGlowA = new THREE.Mesh(new THREE.CircleGeometry(1.1, 12), matGlowCyan);
    nozzleGlowA.rotation.y = Math.PI;
    nozzleGlowA.position.set(-2, 0.2, -8.8);
    shuttle.add(nozzleGlowA);

    const nozzleGlowB = new THREE.Mesh(new THREE.CircleGeometry(1.1, 12), matGlowCyan);
    nozzleGlowB.rotation.y = Math.PI;
    nozzleGlowB.position.set(2, 0.2, -8.8);
    shuttle.add(nozzleGlowB);

    grp.add(shuttle);

    return {
      group: grp,
      update: (delta, time) => {
        dish.rotation.y += delta * 0.4;
      }
    };
  }

  // -------------------------------------------------------------
  // 13. KEPLER ASTROBIOLOGY RESEARCH LAB
  // -------------------------------------------------------------
  function buildResearchLab(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Raised laboratory stilts
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 6, 6), matMetalDark);
      stilt.position.set(Math.cos(a) * 9, 3, Math.sin(a) * 9);
      grp.add(stilt);
    }

    // Geodesic Sensor Sphere
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(8, 2), matHullWhite);
    sphere.position.y = 10;
    sphere.castShadow = true;
    grp.add(sphere);

    // Violet sensor equator band
    const equator = new THREE.Mesh(new THREE.TorusGeometry(8.2, 0.35, 6, 24), new THREE.MeshBasicMaterial({ color: 0x7446F2 }));
    equator.rotation.x = Math.PI / 2;
    equator.position.y = 10;
    grp.add(equator);

    // Radio Astronomy Antenna Array
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 12, 6), matHullSlate);
    antenna.position.set(0, 19, 0);
    grp.add(antenna);

    return {
      group: grp,
      update: (delta, time) => {
        equator.rotation.z += delta * 0.2;
      }
    };
  }

  // -------------------------------------------------------------
  // 14. COMMUNITY AGORA & CIVIC PLAZA
  // -------------------------------------------------------------
  function buildCommunityCentre(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Circular plaza terrace
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(15, 16, 1.2, 24), matHullSlate);
    plaza.position.y = 0.6;
    grp.add(plaza);

    // Open colonnade ring (8 pillars supporting canopy)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6, 8), matHullWhite);
      pillar.position.set(Math.cos(a) * 12, 3.6, Math.sin(a) * 12);
      grp.add(pillar);
    }

    const canopyRing = new THREE.Mesh(new THREE.TorusGeometry(12, 0.8, 6, 24), matMetalDark);
    canopyRing.rotation.x = Math.PI / 2;
    canopyRing.position.y = 6.6;
    grp.add(canopyRing);

    // Holographic Planetary Globe Rotating Centerpiece
    const holoGlobeGeo = new THREE.IcosahedronGeometry(3.5, 2);
    const holoGlobeMat = new THREE.MeshBasicMaterial({
      color: 0x42E8F5,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const holoGlobe = new THREE.Mesh(holoGlobeGeo, holoGlobeMat);
    holoGlobe.position.y = 4.2;
    grp.add(holoGlobe);

    return {
      group: grp,
      update: (delta, time) => {
        holoGlobe.rotation.y += delta * 0.6;
        holoGlobe.rotation.x = Math.sin(time * 0.8) * 0.2;
      }
    };
  }

  // -------------------------------------------------------------
  // 15. RESOURCE STORAGE CENTRE
  // -------------------------------------------------------------
  function buildResourceStorage(pos) {
    const grp = new THREE.Group();
    grp.position.set(pos.x, 0, pos.z);

    // Foundation
    const pad = new THREE.Mesh(new THREE.BoxGeometry(26, 1.2, 22), matMetalDark);
    pad.position.y = 0.6;
    grp.add(pad);

    // Modular Hexagonal Storage Silos (6 modular silos)
    const siloGeo = new THREE.CylinderGeometry(3.8, 3.8, 8, 6);
    const siloPositions = [
      { x: -7, z: -5 },
      { x: 0, z: -5 },
      { x: 7, z: -5 },
      { x: -7, z: 4 },
      { x: 0, z: 4 },
      { x: 7, z: 4 }
    ];

    siloPositions.forEach(sp => {
      const silo = new THREE.Mesh(siloGeo, matHullWhite);
      silo.position.set(sp.x, 4.6, sp.z);
      silo.castShadow = true;
      grp.add(silo);

      const roofCap = new THREE.Mesh(new THREE.ConeGeometry(3.8, 2, 6), matHullSlate);
      roofCap.position.set(sp.x, 9.6, sp.z);
      grp.add(roofCap);
    });

    // Automated gantry crane rail
    const rail = new THREE.Mesh(new THREE.BoxGeometry(24, 0.6, 0.8), matMetalDark);
    rail.position.set(0, 11, 0);
    grp.add(rail);

    return {
      group: grp,
      update: () => {}
    };
  }

  // -------------------------------------------------------------
  // INSTANTIATE AND REGISTER ALL FACILITIES
  // -------------------------------------------------------------
  const builders = {
    'command-tower': buildCommandTower,
    'marscare-hospital': buildHospital,
    'nova-university': buildUniversity,
    'horizon-school': buildSchool,
    'oxygen-hub-alpha': buildOxygenHubAlpha,
    'oxygen-hub-beta': buildOxygenHubBeta,
    'residential-habitat-alpha': (pos) => buildResidentialHabitats(pos, 'Ares'),
    'residential-habitat-beta': (pos) => buildResidentialHabitats(pos, 'Olympus'),
    'eden-greenhouse': buildGreenhouse,
    'aquacycle-water': buildWaterPlant,
    'helios-power': buildHeliosPower,
    'safehaven-shelter': buildSafeHaven,
    'mars-gateway-spaceport': buildSpaceport,
    'research-laboratory': buildResearchLab,
    'community-centre': buildCommunityCentre,
    'resource-storage-centre': buildResourceStorage
  };

  for (const fac of FACILITIES) {
    const builder = builders[fac.id];
    if (!builder) continue;

    const building = builder(fac.coords);
    const grp = building.group;
    grp.name = `facility_${fac.id}`;

    // Invisible Raycasting Bounding Cylinder for reliable click/hover picking
    const pickGeo = new THREE.CylinderGeometry(14, 14, 30, 8);
    const pickMat = new THREE.MeshBasicMaterial({ visible: false });
    const pickMesh = new THREE.Mesh(pickGeo, pickMat);
    pickMesh.position.y = 15;
    pickMesh.userData = { facilityId: fac.id, facilityData: fac };
    grp.add(pickMesh);
    raycastTargets.push(pickMesh);

    // Glowing Holographic Selection / Focus Ring at ground level
    const ringGeo = new THREE.RingGeometry(13.5, 15, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x42E8F5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const highlightRing = new THREE.Mesh(ringGeo, ringMat);
    highlightRing.position.y = 0.28;
    grp.add(highlightRing);

    // Ground Hologram Label Anchor
    const anchor = new THREE.Object3D();
    anchor.position.set(0, 24, 0);
    grp.add(anchor);

    buildingsGroup.add(grp);

    buildingMeshes.set(fac.id, {
      id: fac.id,
      group: grp,
      highlightRing,
      anchor,
      update: building.update || (() => {})
    });
  }

  scene.add(buildingsGroup);

  return {
    group: buildingsGroup,
    buildingMeshes,
    raycastTargets,
    update: (delta, time, colonyStateInstance) => {
      const selectedId = colonyStateInstance ? colonyStateInstance.selectedFacilityId : null;
      const hoveredId = colonyStateInstance ? colonyStateInstance.hoveredFacilityId : null;

      for (const [id, item] of buildingMeshes.entries()) {
        const facState = colonyStateInstance ? colonyStateInstance.getFacility(id) : null;
        
        // Execute per-building procedural animation
        item.update(delta, time, facState);

        // Update highlight ring state
        const isSelected = selectedId === id;
        const isHovered = hoveredId === id;

        if (isSelected) {
          item.highlightRing.material.opacity = 0.95;
          item.highlightRing.material.color.setHex(0x42E8F5);
          item.highlightRing.scale.setScalar(1 + Math.sin(time * 4) * 0.05);
        } else if (isHovered) {
          item.highlightRing.material.opacity = 0.6;
          item.highlightRing.material.color.setHex(0xFFBE69);
          item.highlightRing.scale.setScalar(1);
        } else if (facState && facState.status === 'OFFLINE') {
          item.highlightRing.material.opacity = 0.85;
          item.highlightRing.material.color.setHex(0xFF3366);
          item.highlightRing.scale.setScalar(1 + Math.sin(time * 8) * 0.08);
        } else if (facState && facState.status === 'WARNING') {
          item.highlightRing.material.opacity = 0.7;
          item.highlightRing.material.color.setHex(0xFFAA00);
          item.highlightRing.scale.setScalar(1);
        } else {
          item.highlightRing.material.opacity = 0;
        }
      }
    }
  };
}
