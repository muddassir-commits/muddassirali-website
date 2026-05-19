import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createIcons, icons } from 'lucide';
import { initCursor } from './cursor.js';
import { initNav } from './nav.js';
import { initCounters } from './counter.js';
import { initAnimations } from './animations.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Prevent FOUC — ensure body is visible after JS loads
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';

  // Initialize Lucide Icons
  createIcons({ icons });

  // Initialize Custom Cursor
  initCursor();

  // Initialize Navigation
  initNav();

  // Initialize Stats Counters
  initCounters();

  // Initialize Animations
  initAnimations();

  // Setup Form Submissions
  setupContactForm();

  // Setup GA4 Event Tracking
  setupGA4Tracking();
});

/* --- Lead Generation Form Integration (n8n Webhook) --- */
const N8N_WEBHOOK_URL = 'https://automation.veloxisglobal.com/webhook/18bba731-ff30-4640-a209-407dd837b5df';

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const formCard = form.closest('.contact-form-card') || form;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI Loading State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
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
        // Show success state animation
        animateSuccessState(formCard);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      alert('Oops! Something went wrong. Please reach out directly via email or WhatsApp.');
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

function animateSuccessState(card) {
  // Clear card content and replace with checkmark animation
  gsap.to(card, {
    opacity: 0,
    y: -10,
    duration: 0.3,
    onComplete: () => {
      card.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="w-16 h-16 bg-accent-glow rounded-full flex items-center justify-center border border-accent mb-6 success-checkmark">
            <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="font-display text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
          <p class="text-text-muted max-w-sm">Thank you. Muddassir will get back to you shortly.</p>
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

  // Intercept click events for GA4 tracking
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const textStr = (target.innerText || '').toLowerCase().trim();
    const hrefStr = (target.getAttribute('href') || '').toLowerCase().trim();

    // Booking CTA Check
    const isBookCall = textStr.includes('hire me') || 
                       textStr.includes('contact') || 
                       textStr.includes('work with me') ||
                       hrefStr.includes('contact') ||
                       textStr.includes('book a call') ||
                       textStr.includes('visit mentorship');

    if (isBookCall) {
      sendGAEvent('book_call_click', {
        event_category: 'engagement',
        event_label: 'Contact/Hire CTA',
        value: 1
      });
      return;
    }

    // WhatsApp CTA Check
    const isWhatsApp = hrefStr.includes('wa.me') || 
                       hrefStr.includes('whatsapp') || 
                       textStr.includes('whatsapp');

    if (isWhatsApp) {
      sendGAEvent('whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Contact',
        value: 1
      });
      return;
    }

    // Veloxis Link Check
    const isVeloxis = hrefStr.includes('veloxisglobal.com') || hrefStr.includes('veloxis-global');
    if (isVeloxis) {
      sendGAEvent('veloxis_click', {
        event_category: 'outbound',
        event_label: 'Veloxis Systems Link',
        destination_url: hrefStr
      });
    }
  });

  // Track Form Submit
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
