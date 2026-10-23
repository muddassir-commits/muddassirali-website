/**
 * Interactive Presentation Slide Deck Viewer Modal
 * Inspired by Awwwards & Godly deck presentations
 */

const PRESENTATION_DECKS = {
  'benchmarks-2026': {
    title: '2026 North India Real Estate Ad Cost & Lead Gen Benchmarks',
    subtitle: 'Proprietary audit of 749 active real estate developer portals across UP & Delhi NCR',
    badge: 'Research Benchmark Deck',
    slides: [
      {
        slideNum: 1,
        title: 'Executive Research Summary',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600 leading-relaxed">
              Between Q3 2024 and Q1 2026, Veloxis Global conducted an algorithmic audit across <strong>749 real estate websites and landing pages</strong> running active Meta and Google ad campaigns in Lucknow, Noida, Greater Noida, and Gurgaon.
            </p>
            <div class="grid grid-cols-2 gap-3 mt-4">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span class="block font-mono text-[10px] uppercase text-slate-500">Sample Size</span>
                <span class="font-mono text-xl font-bold text-slate-900">749 Portals</span>
              </div>
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span class="block font-mono text-[10px] uppercase text-slate-500">Active Ad Spend Audited</span>
                <span class="font-mono text-xl font-bold text-blue-600">₹4.2 Cr+</span>
              </div>
            </div>
            <p class="text-xs text-slate-500 italic">Authored and presented by Muddassir Ali, Founder & MD @ Veloxis Global.</p>
          </div>
        `
      },
      {
        slideNum: 2,
        title: 'The Skyrocketing Ad CPA Crisis',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              Across Delhi NCR and Lucknow, Meta Ad CPMs have surged by <strong>184%</strong> since 2022. Real estate developers relying on standard lead forms now face exorbitant acquisition costs.
            </p>
            <div class="space-y-2 pt-2">
              <div class="flex justify-between text-xs font-mono">
                <span class="text-slate-600">2022 Avg Lead CPA</span>
                <span class="font-bold text-slate-900">₹280 - ₹450</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-blue-400 h-2 rounded-full" style="width: 35%"></div>
              </div>

              <div class="flex justify-between text-xs font-mono pt-2">
                <span class="text-slate-600">2026 Avg Lead CPA (Unoptimized)</span>
                <span class="font-bold text-rose-600">₹980 - ₹1,650</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2">
                <div class="bg-rose-500 h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
              <strong>Key Finding:</strong> 72% of developers did not adjust bidding strategies for smart algorithmic signals, causing auction inflation.
            </div>
          </div>
        `
      },
      {
        slideNum: 3,
        title: 'Anatomy of Conversion Leakage',
        content: `
          <div class="grid grid-cols-2 gap-3.5">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="font-mono text-2xl font-bold text-rose-600">56%</span>
              <h4 class="font-semibold text-xs text-slate-900 mt-1">Zero Conversion Tracking</h4>
              <p class="text-[11.5px] text-slate-600 mt-1">No Meta Pixel or GA4 custom conversion events configured on thank-you triggers.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="font-mono text-2xl font-bold text-amber-600">60%</span>
              <h4 class="font-semibold text-xs text-slate-900 mt-1">No Instant WhatsApp</h4>
              <p class="text-[11.5px] text-slate-600 mt-1">Zero automated WhatsApp responders. Buyer inquiry sat dormant for 6+ hours.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="font-mono text-2xl font-bold text-blue-600">47%</span>
              <h4 class="font-semibold text-xs text-slate-900 mt-1">Broken Inquiry Forms</h4>
              <p class="text-[11.5px] text-slate-600 mt-1">Form submit validation errors, failed API webhooks, or 8+ unnecessary input fields.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span class="font-mono text-2xl font-bold text-emerald-600">35%</span>
              <h4 class="font-semibold text-xs text-slate-900 mt-1">Double Defect</h4>
              <p class="text-[11.5px] text-slate-600 mt-1">Neither functional forms nor direct messaging available on high-budget traffic.</p>
            </div>
          </div>
        `
      },
      {
        slideNum: 4,
        title: 'The High-Velocity Veloxis Solution',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              Replacing legacy contact forms with <strong>Dedicated High-Speed Microsites</strong> and a <strong>60-Second WhatsApp AI Auto-Responder</strong> immediately restored conversion rates:
            </p>
            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between text-xs font-semibold text-emerald-900">
            </div>
            <p class="text-xs text-slate-500 font-mono text-center">Full whitepaper available upon request via Veloxis Global.</p>
          </div>
        `
      }
    ]
  },
  'lead-system-architecture': {
    title: 'The Architecture of an Automated Real Estate Lead System',
    subtitle: 'End-to-end technical blueprint for high-velocity buyer qualification and CRM synchronization',
    badge: 'System Architecture Blueprint',
    slides: [
      {
        slideNum: 1,
        title: 'Full Pipeline Architecture Overview',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              An institutional real estate lead engine is an interconnected four-tier pipeline designed to eliminate manual intervention:
            </p>
            <div class="space-y-2.5 font-mono text-xs">
              <div class="p-2.5 rounded bg-blue-50 border border-blue-200 text-blue-900 flex items-center justify-between">
                <span>1. Acquisition Tier</span>
                <span class="text-blue-600 font-semibold">Meta & Google Ads API</span>
              </div>
              <div class="p-2.5 rounded bg-indigo-50 border border-indigo-200 text-indigo-900 flex items-center justify-between">
                <span>2. Ingestion & Conversion</span>
                <span class="text-indigo-600 font-semibold">Vite/Edge Landing Engine</span>
              </div>
              <div class="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                <span>3. Autonomous Qualification</span>
                <span class="text-emerald-600 font-semibold">WhatsApp Cloud API + n8n</span>
              </div>
              <div class="p-2.5 rounded bg-slate-100 border border-slate-300 text-slate-900 flex items-center justify-between">
                <span>4. Operational Closing</span>
                <span class="text-slate-600 font-semibold">HubSpot / Salesforce Sync</span>
              </div>
            </div>
          </div>
        `
      },
      {
        slideNum: 2,
        title: 'The 60-Second Conversion Window',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              In high-ticket real estate purchases (₹1 Cr - ₹15 Cr), intent decays rapidly. Research on buyer intent proves:
            </p>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-800">Leads contacted within 5 minutes:</span>
                <span class="text-xs font-bold text-emerald-600 font-mono">21x higher qualification</span>
              </div>
              <div class="flex items-center justify-between border-t border-slate-200 pt-2">
                <span class="text-xs font-semibold text-slate-800">Veloxis Autonomous Target:</span>
                <span class="text-xs font-bold text-blue-600 font-mono">&lt; 60 seconds (100% automated)</span>
              </div>
            </div>
            <p class="text-xs text-slate-500">
              While human telecallers take 4–12 hours, the WhatsApp AI qualifier fires before the buyer leaves the browser screen.
            </p>
          </div>
        `
      },
      {
        slideNum: 3,
        title: 'Conversational Qualification State Machine',
        content: `
          <div class="space-y-3">
            <p class="text-xs text-slate-600">The WhatsApp bot executes a strict deterministic state machine:</p>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-blue-600 text-white font-mono flex items-center justify-center text-[10px]">A</span>
                <span><strong>Intent Classification:</strong> Self-Use vs. Pure Capital Appreciation</span>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono flex items-center justify-center text-[10px]">B</span>
                <span><strong>Budget Verification:</strong> Instant filtering against unit price floor</span>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono flex items-center justify-center text-[10px]">C</span>
                <span><strong>Brochure & Floor Plan Dispatch:</strong> Signed PDF link delivery</span>
              </div>
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-slate-800 text-white font-mono flex items-center justify-center text-[10px]">D</span>
                <span><strong>Physical Site Visit Booking:</strong> Calendar slot generation</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  'budget-leakage-india': {
    title: 'Why 70% of Real Estate Ad Budgets Leak in India',
    subtitle: 'Strategic diagnostic for developers, property brokers, and growth marketers',
    badge: 'Strategic Diagnostic',
    slides: [
      {
        slideNum: 1,
        title: 'The Real Estate Marketing Paradox',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              Indian real estate developers spend between ₹25 Lakhs to ₹2 Crores per quarter on digital performance campaigns. Yet over <strong>70% of this budget produces zero pipeline value</strong>.
            </p>
            <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
              <h4 class="font-bold text-xs text-rose-900 uppercase font-mono">The 3 Fatal Leakage Points:</h4>
              <ol class="text-xs text-rose-800 space-y-1.5 list-decimal pl-4">
                <li>Blind Ad Spend with no feedback loop into Meta Conversions API.</li>
                <li>Long 10-field desktop web forms on 92% mobile traffic.</li>
                <li>Telecallers manually dialing junk numbers 24 hours later.</li>
              </ol>
            </div>
          </div>
        `
      },
      {
        slideNum: 2,
        title: 'Form Friction vs Conversational Flow',
        content: `
          <div class="space-y-3">
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span class="font-bold text-rose-600 block mb-1">Traditional Form</span>
                <ul class="text-slate-600 space-y-1 text-[11px]">
                  <li>- 8-12 form inputs</li>
                  <li>- 4.2% submit rate</li>
                  <li>- 48% invalid phone numbers</li>
                  <li>- 18 hr response delay</li>
                </ul>
              </div>
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <span class="font-bold text-emerald-700 block mb-1">Veloxis WhatsApp Flow</span>
                <ul class="text-emerald-800 space-y-1 text-[11px]">
                  <li>+ 1-tap WhatsApp click</li>
                  <li>+ 18.6% engagement rate</li>
                  <li>+ 100% verified WhatsApp IDs</li>
                  <li>+ &lt;60s immediate response</li>
                </ul>
              </div>
            </div>
            <p class="text-xs text-slate-600 mt-2">
              Conversational flows eliminate fake lead capture because WhatsApp accounts are inherently pre-verified phone numbers.
            </p>
          </div>
        `
      },
      {
        slideNum: 3,
        title: 'The Veloxis Turnkey Framework',
        content: `
          <div class="space-y-4">
            <p class="text-sm text-slate-600">
              By engineering an automated pipeline, real estate firms recover their wasted ad capital and triple verified site visits without spending a rupee more on advertising.
            </p>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="font-mono text-xs uppercase text-slate-500 font-semibold block mb-1">Turnkey Implementation Timeline</span>
              <span class="font-heading text-xl font-bold text-slate-900 block">7 Working Days to Live Deployment</span>
              <p class="text-xs text-slate-600 mt-2">Includes Meta Ads setup, microsite architecture, n8n webhook routing, and WhatsApp Cloud bot training.</p>
            </div>
            <div class="text-center pt-2">
              <a href="/contact" class="btn btn-primary !text-xs !py-2.5 !px-5">
                Book Infrastructure Audit &rarr;
              </a>
            </div>
          </div>
        `
      }
    ]
  }
};

let currentDeckId = null;
let currentSlideIndex = 0;

export function initPresentationModal() {
  const modal = document.getElementById('presentation-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('presentation-modal-close');
  const titleEl = document.getElementById('presentation-modal-title');
  const badgeEl = document.getElementById('presentation-modal-badge');
  const subtitleEl = document.getElementById('presentation-modal-subtitle');
  const slideContentEl = document.getElementById('presentation-slide-content');
  const slideNumEl = document.getElementById('presentation-slide-num');
  const totalSlidesEl = document.getElementById('presentation-total-slides');
  const prevBtn = document.getElementById('presentation-prev-btn');
  const nextBtn = document.getElementById('presentation-next-btn');
  const progressBar = document.getElementById('presentation-progress-fill');

  function renderSlide() {
    const deck = PRESENTATION_DECKS[currentDeckId];
    if (!deck) return;

    const slide = deck.slides[currentSlideIndex];
    if (!slide) return;

    if (titleEl) titleEl.textContent = deck.title;
    if (badgeEl) badgeEl.textContent = deck.badge;
    if (subtitleEl) subtitleEl.textContent = deck.subtitle;
    if (slideNumEl) slideNumEl.textContent = currentSlideIndex + 1;
    if (totalSlidesEl) totalSlidesEl.textContent = deck.slides.length;

    if (slideContentEl) {
      slideContentEl.innerHTML = `
        <div class="transition-all duration-300">
          <h3 class="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>${slide.title}</span>
            <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Slide ${slide.slideNum} of ${deck.slides.length}</span>
          </h3>
          <div>${slide.content}</div>
        </div>
      `;
    }

    if (progressBar) {
      const pct = ((currentSlideIndex + 1) / deck.slides.length) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (prevBtn) {
      prevBtn.disabled = currentSlideIndex === 0;
      prevBtn.classList.toggle('opacity-40', currentSlideIndex === 0);
      prevBtn.classList.toggle('cursor-not-allowed', currentSlideIndex === 0);
    }

    if (nextBtn) {
      nextBtn.disabled = currentSlideIndex === deck.slides.length - 1;
      nextBtn.classList.toggle('opacity-40', currentSlideIndex === deck.slides.length - 1);
      nextBtn.classList.toggle('cursor-not-allowed', currentSlideIndex === deck.slides.length - 1);
    }
  }

  function openDeck(deckId) {
    if (!PRESENTATION_DECKS[deckId]) return;
    currentDeckId = deckId;
    currentSlideIndex = 0;
    renderSlide();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextSlide() {
    const deck = PRESENTATION_DECKS[currentDeckId];
    if (deck && currentSlideIndex < deck.slides.length - 1) {
      currentSlideIndex++;
      renderSlide();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderSlide();
    }
  }

  // Bind trigger buttons across the site
  document.querySelectorAll('[data-presentation-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-presentation-target');
      openDeck(target);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}
