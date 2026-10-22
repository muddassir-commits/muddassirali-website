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
  Activity,
  Cpu,
  Bot,
  Radar,
  Terminal,
} from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import ThreeHero from '../components/ThreeHero';
import CertModal from '../components/CertModal';
import PresentationModal from '../components/PresentationModal';
import QualifierSimulator from '../components/QualifierSimulator';
import LeakageCalculator from '../components/LeakageCalculator';
import SystemArchitectureFlow from '../components/SystemArchitectureFlow';
import AITerminal from '../components/AITerminal';

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
          className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20"
        >
          {/* Background Interactive Particle Canvas */}
          <HeroCanvas />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Authority Signals */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Live Status Pill with Radar Pulse */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[11px] font-semibold tracking-wider text-blue-900 uppercase">
                  AI Marketing Systems &middot; Global Deployment Q2 2026
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
            <div className="lg:col-span-5 h-[440px] md:h-[500px] w-full relative flex items-center justify-center">
              <ThreeHero />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TELEMETRY HUD BAR (Live System Metrics)                                    */}
        {/* ========================================================================= */}
        <section className="border-y border-slate-200/80 bg-white/60 backdrop-blur-md py-4 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 items-center text-center sm:text-left font-mono">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div>
                  <span className="text-xs text-slate-600 block uppercase font-medium">SYSTEM RUNTIME</span>
                  <span className="text-sm font-bold text-slate-900">VELOXIS CORE v4.8</span>
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-600 block uppercase font-medium">WHATSAPP DISPATCH</span>
                <span className="text-sm font-bold text-emerald-600">&lt;60s FAST RESPONSE</span>
              </div>
              <div>
                <span className="text-xs text-slate-600 block uppercase font-medium">ATTRIBUTION MATCH</span>
                <span className="text-sm font-bold text-blue-600">99.4% EVENT QUALITY</span>
              </div>
              <div>
                <span className="text-xs text-slate-600 block uppercase font-medium">DIRECTED AD SPEND</span>
                <span className="text-sm font-bold text-slate-900">$2.4M+ OPTIMIZED</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. GOOGLE CERTIFICATIONS WALL                                             */}
        {/* ========================================================================= */}
        <section id="certifications" className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
                    Technical Authority
                  </span>
                </div>
                <h2 className="text-heading font-bold text-slate-900 tracking-tight">
                  Verified Google Accreditations
                </h2>
                <p className="text-sub text-slate-600 max-w-xl text-base mt-2">
                  Independently certified by Google across Search architecture, measurement
                  attribution, mobile app scaling, and GA4 telemetry.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Google Skillshop Credential Registry</span>
              </div>
            </div>

            {/* Cert Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Google Ads Search */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#4285F4]" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Verified
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">ID: GOOG-SEARCH-892401</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Search Certification
                  </h3>
                  <p className="text-body text-slate-700 text-sm mb-6 leading-relaxed font-normal">
                    Setting up Google Search ads that convert. Smart bidding, target CPA, and negative keywords so you only pay for genuine high-intent buyers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Smart Bidding ML
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Target CPA &amp; ROAS
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Buyer Search Intent
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-search')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
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
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Verified
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">ID: GOOG-APPS-719342</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Apps Certification
                  </h3>
                  <p className="text-body text-slate-700 text-sm mb-6 leading-relaxed font-normal">
                    App Campaigns for real installs and purchases. Setting up Firebase analytics, deep links, and creative tests that scale mobile app growth.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Firebase Analytics
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      App Deep Linking
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      In-App Conversions
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-apps')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
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
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Verified
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">ID: GOOG-MEAS-652981</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Ads Measurement Certification
                  </h3>
                  <p className="text-body text-slate-700 text-sm mb-6 leading-relaxed font-normal">
                    Accurate conversion tracking with Google Tag Manager and Conversions API. Fixes lost data from iOS privacy updates so every sale is attributed.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Server-Side GTM
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Conversions API (CAPI)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Consent Mode v2
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('goog-measurement')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
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
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Google Verified
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">ID: GA4-ENTERPRISE-504193</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Google Analytics (GA4) Certification
                  </h3>
                  <p className="text-body text-slate-700 text-sm mb-6 leading-relaxed font-normal">
                    Advanced Google Analytics 4 setups. Custom event tracking, user journeys, BigQuery export, and seeing which channels actually bring revenue.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      BigQuery Cloud Export
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Custom Event Tracking
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium">
                      Revenue Attribution
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveCert('ga4-cert')}
                    className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
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
        {/* 3. INTERACTIVE AI SYSTEMS ARCHITECTURE (Live Pipeline Blueprint)          */}
        {/* ========================================================================= */}
        <section id="ai-pipeline" className="py-24 border-t border-slate-200 bg-slate-50/70 relative">
          <div className="max-w-7xl mx-auto px-6">
            <SystemArchitectureFlow />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. THE 749 REAL ESTATE RESEARCH BENCHMARK STUDY                           */}
        {/* ========================================================================= */}
        <section
          id="research-benchmark"
          className="py-24 border-t border-slate-200 bg-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header with Digital Twin Visual Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
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
                <div className="flex items-center gap-4 mt-6">
                  <div className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs">
                    Region: <strong className="text-slate-900">UP &amp; Delhi NCR</strong>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs">
                    Sample: <strong className="text-slate-900">749 Active Portals</strong>
                  </div>
                </div>
              </div>

              {/* Real High-Rise Architecture Visual */}
              <div className="lg:col-span-5 relative group">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                    alt="Delhi NCR Commercial and Residential High-Rise Real Estate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-4">
                    <span className="font-mono text-xs text-white/95 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      749 NCR High-Rise Ad Speed &amp; Lead Audit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="card p-6 border-l-4 border-l-rose-500">
                <span className="text-stat text-rose-600 font-bold block mb-2">56%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Zero Conversion Tracking
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Ran live ad campaigns without conversion tracking on thank-you pages, wasting ad budgets blindly.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-amber-500">
                <span className="text-stat text-amber-600 font-bold block mb-2">60%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  No Instant WhatsApp
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Zero automated WhatsApp reply; customer inquiries sat untouched for over 6 hours before anyone called.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-blue-500">
                <span className="text-stat text-blue-600 font-bold block mb-2">47%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Broken Inquiry Forms
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Forms failed on mobile phones due to slow loading, broken submit buttons, or too many confusing fields.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-l-emerald-500">
                <span className="text-stat text-emerald-600 font-bold block mb-2">35%</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                  Double Defect Failure
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Had neither working forms nor instant WhatsApp connections while spending active daily budgets.
                </p>
              </div>
            </div>

            {/* Diagnostic Leakage Calculator */}
            <LeakageCalculator />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. VELOXIS AI LEAD ENGINE BLUEPRINT & SIMULATOR                           */}
        {/* ========================================================================= */}
        <section id="systems-showcase" className="py-24 border-t border-slate-200 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
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

                <p className="text-sub text-slate-700 text-base leading-relaxed">
                  A modern 3-step automated lead system built to replace slow manual phone calls with instant 60-second WhatsApp qualification.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        1. Targeted Ads on Meta &amp; Google
                      </h4>
                      <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                        High-intent search ads and targeted mobile video ads funneled directly into dedicated project landing pages.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        2. Fast WhatsApp Reply Under 60 Seconds
                      </h4>
                      <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                        An automated WhatsApp assistant replies instantly, sharing floor plan PDFs and verifying the buyer&apos;s budget and timeline.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-mono font-bold flex items-center justify-center text-sm flex-shrink-0">
                      03
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        3. Automated Site Visit Booking
                      </h4>
                      <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                        Serious buyers are booked directly into the sales team&apos;s calendar for a weekend site visit without human delay.
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

            {/* AI Live Terminal Console */}
            <div className="mt-8">
              <AITerminal />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. KEYNOTE PRESENTATIONS & SPEAKING DECKS                                  */}
        {/* ========================================================================= */}
        <section id="keynotes" className="py-24 border-t border-slate-200 bg-white relative">
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
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold block mb-2">
                    Research Benchmark Deck &middot; 4 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    2026 North India Real Estate Ad Cost Benchmarks
                  </h3>
                  <p className="text-sm text-slate-700 mb-6 leading-relaxed font-normal">
                    A detailed audit of 749 property websites in Delhi NCR and UP, showing why ad costs are rising and how top brands fix it.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('benchmarks-2026')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-blue-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>

              {/* Deck 2 */}
              <div className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-indigo-700 font-semibold block mb-2">
                    Technical Blueprint &middot; 3 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    The Architecture of an Automated Real Estate Lead System
                  </h3>
                  <p className="text-sm text-slate-700 mb-6 leading-relaxed font-normal">
                    A step-by-step technical blueprint showing how to connect Meta ads, landing pages, and WhatsApp bots to double site visits.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('lead-system-architecture')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>

              {/* Deck 3 */}
              <div className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-rose-700 font-semibold block mb-2">
                    Strategic Diagnostic &middot; 3 Slides
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    Why 70% of Real Estate Ad Budgets Leak in India
                  </h3>
                  <p className="text-sm text-slate-700 mb-6 leading-relaxed font-normal">
                    Where real estate ad money gets lost, why slow response times kill sales, and how developers fix leaks in 7 days.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDeck('budget-leakage-india')}
                  className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center justify-center gap-1.5 w-full cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-rose-600" />
                  <span>Launch Slide Viewer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. STRATEGIC CTA STRIP                                                    */}
        {/* ========================================================================= */}
        <section className="cta-strip py-24 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
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
