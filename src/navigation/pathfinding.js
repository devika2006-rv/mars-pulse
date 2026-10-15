/**
 * MARS PULSE - Graph-based Pathfinding Engine & Hazard-Aware Navigator
 * Implements Dijkstra's algorithm over the Martian road network, generating waypoints,
 * distances, travel times, route risk indicators, multi-stop mission paths,
 * and automated rerouting during road blockages.
 */

import { ROAD_NODES, ROAD_EDGES, FACILITY_TO_NODE, calculateDistance } from '../data/roadGraph.js';
import { getEdgeHazardInfo, HAZARD_ZONES } from '../data/hazardData.js';

export class PathfindingEngine {
  constructor() {
    this.nodes = ROAD_NODES;
    this.edges = ROAD_EDGES;
    this.blockedEdges = new Set();
    this.hazardMultipliers = new Map(); // edgeKey -> multiplier
  }

  /**
   * Helper to generate unique key for bidirectional edge
   */
  getEdgeKey(u, v) {
    return u < v ? `${u}--${v}` : `${v}--${u}`;
  }

  /**
   * Block a road segment (e.g. regolith collapse, crater debris)
   */
  blockEdge(u, v) {
    this.blockedEdges.add(this.getEdgeKey(u, v));
  }

  /**
   * Unblock a road segment
   */
  unblockEdge(u, v) {
    this.blockedEdges.delete(this.getEdgeKey(u, v));
  }

  isEdgeBlocked(u, v) {
    return this.blockedEdges.has(this.getEdgeKey(u, v));
  }

  /**
   * Clear all blocked edges and custom hazards
   */
  resetNetwork() {
    this.blockedEdges.clear();
    this.hazardMultipliers.clear();
  }

  /**
   * Build adjacency list considering blocked edges and profile cost weighting
   * @param {string} profile - 'SHORTEST' | 'SAFER' | 'ALTERNATIVE'
   */
  getAdjacencyList(profile = 'SHORTEST') {
    const adj = {};
    for (const nodeId in this.nodes) {
      adj[nodeId] = [];
    }

    for (const edge of this.edges) {
      const key = this.getEdgeKey(edge.from, edge.to);
      if (this.blockedEdges.has(key)) {
        continue;
      }

      const nodeA = this.nodes[edge.from];
      const nodeB = this.nodes[edge.to];
      if (!nodeA || !nodeB) continue;

      let weight = calculateDistance(nodeA, nodeB);

      // Apply Profile Weighting
      if (profile === 'SAFER') {
        const hazardInfo = getEdgeHazardInfo(edge.from, edge.to);
        weight *= hazardInfo.weightMultiplier;
      } else if (profile === 'ALTERNATIVE') {
        // Penalize central node passage to route via outer ringways/biosphere perimeter
        if (edge.from.includes('central') || edge.to.includes('central')) {
          weight *= 2.4;
        }
      }

      if (this.hazardMultipliers.has(key)) {
        weight *= this.hazardMultipliers.get(key);
      }

      adj[edge.from].push({ node: edge.to, weight, rawDistance: calculateDistance(nodeA, nodeB), edgeName: edge.name });
      adj[edge.to].push({ node: edge.from, weight, rawDistance: calculateDistance(nodeA, nodeB), edgeName: edge.name });
    }

    return adj;
  }

