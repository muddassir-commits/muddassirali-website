'use client';

import { useEffect, useRef } from 'react';
import { initHeroCanvas } from '../canvas-hero';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initHeroCanvas('hero-canvas');
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <canvas
      id="hero-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.85 }}
    />
  );
}
