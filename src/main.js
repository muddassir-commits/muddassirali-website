// Enhanced Vanilla JS with GSAP Engine & Network Motion Graphics
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createIcons, icons } from "lucide";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------
  // 0. ICONS INITIALIZATION
  // --------------------------------------------------------
  createIcons({ icons });

  // --------------------------------------------------------
  // 1. CANVAS MOTION GRAPHICS (Fluid Plasma Engine)
  // --------------------------------------------------------
  const canvas = document.getElementById("ambient-particles");
  const ctx = canvas.getContext("2d");

  let particles = [];
  let w, h;
  const targetFPS = 60;
  const frameDelay = 1000 / targetFPS;
  let lastFrameTime = 0;

  const resizeCanvas = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  class Node {
    constructor() {
      this.init();
    }
    init() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? "rgba(139, 92, 246, 0.3)" : "rgba(59, 130, 246, 0.3)";
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Mouse Attraction
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        this.x += dx * 0.01;
        this.y += dy * 0.01;
      }

      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  const initNetwork = () => {
    particles = [];
    const count = window.innerWidth < 768 ? 30 : 80;
    for (let i = 0; i < count; i++) {
      particles.push(new Node());
    }
  };

  const renderNetwork = (now) => {
    requestAnimationFrame(renderNetwork);
    if (now - lastFrameTime < frameDelay) return;
    lastFrameTime = now;

    ctx.clearRect(0, 0, w, h);

    // Draw Connections with Pulse effect
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          const opacity = (1 - distance / 150) * 0.2;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  window.addEventListener('resize', () => { resizeCanvas(); initNetwork(); });
  resizeCanvas();
  initNetwork();

  if (window.matchMedia("(pointer: fine)").matches) {
    requestAnimationFrame(renderNetwork);
  } else {
    canvas.style.display = "none";
  }

  // --------------------------------------------------------
  // 1.1 BENTO BOX GLOW TRACKING
  // --------------------------------------------------------
  const boxes = document.querySelectorAll('.bento-box');
  boxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      box.style.setProperty('--mouse-x', `${x}%`);
      box.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  // --------------------------------------------------------
  // 1.2 HERO GLOW FOLLOW
  // --------------------------------------------------------
  const heroContainer = document.querySelector('.hero-container');
  const heroGlow = document.getElementById('hero-glow-follow');
  
  if (heroContainer && heroGlow) {
    heroContainer.addEventListener('mousemove', (e) => {
      const rect = heroContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(heroGlow, { x, y, duration: 0.6, ease: "power2.out" });
    });
  }

  // --------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT
  // --------------------------------------------------------
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // --------------------------------------------------------
  // 3. GSAP ANIMATIONS & LAYOUT CORRECTIONS
  // --------------------------------------------------------

  // Fix Hero Visibility Explicitly First (Wait slightly so it doesn't snap)
  gsap.to('.hero-form', { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });

  // -- LEVEL 1: HERO REVEAL
  const heroEls = gsap.utils.toArray('.hero-el');
  gsap.to(heroEls, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.1 });

  // Headline Text Splitting (Cinematic Reveal)
  const heroWords = gsap.utils.toArray('.hero-word');
  gsap.fromTo(heroWords, 
    { y: 100, opacity: 0, rotateX: -45 }, 
    { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
  );

  // Parallax on Scroll for Hero elements
  gsap.to('.hero-content', {
    y: 100,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // -- LEVEL 2: SYSTEM FLOW SHOWCASE
  const flowSteps = gsap.utils.toArray('.flow-step');
  gsap.fromTo(flowSteps,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: '.system-flow', start: "top 80%", once: true } }
  );

  // Scroll logic for system arrows filling up
  const flowArrows = gsap.utils.toArray('.flow-arrow');
  gsap.fromTo(flowArrows,
    { opacity: 0, scaleX: 0, transformOrigin: "left" },
    { opacity: 1, scaleX: 1, duration: 0.6, stagger: 0.2, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: '.system-flow', start: "top 80%", once: true } }
  );

  flowSteps.forEach((step) => {
    ScrollTrigger.create({ trigger: step, start: "bottom 80%", end: "bottom 20%", toggleClass: "active" });
  });

  // -- LEVEL 3: CARDS & BENTO GRIDS (Fixed Trigger Scope)
  ScrollTrigger.batch(".bento-box:not(.hero-form)", {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }),
    start: "top 95%",
    once: true
  });

  ScrollTrigger.batch(".reveal-group", {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }),
    start: "top 95%",
    once: true
  });

  // -- LEVEL 4: METRICS COUNTERS
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || 0);
    ScrollTrigger.create({
      trigger: counter,
      start: "top 95%",
      once: true,
      onEnter: () => { gsap.to(counter, { textContent: target, duration: 2, ease: "power2.out", snap: { textContent: 1 } }); }
    });
  });

  // -- LEVEL 5: TIMELINE SCROLL SYNC
  const timelineItems = document.querySelectorAll('.timeline-scroll-target');
  timelineItems.forEach((item) => {
    const dot = item.querySelector('.timeline-dot');
    const content = item.querySelector('.timeline-content');
    
    ScrollTrigger.create({
      trigger: item,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        dot?.classList.add('active');
        gsap.to(content, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
      },
      onLeaveBack: () => {
        dot?.classList.remove('active');
      }
    });
  });

  // --------------------------------------------------------
  // 4. GLOBAL 3D TILT ENGINE (Capabilities, Tech, Cases)
  // --------------------------------------------------------
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const tiltFactor = parseFloat(getComputedStyle(card).getPropertyValue('--tilt-factor')) || 1;
      
      gsap.to(card, {
        rotationY: (x / 25) * tiltFactor,
        rotationX: (-y / 25) * tiltFactor,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.4
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 0.6 });
    });
  });

  // --------------------------------------------------------
  // 5. CUSTOM CURSOR & MAGNETIC EFFECT 
  // --------------------------------------------------------
  const cursorDot = document.getElementById("cursor-dot");
  const cursorTrail = document.getElementById("cursor-trail");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX;
  let dotY = mouseY;
  let trailX = mouseX;
  let trailY = mouseY;

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  if (!isTouchDevice) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot.style.opacity === "0" || cursorDot.style.opacity === "") {
        cursorDot.style.opacity = "1";
        cursorTrail.style.opacity = "1";
      }
    });

    const renderCursor = () => {
      dotX += (mouseX - dotX) * 0.5; // Spring fast
      dotY += (mouseY - dotY) * 0.5;
      trailX += (mouseX - trailX) * 0.15; // Spring slow 
      trailY += (mouseY - trailY) * 0.15;

      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;

      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Magnetic logic for buttons/nav
    const magneticTargets = document.querySelectorAll(".magnetic-target");
    magneticTargets.forEach((target) => {
      target.addEventListener("mousemove", (e) => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        gsap.to(target, {
          x: distX * 0.3,
          y: distY * 0.3,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      target.addEventListener("mouseenter", () => {
        cursorTrail.classList.add("hovered");
      });

      target.addEventListener("mouseleave", () => {
        cursorTrail.classList.remove("hovered");
        gsap.to(target, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
      });
    });
  }

  // --------------------------------------------------------
  // 6. STICKY CTA & POPUP VISIBILITY
  // --------------------------------------------------------
  const stickyCta = document.getElementById('sticky-cta');
  const strategyPopup = document.getElementById('strategy-popup');
  const closePopup = document.getElementById('close-popup');
  const popupCta = document.getElementById('popup-cta');
  let popupShown = false;

  const showPopup = () => {
    if (!popupShown) {
      strategyPopup.classList.add('visible');
      popupShown = true;
    }
  };

  const hidePopup = () => {
    strategyPopup.classList.remove('visible');
  };

  if (closePopup) closePopup.addEventListener('click', hidePopup);
  if (popupCta) {
    popupCta.addEventListener('click', () => {
      hidePopup();
      const footerToggle = document.getElementById('footer-service-toggle');
      if (footerToggle) footerToggle.checked = true;
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const footerTop = document.querySelector('footer').offsetTop;
    
    // Sticky CTA
    if (window.scrollY > 800) {
      if (window.scrollY + window.innerHeight > footerTop) {
        stickyCta.classList.add('hidden');
      } else {
        stickyCta.classList.remove('hidden');
        stickyCta.classList.add('visible');
      }
    } else {
      stickyCta.classList.remove('visible');
    }

    // Trigger Popup at 40% scroll
    if (scrollPercent > 40) {
      showPopup();
    }
  }, { passive: true });

  // --------------------------------------------------------
  // 7. RANDOM AMBIENT ANIMATIONS
  // --------------------------------------------------------
  gsap.to('.geo-1', {
    y: 200,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  });

  gsap.to('.geo-2', {
    y: -300,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5
    }
  });

  gsap.to('.geo-grid', {
    y: 100,
    rotation: 15,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    }
  });

  // Fallback: Trigger Popup after 45 seconds
  setTimeout(showPopup, 45000);
});


/* --- Lead Generation Form Integration (n8n Webhook) --- */
// NOTE: Make sure your n8n Webhook Node is set to:
// 1. Method: POST
// 2. Respond to Webhook: Immediately
// 3. CORS options: enabled 
const N8N_WEBHOOK_URL = "https://automation.veloxisglobal.com/webhook/18bba731-ff30-4640-a209-407dd837b5df"; 

function setupLeadForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const statusEl = form.querySelector('.form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI State Loading
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;
    statusEl.style.display = "none";
    statusEl.className = "form-status";

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
        statusEl.innerText = "Thanks! I'll be in touch soon.";
        statusEl.style.color = "#25D366"; // Success Green
        statusEl.style.display = "block";
        form.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      statusEl.innerText = "Oops! Something went wrong. Please reach out via WhatsApp.";
      statusEl.style.color = "#ff6d5a"; // Error Red
      statusEl.style.display = "block";
    } finally {
      // Revert UI
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// Initialize webhook routing for all lead forms
document.addEventListener("DOMContentLoaded", () => {
  setupLeadForm('hero-lead-form');
  setupLeadForm('footer-lead-form');
  setupLeadForm('audit-lead-form');
});

/* --- GA4 Advanced Event Tracking --- */
document.addEventListener("DOMContentLoaded", function () {
  // Safe sender wrapper to avoid errors if gtag isn't loaded or adblock is on
  function sendGAEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  // 1 & 2. Click Tracking (Delegated Event Listener on Body)
  // This captures dynamic and static elements cleanly without duplication
  document.body.addEventListener("click", function (e) {
    const target = e.target.closest("a, button");
    if (!target) return; // Exit if not a link or button

    const textStr = (target.innerText || "").toLowerCase().trim();
    const hrefStr = (target.getAttribute("href") || "").toLowerCase().trim();
    
    // EVENT 1: Book Call Checks
    const isBookCall = textStr.includes("book a call") || 
                       textStr.includes("strategy call") || 
                       textStr.includes("implementation call") || 
                       textStr.includes("book an implementation call") ||
                       hrefStr.includes("calendly") || 
                       hrefStr.includes("booking");

    if (isBookCall) {
      sendGAEvent('book_call_click', {
        event_category: 'engagement',
        event_label: 'Book Call CTA',
        value: 1
      });
      return; // Prevent triggering both events on a single multi-purpose button
    }

    // EVENT 2: WhatsApp Checks
    const isWhatsApp = hrefStr.includes("wa.me") || 
                       hrefStr.includes("whatsapp") || 
                       textStr.includes("whatsapp");

    if (isWhatsApp) {
      sendGAEvent('whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Contact',
        value: 1
      });
      return;
    }

    // EVENT 3: Veloxis Click Tracking
    const isVeloxis = hrefStr.includes("veloxisglobal.com");
    if (isVeloxis) {
      sendGAEvent('veloxis_click', {
        event_category: 'outbound',
        event_label: 'Veloxis Global System Link',
        destination_url: hrefStr
      });
    }
  });

  // 3. Form Submission Tracking
  // Hooks into existing forms without preventing default actions
  const leadForms = document.querySelectorAll("form");
  leadForms.forEach(form => {
    form.addEventListener("submit", function () {
      sendGAEvent('form_submit', {
        event_category: 'lead',
        event_label: 'Website Form Submission',
        value: 1
      });
    });
  });
});

