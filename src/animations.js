import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Split each hero line into words & characters for staggered reveal without breaking words
function splitChars(el) {
  if (!el || el.dataset.splitDone === 'true') return;
  el.dataset.splitDone = 'true';
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map(word => {
    const chars = word.split('').map(c => 
      `<span class="char" style="display:inline-block">${c}</span>`
    ).join('');
    return `<span class="word" style="display:inline-block; white-space:nowrap">${chars}</span>`;
  }).join('&nbsp;');
}

// Counter animation with pulse on complete
function animateCounter(el) {
  if (el.dataset.animating === 'true') return;
  el.dataset.animating = 'true';

  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const duration = 1800;
  const step = target / (duration / 16);
  
  if (el.counterInterval) {
    clearInterval(el.counterInterval);
  }
  
  el.counterInterval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) {
      clearInterval(el.counterInterval);
      delete el.counterInterval;
      el.dataset.animating = 'false';
      gsap.fromTo(el, 
        { scale: 1.08, color: '#059669' },
        { scale: 1, color: '', duration: 0.4, ease: 'power2.out' }
      );
    }
  }, 16);
}

// Aceternity UI Magnetic Buttons Effect
export function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const magneticElements = document.querySelectorAll('.btn, .magnetic-btn, .nav-logo');
  magneticElements.forEach((el) => {
    let bound = null;

    const onMouseEnter = () => {
      bound = el.getBoundingClientRect();
    };

    const onMouseMove = (e) => {
      if (!bound) bound = el.getBoundingClientRect();
      const x = e.clientX - bound.left - bound.width / 2;
      const y = e.clientY - bound.top - bound.height / 2;
      
      gsap.to(el, {
        x: x * 0.28,
        y: y * 0.28,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      bound = null;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.1, 0.4)'
      });
    };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
  });
}

export function initAnimations() {
  // Ensure ScrollTrigger refreshes when fonts are fully loaded
  if (document.fonts) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }

  // 1. Page fade-in transition
  const pageWrapper = document.querySelector('.page-wrapper');
  if (pageWrapper) {
    gsap.fromTo(pageWrapper,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );

    // Intercept local link transitions for page exit sweep
    document.querySelectorAll('a').forEach((link) => {
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');
      
      if (
        href && 
        !target && 
        !href.startsWith('#') && 
        !href.startsWith('mailto:') && 
        !href.startsWith('tel:') && 
        !href.startsWith('javascript:')
      ) {
        const isLocal = href.startsWith('/') || !href.includes('://');
        if (isLocal) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(pageWrapper, {
              opacity: 0,
              y: -10,
              duration: 0.2,
              ease: 'power2.in',
              onComplete: () => {
                window.location.href = href;
              }
            });
          });
        }
      }
    });
  }

  // 2. Hero Orchestrated Entrance Timeline
  const heroTl = gsap.timeline({ delay: 0.05 });

  const heroBadge = document.querySelector('.hero-status-pill');
  if (heroBadge) {
    heroTl.fromTo(heroBadge,
      { opacity: 0, y: -18, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }
    );
  }

  // Hero Text character reveal
  document.querySelectorAll('.hero-line').forEach(splitChars);
  const heroChars = document.querySelectorAll('.hero-line .char');
  if (heroChars.length > 0) {
    heroTl.fromTo(heroChars,
      { opacity: 0, y: 35, rotateX: -60 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.012, duration: 0.6, ease: 'power3.out' },
      "-=0.25"
    );
  }

  // Hero Subtitle
  const heroSub = document.querySelector('.hero-subtitle');
  if (heroSub) {
    heroTl.fromTo(heroSub,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      "-=0.2"
    );
  }

  // Hero Credential Pills
  const heroCredPills = document.querySelectorAll('.hero-cred-pill');
  if (heroCredPills.length > 0) {
    heroTl.fromTo(heroCredPills,
      { opacity: 0, y: 14, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.45, ease: 'back.out(1.4)' },
      "-=0.2"
    );
  }

  // Hero CTAs
  const heroCtas = document.querySelector('.hero-cta-group');
  if (heroCtas) {
    heroTl.fromTo(heroCtas,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      "-=0.15"
    );
  }

  // Hero Bottom Info
  const heroBottom = document.querySelector('.hero-bottom-info');
  if (heroBottom) {
    heroTl.fromTo(heroBottom,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
      "-=0.15"
    );
  }

  // 3. 3D Tilt Hover Effect for Cards (.card, .cert-card, .glass-card)
  document.querySelectorAll('.card, .cert-card, .glass-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      gsap.to(card, {
        rotateY: x * 5,
        rotateX: -y * 5,
        transformPerspective: 800,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
    });
  });

  // 4. Safe Section Scroll Animations (Ensure items are visible immediately if in view)
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.95;
  };

  // Section Headings
  document.querySelectorAll('.section-heading').forEach((heading) => {
    if (isElementInViewport(heading)) {
      gsap.to(heading, { opacity: 1, x: 0, duration: 0.5 });
    } else {
      gsap.fromTo(heading,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 95%',
            once: true
          }
        }
      );
    }
  });

  // Section Labels
  document.querySelectorAll('.section-label').forEach((label) => {
    if (isElementInViewport(label)) {
      gsap.to(label, { opacity: 1, y: 0, duration: 0.4 });
    } else {
      gsap.fromTo(label,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: label,
            start: 'top 95%',
            once: true
          }
        }
      );
    }
  });

  // 5. Certification Cards: Stagger reveal
  const certSection = document.getElementById('certifications');
  const certCards = document.querySelectorAll('.cert-card');
  if (certCards.length > 0) {
    certCards.forEach((card, idx) => {
      if (isElementInViewport(card)) {
        gsap.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.5 });
      } else {
        gsap.fromTo(card,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: (idx % 2) * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              once: true
            }
          }
        );
      }
    });
  }

  // 6. Generic Bento / Feature Cards
  const genericCards = document.querySelectorAll('.card, .presentation-card, .glass-card');
  genericCards.forEach((card, idx) => {
    if (!card.closest('#certifications')) {
      if (isElementInViewport(card)) {
        gsap.to(card, { opacity: 1, y: 0, duration: 0.5 });
      } else {
        gsap.fromTo(card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: (idx % 3) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              once: true
            }
          }
        );
      }
    }
  });

  // 7. Stats: fade in and trigger counters
  const statsSection = document.querySelector('.stats-section, #research-benchmark');
  const statItems = document.querySelectorAll('.stat-item, [data-benchmark-card]');
  if (statItems.length > 0) {
    ScrollTrigger.create({
      trigger: statsSection || statItems[0],
      start: 'top 92%',
      once: true,
      onEnter: () => {
        document.querySelectorAll('.stat-counter, [data-target]').forEach(animateCounter);
      }
    });
  }

  // 8. Scroll progress indicator listener
  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = scrolled + '%';
    }, { passive: true });
  }

  // 9. Initialize Magnetic Buttons
  initMagneticButtons();

  // Refresh ScrollTrigger after DOM has settled
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
}
