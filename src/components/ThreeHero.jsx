'use client';

import { useEffect, useRef } from 'react';
import { initThreeHero } from '../three-hero';

export default function ThreeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initThreeHero('three-hero-container');
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div
      id="three-hero-container"
      ref={containerRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
    />
  );
}
