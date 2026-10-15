/**
 * MARS PULSE - Voice Guidance Engine (SpeechSynthesis API)
 * Provides Google Maps-inspired spoken voice guidance for rover navigation.
 * Handles speech synthesis availability, voice selection, mute/unmute,
 * repeat, pause/resume, and collision-free turn announcements.
 */

export class VoiceNavigator {
  constructor() {
    this.isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.isMuted = false;
    this.isPaused = false;
    this.rate = 1.0;
    this.pitch = 1.05;
    this.selectedVoice = null;
    this.availableVoices = [];
    this.lastSpokenText = null;
    this.currentUtterance = null;
    this.hasUserInteracted = false;

    // Load voices
    if (this.isSupported) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.isSupported) return;
    try {
      this.availableVoices = window.speechSynthesis.getVoices() || [];
      // Prefer crisp English voices (e.g. Google US English, Samantha, Natural)
      const preferred = this.availableVoices.find(v => 
        (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')))
      ) || this.availableVoices.find(v => v.lang.startsWith('en')) || this.availableVoices[0];

      if (preferred && !this.selectedVoice) {
        this.selectedVoice = preferred;
      }
    } catch (e) {
      console.warn('Voice initialization warning:', e);
    }
  }

  getVoices() {
    if (this.availableVoices.length === 0) {
      this.initVoices();
    }
    return this.availableVoices;
  }

  setVoice(voiceURI) {
    const v = this.availableVoices.find(v => v.voiceURI === voiceURI);
    if (v) {
      this.selectedVoice = v;
    }
  }

  /**
   * Speak a voice prompt safely without overlaps
   * @param {string} text - Spoken instruction
   * @param {boolean} force - Whether to override last spoken deduplication
   */
  speak(text, force = false) {
    if (!text || !this.isSupported) return;
    if (this.isMuted || this.isPaused) return;

    // Avoid repeating identical prompt back-to-back unless forced
    if (!force && this.lastSpokenText === text) {
      return;
    }

    try {
      // Cancel any ongoing utterance to prevent queue buildup or overlapping
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }

      utterance.onend = () => {
        this.currentUtterance = null;
      };

      utterance.onerror = (e) => {
        // Many browsers trigger 'interrupted' when cancel() is called; ignore that
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn('Voice speech notice:', e.error);
        }
        this.currentUtterance = null;
      };

      this.currentUtterance = utterance;
      this.lastSpokenText = text;
      this.hasUserInteracted = true;

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis call failed:', err);
    }
  }

  /**
   * Repeat the last spoken turn instruction immediately
   */
  repeatLastInstruction() {
    if (this.lastSpokenText) {
      this.speak(this.lastSpokenText, true);
    }
  }

  /**
   * Toggle audio mute
   */
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isSupported) {
      window.speechSynthesis.cancel();
    }
    return this.isMuted;
  }

  setMuted(muted) {
    this.isMuted = !!muted;
    if (this.isMuted && this.isSupported) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Pause speech announcements
   */
  pause() {
    this.isPaused = true;
    if (this.isSupported) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Resume speech announcements
   */
  resume() {
    this.isPaused = false;
  }

  /**
   * Cancel all speech
   */
  cancel() {
    this.lastSpokenText = null;
    this.currentUtterance = null;
    if (this.isSupported) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Announce dynamic route recalculation
   */
  announceReroute(detourReason = 'Road blockage detected') {
    const text = `Rerouting. ${detourReason}. New trajectory calculated.`;
    this.speak(text, true);
  }

  /**
   * Announce destination arrival
   */
  announceArrival(destName) {
    const text = `You have arrived at your destination: ${destName}. Navigation complete.`;
    this.speak(text, true);
  }
}

export const voiceNavigator = new VoiceNavigator();
