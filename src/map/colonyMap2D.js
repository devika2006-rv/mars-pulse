/**
 * MARS PULSE - Google Maps-Style 2D Interactive Colony Map Engine
 * Provides high-DPI canvas rendering with zoom, pan, named road network,
 * district zones, Google Maps facility pins, turn-by-turn routes, resident location beacon,
 * scale bar, and minimap.
 */

import { FACILITIES } from '../data/facilities.js';
import { ROAD_NODES, ROAD_EDGES, COLONY_DISTRICTS } from '../data/roadGraph.js';
import { colonyState } from '../simulation/colonyState.js';

export class ColonyMap2D {
  constructor(canvasElement, callbacks = {}) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.callbacks = callbacks;

    // Viewport Transformation State
    this.camX = 0; // World center X
    this.camZ = 0; // World center Z
    this.scale = 3.6; // Pixels per world meter (zoom)
    this.minScale = 1.2;
    this.maxScale = 14.0;

    // Smooth Pan / Animation State
    this.targetCamX = 0;
    this.targetCamZ = 0;
    this.targetScale = 3.6;
    this.isAnimating = false;

    // Resident Simulated Location ("YOU ARE HERE")
    this.userLocation = {
      facilityId: 'residential-habitat-alpha',
      name: 'Ares Habitat Sector Alpha',
      x: -40,
      z: -40,
      heading: 0.8
    };

    // User Interaction Drag State
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.camStartX = 0;
    this.camStartZ = 0;
    this.hoveredFacility = null;

    // Traffic / Animation State
    this.showTraffic = true;
    this.animTime = 0;
    this.routePulseOffset = 0;

    // Craters on Map Background
    this.craters = [
      { x: -180, z: -170, r: 65 },
      { x: 190, z: 160, r: 50 },
      { x: -160, z: 180, r: 42 },
      { x: 170, z: -190, r: 55 },
      { x: 0, z: -210, r: 35 }
    ];

