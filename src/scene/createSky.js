/**
 * MARS PULSE - Galaxy Sky, Stars, Nebulae & Celestial Bodies
 * Procedurally generates the Milky Way band, 3,500+ stars, shooting stars,
 * Phobos & Deimos, atmospheric haze, and the Martian sun.
 */

import * as THREE from 'three';

export function createSky(scene) {
  const skyGroup = new THREE.Group();
  skyGroup.name = 'skyGroup';

  // 1. STARFIELD (3,500+ stars of varied brightness, temperature, and twinkle)
  const starCount = 3500;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);

  const starPalette = [
    new THREE.Color('#ffffff'), // Pure white
    new THREE.Color('#9bb0ff'), // Blue giant
    new THREE.Color('#bbccff'), // Light blue
    new THREE.Color('#f8f9fa'), // Cool white
    new THREE.Color('#ffddb4'), // Warm yellow
    new THREE.Color('#ffbe69'), // Orange giant
    new THREE.Color('#d85dff')  // Violet hue
  ];

  for (let i = 0; i < starCount; i++) {
    // Distribute on upper hemisphere
    const radius = 600 + Math.random() * 200;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 0.85 + 0.05); // Keep mostly above horizon

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    starPositions[i * 3] = x;
    starPositions[i * 3 + 1] = y;
    starPositions[i * 3 + 2] = z;

    const col = starPalette[Math.floor(Math.random() * starPalette.length)];
    starColors[i * 3] = col.r;
    starColors[i * 3 + 1] = col.g;
    starColors[i * 3 + 2] = col.b;

    starSizes[i] = Math.random() * 2.5 + 0.8;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

  // Circular star shader / point material
  const starCanvas = document.createElement('canvas');
  starCanvas.width = 32;
  starCanvas.height = 32;
  const ctx = starCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.3, 'rgba(255,255,255,0.8)');
  grad.addColorStop(0.7, 'rgba(200,220,255,0.2)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 32, 32);
  const starTexture = new THREE.CanvasTexture(starCanvas);

  const starMat = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    map: starTexture,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const starField = new THREE.Points(starGeo, starMat);
  skyGroup.add(starField);

  // 2. THE MILKY WAY GALAXY BAND & NEBULA
  const galaxyCount = 1800;
  const galaxyGeo = new THREE.BufferGeometry();
  const galaxyPos = new Float32Array(galaxyCount * 3);
  const galaxyCol = new Float32Array(galaxyCount * 3);

  const nebulaColors = [
    new THREE.Color('#7446F2'), // Nebula violet
    new THREE.Color('#D85DFF'), // Aurora magenta
    new THREE.Color('#42E8F5'), // Electric cyan
    new THREE.Color('#4B8DFF'), // Holographic blue
    new THREE.Color('#2A1654')  // Deep cosmic purple
  ];

  for (let i = 0; i < galaxyCount; i++) {
    // S-curve band across the sky
    const t = (Math.random() - 0.5) * 2; // -1 to 1 along galaxy arc
    const angle = t * (Math.PI * 0.7);
    const radius = 620 + (Math.random() - 0.5) * 50;

    // Cross-sectional spread of galaxy disk
    const spread = (Math.random() - 0.5) * 90 * Math.exp(-t * t * 1.5);
    const heightOffset = (Math.random() - 0.5) * 40;

    const baseVec = new THREE.Vector3(
      radius * Math.cos(angle),
      250 + radius * 0.45 * Math.sin(angle) + heightOffset,
      radius * Math.sin(angle) + spread
    );

    galaxyPos[i * 3] = baseVec.x;
    galaxyPos[i * 3 + 1] = Math.max(20, baseVec.y);
    galaxyPos[i * 3 + 2] = baseVec.z;

    const c = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
    const brightness = Math.random() * 0.8 + 0.2;
    galaxyCol[i * 3] = c.r * brightness;
    galaxyCol[i * 3 + 1] = c.g * brightness;
    galaxyCol[i * 3 + 2] = c.b * brightness;
  }

  galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPos, 3));
  galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyCol, 3));

  const galaxyMat = new THREE.PointsMaterial({
    size: 9.0,
    vertexColors: true,
    map: starTexture,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const galaxyBand = new THREE.Points(galaxyGeo, galaxyMat);
  skyGroup.add(galaxyBand);

  // 3. SHOOTING STARS SYSTEM
  const shootingStars = [];
  const shootingStarGeo = new THREE.BufferGeometry();
  const maxShootingStars = 4;
  const ssPositions = new Float32Array(maxShootingStars * 6); // 2 vertices per line (head, tail)

  for (let i = 0; i < maxShootingStars; i++) {
    shootingStars.push({
      active: false,
      head: new THREE.Vector3(),
      tail: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      life: 0,
      maxLife: 60,
      timer: Math.random() * 200 + 100
    });
  }

  shootingStarGeo.setAttribute('position', new THREE.BufferAttribute(ssPositions, 3));
  const shootingStarMat = new THREE.LineBasicMaterial({
    color: 0x42E8F5,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    linewidth: 2
  });
  const shootingStarLines = new THREE.LineSegments(shootingStarGeo, shootingStarMat);
  skyGroup.add(shootingStarLines);

  // 4. MARTIAN SUN & DISTANT SOLAR FLARE
  const sunGroup = new THREE.Group();
  const sunPos = new THREE.Vector3(-300, 260, -380);
  sunGroup.position.copy(sunPos);

  // Sun Core
  const sunGeo = new THREE.SphereGeometry(14, 24, 24);
  const sunMat = new THREE.MeshBasicMaterial({
    color: 0xfffaea
  });
  const sunMesh = new THREE.Mesh(sunGeo, sunMat);
  sunGroup.add(sunMesh);

  // Sun Corona Glow
  const coronaCanvas = document.createElement('canvas');
  coronaCanvas.width = 128;
  coronaCanvas.height = 128;
  const cctx = coronaCanvas.getContext('2d');
  const cgrad = cctx.createRadialGradient(64, 64, 10, 64, 64, 64);
  cgrad.addColorStop(0, 'rgba(255, 245, 220, 1)');
  cgrad.addColorStop(0.3, 'rgba(255, 180, 100, 0.6)');
  cgrad.addColorStop(0.6, 'rgba(116, 70, 242, 0.2)');
  cgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  cctx.fillStyle = cgrad;
  cctx.fillRect(0, 0, 128, 128);
  const coronaTex = new THREE.CanvasTexture(coronaCanvas);

  const coronaMat = new THREE.SpriteMaterial({
    map: coronaTex,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.85
  });
  const coronaSprite = new THREE.Sprite(coronaMat);
  coronaSprite.scale.set(110, 110, 1);
  sunGroup.add(coronaSprite);

  skyGroup.add(sunGroup);

  // Directional Light from Sun
  const sunLight = new THREE.DirectionalLight(0xffecd0, 2.2);
  sunLight.position.copy(sunPos);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 50;
  sunLight.shadow.camera.far = 900;
  sunLight.shadow.camera.left = -180;
  sunLight.shadow.camera.right = 180;
  sunLight.shadow.camera.top = 180;
  sunLight.shadow.camera.bottom = -180;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  // Soft ambient Martian sky light (rust-indigo bounce)
  const hemiLight = new THREE.HemisphereLight(0x7446f2, 0x933018, 0.7);
  scene.add(hemiLight);

  // 5. PHOBOS & DEIMOS (Martian Moons)
  // Phobos (closer, irregular)
  const phobosGeo = new THREE.DodecahedronGeometry(6.5, 1);
  // Deform slightly for asteroid-like shape
  const phobosPosAttr = phobosGeo.attributes.position;
  for (let i = 0; i < phobosPosAttr.count; i++) {
    const vx = phobosPosAttr.getX(i);
    const vy = phobosPosAttr.getY(i);
    const vz = phobosPosAttr.getZ(i);
    const noise = 1 + (Math.sin(vx * 1.5) + Math.cos(vy * 1.5)) * 0.12;
    phobosPosAttr.setXYZ(i, vx * noise, vy * noise, vz * noise);
  }
  phobosGeo.computeVertexNormals();
  const moonMat = new THREE.MeshStandardMaterial({
    color: 0x8a7f76,
    roughness: 0.9,
    metalness: 0.1
  });
  const phobos = new THREE.Mesh(phobosGeo, moonMat);
  phobos.position.set(220, 280, -250);
  skyGroup.add(phobos);

  // Deimos (smaller, further)
  const deimosGeo = new THREE.DodecahedronGeometry(3.5, 1);
  const deimos = new THREE.Mesh(deimosGeo, moonMat);
  deimos.position.set(-280, 210, 180);
  skyGroup.add(deimos);

  // Distant orbital freighter transport (very slow high-altitude transit)
  const orbitalFreighter = new THREE.Group();
  const ofBody = new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.2, 12),
    new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.3 })
  );
  orbitalFreighter.add(ofBody);
  const ofEngineGlow = new THREE.PointLight(0x42e8f5, 1.5, 25);
  ofEngineGlow.position.set(0, 0, -6);
  orbitalFreighter.add(ofEngineGlow);
  orbitalFreighter.position.set(-350, 320, -100);
  skyGroup.add(orbitalFreighter);

  scene.add(skyGroup);

  // Animation Update Function
  return {
    group: skyGroup,
    update: (delta, time) => {
      // Gentle galaxy rotation
      galaxyBand.rotation.y = time * 0.003;
      starField.rotation.y = time * 0.001;

      // Phobos slow orbit
      phobos.position.x = 220 * Math.cos(time * 0.02) - 250 * Math.sin(time * 0.02);
      phobos.position.z = 220 * Math.sin(time * 0.02) + 250 * Math.cos(time * 0.02);
      phobos.rotation.y += delta * 0.1;

      // Orbital freighter slow transit
      orbitalFreighter.position.x += delta * 3.5;
      if (orbitalFreighter.position.x > 450) {
        orbitalFreighter.position.x = -450;
      }

      // Update shooting stars
      const posArray = shootingStarGeo.attributes.position.array;
      let needUpdate = false;

      for (let i = 0; i < maxShootingStars; i++) {
        const ss = shootingStars[i];
        if (!ss.active) {
          ss.timer -= delta * 60;
          if (ss.timer <= 0) {
            // Spawn shooting star
            ss.active = true;
            ss.life = 0;
            ss.maxLife = Math.random() * 30 + 25;
            const startAngle = Math.random() * Math.PI * 2;
            const startDist = 450 + Math.random() * 100;
            const startHeight = 220 + Math.random() * 120;
            ss.head.set(
              Math.cos(startAngle) * startDist,
              startHeight,
              Math.sin(startAngle) * startDist
            );
            ss.tail.copy(ss.head);
            ss.velocity.set(
              (Math.random() - 0.5) * 180,
              -(Math.random() * 120 + 60),
              (Math.random() - 0.5) * 180
            ).multiplyScalar(delta * 2.5);
          }
        } else {
          ss.life += delta * 60;
          ss.tail.copy(ss.head);
          ss.head.add(ss.velocity);

          posArray[i * 6] = ss.tail.x;
          posArray[i * 6 + 1] = ss.tail.y;
          posArray[i * 6 + 2] = ss.tail.z;
          posArray[i * 6 + 3] = ss.head.x;
          posArray[i * 6 + 4] = ss.head.y;
          posArray[i * 6 + 5] = ss.head.z;
          needUpdate = true;

          if (ss.life >= ss.maxLife) {
            ss.active = false;
            ss.timer = Math.random() * 300 + 150;
            // Clear vertices
            for (let k = 0; k < 6; k++) posArray[i * 6 + k] = 0;
          }
        }
      }

      if (needUpdate) {
        shootingStarGeo.attributes.position.needsUpdate = true;
      }
    }
  };
}
