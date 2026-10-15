# MARS PULSE 🪐🔴
> **A Living 3D Mars Dome Colony | Voice-Guided Dual-Mode Navigation | Scientific Planetary Intelligence**  
> *Hackathon: AFTERNET • Track A: Rebuild • Colony Year: 2050*

"Earth was home. Mars is our next beginning. Explore beyond Earth. Find your way. Protect every life."

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/devika2006-rv/mars-pulse](https://github.com/devika2006-rv/mars-pulse)
- **Live Deployment:** [https://devika2006-rv.github.io/mars-pulse/](https://devika2006-rv.github.io/mars-pulse/)

---

## 🌟 Key Capabilities & Features

### 1. 3D Procedural Biodome Colony (`Three.js / WebGL`)
* **Giant Geodesic Protective Dome:** Hemispherical transparent biodome shield enclosing the colony with physical transmission, meridian titanium ribs, latitude structural rings, and apex atmospheric scrubber spire.
* **3-Mode Shield Controls:** `GLASS` (transparent crystal), `HOLO` (cybernetic energy lattice), and `OPEN` (street-level view).
* **16 Procedural Futuristic Architectures:** Central Command Spire, MarsCare Medical Center, Nova University, Hydroponic Biospheres, Helios Fusion Reactor, Oxygen Hubs, Deep Blast Shelters, and Orbital Spaceport with zero external heavy 3D assets (100% procedural WebGL geometries).
* **Living Colony Dynamic Elements:** 6 autonomous hover craft with banking physics, animated thruster glows, dual counter-rotating plasma rings, 3,500+ procedural cosmos stars, Milky Way nebula, Phobos, and Deimos.

### 2. Dual-Mode Smart Navigation (`3D Dome + 2D Interactive Map`)
* **Dual Viewport:** Instant toggle between cinematic 3D orbital/first-person view and a high-contrast 2D tactical navigation grid.
* **Graph-Based Routing:** Full Dijkstra pathfinding over real connected Martian road graph (never cuts through structures).
* **Multi-Criteria Optimization:** Choose between *Fastest*, *Safest*, and *Alternative* routes with dynamic hazard cost weightings.
* **Dynamic Hazard Avoidance & Auto-Rerouting:** Detects blocked roads (dust storms, radiation leaks, seismic fissures) and instantly re-routes along safe conduits.

### 3. Voice-Guided Turn-by-Turn Navigation (Google Maps-Style)
* **Real-time Voice Instructions:** Spoken directions via browser Web Speech `SpeechSynthesis` API ("In 80 metres, turn left onto Meridian Way", "Arrived at MarsCare Medical Center").
* **Directional HUD & Guidance Card:** Active step indicator, distance countdown, maneuver arrows, mute/unmute, replay instruction, and step-through simulation.
* **Adaptive Pronunciation:** Engineered phonetic vocabulary for Martian facility names and terminology.

### 4. Interactive Scientific Mars Map
* **NASA Planetary Science Layers:** USGS Astrogeology color base, Elevation/MOLA topographic relief, Thermal Inertia (THEMIS), Surface Dust Hazards, and authentic Landing Sites (Perseverance, Curiosity, Viking, InSight).
* **Cross-Disciplinary Planetary Data:** Geological coordinates, elevation profiles, mineral distributions, and atmospheric pressure monitoring.

### 5. Multi-Page Architecture & Resilient Offline Intelligence
* **Pages:**
  * **Home:** Cinematic hero preview, quick destination chips, feature cards, and colony overview.
  * **Navigate:** Turn-by-turn routing with 3D/2D views, voice guidance, search bar, and waypoint indicators.
  * **Scientific Map:** Interactive scientific planetary layers and exploration datasets.
  * **Expedition Planner:** Multi-waypoint route planner with oxygen and battery budget calculators.
  * **Facilities:** Directory of all 16 colony installations with real-time status and telemetry.
  * **Emergency Centre:** Rapid life-support triage, oxygen crisis response, and safe shelter navigation.
* **100% Offline Capable:** Pure client-side execution, LocalStorage sync for offline state, zero remote server runtime dependencies.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | Vanilla Modern JavaScript (ES Modules), HTML5, CSS3 Variables |
| **Build & Bundler** | Vite 5 |
| **3D Rendering** | Three.js (r160), WebGL2 / WebGL |
| **Audio & Speech** | Web Speech API (`SpeechSynthesis`, `SpeechSynthesisUtterance`) |
| **Algorithms** | Dijkstra Shortest Path, Min-Priority Queue, Graph Traversal, Catmull-Rom Splines |
| **Cartography & Science**| HTML5 Canvas 2D Context, USGS & NASA MOLA Reference Cartography |
| **Testing** | Node.js Test Suite (114 Unit & Integration Tests, 100% passing) |

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/devika2006-rv/mars-pulse.git

# 2. Enter project directory
cd mars-pulse

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open your browser at `http://localhost:5173/`.

### Production Build
```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

### Running Automated Tests
```bash
# Run the complete test suite (114 tests)
node test-integration.mjs
```

---

## 📂 Project Structure

```
mars-pulse/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to Pages
├── public/                       # Static public assets
├── src/
│   ├── config/
│   │   ├── facilities.js         # 16 colony facilities (coordinates, telemetry, types)
│   │   ├── roadGraph.js          # Road network nodes and edges
│   │   └── scienceLayers.js      # Planetary datasets and NASA coordinates
│   ├── navigation/
│   │   ├── pathfinding.js        # Dijkstra graph routing engine
│   │   ├── voiceGuidance.js      # Speech synthesis turn-by-turn voice engine
│   │   └── navigationController.js # Guidance state machine & HUD
│   ├── scene/
│   │   ├── scene3D.js            # Three.js viewport & WebGL engine
│   │   ├── createDome.js         # Procedural biodome & shield shader
│   │   ├── proceduralBuildings.js # 16 procedural architectural models
│   │   └── vehicleTraffic.js     # Autonomous hover vehicles & splines
│   ├── views/
│   │   ├── map2D.js              # Tactical 2D canvas map
│   │   ├── homeView.js           # Landing page
│   │   ├── scienceView.js        # NASA planetary layers view
│   │   ├── plannerView.js        # Multi-stop expedition planner
│   │   ├── facilitiesView.js     # Facility directory
│   │   └── emergencyView.js      # Crisis triage simulator
│   ├── utils/
│   │   └── offlineStorage.js     # LocalStorage state persistence
│   ├── main.js                   # Client-side router & bootstrap
│   └── style.css                 # Futuristic design system (CSS variables)
├── index.html                    # Root HTML entrypoint
├── vite.config.js                # Vite build configuration
├── test-integration.mjs          # Comprehensive test suite (114 tests)
└── MARS_PULSE_TECHNICAL_DOCUMENTATION.md # Full technical documentation
```

---

## 📜 License
Developed for the **AFTERNET Hackathon 2050** under the MIT License.
