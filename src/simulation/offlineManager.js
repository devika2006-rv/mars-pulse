/**
 * MARS PULSE - Offline Explorer & Cache Manager
 * Manages ServiceWorker caching, client-side offline datasets,
 * and colony offline cache pack downloads.
 */

import { FACILITIES } from '../data/facilities.js';
import { ROAD_NODES, ROAD_EDGES } from '../data/roadGraph.js';
import { NASA_LANDING_SITES, SCIENTIFIC_GEOLOGY_UNITS, COLONY_SCIENCE_STATIONS } from '../data/scienceData.js';
import { HAZARD_ZONES } from '../data/hazardData.js';
import { colonyState } from './colonyState.js';

const CACHE_KEY = 'mars_pulse_colony_cache_v2';

export class OfflineManager {
  constructor() {
    this.cacheInfo = this.loadCacheInfo();
  }

  loadCacheInfo() {
    try {
      const data = localStorage.getItem(CACHE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Could not read offline cache info:', e);
    }
    return {
      isDownloaded: false,
      timestamp: null,
      sizeBytes: 0,
      itemCount: 0
    };
  }

  /**
   * Download and persist full colony pack to offline cache
   */
  async downloadColonyCache() {
    const colonyPayload = {
      version: '2.4.0',
      timestamp: new Date().toISOString(),
      facilities: FACILITIES,
      roadGraph: { nodes: ROAD_NODES, edges: ROAD_EDGES },
      scienceData: {
        landingSites: NASA_LANDING_SITES,
        geologyUnits: SCIENTIFIC_GEOLOGY_UNITS,
        stations: COLONY_SCIENCE_STATIONS
      },
      hazards: HAZARD_ZONES
    };

    const serialized = JSON.stringify(colonyPayload);
    const sizeBytes = new Blob([serialized]).size;
    const itemCount = FACILITIES.length + Object.keys(ROAD_NODES).length + ROAD_EDGES.length + NASA_LANDING_SITES.length;

    // Cache in CacheStorage if available
    if ('caches' in window) {
      try {
        const cache = await caches.open('mars-pulse-runtime-v2');
        await cache.put(
          new Request('/api/colony-pack.json'),
          new Response(serialized, {
            headers: { 'Content-Type': 'application/json' }
          })
        );
      } catch (err) {
        console.warn('CacheStorage not supported or restricted:', err);
      }
    }

    // Persist status in localStorage
    const info = {
      isDownloaded: true,
      timestamp: new Date().toLocaleString(),
      sizeBytes,
      sizeFormatted: `${(sizeBytes / 1024).toFixed(1)} KB`,
      itemCount
    };

    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(info));
    } catch (e) {}

    this.cacheInfo = info;
    colonyState.notify('OFFLINE_CACHE_UPDATED', info);
    return info;
  }

  getCacheStatus() {
    return this.cacheInfo;
  }

  clearCache() {
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch (e) {}
    this.cacheInfo = { isDownloaded: false, timestamp: null, sizeBytes: 0, itemCount: 0 };
    colonyState.notify('OFFLINE_CACHE_UPDATED', this.cacheInfo);
  }
}

export const offlineManager = new OfflineManager();
