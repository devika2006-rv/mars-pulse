/**
 * MARS PULSE - Martian Landscape, Roads, Craters, Boulders & Atmospheric Dust
 * Generates rust-red terrain with procedural heightfields, crater rings,
 * distant mountain ridge silhouettes, paved colony roads, landing pads, and dust storms.
 */

import * as THREE from 'three';
import { ROAD_NODES, ROAD_EDGES } from '../data/roadGraph.js';

export function createTerrain(scene) {
  const terrainGroup = new THREE.Group();
  terrainGroup.name = 'terrainGroup';

  // 1. PROCEDURAL TERRAIN GEOMETRY
  const terrainSize = 700;
  const terrainSegments = 160;
  const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);
  terrainGeo.rotateX(-Math.PI / 2);

  const posAttr = terrainGeo.attributes.position;
  const colorAttr = new Float32Array(posAttr.count * 3);

  // Defined craters: center [x, z], radius, depth
  const craters = [
    { x: -180, z: -170, r: 65, depth: 14 },
    { x: 190, z: 160, r: 50, depth: 11 },
    { x: -160, z: 180, r: 42, depth: 9 },
    { x: 170, z: -190, r: 55, depth: 12 },
    { x: 0, z: -210, r: 35, depth: 7 }
  ];

  // Mountain ridge functions
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const z = posAttr.getZ(i);
    const distFromCenter = Math.sqrt(x * x + z * z);

    // Multi-octave simplex/sinusoidal noise
    let height = (
      Math.sin(x * 0.015) * Math.cos(z * 0.015) * 4.5 +
      Math.sin(x * 0.035 + 1.2) * Math.cos(z * 0.032) * 2.8 +
      Math.sin(x * 0.07) * Math.cos(z * 0.07 + 0.8) * 1.2
    );

    // Crater carving & rim elevation
    for (const c of craters) {
      const cDist = Math.hypot(x - c.x, z - c.z);
      if (cDist < c.r * 1.5) {
        const factor = cDist / c.r;
        if (factor < 1.0) {
          // Inside crater bowl
          height -= (1 - factor * factor) * c.depth;
        } else if (factor < 1.35) {
          // Crater raised rim lip
          const rimT = Math.sin((factor - 1.0) / 0.35 * Math.PI);
          height += rimT * (c.depth * 0.35);
        }
      }
    }

    // Colony central plateau (flatten central zone |x, z| < 120 for clean architectural footprint)
    const plateauRadius = 125;
    if (distFromCenter < plateauRadius) {
      const blend = THREE.MathUtils.smoothstep(distFromCenter, 60, plateauRadius);
      height = height * blend * 0.35; // gentle rolling flatland in settlement
    }

    // Outer Mountain Ring (distant dramatic jagged horizons)
    if (distFromCenter > 200) {
      const mountainFactor = Math.min(1.0, (distFromCenter - 200) / 120);
      const jagged = Math.sin(x * 0.04) * Math.cos(z * 0.04) * 18 +
                     Math.sin(x * 0.09) * 8 +
                     Math.cos(z * 0.08) * 6;
      height += mountainFactor * (28 + Math.abs(jagged));
    }

    posAttr.setY(i, height);

    // Vertex coloring: Martian rust palette (#9e3a1f, #c74d2b, #702613, #e2714a)
    const normalizedH = (height + 15) / 55;
    const rBase = 0.65 + Math.sin(x * 0.02) * 0.08 + normalizedH * 0.15;
    const gBase = 0.24 + Math.cos(z * 0.02) * 0.04 + normalizedH * 0.06;
    const bBase = 0.14 + normalizedH * 0.04;

    colorAttr[i * 3] = Math.min(1.0, Math.max(0.2, rBase));
    colorAttr[i * 3 + 1] = Math.min(1.0, Math.max(0.08, gBase));
    colorAttr[i * 3 + 2] = Math.min(1.0, Math.max(0.05, bBase));
  }

  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colorAttr, 3));
  terrainGeo.computeVertexNormals();

  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.95,
    metalness: 0.05,
    flatShading: true
  });

  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.receiveShadow = true;
  terrainGroup.add(terrainMesh);

  // 2. SCATTERED BOULDERS & MARTIAN ROCK FORMATIONS (150 procedural rocks)
  const rockGeo = new THREE.DodecahedronGeometry(1, 1);
  const rockMat = new THREE.MeshStandardMaterial({
    color: 0x6e2c1a,
    roughness: 0.92,
    metalness: 0.08,
    flatShading: true
  });

  const rockInstanced = new THREE.InstancedMesh(rockGeo, rockMat, 150);
  rockInstanced.receiveShadow = true;
  rockInstanced.castShadow = true;

  const dummy = new THREE.Object3D();
  let rockIndex = 0;

  for (let i = 0; i < 150; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 70 + Math.random() * 220;
    const rx = Math.cos(angle) * dist;
    const rz = Math.sin(angle) * dist;

    // Approximate height at (rx, rz)
    let ry = 0.5;
    const scale = Math.random() * 2.8 + 0.8;

    dummy.position.set(rx, ry, rz);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    dummy.scale.set(scale * (0.8 + Math.random() * 0.4), scale * (0.7 + Math.random() * 0.6), scale * (0.8 + Math.random() * 0.4));
    dummy.updateMatrix();
    rockInstanced.setMatrixAt(rockIndex++, dummy.matrix);
  }
  rockInstanced.instanceMatrix.needsUpdate = true;
  terrainGroup.add(rockInstanced);

  // 3. PAVED ROADS & TRANSLUCENT ENERGY GUIDE LANES
  const roadMat = new THREE.MeshStandardMaterial({
    color: 0x1a1520, // Dark compacted regolith asphalt
    roughness: 0.7,
    metalness: 0.25
  });

  const roadGuideMat = new THREE.MeshBasicMaterial({
    color: 0x42E8F5,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });

  const roadGroup = new THREE.Group();
  roadGroup.name = 'colonyRoads';

  for (const edge of ROAD_EDGES) {
    const nodeA = ROAD_NODES[edge.from];
    const nodeB = ROAD_NODES[edge.to];
    if (!nodeA || !nodeB) continue;

    const start = new THREE.Vector3(nodeA.x, 0.12, nodeA.z);
    const end = new THREE.Vector3(nodeB.x, 0.12, nodeB.z);
    const dist = start.distanceTo(end);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

    // Road surface quad
    const roadWidth = 4.2;
    const roadSegmentGeo = new THREE.PlaneGeometry(roadWidth, dist);
    roadSegmentGeo.rotateX(-Math.PI / 2);

    const roadMesh = new THREE.Mesh(roadSegmentGeo, roadMat);
    roadMesh.position.copy(mid);
    roadMesh.lookAt(end.x, 0.12, end.z);
    roadMesh.receiveShadow = true;
    roadGroup.add(roadMesh);

    // Subtle edge luminescent strip guides
    const stripGeo = new THREE.PlaneGeometry(0.2, dist);
    stripGeo.rotateX(-Math.PI / 2);

    const leftStrip = new THREE.Mesh(stripGeo, roadGuideMat);
    leftStrip.position.copy(mid);
    leftStrip.lookAt(end.x, 0.13, end.z);
    leftStrip.translateX(-roadWidth * 0.46);
    roadGroup.add(leftStrip);

    const rightStrip = new THREE.Mesh(stripGeo, roadGuideMat);
    rightStrip.position.copy(mid);
    rightStrip.lookAt(end.x, 0.13, end.z);
    rightStrip.translateX(roadWidth * 0.46);
    roadGroup.add(rightStrip);
  }

  // Glowing Road Junction Hubs & Intersections
  for (const nodeId in ROAD_NODES) {
    const node = ROAD_NODES[nodeId];
    const junctionGeo = new THREE.CylinderGeometry(2.6, 2.8, 0.15, 16);
    const jMesh = new THREE.Mesh(junctionGeo, roadMat);
    jMesh.position.set(node.x, 0.13, node.z);
    roadGroup.add(jMesh);

    const jRing = new THREE.Mesh(new THREE.RingGeometry(1.8, 2.4, 16), roadGuideMat);
    jRing.rotation.x = -Math.PI / 2;
    jRing.position.set(node.x, 0.16, node.z);
    roadGroup.add(jRing);
  }

  terrainGroup.add(roadGroup);

  // 4. LANDING PADS (Spaceport & MarsCare Hospital Medevac Pad)
  function createLandingPad(x, z, radius, ringColor, labelText) {
    const padGroup = new THREE.Group();
    padGroup.position.set(x, 0.18, z);

    // Octagonal base
    const baseGeo = new THREE.CylinderGeometry(radius, radius * 1.05, 0.4, 8);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x222638,
      roughness: 0.6,
      metalness: 0.4
    });
    const padBase = new THREE.Mesh(baseGeo, baseMat);
    padBase.receiveShadow = true;
    padGroup.add(padBase);

    // Concentric glowing rings
    const ringGeo = new THREE.RingGeometry(radius * 0.65, radius * 0.75, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: ringColor,
      side: THREE.DoubleSide
    });
    const padRing = new THREE.Mesh(ringGeo, ringMat);
    padRing.position.y = 0.22;
    padGroup.add(padRing);

    // Pad Perimeter Lights (8 amber or cyan blinking runway lights)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const lightMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.5, 8),
        new THREE.MeshBasicMaterial({ color: ringColor })
      );
      lightMesh.position.set(Math.cos(a) * (radius * 0.92), 0.35, Math.sin(a) * (radius * 0.92));
      padGroup.add(lightMesh);
    }

    return padGroup;
  }

  // Gateway Spaceport Primary Pad
  const spaceportPad = createLandingPad(20, 125, 18, 0x42E8F5, 'PAD 01');
  terrainGroup.add(spaceportPad);

  // Spaceport Secondary Pad
  const spaceportPad2 = createLandingPad(45, 135, 14, 0xFFBE69, 'PAD 02');
  terrainGroup.add(spaceportPad2);

  // MarsCare Hospital Emergency Medevac Pad
  const medevacPad = createLandingPad(-75, 45, 10, 0xFF725E, 'MEDEVAC');
  terrainGroup.add(medevacPad);

  // 5. ATMOSPHERIC DUST PARTICLES (600 floating Martian dust grains)
  const dustCount = 600;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  const dustVel = [];

  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 350;
    dustPos[i * 3 + 1] = Math.random() * 60 + 0.5;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 350;

    dustVel.push({
      x: (Math.random() - 0.3) * 0.8,
      y: (Math.random() - 0.5) * 0.2,
      z: (Math.random() - 0.5) * 0.6
    });
  }

  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xffaa77,
    size: 1.2,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const dustParticles = new THREE.Points(dustGeo, dustMat);
  terrainGroup.add(dustParticles);

  scene.add(terrainGroup);

  return {
    group: terrainGroup,
    update: (delta) => {
      // Animate dust particles slowly drifting in Martian breeze
      const positions = dustGeo.attributes.position.array;
      for (let i = 0; i < dustCount; i++) {
        positions[i * 3] += dustVel[i].x * delta * 15;
        positions[i * 3 + 1] += dustVel[i].y * delta * 5;
        positions[i * 3 + 2] += dustVel[i].z * delta * 12;

        // Wrap around boundaries
        if (positions[i * 3] > 180) positions[i * 3] = -180;
        if (positions[i * 3] < -180) positions[i * 3] = 180;
        if (positions[i * 3 + 1] > 60) positions[i * 3 + 1] = 1;
        if (positions[i * 3 + 1] < 0.5) positions[i * 3 + 1] = 58;
        if (positions[i * 3 + 2] > 180) positions[i * 3 + 2] = -180;
        if (positions[i * 3 + 2] < -180) positions[i * 3 + 2] = 180;
      }
      dustGeo.attributes.position.needsUpdate = true;
    }
  };
}
