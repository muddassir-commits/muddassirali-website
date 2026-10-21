'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Zap,
  TrendingUp,
  LineChart,
  PieChart,
  Play,
  FileText,
  Users,
} from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import ThreeHero from '../components/ThreeHero';
import CertModal from '../components/CertModal';
import PresentationModal from '../components/PresentationModal';
import QualifierSimulator from '../components/QualifierSimulator';
import LeakageCalculator from '../components/LeakageCalculator';

export default function HomePage() {
  const [activeCert, setActiveCert] = useState(null);
  const [activeDeck, setActiveDeck] = useState(null);

  return (
    <>
      <main className="flex-grow pt-24 pb-20">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (3D WebGL Core + 2D Constellation Canvas)                */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20"
        >
          {/* Background Interactive Particle Canvas */}
          <HeroCanvas />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Authority Signals */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold tracking-wider text-blue-900 uppercase">
                  Available for High-Growth Retainers &middot; Q2 2026
                </span>
              </div>

              {/* Main Authority Headline */}
              <h1 className="text-display font-extrabold text-slate-900 tracking-tight">
                Architecting <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                  Scalable AI Systems
                </span>{' '}
                <br />
                &amp; Lead Engines.
              </h1>

              {/* Subtitle */}
              <p className="text-sub text-slate-600 max-w-xl text-lg leading-relaxed font-normal">
                Personal authority engine of{' '}
                <strong className="text-slate-900 font-semibold">Muddassir Ali</strong>.
                Managing Director @{' '}
                <span className="text-blue-600 font-semibold">Veloxis Global</span>, Google
                Certified Performance Marketer, and PropTech Lead Systems Architect.
              </p>

              {/* Credential Pills */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm font-mono text-xs text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Founder @ Veloxis Global
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm font-mono text-xs text-slate-700 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  4x Google Certified Marketer
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm font-mono text-xs text-slate-700 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  PropTech Lead Engine Architect
                </span>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Explore Systems &amp; Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/muddassir-alii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Holographic Core */}
            <div className="lg:col-span-5 h-[420px] md:h-[480px] w-full relative flex items-center justify-center">
              <ThreeHero />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. GOOGLE CERTIFICATIONS WALL                                             */}
        {/* ========================================================================= */}
        <section id="certifications" className="py-24 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
                    Verified Industry Accreditation
                  </span>
                </div>
                <h2 className="text-heading font-bold text-slate-900 tracking-tight">
                  Google Certified Performance Marketer
                </h2>
                <p className="text-sub text-slate-600 max-w-xl text-base mt-2">
                  Official Skillshop-accredited technical mastery spanning algorithmic search,
                  measurement, universal app funnels, and predictive GA4 analytics.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  4 of 4 Certifications Active
                </span>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Google Ads Search */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#4285F4]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Skillshop Verified
                    </span>
                    <span className="font-mono text-xs text-slate-400">ID: GOOG-SEARCH-892401</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Search Certification
                  </h3>
                  <p className="text-body text-slate-600 text-sm mb-6 leading-relaxed">
                    Algorithmic Smart Bidding mastery, quality score engineering, intent-driven
                    keyword structures, and high-conversion landing page integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Smart Bidding (tCPA/tROAS)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Ad Rank Optimization
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Negative Keyword Matrices
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-search')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://skillshop.credential.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 ml-auto"
                  >
                    <span>Skillshop</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card 2: Google Ads Apps */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#EA4335]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Skillshop Verified
                    </span>
                    <span className="font-mono text-xs text-slate-400">ID: GOOG-APPS-719342</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Apps Certification
                  </h3>
                  <p className="text-body text-slate-600 text-sm mb-6 leading-relaxed">
                    Universal app campaigns across Google Search, Play, and YouTube. Conversion
                    funnel tracking, cohort retention, and app install LTV maximization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Firebase Analytics SDK
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Deferred Deep Linking
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Cohort LTV Modeling
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-apps')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://skillshop.credential.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 ml-auto"
                  >
                    <span>Skillshop</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card 3: Google Ads Measurement */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FBBC05]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Skillshop Verified
                    </span>
                    <span className="font-mono text-xs text-slate-400">ID: GOOG-MEAS-652981</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Measurement Certification
                  </h3>
                  <p className="text-body text-slate-600 text-sm mb-6 leading-relaxed">
                    Server-Side Tag Management (sGTM), Enhanced Conversions API, data-driven
                    attribution modeling, and first-party data privacy architecture.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Server-Side GTM
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Enhanced Conversions API
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Consent Mode v2
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-measurement')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://skillshop.credential.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 ml-auto"
                  >
                    <span>Skillshop</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card 4: Google Analytics GA4 */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#34A853]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Skillshop Verified
                    </span>
                    <span className="font-mono text-xs text-slate-400">ID: GA4-ENTERPRISE-504193</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Analytics (GA4) Certification
                  </h3>
                  <p className="text-body text-slate-600 text-sm mb-6 leading-relaxed">
                    Event-driven taxonomies, BigQuery raw cloud export, predictive ML purchase
                    audiences, and advanced customer exploration workspaces.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      BigQuery Cloud Export
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Predictive ML Modeling
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      Multi-Touch Attribution
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('ga4-cert')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://skillshop.credential.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 ml-auto"
                  >
                    <span>Skillshop</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE 749 REAL ESTATE RESEARCH BENCHMARK STUDY                          */}
        {/* ========================================================================= */}
        <section
          id="research-benchmark"
          className="py-24 border-t border-slate-200 bg-slate-50/50 relative"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold">
                  Proprietary Industry Research
                </span>
              </div>
              <h2 className="text-heading font-bold text-slate-900 tracking-tight">
                The 749 Real Estate Developer Audit
              </h2>
              <p className="text-sub text-slate-600 text-base mt-2 leading-relaxed">
                Authored by Muddassir Ali: An algorithmic benchmark audit of 749 active property
                portals and developer ad campaigns across UP &amp; Delhi NCR (Noida, Gurgaon,
                Lucknow).
              </p>
            </div>

            {/* Benchmark Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="card p-6 border-l-4 border-l-rose-500">
                <span className="text-stat text-rose-600 font-bold block mb-2">56%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Zero Conversion Tracking
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Ran ad spend without Meta CAPI or GA4 conversion triggers configured on thank-you
                  endpoints.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-amber-500">
                <span className="text-stat text-amber-600 font-bold block mb-2">60%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  No Instant WhatsApp
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Zero automated 60-second WhatsApp capture; buyer leads sat dormant for 6+ hours
                  before first touch.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-blue-500">
                <span className="text-stat text-blue-600 font-bold block mb-2">47%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Broken Inquiry Forms
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Suffered validation errors, broken webhooks, or slow multi-field desktop forms on
                  mobile traffic.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-emerald-500">
                <span className="text-stat text-emerald-600 font-bold block mb-2">35%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Double Defect Failure
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Had neither functional web inquiry forms nor instant WhatsApp connectivity on live
                  ad budgets.
                </p>
              </div>
            </div>

            {/* Diagnostic Leakage Calculator */}
            <LeakageCalculator />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VELOXIS AUTONOMOUS LEAD ENGINE BLUEPRINT & SIMULATOR                   */}
        {/* ========================================================================= */}
        <section id="systems-showcase" className="py-24 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Blueprint Architecture */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
                    Flagship Lead Infrastructure
                  </span>
                </div>

                <h2 className="text-heading font-bold text-slate-900 tracking-tight">
                  Veloxis Autonomous Real Estate Lead Engine
                </h2>

                <p className="text-sub text-slate-600 text-base leading-relaxed">
                  A high-velocity four-stage automated acquisition pipeline engineered to replace
                  slow manual telecalling with 60-second conversational WhatsApp qualification.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        Algorithmic Meta &amp; Google Ad Ingestion
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        High-intent search keywords and hyper-targeted Meta lifestyle creatives
                        funneled directly into dedicated project landing microsites.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        Sub-60s WhatsApp Cloud AI Qualifier
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Instant webhook triggers an AI conversational bot asking configuration,
                        budget bracket, and self-use vs. investment intent.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      03
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        Automated Site Visit Scheduling
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Qualified prospects are booked directly into sales rep calendars for
                        physical weekend site visits without human lag.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Phone Simulator */}
              <div className="lg:col-span-5 flex justify-center">
                <QualifierSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. KEYNOTE PRESENTATIONS & SPEAKING DECKS                                  */}
        {/* ========================================================================= */}
        <section id="keynotes" className="py-24 border-t border-slate-200 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-700 font-semibold">
                    Keynotes &amp; Industry Decks
                  </span>
                </div>
                <h2 className="text-heading font-bold text-slate-900 tracking-tight">
                  Presentations &amp; Technical Whitepapers
                </h2>
                <p className="text-sub text-slate-600 max-w-xl text-base mt-2">
                  Interactive slide decks presented to real estate developers, commercial funds,
                  and agency leadership teams.
                </p>
              </div>
            </div>

            {/* Deck Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Deck 1 */}
              <div className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-600 font-semibold block mb-2">
                    Research Benchmark Deck &middot; 4 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    2026 North India Real Estate Ad Cost Benchmarks
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Audit of 749 active property developer portals, rising CPA trends, and the
                    transition to conversational acquisition.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('benchmarks-2026')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full"
                >
                  <Play className="w-3.5 h-3.5 text-blue-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>

              {/* Deck 2 */}
              <div className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-600 font-semibold block mb-2">
                    Technical Blueprint &middot; 3 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    The Architecture of an Automated Real Estate Lead System
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Technical architecture breakdown for Meta CAPI, edge landing pages, n8n webhook
                    logic, and WhatsApp Cloud automation.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('lead-system-architecture')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full"
                >
                  <Play className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>

              {/* Deck 3 */}
              <div className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-rose-600 font-semibold block mb-2">
                    Strategic Diagnostic &middot; 3 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    Why 70% of Real Estate Ad Budgets Leak in India
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Commercial analysis of lead response latency, junk leads, and the 7-day turnkey
                    recovery roadmap for real estate firms.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('budget-leakage-india')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full"
                >
                  <Play className="w-3.5 h-3.5 text-rose-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. STRATEGIC CTA STRIP                                                    */}
        {/* ========================================================================= */}
        <section className="cta-strip py-24 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-emerald-700 font-semibold">
                Available for Strategic Retainers
              </span>
            </div>
            <h2 className="section-heading text-heading font-bold text-slate-900 mb-6 tracking-tight">
              Ready to Build Autonomous Growth?
            </h2>
            <p className="text-body mb-10 max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Deploy proprietary lead funnels, algorithmic Meta/Google ad infrastructure, or
              autonomous WhatsApp AI qualification for your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn btn-primary shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Initiate Strategic Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                Explore All Blueprints
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Verification Modals */}
      <CertModal certKey={activeCert} onClose={() => setActiveCert(null)} />
      <PresentationModal deckId={activeDeck} onClose={() => setActiveDeck(null)} />
    </>
  );
}
