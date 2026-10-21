'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Globe,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
} from 'lucide-react';
import PresentationModal from '../../components/PresentationModal';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [activeDeck, setActiveDeck] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const clientPortals = [
    {
      title: 'Veloxis Global',
      subtitle: 'PropTech Growth & Performance Engine',
      category: 'website automation',
      tag: 'Bespoke Agency Platform',
      metrics: 'Institutional Real Estate Marketing Infrastructure',
      desc: 'Engineered high-velocity acquisition microsite architectures, sub-60s WhatsApp qualification integrations, and enterprise Meta/Google tracking models.',
      tech: ['Next.js', 'Tailwind CSS', 'Vite', 'Three.js', 'GSAP'],
      img: '/images/projects/veloxis.png',
      url: 'https://veloxisglobal.com',
    },
    {
      title: 'ASDC Kanpur',
      subtitle: 'Skill India & Govt Vocational Training Hub',
      category: 'website seo',
      tag: 'Accredited Portal',
      metrics: '300+ Students Trained // 12 Trade Programs',
      desc: 'Architected complete institutional portal with course admissions funnels, student verification systems, and regional search visibility across Uttar Pradesh.',
      tech: ['WordPress CMS', 'PHP', 'Schema SEO', 'Tailwind CSS'],
      img: '/images/projects/asdckanpur.png',
      url: 'https://asdckanpur.com',
    },
    {
      title: 'Skyline Luxury Residences',
      subtitle: 'Noida Expressway High-Ticket Real Estate',
      category: 'website paid-growth automation',
      tag: 'Real Estate Microsite',
      metrics: '₹1.5Cr–₹4.5Cr Inventories // Sub-60s Capture',
      desc: 'High-speed project microsite built for paid ad conversions. Features 1-tap WhatsApp brochure downloads, interactive 3D floor plan viewer, and CRM synchronization.',
      tech: ['Vite', 'Vanilla CSS', 'WhatsApp Cloud API', 'n8n'],
      img: '/images/projects/skyline.png',
      url: '#',
    },
    {
      title: 'Liz Rogers Photography',
      subtitle: 'High-End Editorial & Portrait Studio',
      category: 'website seo',
      tag: 'Luxury Portfolio',
      metrics: 'Full Retina Gallery // Custom Booking Pipeline',
      desc: 'Minimalist luxury portfolio showcasing fine-art photography with lazy-loaded WebP galleries, dynamic client intake forms, and zero layout shift.',
      tech: ['HTML5', 'Vanilla CSS', 'WebP Optimizer', 'Netlify'],
      img: '/images/projects/lizrogers.png',
      url: '#',
    },
    {
      title: 'Elite Apparel Retainer',
      subtitle: 'D2C E-Commerce Fashion Platform',
      category: 'website paid-growth',
      tag: 'E-Commerce Store',
      metrics: '4.8x Blended ROAS // Meta Catalog Ads',
      desc: 'Full-stack storefront built with responsive product carousels, dynamic checkout upsells, and pixel-accurate server-side conversion tracking.',
      tech: ['Shopify Liquid', 'Meta CAPI', 'GA4 E-Commerce', 'Klaviyo'],
      img: '/images/projects/cloth.png',
      url: '#',
    },
    {
      title: 'Aura Aesthetics Studio',
      subtitle: 'Medical Aesthetics & Derma Clinic',
      category: 'website seo',
      tag: 'Clinical Booking Engine',
      metrics: 'Hyper-Local SEO // 48 Appointment Inquiries/Mo',
      desc: 'Consultation booking platform optimized for local high-intent search keywords (Kanpur & Lucknow). Features treatment pricing tiers and WhatsApp appointment routing.',
      tech: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'Twilio'],
      img: '/images/projects/makeup.png',
      url: '#',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'paid-growth', label: 'Paid Growth & Performance' },
    { id: 'website', label: 'Client Portals' },
    { id: 'seo', label: 'SEO Retainers' },
    { id: 'automation', label: 'AI & Lead Engines' },
  ];

  const filteredPortals =
    filter === 'all'
      ? clientPortals
      : clientPortals.filter((p) => p.category.includes(filter));

  return (
    <>
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <section className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
                Delivered Client Blueprints &middot; Systems Architecture
              </span>
            </div>
            <h1 className="text-display font-bold text-slate-900 mb-4">
              Things I&apos;ve Architected <br className="hidden sm:block" />&amp; Delivered
            </h1>
            <p className="text-sub text-slate-600 max-w-2xl text-base leading-relaxed">
              Live client platforms &middot; enterprise SEO retainers &middot; autonomous lead
              pipelines &middot; verified ad performance impact.
            </p>
          </section>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 border-b border-slate-200 pb-6 mb-16">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`filter-tab px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === tab.id
                    ? 'active bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Performance Marketing Case Studies Spotlight */}
          {(filter === 'all' || filter === 'paid-growth') && (
            <section className="mb-24 space-y-12">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold block mb-1">
                    Featured Case Study
                  </span>
                  <h2 className="text-heading text-xl md:text-2xl font-bold text-slate-900">
                    On-Demand App User Acquisition Engine (Google UAC)
                  </h2>
                </div>
                <span className="px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
                  -62% CPI Slashed
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Metric Dashboard Mockup */}
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl text-white">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <span className="font-mono text-[11px] text-slate-400">
                      ads.google.com // Campaign: 24165958487 // Central Noida UAC
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Optimized CPI
                      </span>
                      <span className="text-xl font-bold text-emerald-400 font-mono">₹12.50</span>
                      <span className="text-[10px] text-emerald-500 font-mono">-62% Reduction</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Impressions
                      </span>
                      <span className="text-xl font-bold text-white font-mono">10,441</span>
                      <span className="text-[10px] text-blue-400 font-mono">100% Mobile Feed</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Verified Installs
                      </span>
                      <span className="text-xl font-bold text-blue-400 font-mono">177+</span>
                      <span className="text-[10px] text-slate-400 font-mono">Targeted Geo</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Budget Leak Cut
                      </span>
                      <span className="text-xl font-bold text-amber-400 font-mono">10%</span>
                      <span className="text-[10px] text-slate-400 font-mono">Tablets Purged</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Geofenced 3km Central Noida radius (Pincodes 201309 &amp; 201307 generated 84%
                    of total verified app installations).
                  </p>
                </div>

                {/* Case Study Details */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                      Case 01 / App Acquisition
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold">
                      Verified Client Impact
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    On-Demand Marketplace Funnel Overhaul
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Google Universal App Campaigns (UAC) re-architected from an untracked, high-cost
                    funnel into a hyper-local conversion machine with dayparting bid schedules and
                    device hygiene filters.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">
                      Google Ads UAC
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">
                      Firebase Analytics
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">
                      Bid Dayparting
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">
                      Device Hygiene
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Client Portals & Web Systems Grid */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <h2 className="text-heading text-xl md:text-2xl font-bold text-slate-900">
                Delivered Web Platforms &amp; Client Systems
              </h2>
              <span className="font-mono text-xs text-slate-500 font-medium">
                {filteredPortals.length} Platforms Displayed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortals.map((portal, idx) => (
                <div
                  key={idx}
                  className="glass-card flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-blue-600 font-semibold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                        {portal.tag}
                      </span>
                      {portal.url !== '#' && (
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                      {portal.title}
                    </h3>
                    <span className="text-xs text-slate-500 block mb-3">{portal.subtitle}</span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{portal.desc}</p>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold mb-4">
                      {portal.metrics}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {portal.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="cta-strip py-16 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-xl">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Need Institutional Growth Systems for Your Firm?
            </h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Whether you need automated real estate lead qualification, high-intent Google Search
              infrastructure, or full-funnel tracking architecture, let&apos;s build.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn !bg-white !text-blue-700 hover:!bg-blue-50 !shadow-none !px-6 !py-3 text-xs font-semibold"
              >
                Initiate Strategic Brief &rarr;
              </Link>
            </div>
          </section>
        </div>
      </main>

      <PresentationModal deckId={activeDeck} onClose={() => setActiveDeck(null)} />
    </>
  );
}
