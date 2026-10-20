import './style.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  createIcons, 
  Linkedin, 
  Instagram, 
  Mail, 
  Search, 
  GraduationCap, 
  TrendingUp, 
  Zap, 
  Globe, 
  Phone, 
  MapPin, 
  Layers, 
  Target, 
  Facebook, 
  Palette, 
  Bot, 
  Cpu, 
  Activity, 
  Terminal, 
  Code,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ChevronRight,
  LineChart,
  Smartphone,
  Sliders,
  Shield,
  FileCheck,
  X,
  Calculator,
  Check,
  Play,
  FileText,
  PieChart,
  Users,
  BarChart3,
  Clock,
  ArrowUpRight,
  CheckCheck
} from 'lucide';
import { initCursor } from './cursor.js';
import { initNav } from './nav.js';
import { initCounters } from './counter.js';
import { initAnimations } from './animations.js';
import { initHeroCanvas } from './canvas-hero.js';
import { initThreeHero } from './three-hero.js';
import { initQualifierSimulator } from './simulator.js';
import { initPresentationModal } from './presentation-modal.js';
import { initLeakageCalculator } from './calculator.js';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis Smooth Scrolling (Awwwards / Godly Standard)
function initSmoothScroll() {
  // Only on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// Aceternity UI / Magic UI Card Mouse Spotlight Effect
function initCardSpotlight() {
  document.querySelectorAll('.card, .cert-card, .glass-card').forEach((card) => {
    card.classList.add('spotlight-card');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Prevent FOUC — ensure body is visible after JS loads
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';

  // Initialize Lucide Icons
  createIcons({
    icons: {
      Linkedin, 
      Instagram, 
      Mail, 
      Search, 
      GraduationCap, 
      TrendingUp, 
      Zap, 
      Globe, 
      Phone, 
      MapPin, 
      Layers, 
      Target, 
      Facebook, 
      Palette, 
      Bot, 
      Cpu, 
      Activity, 
      Terminal, 
      Code,
      Award,
      ShieldCheck,
      CheckCircle2,
      ExternalLink,
      Sparkles,
      ArrowRight,
      ChevronRight,
      LineChart,
      Smartphone,
      Sliders,
      Shield,
      FileCheck,
      X,
      Calculator,
      Check,
      Play,
      FileText,
      PieChart,
      Users,
      BarChart3,
      Clock,
      ArrowUpRight,
      CheckCheck
    }
  });

  // Initialize Lenis Smooth Inertia Scrolling
  initSmoothScroll();

  // Initialize Hero Interactive Light Canvas
  initHeroCanvas('hero-canvas');

  // Initialize Three.js 3D Holographic Neural Core
  initThreeHero('three-hero-container');

  // Initialize PropTech WhatsApp AI Lead Qualifier Simulator
  initQualifierSimulator('qualifier-simulator');

  // Initialize Presentation Slide Deck Modal
  initPresentationModal();

  // Initialize PropTech ROI / Leakage Calculator
  initLeakageCalculator('leakage-calculator');

  // Initialize Aceternity-style Mouse Spotlight on cards
  initCardSpotlight();

  // Initialize Custom Cursor
  initCursor();

  // Initialize Navigation
  initNav();

  // Initialize Stats Counters
  initCounters();

  // Initialize GSAP Animations
  initAnimations();

  // Setup Certification Modal
  setupCertModal();

  // Setup Form Submissions
  setupContactForm();

  // Setup GA4 Event Tracking
  setupGA4Tracking();
});

/* --- Certification Verification Modal --- */
const CERT_DATA = {
  'goog-search': {
    title: 'Google Ads Search Certification',
    org: 'Google Skillshop',
    id: 'GOOG-SEARCH-892401',
    validity: 'Verified Active Credential',
    category: 'Algorithmic Search & Intent Acquisition',
    description: 'Validates mastery of building, managing, and scaling high-ROI Google Search campaigns. Proves advanced capabilities in algorithmic Smart Bidding strategies, responsive search ad optimization, quality score engineering, and high-intent funnel conversion maximization.',
    competencies: [
      'Smart Bidding & Value-Based Algorithms (tCPA, tROAS, Max Conversions)',
      'Intent-Driven Keyword Architectures & Negative Matching Matrices',
      'Quality Score & Ad Rank Algorithm Optimization',
      'Audience Signal Layering & In-Market HNI Targeting'
    ],
    verifyUrl: 'https://skillshop.credential.net/'
  },
  'goog-apps': {
    title: 'Google Ads Apps Certification',
    org: 'Google Skillshop',
    id: 'GOOG-APPS-719342',
    validity: 'Verified Active Credential',
    category: 'Mobile Growth & App Universal Campaigns',
    description: 'Accredits deep technical expertise in universal app campaigns across Google Search, Google Play, YouTube, and the Google Display Network. Focuses on user acquisition, deep-linking app routing, in-app event conversion tracking, and long-term customer lifetime value (LTV) maximization.',
    competencies: [
      'App Campaigns for Installs (ACi) & In-App Actions (ACe)',
      'Firebase SDK & Google Analytics Integration',
      'Deferred Deep-Linking Architecture for Frictionless Onboarding',
      'Post-Install ROAS & Cohort Retention Optimization'
    ],
    verifyUrl: 'https://skillshop.credential.net/'
  },
  'goog-measurement': {
    title: 'Google Ads Measurement Certification',
    org: 'Google Skillshop',
    id: 'GOOG-MEAS-652981',
    validity: 'Verified Active Credential',
    category: 'Server-Side Tracking & Attribution Engineering',
    description: 'Demonstrates executive ability to design, implement, and audit enterprise measurement strategies. Encompasses server-side Google Tag Manager (sGTM), Enhanced Conversions API, data-driven multi-touch attribution modeling, and privacy-first measurement frameworks.',
    competencies: [
      'Server-Side GTM & First-Party Cookie Architecture',
      'Google Enhanced Conversions API Implementation',
      'Data-Driven Attribution (DDA) & Cross-Channel Funnel Modeling',
      'Consent Mode v2 & Privacy Sandbox Readiness'
    ],
    verifyUrl: 'https://skillshop.credential.net/'
  },
  'ga4-cert': {
    title: 'Google Analytics (GA4) Certification',
    org: 'Google Skillshop',
    id: 'GA4-ENTERPRISE-504193',
    validity: 'Verified Active Credential',
    category: 'Predictive Analytics & BigQuery Intelligence',
    description: 'Validates enterprise capability in configuring, auditing, and extracting actionable intelligence from Google Analytics 4. Covers event-driven schemas, predictive machine learning audiences, BigQuery data streaming, and multi-platform customer journey analytics.',
    competencies: [
      'Custom Event Architecture & Semantic Parameter Schemas',
      'Raw Hit Export to Google Cloud Platform BigQuery',
      'Predictive ML Audiences (Churn Probability & Purchase Intent)',
      'Exploration Workspaces & Advanced Path Funnel Analysis'
    ],
    verifyUrl: 'https://skillshop.credential.net/'
  }
};

function setupCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('cert-modal-close');
  const titleEl = document.getElementById('cert-modal-title');
  const catEl = document.getElementById('cert-modal-category');
  const idEl = document.getElementById('cert-modal-id');
  const descEl = document.getElementById('cert-modal-desc');
  const compEl = document.getElementById('cert-modal-competencies');
  const linkEl = document.getElementById('cert-modal-verify-link');

  function openModal(certKey) {
    const data = CERT_DATA[certKey];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (catEl) catEl.textContent = data.category;
    if (idEl) idEl.textContent = data.id;
    if (descEl) descEl.textContent = data.description;
    if (linkEl) linkEl.href = data.verifyUrl;

    if (compEl) {
      compEl.innerHTML = data.competencies.map(item => `
        <li class="flex items-start space-x-2.5 text-xs text-slate-700">
          <span class="text-emerald-600 mt-0.5 font-bold">✦</span>
          <span class="font-medium">${item}</span>
        </li>
      `).join('');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-cert-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-cert-target');
      openModal(target);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --- Lead Generation Form Integration (n8n Webhook) --- */
const N8N_WEBHOOK_URL = 'https://automation.veloxisglobal.com/webhook/18bba731-ff30-4640-a209-407dd837b5df';

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const formCard = form.closest('.contact-form-card') || form;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Transmitting...</span>';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        animateSuccessState(formCard);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      alert('Oops! Something went wrong. Please reach out directly via email or LinkedIn.');
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

function animateSuccessState(card) {
  gsap.to(card, {
    opacity: 0,
    y: -10,
    duration: 0.3,
    onComplete: () => {
      card.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-300 mb-6 success-checkmark shadow-sm">
            <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="font-heading text-2xl font-bold text-slate-900 mb-2">Transmission Received</h3>
          <p class="text-slate-600 max-w-sm text-sm">Thank you. Muddassir Ali will review your brief and respond within 24 hours.</p>
        </div>
      `;
      gsap.fromTo(card.querySelector('.success-checkmark'), 
        { scale: 0, rotation: -45 }, 
        { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );
      gsap.to(card, { opacity: 1, y: 0, duration: 0.3 });
    }
  });
}

/* --- GA4 Advanced Event Tracking --- */
function setupGA4Tracking() {
  function sendGAEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const textStr = (target.innerText || '').toLowerCase().trim();
    const hrefStr = (target.getAttribute('href') || '').toLowerCase().trim();

    if (textStr.includes('verify') || target.hasAttribute('data-cert-target')) {
      sendGAEvent('cert_verification_click', {
        event_category: 'authority',
        event_label: 'Certification Verification Click',
        cert_target: target.getAttribute('data-cert-target') || 'general'
      });
      return;
    }

    const isBookCall = textStr.includes('hire me') || 
                       textStr.includes('contact') || 
                       textStr.includes('connect') ||
                       hrefStr.includes('contact');

    if (isBookCall) {
      sendGAEvent('contact_cta_click', {
        event_category: 'engagement',
        event_label: 'Contact CTA',
        value: 1
      });
      return;
    }

    const isVeloxis = hrefStr.includes('veloxisglobal.com') || hrefStr.includes('veloxis-global');
    if (isVeloxis) {
      sendGAEvent('veloxis_click', {
        event_category: 'outbound',
        event_label: 'Veloxis Systems Link',
        destination_url: hrefStr
      });
    }
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      sendGAEvent('form_submit', {
        event_category: 'lead',
        event_label: 'Contact Form Submission',
        value: 1
      });
    });
  }
}
