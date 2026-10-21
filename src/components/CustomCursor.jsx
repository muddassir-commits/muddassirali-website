'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const circle = circleRef.current;
    const dot = dotRef.current;
    if (!circle || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    window.addEventListener('mousemove', onMouseMove);

    const tickerFunc = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
      circleX += (mouseX - circleX) * dt;
      circleY += (mouseY - circleY) * dt;
      gsap.set(circle, { x: circleX, y: circleY });
    };

    gsap.ticker.add(tickerFunc);

    const addHover = () => circle.classList.add('hovered');
    const removeHover = () => circle.classList.remove('hovered');

    const updateHoverables = () => {
      const hoverables = document.querySelectorAll(
        'a, button, select, input, textarea, .interactable, [role="button"], .accordion-header'
      );
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    updateHoverables();
    const observer = new MutationObserver(updateHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(tickerFunc);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="custom-cursor-circle" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
