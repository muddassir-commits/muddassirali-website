import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Split each hero line into characters for Bebas Neue staggered reveal
function splitChars(el) {
  if (!el) return;
  el.innerHTML = el.textContent.split('').map(c => 
    `<span class="char" style="display:inline-block">${c === ' ' ? '&nbsp;' : c}</span>`
  ).join('');
}

// Counter animation with amber glow pulse on complete
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const duration = 2000;
  const step = target / (duration / 16);
  
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) {
      clearInterval(interval);
      // Amber glow pulse on complete
      gsap.fromTo(el, 
        { textShadow: '0 0 40px rgba(245,166,35,0.8)' },
        { textShadow: '0 0 40px rgba(245,166,35,0.3)', duration: 1 }
      );
    }
  }, 16);
}

export function initAnimations() {
  // 1. Page fade-in transition
  const pageWrapper = document.querySelector('.page-wrapper');
  if (pageWrapper) {
    gsap.fromTo(pageWrapper,
      { opacity: 0, y: 20 },
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
              y: -20,
              duration: 0.25,
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

  // 2. Hero Text character reveal
  document.querySelectorAll('.hero-line').forEach(splitChars);
  const heroChars = document.querySelectorAll('.hero-line .char');
  if (heroChars.length > 0) {
    gsap.from(heroChars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.2
    });
  }

  // 3. Card magnetic hover effect
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width/2) / rect.width;
      const y = (e.clientY - rect.top - rect.height/2) / rect.height;
      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        transformPerspective: 800,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1,0.5)' });
    });
  });

  // 4. Section Headings: slide from left
  const headings = document.querySelectorAll('.section-heading');
  headings.forEach((heading) => {
    gsap.from(heading, {
      x: -60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // 5. Cards: stagger up with scale
  const cards = document.querySelectorAll('.card');
  if (cards.length > 0) {
    gsap.from(cards, {
      y: 60,
      opacity: 0,
      scale: 0.97,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 6. Stats: fade in and trigger counters
  const statsSection = document.querySelector('.stats-section');
  const statItems = document.querySelectorAll('.stat-item');
  if (statsSection && statItems.length > 0) {
    gsap.from(statItems, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      stagger: 0.08,
      duration: 0.5,
      scrollTrigger: {
        trigger: statsSection,
        start: 'top 75%',
        toggleActions: 'play none none none',
        onEnter: () => {
          document.querySelectorAll('.stat-counter').forEach(animateCounter);
        }
      }
    });
  }

  // 7. Timeline items: reveal with line grow
  const timeline = document.querySelector('.timeline');
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timeline && timelineItems.length > 0) {
    gsap.from(timelineItems, {
      opacity: 0,
      x: -40,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 8. Scroll progress indicator listener
  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = scrolled + '%';
    });
  }
}
