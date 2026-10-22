'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isHidden = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (isHidden) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isHidden = false;
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isHidden = true;
    };

    const onMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isHidden = false;
    };

    // Smooth animation loop for the outer ring
    let animationFrameId;
    const render = () => {
      // Crisp 0.25 interpolation: smooth yet snappy, zero sluggishness
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      const scale = isHovering ? 'scale(1.4)' : 'scale(1)';
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) ${scale}`;

      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    // Clickable element hover listeners
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover'))
      ) {
        isHovering = true;
        ring.classList.add('cursor-ring-active');
      } else {
        isHovering = false;
        ring.classList.remove('cursor-ring-active');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Precision Micro Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] -ml-1 -mt-1 hidden lg:block opacity-0 transition-opacity duration-200"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-sm shadow-blue-500/50" />
      </div>

      {/* Subtle Snappy Interactive Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] -ml-3.5 -mt-3.5 hidden lg:block opacity-0 transition-opacity duration-200"
        aria-hidden="true"
      >
        <div className="w-7 h-7 rounded-full border border-blue-500/40 bg-blue-500/5 transition-all duration-150 ease-out" />
      </div>
    </>
  );
}
