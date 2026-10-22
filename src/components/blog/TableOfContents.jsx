'use client';

import { useState, useEffect } from 'react';
import { List, ChevronRight } from 'lucide-react';

export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs space-y-3"
    >
      <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 text-slate-800">
        <List className="w-4 h-4 text-blue-600" />
        <span className="font-heading font-bold text-xs uppercase tracking-wider">
          Table of Contents
        </span>
      </div>

      <ul className="space-y-1.5 text-xs font-mono">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center gap-1.5 py-1 px-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold translate-x-1'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <ChevronRight
                  className={`w-3 h-3 shrink-0 ${
                    isActive ? 'text-blue-600' : 'text-slate-400'
                  }`}
                />
                <span className="truncate">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
