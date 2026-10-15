/**
 * MARS PULSE - Client-Side Hash Router
 * Supports browser history, back/forward buttons, query parameters,
 * and page transitions for:
 * - #/home
 * - #/navigate (supports ?to=facilityId, ?focus=facilityId, ?from=facilityId)
 * - #/science (Scientific Mars Map, NASA landing sites, USGS geology)
 * - #/planner (Multi-stop expedition mission planner)
 * - #/facilities (supports ?cat=categoryId, ?q=searchQuery)
 * - #/emergency (supports ?scenario=scenarioId)
 */

export class AppRouter {
  constructor(colonyState) {
    this.colonyState = colonyState;
    this.routes = ['home', 'navigate', 'science', 'planner', 'facilities', 'emergency'];
    this.defaultRoute = 'home';
    
    // Bind hash change listener
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    if (!window.location.hash) {
      window.location.hash = '#/home';
    } else {
      this.handleRoute();
    }
  }

  parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, '');
    const [pathPart, queryPart] = raw.split('?');
    const path = pathPart ? pathPart.toLowerCase() : this.defaultRoute;
    const page = this.routes.includes(path) ? path : this.defaultRoute;

    const params = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      for (const [key, val] of searchParams.entries()) {
        params[key] = val;
      }
    }

    return { page, params };
  }

  handleRoute() {
    const { page, params } = this.parseHash();
    this.colonyState.setPage(page, params);
  }

  navigate(page, params = {}) {
    let hash = `#/${page}`;
    const keys = Object.keys(params);
    if (keys.length > 0) {
      const query = new URLSearchParams(params).toString();
      hash += `?${query}`;
    }
    window.location.hash = hash;
  }
}
