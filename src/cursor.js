import { gsap } from 'gsap';

export function initCursor() {
  // Disable cursor on mobile/touch devices
  if (window.matchMedia('(max-width: 1024px)').matches) return;

  const circle = document.createElement('div');
  const dot = document.createElement('div');

  circle.className = 'custom-cursor-circle';
  dot.className = 'custom-cursor-dot';

  document.body.appendChild(circle);
  document.body.appendChild(dot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Direct and instant positioning for the inner dot
    gsap.set(dot, { x: mouseX, y: mouseY });
  });

  // Smooth lerped animation for trailing circle using GSAP ticker
  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
    circleX += (mouseX - circleX) * dt;
    circleY += (mouseY - circleY) * dt;
    gsap.set(circle, { x: circleX, y: circleY });
  });

  const addHoverClass = () => circle.classList.add('hovered');
  const removeHoverClass = () => circle.classList.remove('hovered');

  const updateHoverables = () => {
    const hoverables = document.querySelectorAll(
      'a, button, select, input, textarea, .interactable, [role="button"], .accordion-header'
    );
    hoverables.forEach((el) => {
      el.removeEventListener('mouseenter', addHoverClass);
      el.removeEventListener('mouseleave', removeHoverClass);
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });
  };

  updateHoverables();

  // Watch the DOM for changes to ensure dynamically added elements trigger the cursor hover state too
  const observer = new MutationObserver(() => {
    updateHoverables();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
