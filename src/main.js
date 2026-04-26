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
  // 1. CANVAS MOTION GRAPHICS (Network Nodes Engine)
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
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139, 92, 246, 0.4)";
      ctx.fill();
    }
  }

  const initNetwork = () => {
    particles = [];
    const count = window.innerWidth < 768 ? 40 : 100;
    for (let i = 0; i < count; i++) {
      particles.push(new Node());
    }
  };

  const renderNetwork = (now) => {
    requestAnimationFrame(renderNetwork);
    if (now - lastFrameTime < frameDelay) return;
    lastFrameTime = now;

    ctx.clearRect(0, 0, w, h);

    // Draw Nodes and Connecting Lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - distance / 120})`;
          ctx.lineWidth = 1.5;
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

  // Disable canvas on heavily mobile environments to save battery, else run
  if (window.matchMedia("(pointer: fine)").matches) {
    requestAnimationFrame(renderNetwork);
  } else {
    canvas.style.display = "none";
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

  // Headline Text Splitting (Simulated without SplitText plugin)
  const heroWords = gsap.utils.toArray('.hero-word');
  gsap.to(heroWords, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.2)" });

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

  // --------------------------------------------------------
  // 4. GLOBAL 3D TILT ENGINE (Capabilities, Tech, Cases)
  // --------------------------------------------------------
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(card, {
        rotationY: x / 25,
        rotationX: -y / 25,
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

// Initialize webhook routing for both top and bottom forms
document.addEventListener("DOMContentLoaded", () => {
  setupLeadForm('hero-lead-form');
  setupLeadForm('footer-lead-form');
});