  /**
   * Find path between two nodes using Dijkstra's algorithm for a given profile
   */
  findPath(startNodeId, endNodeId, profile = 'SHORTEST') {
    if (!this.nodes[startNodeId] || !this.nodes[endNodeId]) {
      return {
        path: [],
        distance: 0,
        waypoints: [],
        turnDirections: [],
        error: `Invalid start (${startNodeId}) or destination (${endNodeId}) node.`
      };
    }

    if (startNodeId === endNodeId) {
      const node = this.nodes[startNodeId];
      return {
        profile,
        path: [startNodeId],
        distance: 0,
        travelTimeMinutes: '0.0',
        hazardScore: 0,
        safetyRating: 'OPTIMAL',
        waypoints: [{ x: node.x, y: node.y, z: node.z }],
        turnDirections: [{ instruction: `You are already at ${node.name}.`, distance: '0 m' }],
        error: null
      };
    }

    const adj = this.getAdjacencyList(profile);
    const distances = {};
    const previous = {};
    const previousEdge = {};
    const unvisited = new Set(Object.keys(this.nodes));

    for (const nodeId in this.nodes) {
      distances[nodeId] = Infinity;
      previous[nodeId] = null;
      previousEdge[nodeId] = null;
    }
    distances[startNodeId] = 0;

    while (unvisited.size > 0) {
      let current = null;
      let lowestDistance = Infinity;

      for (const nodeId of unvisited) {
        if (distances[nodeId] < lowestDistance) {
          lowestDistance = distances[nodeId];
          current = nodeId;
        }
      }

      if (current === null || distances[current] === Infinity) {
        break;
      }

      if (current === endNodeId) {
        break;
      }

      unvisited.delete(current);

      const neighbors = adj[current] || [];
      for (const { node: neighbor, weight, edgeName } of neighbors) {
        if (!unvisited.has(neighbor)) continue;

        const candidateDist = distances[current] + weight;
        if (candidateDist < distances[neighbor]) {
          distances[neighbor] = candidateDist;
          previous[neighbor] = current;
          previousEdge[neighbor] = edgeName;
        }
      }
    }

    // Reconstruct path
    const path = [];
    let curr = endNodeId;
    while (curr !== null) {
      path.unshift(curr);
      curr = previous[curr];
    }

    if (path.length === 0 || path[0] !== startNodeId) {
      return {
        profile,
        path: [],
        distance: 0,
        waypoints: [],
        turnDirections: [],
        error: `No route found between ${startNodeId} and ${endNodeId} (Possible road blockages).`
      };
    }

    // Compute exact geographic distance in meters and hazard exposure
    let totalPhysicalDist = 0;
    let totalHazardPenalty = 0;
    let hazardEdgeCount = 0;

    for (let i = 1; i < path.length; i++) {
      const nA = this.nodes[path[i - 1]];
      const nB = this.nodes[path[i]];
      totalPhysicalDist += calculateDistance(nA, nB);

      const hInfo = getEdgeHazardInfo(path[i - 1], path[i]);
      if (hInfo.hasHazard) {
        hazardEdgeCount++;
        totalHazardPenalty += hInfo.severity * 20; // 0 to 100 scale
      }
    }

    const distanceMeters = Math.round(totalPhysicalDist * 3.5);
    const estTravelMinutes = (distanceMeters / 60).toFixed(1);

    // Hazard Exposure Score (0 - 100%) and Safety Rating
    const hazardScore = Math.min(100, Math.round(totalHazardPenalty / Math.max(1, path.length - 1)));
    let safetyRating = 'OPTIMAL';
    if (hazardScore >= 50) {
      safetyRating = 'HIGH RISK';
    } else if (hazardScore >= 18) {
      safetyRating = 'MODERATE HAZARD';
    }

    // Generate 3D Waypoints
    const waypoints = path.map(id => {
      const n = this.nodes[id];
      return { x: n.x, y: n.y, z: n.z, name: n.name, id: n.id };
    });

    // Generate Human-Readable Turn-by-Turn Directions
    const turnDirections = [];
    const startNode = this.nodes[startNodeId];
    turnDirections.push({
      instruction: `Depart from ${startNode.name}`,
      distance: '0 m'
    });

    for (let i = 1; i < path.length; i++) {
      const fromNode = this.nodes[path[i - 1]];
      const toNode = this.nodes[path[i]];
      const segmentDist = Math.round(calculateDistance(fromNode, toNode) * 3.5);
      const streetName = previousEdge[path[i]] || 'Colony Arterial';

      if (i === path.length - 1) {
        turnDirections.push({
          instruction: `Continue along ${streetName} and arrive at ${toNode.name}`,
          distance: `${segmentDist} m`
        });
      } else {
        turnDirections.push({
          instruction: `Follow ${streetName} towards ${toNode.name}`,
          distance: `${segmentDist} m`
        });
      }
    }

    return {
      profile,
      path,
      distance: distanceMeters,
      travelTimeMinutes: estTravelMinutes,
      hazardScore,
      safetyRating,
      hazardEdgeCount,
      waypoints,
      turnDirections,
      error: null
    };
  }

