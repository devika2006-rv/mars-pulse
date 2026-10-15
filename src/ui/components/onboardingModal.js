/**
 * MARS PULSE - First-Time User Guidance & Onboarding Modal
 * Dismissible 3-step guide explaining origin selection, destination search, and 2D/3D route tracking.
 */

export class OnboardingModal {
  constructor(container, colonyState, router) {
    this.container = container;
    this.colonyState = colonyState;
    this.router = router;
  }

  render() {
    if (this.colonyState.onboardingDismissed) {
      this.container.innerHTML = '';
      return;
    }

    this.container.innerHTML = `
      <div class="modal-backdrop" id="onboarding-backdrop">
        <div class="onboarding-card glass-panel" role="dialog" aria-modal="true" aria-labelledby="onboard-title">
          <div class="onboarding-header">
            <div class="onboard-badge">🚀 FIRST-TIME RESIDENT GUIDE</div>
            <button id="btn-close-onboard" class="modal-close-btn" title="Dismiss Guide">✕</button>
          </div>

          <h2 id="onboard-title" class="onboarding-title">How to Navigate MARS PULSE</h2>
          <p class="onboarding-sub">
            Welcome to the Afternet colony navigation platform. Three simple steps to reach any facility on Mars:
          </p>

          <div class="onboarding-steps">
            <!-- Step 1 -->
            <div class="onboard-step">
              <div class="step-num">1</div>
              <div class="step-body">
                <div class="step-heading">Choose where you are</div>
                <div class="step-desc">
                  Your simulated beacon defaults to <strong>Ares Habitat Alpha</strong>. You can change your starting origin to any colony sector anytime.
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="onboard-step">
              <div class="step-num">2</div>
              <div class="step-body">
                <div class="step-heading">Search for a destination</div>
                <div class="step-desc">
                  Find hospitals, oxygen hubs, water extraction plants, schools, and greenhouses with instant pathfinding.
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="onboard-step">
              <div class="step-num">3</div>
              <div class="step-body">
                <div class="step-heading">Follow your route across the colony</div>
                <div class="step-desc">
                  Track turn-by-turn guidance. Seamlessly toggle between the <strong>2D Top-Down Tactical Map</strong> and the living <strong>3D Dome Colony</strong>.
                </div>
              </div>
            </div>
          </div>

          <div class="onboarding-footer">
            <button id="btn-start-exploring" class="btn-primary-glow">
              <span>Start Exploring Colony</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    this.setupEvents();
  }

  setupEvents() {
    const closeBtn = document.getElementById('btn-close-onboard');
    const startBtn = document.getElementById('btn-start-exploring');
    const backdrop = document.getElementById('onboarding-backdrop');

    const dismiss = () => {
      this.colonyState.dismissOnboarding();
      this.render();
    };

    if (closeBtn) closeBtn.addEventListener('click', dismiss);
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        dismiss();
        this.router.navigate('navigate');
      });
    }
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) dismiss();
      });
    }
  }
}
