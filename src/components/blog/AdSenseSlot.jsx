'use client';

import { useEffect, useRef } from 'react';

export default function AdSenseSlot({
  slotId = '1234567890',
  format = 'auto',
  className = '',
  label = 'Sponsored Advertisement',
}) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      // Gracefully silent during review / local dev
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/80 p-3 text-center min-h-[250px] flex flex-col items-center justify-center transition-all ${className}`}
    >
      <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-200/60 text-[10px] font-mono uppercase tracking-wider text-slate-400">
        <span>{label}</span>
        <span className="text-[9px] bg-slate-200/60 px-1.5 py-0.5 rounded text-slate-500">Ad</span>
      </div>

      <div className="w-full min-h-[200px] flex items-center justify-center relative overflow-hidden" ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '200px', width: '100%' }}
          data-ad-client="ca-pub-4045389773179069"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
