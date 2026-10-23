'use client';

import { useEffect, useRef } from 'react';
import { initThreeHero } from '../three-hero';
import { Cpu, Zap, Activity, CheckCircle2 } from 'lucide-react';

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
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas */}
      <div
        id="three-hero-container"
        ref={containerRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing z-0"
      />

      {/* Futuristic Holographic HUD Overlay Chips */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-500/5 text-[11px] font-mono text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-semibold text-emerald-600">NEURAL CORE v4.8</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">42ms Latency</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:block">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-500/5 text-[11px] font-mono text-slate-800">
          <Cpu className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-slate-700 font-semibold">Meta &middot; Google CBO Synapse</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden sm:block">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-emerald-500/5 text-[11px] font-mono text-slate-800">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-slate-700 font-semibold">Speed-to-Lead: &lt;60s</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-indigo-500/5 text-[11px] font-mono text-slate-800">
          <Activity className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-slate-700 font-semibold">Google certified founder</span>
        </div>
      </div>
    </div>
  );
}