  /**
   * Calculate all 3 route profiles (Shortest, Safer, Alternative)
   */
  findMultiProfileRoutes(startFacilityId, endFacilityId) {
    const startNode = FACILITY_TO_NODE[startFacilityId];
    const endNode = FACILITY_TO_NODE[endFacilityId];

    if (!startNode || !endNode) {
      return {
        error: 'One or both facilities do not have designated road connections.'
      };
    }

    const shortest = this.findPath(startNode, endNode, 'SHORTEST');
    const safer = this.findPath(startNode, endNode, 'SAFER');
    const alternative = this.findPath(startNode, endNode, 'ALTERNATIVE');

    return {
      shortest,
      safer: !safer.error ? safer : shortest,
      alternative: !alternative.error ? alternative : shortest
    };
  }

  /**
   * Find route between two facilities using default profile
   */
  findRouteBetweenFacilities(startFacilityId, endFacilityId, profile = 'SHORTEST') {
    const startNode = FACILITY_TO_NODE[startFacilityId];
    const endNode = FACILITY_TO_NODE[endFacilityId];

    if (!startNode || !endNode) {
      return {
        path: [],
        distance: 0,
        waypoints: [],
        turnDirections: [],
        error: 'One or both facilities do not have designated road connections.'
      };
    }

    return this.findPath(startNode, endNode, profile);
  }

  /**
   * Multi-Stop Waypoint Route Planner
   * Calculates a continuous route passing through an ordered array of facility IDs.
   */
  findMultiStopRoute(facilityIds = []) {
    if (!facilityIds || facilityIds.length < 2) {
      return {
        error: 'Please select at least 2 facilities for the mission route.'
      };
    }

    let totalDist = 0;
    const combinedWaypoints = [];
    const combinedTurnDirections = [];
    const legs = [];
    let maxHazardScore = 0;

    for (let i = 0; i < facilityIds.length - 1; i++) {
      const fromFac = facilityIds[i];
      const toFac = facilityIds[i + 1];

      const legRoute = this.findRouteBetweenFacilities(fromFac, toFac, 'SAFER');
      if (legRoute.error) {
        return {
          error: `Mission path blocked between stop ${i + 1} and ${i + 2}: ${legRoute.error}`
        };
      }

      totalDist += legRoute.distance;
      maxHazardScore = Math.max(maxHazardScore, legRoute.hazardScore || 0);

      legs.push({
        from: fromFac,
        to: toFac,
        distance: legRoute.distance,
        time: legRoute.travelTimeMinutes,
        turnDirections: legRoute.turnDirections
      });

      // Avoid duplicating waypoints at leg boundaries
      const sliceWaypoints = i === 0 ? legRoute.waypoints : legRoute.waypoints.slice(1);
      combinedWaypoints.push(...sliceWaypoints);

      // Append leg turns
      combinedTurnDirections.push(...legRoute.turnDirections);
    }

    const totalMinutes = (totalDist / 60).toFixed(1);

    return {
      totalDistance: totalDist,
      totalTimeMinutes: totalMinutes,
      hazardScore: maxHazardScore,
      safetyRating: maxHazardScore > 40 ? 'MODERATE RISK' : 'OPTIMAL',
      stopsCount: facilityIds.length,
      legs,
      waypoints: combinedWaypoints,
      turnDirections: combinedTurnDirections,
      error: null
    };
  }

  /**
   * Find nearest operational facility of a given category from a starting location
   */
  findNearestOperationalFacility(startNodeId, targetCategory, facilitiesList) {
    const candidates = facilitiesList.filter(
      f => f.category === targetCategory && f.status === 'OPERATIONAL'
    );

    if (candidates.length === 0) {
      return null;
    }

    let bestFacility = null;
    let shortestDistance = Infinity;
    let bestResult = null;

    for (const facility of candidates) {
      const destNode = FACILITY_TO_NODE[facility.id];
      if (!destNode) continue;

      const routeResult = this.findPath(startNodeId, destNode);
      if (!routeResult.error && routeResult.distance < shortestDistance) {
        shortestDistance = routeResult.distance;
        bestFacility = facility;
        bestResult = routeResult;
      }
    }

    return {
      facility: bestFacility,
      route: bestResult
    };
  }
}
