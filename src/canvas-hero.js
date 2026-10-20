/**
 * Ultra-Modern Interactive Neural Constellation Mesh Canvas (White / Light Theme Edition)
 * Inspired by 21st.dev, Magic UI & Aceternity UI
 * Features:
 * - High-DPR crystal-clear retina rendering
 * - High-contrast sapphire blue, electric indigo, and emerald nodes
 * - Smooth physics with velocity vectors & edge wrapping
 * - Interactive cursor physics (attraction/repulsion + cursor-to-node electric links)
 * - Click shockwave pulse waves
 * - Multi-depth background particle parallax
 */

export function initHeroCanvas(canvasId = 'hero-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let isRunning = true;

  // Mouse State
  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    radius: 190,
    isActive: false,
  };

  // Shockwave Pulses from clicks
  const pulses = [];

  // Configuration for Crisp White/Light Theme
  const config = {
    connectionDistance: 130,
    mouseConnectionDistance: 180,
    baseColor: '37, 99, 235',       // #2563EB Royal Blue
    indigoColor: '79, 70, 229',      // #4F46E5 Electric Indigo
    emeraldColor: '5, 150, 105',     // #059669 Deep Emerald
    cyanColor: '2, 132, 199',        // #0284C7 Sky/Cyan
  };

  // Particle Class
  class Particle {
    constructor(isBackground = false) {
      this.isBackground = isBackground;
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
      this.y = initial ? Math.random() * height : Math.random() * height;
      
      const speedScale = this.isBackground ? 0.25 : 0.6;
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.2 + Math.random() * 0.55) * speedScale;
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.baseRadius = this.isBackground 
        ? 0.9 + Math.random() * 0.9 
        : 1.6 + Math.random() * 1.8;
      this.radius = this.baseRadius;
      
      const rand = Math.random();
      if (rand < 0.6) {
        this.color = config.baseColor;
      } else if (rand < 0.82) {
        this.color = config.indigoColor;
      } else {
        this.color = config.emeraldColor;
      }

      this.alpha = this.isBackground ? 0.25 + Math.random() * 0.25 : 0.6 + Math.random() * 0.35;
      this.pulseSpeed = 0.02 + Math.random() * 0.03;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
      this.pulsePhase += this.pulseSpeed;
      const pulseFactor = Math.sin(this.pulsePhase) * 0.25;
      this.radius = Math.max(0.6, this.baseRadius + pulseFactor);

      this.x += this.vx;
      this.y += this.vy;

      // Mouse interactive physics
      if (mouse.isActive && !this.isBackground) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 1.4;
          const normalX = dx / dist;
          const normalY = dy / dist;
          this.x -= normalX * force * 1.6;
          this.y -= normalY * force * 1.6;
        }
      }

      // Handle shockwave pulses
      pulses.forEach(p => {
        const pdx = this.x - p.x;
        const pdy = this.y - p.y;
        const pdist = Math.hypot(pdx, pdy);
        const diff = Math.abs(pdist - p.radius);
        if (diff < 35 && pdist > 0) {
          const pforce = (1 - diff / 35) * p.strength;
          this.x += (pdx / pdist) * pforce;
          this.y += (pdy / pdist) * pforce;
        }
      });

      const pad = 20;
      if (this.x < -pad) this.x = width + pad;
      if (this.x > width + pad) this.x = -pad;
      if (this.y < -pad) this.y = height + pad;
      if (this.y > height + pad) this.y = -pad;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();

      // Soft ambient glow ring on primary nodes
      if (!this.isBackground && this.radius > 2) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha * 0.16})`;
        ctx.fill();
      }
    }
  }

  let foregroundParticles = [];
  let backgroundParticles = [];

  function initParticles() {
    const isMobile = width < 768;
    const isTablet = width < 1024;
    
    const fgCount = isMobile ? 35 : (isTablet ? 60 : 90);
    const bgCount = isMobile ? 25 : 50;

    foregroundParticles = [];
    backgroundParticles = [];

    for (let i = 0; i < fgCount; i++) {
      foregroundParticles.push(new Particle(false));
    }
    for (let i = 0; i < bgCount; i++) {
      backgroundParticles.push(new Particle(true));
    }
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    initParticles();
  }

  const heroSection = canvas.parentElement;

  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
    mouse.isActive = true;
  }

  function onMouseLeave() {
    mouse.isActive = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  }

  function onClick(e) {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    pulses.push({
      x: clickX,
      y: clickY,
      radius: 5,
      maxRadius: Math.max(width, height) * 0.45,
      speed: 7,
      strength: 4,
      alpha: 0.5
    });
  }

  heroSection.addEventListener('mousemove', onMouseMove);
  heroSection.addEventListener('mouseleave', onMouseLeave);
  heroSection.addEventListener('click', onClick);
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning && !animationFrameId) {
      animate();
    }
  });

  resize();

  function animate() {
    if (!isRunning) {
      animationFrameId = null;
      return;
    }

    if (mouse.isActive) {
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;
    } else {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    ctx.clearRect(0, 0, width, height);

    // Draw background nodes (depth layer)
    for (let i = 0; i < backgroundParticles.length; i++) {
      backgroundParticles[i].update();
      backgroundParticles[i].draw();
    }

    // Draw constellation lines
    const connDist = config.connectionDistance;
    const totalFg = foregroundParticles.length;

    for (let i = 0; i < totalFg; i++) {
      const p1 = foregroundParticles[i];

      for (let j = i + 1; j < totalFg; j++) {
        const p2 = foregroundParticles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < connDist) {
          const lineAlpha = (1 - dist / connDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${config.baseColor}, ${lineAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // Connect foreground particle to mouse cursor if near
      if (mouse.isActive) {
        const mdx = mouse.x - p1.x;
        const mdy = mouse.y - p1.y;
        const mdist = Math.hypot(mdx, mdy);

        if (mdist < config.mouseConnectionDistance) {
          const mAlpha = (1 - mdist / config.mouseConnectionDistance) * 0.55;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${config.baseColor}, ${mAlpha})`;
          ctx.lineWidth = 1.15;
          ctx.stroke();
        }
      }

      p1.update();
      p1.draw();
    }

    // Draw Mouse Cursor Aura (Soft light glow)
    if (mouse.isActive) {
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 90
      );
      gradient.addColorStop(0, `rgba(${config.baseColor}, 0.08)`);
      gradient.addColorStop(0.5, `rgba(${config.indigoColor}, 0.03)`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Animate Pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.radius += p.speed;
      p.alpha = Math.max(0, p.alpha - 0.015);

      if (p.alpha <= 0 || p.radius >= p.maxRadius) {
        pulses.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${config.baseColor}, ${p.alpha * 0.35})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  return function cleanup() {
    isRunning = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    heroSection.removeEventListener('mousemove', onMouseMove);
    heroSection.removeEventListener('mouseleave', onMouseLeave);
    heroSection.removeEventListener('click', onClick);
    window.removeEventListener('resize', resize);
  };
}