    this.setupCanvas();
    this.setupEvents();
    this.startRenderLoop();
  }

  setupCanvas() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = this.canvas.parentElement;
    const w = parent && parent.clientWidth > 0 ? parent.clientWidth : window.innerWidth;
    const h = parent && parent.clientHeight > 0 ? parent.clientHeight : window.innerHeight;

    if (w === 0 || h === 0) return;

    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.width = w;
    this.height = h;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  }

  // Coordinate Conversion: World (meters) -> Screen (pixels)
  worldToScreen(x, z) {
    const sx = this.width / 2 + (x - this.camX) * this.scale;
    const sy = this.height / 2 + (z - this.camZ) * this.scale;
    return { x: sx, y: sy };
  }

  // Coordinate Conversion: Screen (pixels) -> World (meters)
  screenToWorld(sx, sy) {
    const wx = (sx - this.width / 2) / this.scale + this.camX;
    const wz = (sy - this.height / 2) / this.scale + this.camZ;
    return { x: wx, z: wz };
  }

  setupEvents() {
    // 1. Mouse Drag Pan
    this.canvas.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.camStartX = this.camX;
      this.camStartZ = this.camZ;
      this.canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (this.isDragging) {
        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;
        this.camX = this.camStartX - dx / this.scale;
        this.camZ = this.camStartZ - dy / this.scale;
        this.targetCamX = this.camX;
        this.targetCamZ = this.camZ;
      } else {
        // Hover detection on facility pins
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        let found = null;
        for (const fac of colonyState.getAllFacilities()) {
          const pt = this.worldToScreen(fac.coords.x, fac.coords.z);
          const dist = Math.hypot(mouseX - pt.x, mouseY - pt.y);
          if (dist < 22) {
            found = fac;
            break;
          }
        }

        if (found !== this.hoveredFacility) {
          this.hoveredFacility = found;
          this.canvas.style.cursor = found ? 'pointer' : 'default';
          colonyState.setHoveredFacility(found ? found.id : null);
          if (this.callbacks.onHover) {
            this.callbacks.onHover(found, e.clientX, e.clientY);
          }
        }
      }
    });

    window.addEventListener('pointerup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.canvas.style.cursor = this.hoveredFacility ? 'pointer' : 'default';
      }
    });

    // 2. Click Selection
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check click on facility pins
      for (const fac of colonyState.getAllFacilities()) {
        const pt = this.worldToScreen(fac.coords.x, fac.coords.z);
        const dist = Math.hypot(mouseX - pt.x, mouseY - pt.y);
        if (dist < 24) {
          colonyState.selectFacility(fac.id);
          if (this.callbacks.onSelect) {
            this.callbacks.onSelect(fac);
          }
          return;
        }
      }

      // Check click on Resident Marker
      const userPt = this.worldToScreen(this.userLocation.x, this.userLocation.z);
      if (Math.hypot(mouseX - userPt.x, mouseY - userPt.y) < 22) {
        colonyState.selectFacility(this.userLocation.facilityId);
      }
    });

    // 3. Mouse Wheel Zoom (Centered on Cursor)
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const worldPosBefore = this.screenToWorld(mouseX, mouseY);
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      const newScale = Math.min(this.maxScale, Math.max(this.minScale, this.scale * zoomFactor));

      this.scale = newScale;
      this.targetScale = newScale;

      // Re-center around mouse cursor
      this.camX = worldPosBefore.x - (mouseX - this.width / 2) / this.scale;
      this.camZ = worldPosBefore.z - (mouseY - this.height / 2) / this.scale;
      this.targetCamX = this.camX;
      this.targetCamZ = this.camZ;
    }, { passive: false });
  }

  // Smoothly center on coordinates
  panTo(targetX, targetZ, targetScale = null) {
    this.targetCamX = targetX;
    this.targetCamZ = targetZ;
    if (targetScale) this.targetScale = targetScale;
    this.isAnimating = true;
  }

  // Smoothly fit bounds of a route or points array
  fitBounds(points, padding = 80) {
    if (!points || points.length === 0) return;

    let minX = Infinity, maxX = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    for (const p of points) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.z < minZ) minZ = p.z;
      if (p.z > maxZ) maxZ = p.z;
    }

    const spanX = Math.max(30, maxX - minX);
    const spanZ = Math.max(30, maxZ - minZ);

    const availWidth = Math.max(200, this.width - padding * 2);
    const availHeight = Math.max(200, this.height - padding * 2);

    const scaleX = availWidth / spanX;
    const scaleZ = availHeight / spanZ;
    const idealScale = Math.min(this.maxScale, Math.max(this.minScale, Math.min(scaleX, scaleZ) * 0.85));

    this.panTo((minX + maxX) / 2, (minZ + maxZ) / 2, idealScale);
  }

  // Recenter on Resident Position
  recenterOnResident() {
    this.panTo(this.userLocation.x, this.userLocation.z, 4.8);
  }

  // Recenter on Full Colony Overview
  recenterOverview() {
    this.panTo(0, 0, 3.4);
  }

  zoomIn() {
    const newScale = Math.min(this.maxScale, this.scale * 1.3);
    this.targetScale = newScale;
    this.scale = newScale;
  }

  zoomOut() {
    const newScale = Math.max(this.minScale, this.scale * 0.77);
    this.targetScale = newScale;
    this.scale = newScale;
  }

  toggleTraffic() {
    this.showTraffic = !this.showTraffic;
    return this.showTraffic;
  }

  // Main Render Loop
  startRenderLoop() {
    const render = () => {
      this.animTime += 0.016;

      // Smooth camera interpolation
      if (this.isAnimating) {
        this.camX += (this.targetCamX - this.camX) * 0.12;
        this.camZ += (this.targetCamZ - this.camZ) * 0.12;
        this.scale += (this.targetScale - this.scale) * 0.12;

        if (Math.hypot(this.targetCamX - this.camX, this.targetCamZ - this.camZ) < 0.2 &&
            Math.abs(this.targetScale - this.scale) < 0.05) {
          this.camX = this.targetCamX;
          this.camZ = this.targetCamZ;
          this.scale = this.targetScale;
          this.isAnimating = false;
        }
      }

      this.draw();
      requestAnimationFrame(render);
    };
    render();
  }

  draw() {
    if (!this.width || this.width === 0 || this.canvas.width === 0) {
      this.resize();
    }
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Martian Topographic Map Background & Coordinate Grid
    this.drawBackground(ctx);

    // 2. Colony Districts Layer
    this.drawDistricts(ctx);

    // 3. Colony Road Network with Street Names
    this.drawRoads(ctx);

    // 4. Traffic / Air-lanes Overlay
    if (this.showTraffic) {
      this.drawTraffic(ctx);
    }

    // 5. Active Navigation Route Line & Direction Chevrons
    this.drawActiveRoute(ctx);

    // 6. Resident "YOU ARE HERE" Beacon
    this.drawResidentBeacon(ctx);

    // 7. Facility Markers (Google Maps Style Pins)
    this.drawFacilityPins(ctx);

    // 8. Scale Indicator Bar (Bottom Left)
    this.drawScaleBar(ctx);

    // 9. Minimap Overview (Bottom Right)
    this.drawMinimap(ctx);
  }

  drawBackground(ctx) {
    // Midnight Mars Map Base
    ctx.fillStyle = '#0a0d1d';
    ctx.fillRect(0, 0, this.width, this.height);

    // Topographic Grid Lines
    const gridSize = 25; // meters
    const topLeft = this.screenToWorld(0, 0);
    const bottomRight = this.screenToWorld(this.width, this.height);

    const startX = Math.floor(topLeft.x / gridSize) * gridSize;
    const endX = Math.ceil(bottomRight.x / gridSize) * gridSize;
    const startZ = Math.floor(topLeft.z / gridSize) * gridSize;
    const endZ = Math.ceil(bottomRight.z / gridSize) * gridSize;

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(66, 232, 245, 0.06)';

    // Vertical Lines (Longitude)
    for (let x = startX; x <= endX; x += gridSize) {
      const p1 = this.worldToScreen(x, topLeft.z);
      const p2 = this.worldToScreen(x, bottomRight.z);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      // Longitude Labels
      if (this.scale > 2.5 && x % 50 === 0) {
        ctx.fillStyle = 'rgba(66, 232, 245, 0.25)';
        ctx.font = '9px Rajdhani, monospace';
        ctx.fillText(`${x > 0 ? '+' : ''}${x}m E`, p1.x + 4, 18);
      }
    }

    // Horizontal Lines (Latitude)
    for (let z = startZ; z <= endZ; z += gridSize) {
      const p1 = this.worldToScreen(topLeft.x, z);
      const p2 = this.worldToScreen(bottomRight.x, z);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      if (this.scale > 2.5 && z % 50 === 0) {
        ctx.fillStyle = 'rgba(66, 232, 245, 0.25)';
        ctx.font = '9px Rajdhani, monospace';
        ctx.fillText(`${z > 0 ? '+' : ''}${z}m N`, 12, p1.y - 4);
      }
    }

    // Impact Craters Topographic Rings
    for (const c of this.craters) {
      const cp = this.worldToScreen(c.x, c.z);
      const r = c.r * this.scale;
      if (cp.x + r < 0 || cp.x - r > this.width || cp.y + r < 0 || cp.y - r > this.height) continue;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 114, 94, 0.04)';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 114, 94, 0.15)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();

      // Crater inner bowl
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, r * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 114, 94, 0.08)';
      ctx.stroke();
      ctx.restore();
    }
  }

  drawDistricts(ctx) {
    for (const dist of COLONY_DISTRICTS) {
      const pt = this.worldToScreen(dist.x, dist.z);
      const r = dist.radius * this.scale;

      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
      ctx.fillStyle = dist.color;
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = dist.border;
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      // District Watermark Name
      if (this.scale > 2.2) {
        ctx.font = `600 ${Math.max(10, Math.min(13, 11 * (this.scale / 3.5)))}px Rajdhani, sans-serif`;
        ctx.fillStyle = dist.border;
        ctx.textAlign = 'center';
        ctx.letterSpacing = '1px';
        ctx.fillText(dist.name.toUpperCase(), pt.x, pt.y - r + 14);
      }
      ctx.restore();
    }
  }

  drawRoads(ctx) {
    const roadWidth = Math.max(5, 4.2 * this.scale);

    // 1. Draw Road Bed (Dark asphalt casing)
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (const edge of ROAD_EDGES) {
      const n1 = ROAD_NODES[edge.from];
      const n2 = ROAD_NODES[edge.to];
      if (!n1 || !n2) continue;

      const p1 = this.worldToScreen(n1.x, n1.z);
      const p2 = this.worldToScreen(n2.x, n2.z);

      // Outer border
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineWidth = roadWidth + 3;
      ctx.strokeStyle = 'rgba(66, 232, 245, 0.22)';
      ctx.stroke();

      // Inner road surface
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineWidth = roadWidth;
      ctx.strokeStyle = '#181e35';
      ctx.stroke();

      // Centerline
      if (this.scale > 2.8) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(66, 232, 245, 0.25)';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // 2. Road Intersections Junctions
    for (const nodeId in ROAD_NODES) {
      const n = ROAD_NODES[nodeId];
      const pt = this.worldToScreen(n.x, n.z);
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, roadWidth * 0.65, 0, Math.PI * 2);
      ctx.fillStyle = '#1c2440';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(66, 232, 245, 0.4)';
      ctx.stroke();
    }

    // 3. Street Names along Segments
    if (this.scale > 3.0) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '600 10px Rajdhani, sans-serif';

      for (const edge of ROAD_EDGES) {
        if (!edge.name) continue;
        const n1 = ROAD_NODES[edge.from];
        const n2 = ROAD_NODES[edge.to];
        if (!n1 || !n2) continue;

        const p1 = this.worldToScreen(n1.x, n1.z);
        const p2 = this.worldToScreen(n2.x, n2.z);
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (dist < 55) continue; // Skip label if segment is too short on screen

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

        // Keep text right-side-up
        if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
          angle += Math.PI;
        }

        ctx.save();
        ctx.translate(midX, midY);
        ctx.rotate(angle);
        ctx.fillStyle = 'rgba(234, 242, 255, 0.65)';
        ctx.fillText(edge.name.toUpperCase(), 0, -roadWidth * 0.7);
        ctx.restore();
      }
    }

    ctx.restore();
  }

  drawTraffic(ctx) {
    // Animated transit speeder dots along air-lanes
    const laneLoops = [
      [ {x:0, z:-70}, {x:75, z:-50}, {x:90, z:20}, {x:45, z:85}, {x:-40, z:75}, {x:-85, z:20}, {x:-75, z:-55}, {x:-30, z:-75} ],
      [ {x:-70, z:45}, {x:-30, z:20}, {x:0, z:0}, {x:20, z:50}, {x:25, z:110}, {x:-20, z:85}, {x:-60, z:70} ]
    ];

    ctx.save();
    for (let l = 0; l < laneLoops.length; l++) {
      const loop = laneLoops[l];
      const speed = l === 0 ? 0.08 : 0.12;
      const t = (this.animTime * speed) % 1.0;

      // Calculate position along multi-segment loop
      const totalSegs = loop.length;
      const currSeg = Math.floor(t * totalSegs);
      const nextSeg = (currSeg + 1) % totalSegs;
      const segT = (t * totalSegs) - currSeg;

      const p1 = loop[currSeg];
      const p2 = loop[nextSeg];
      const wx = p1.x + (p2.x - p1.x) * segT;
      const wz = p1.z + (p2.z - p1.z) * segT;

      const pt = this.worldToScreen(wx, wz);
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = l === 0 ? '#42E8F5' : '#FFBE69';
      ctx.shadowColor = l === 0 ? '#42E8F5' : '#FFBE69';
      ctx.shadowBlur = 8;
      ctx.fill();
    }
    ctx.restore();
  }

  drawActiveRoute(ctx) {
    const nav = colonyState.navigation;
    if (!nav.isNavigating || !nav.activeRoute || !nav.activeRoute.waypoints || nav.activeRoute.waypoints.length < 2) {
      return;
    }

    const waypoints = nav.activeRoute.waypoints;
    const isEmergency = nav.navigationReason && nav.navigationReason.includes('EMERGENCY');
    const routeColor = isEmergency ? '#FF3366' : (nav.navigationReason === 'MEDEVAC_PRIORITY' ? '#FF725E' : '#42E8F5');

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Outer Glow Ribbon
    ctx.beginPath();
    const first = this.worldToScreen(waypoints[0].x, waypoints[0].z);
    ctx.moveTo(first.x, first.y);

    for (let i = 1; i < waypoints.length; i++) {
      const p = this.worldToScreen(waypoints[i].x, waypoints[i].z);
      ctx.lineTo(p.x, p.y);
    }

    ctx.lineWidth = 10;
    ctx.strokeStyle = isEmergency ? 'rgba(255, 51, 102, 0.35)' : 'rgba(66, 232, 245, 0.35)';
    ctx.stroke();

    // 2. Core Solid Cyber Route Line
    ctx.lineWidth = 5;
    ctx.strokeStyle = routeColor;
    ctx.shadowColor = routeColor;
    ctx.shadowBlur = 12;
    ctx.stroke();

    // 3. Directional Chevrons / Animated Traveling Pulse
    this.routePulseOffset = (this.routePulseOffset + 0.8) % 30;
    ctx.setLineDash([10, 20]);
    ctx.lineDashOffset = -this.routePulseOffset;
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    // 4. Start Pin [A]
    const pStart = this.worldToScreen(waypoints[0].x, waypoints[0].z);
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(pStart.x, pStart.y, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#33FF88';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    ctx.fillStyle = '#080B18';
    ctx.font = 'bold 9px Orbitron, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('A', pStart.x, pStart.y);

    // 5. Destination Pin [B]
    const lastWp = waypoints[waypoints.length - 1];
    const pEnd = this.worldToScreen(lastWp.x, lastWp.z);

    ctx.beginPath();
    ctx.arc(pEnd.x, pEnd.y, 11, 0, Math.PI * 2);
    ctx.fillStyle = isEmergency ? '#FF3366' : '#42E8F5';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    ctx.fillStyle = '#080B18';
    ctx.font = 'bold 10px Orbitron, sans-serif';
    ctx.fillText('B', pEnd.x, pEnd.y);

    ctx.restore();
  }

  drawResidentBeacon(ctx) {
    const pt = this.worldToScreen(this.userLocation.x, this.userLocation.z);

    ctx.save();
    // Expanding Sonar Ping Ring
    const pingR = 12 + (Math.sin(this.animTime * 4) * 0.5 + 0.5) * 14;
    const pingAlpha = Math.max(0, 1 - (pingR - 12) / 14);

    ctx.beginPath();
    ctx.arc(pt.x, pt.y, pingR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(66, 232, 245, ${pingAlpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Blue Center Dot
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#42E8F5';
    ctx.shadowColor = '#42E8F5';
    ctx.shadowBlur = 10;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Label
    ctx.shadowBlur = 0;
    ctx.font = 'bold 10px Rajdhani, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#42E8F5';
    ctx.fillText('YOU ARE HERE', pt.x, pt.y + 18);

    ctx.restore();
  }

  drawFacilityPins(ctx) {
    const selectedId = colonyState.selectedFacilityId;
    const hoveredId = colonyState.hoveredFacilityId;

    // Category colors
    const categoryColors = {
      hospital: '#FF725E',
      oxygen: '#42E8F5',
      education: '#7446F2',
      residential: '#FFBE69',
      food: '#33FF88',
      water: '#42E8F5',
      power: '#FFAA00',
      shelter: '#EAF2FF',
      spaceport: '#D85DFF',
      command: '#4B8DFF',
      research: '#7446F2',
      community: '#42E8F5',
      logistics: '#FFBE69'
    };

    // Category Single Character Glyphs
    const categoryGlyphs = {
      hospital: '+',
      oxygen: 'O₂',
      education: '🎓',
      residential: '⌂',
      food: '🌱',
      water: '💧',
      power: '⚡',
      shelter: '🛡',
      spaceport: '🚀',
      command: '★',
      research: '🔬',
      community: '👥',
      logistics: '📦'
    };

    for (const fac of colonyState.getAllFacilities()) {
      const pt = this.worldToScreen(fac.coords.x, fac.coords.z);
      const isSelected = fac.id === selectedId;
      const isHovered = fac.id === hoveredId;
      const isOffline = fac.status === 'OFFLINE';
      const isWarning = fac.status === 'WARNING' || fac.status === 'CRITICAL';

      let pinColor = categoryColors[fac.category] || '#42E8F5';
      if (isOffline) pinColor = '#FF3366';
      else if (isWarning) pinColor = '#FFAA00';

      const baseR = isSelected ? 15 : (isHovered ? 14 : 12);

      ctx.save();

      // Selected Target Bracket Ring
      if (isSelected) {
        ctx.beginPath();
        const pulseR = baseR + 6 + Math.sin(this.animTime * 6) * 2;
        ctx.arc(pt.x, pt.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = '#42E8F5';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Pin Circular Badge
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, baseR, 0, Math.PI * 2);
      ctx.fillStyle = '#0e1329';
      ctx.fill();
      ctx.lineWidth = isSelected ? 2.5 : 2;
      ctx.strokeStyle = pinColor;
      ctx.shadowColor = pinColor;
      ctx.shadowBlur = isSelected ? 12 : 5;
      ctx.stroke();

      // Inner Icon Glyph
      ctx.shadowBlur = 0;
      ctx.fillStyle = isOffline ? '#FF3366' : '#FFFFFF';
      ctx.font = isOffline ? 'bold 13px sans-serif' : '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const glyph = isOffline ? '⚠' : (categoryGlyphs[fac.category] || '●');
      ctx.fillText(glyph, pt.x, pt.y);

      // Facility Name Pill Badge underneath pin
      if (this.scale > 2.0 || isSelected || isHovered) {
        const text = fac.shortName || fac.name;
        ctx.font = isSelected ? 'bold 11px Orbitron, sans-serif' : '600 10px Rajdhani, sans-serif';
        const metrics = ctx.measureText(text);
        const textW = metrics.width;
        const textH = 14;

        const pillY = pt.y + baseR + 8;
        ctx.fillStyle = isSelected ? 'rgba(8, 11, 24, 0.95)' : 'rgba(8, 11, 24, 0.8)';
        ctx.fillRect(pt.x - textW / 2 - 5, pillY - textH / 2, textW + 10, textH);

        ctx.strokeStyle = isSelected ? '#42E8F5' : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(pt.x - textW / 2 - 5, pillY - textH / 2, textW + 10, textH);

        ctx.fillStyle = isSelected ? '#42E8F5' : '#EAF2FF';
        ctx.fillText(text, pt.x, pillY);
      }

      ctx.restore();
    }
  }

  drawScaleBar(ctx) {
    // Dynamic scale bar calculating pixels to meters
    const barMeters = this.scale > 6 ? 20 : (this.scale > 3 ? 50 : 100);
    const barPixels = barMeters * this.scale;

    const startX = 24;
    const startY = this.height - 24;

    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#42E8F5';

    // Scale horizontal bar
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + barPixels, startY);

    // End ticks
    ctx.moveTo(startX, startY - 4);
    ctx.lineTo(startX, startY + 4);
    ctx.moveTo(startX + barPixels, startY - 4);
    ctx.lineTo(startX + barPixels, startY + 4);
    ctx.stroke();

    // Scale text
    ctx.font = '600 10px Rajdhani, monospace';
    ctx.fillStyle = '#42E8F5';
    ctx.textAlign = 'center';
    ctx.fillText(`${barMeters} m`, startX + barPixels / 2, startY - 6);

    ctx.restore();
  }

  drawMinimap(ctx) {
    const miniW = 120;
    const miniH = 120;
    const miniX = this.width - miniW - 20;
    const miniY = this.height - miniH - 20;

    ctx.save();
    // Minimap Background Box
    ctx.fillStyle = 'rgba(8, 11, 24, 0.85)';
    ctx.fillRect(miniX, miniY, miniW, miniH);
    ctx.strokeStyle = 'rgba(66, 232, 245, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(miniX, miniY, miniW, miniH);

    // Minimap title
    ctx.font = '8px Orbitron, sans-serif';
    ctx.fillStyle = 'rgba(66, 232, 245, 0.8)';
    ctx.textAlign = 'left';
    ctx.fillText('COLONY OVERVIEW', miniX + 6, miniY + 12);

    // Coordinate mapping to minimap bounds (-150 to +150 meters)
    const mapSpan = 300;
    const toMini = (wx, wz) => {
      return {
        x: miniX + ((wx + 150) / mapSpan) * miniW,
        y: miniY + ((wz + 150) / mapSpan) * miniH
      };
    };

    // Draw Mini Roads
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    for (const edge of ROAD_EDGES) {
      const n1 = ROAD_NODES[edge.from];
      const n2 = ROAD_NODES[edge.to];
      if (!n1 || !n2) continue;
      const p1 = toMini(n1.x, n1.z);
      const p2 = toMini(n2.x, n2.z);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // Draw Mini Facility Dots
    for (const fac of colonyState.getAllFacilities()) {
      const pt = toMini(fac.coords.x, fac.coords.z);
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = fac.id === colonyState.selectedFacilityId ? '#42E8F5' : '#8E9BB8';
      ctx.fill();
    }

    // Viewport Bounding Box on Minimap
    const tlWorld = this.screenToWorld(0, 0);
    const brWorld = this.screenToWorld(this.width, this.height);
    const pTL = toMini(tlWorld.x, tlWorld.z);
    const pBR = toMini(brWorld.x, brWorld.z);

    ctx.strokeStyle = '#42E8F5';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(
      Math.max(miniX, pTL.x),
      Math.max(miniY, pTL.y),
      Math.min(miniW, pBR.x - pTL.x),
      Math.min(miniH, pBR.y - pTL.y)
    );

    ctx.restore();
  }
}
