'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Bot,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Target,
  Activity,
  Zap,
  Globe,
  Layers,
  Code,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { LinkedinIcon } from '../../components/BrandIcons';

export default function AboutPage() {
  const tools = [
    { name: 'Google Ads API', icon: Target, color: 'text-blue-600' },
    { name: 'GA4 & BigQuery', icon: Activity, color: 'text-amber-600' },
    { name: 'n8n Workflows', icon: Zap, color: 'text-emerald-600' },
    { name: 'WhatsApp Cloud', icon: Bot, color: 'text-emerald-500' },
    { name: 'Meta Conversions', icon: Globe, color: 'text-blue-500' },
    { name: 'HubSpot CRM', icon: Layers, color: 'text-orange-500' },
    { name: 'SEMrush', icon: TrendingUp, color: 'text-rose-500' },
    { name: 'Next.js / Vite', icon: Code, color: 'text-indigo-500' },
    { name: 'Tailwind CSS', icon: Cpu, color: 'text-blue-600' },
    { name: 'Search Console', icon: Globe, color: 'text-emerald-600' },
    { name: 'Server GTM', icon: Terminal, color: 'text-slate-700' },
    { name: 'Three.js / GSAP', icon: Sparkles, color: 'text-purple-600' },
  ];

  const credentials = [
    { title: 'Google Ads Search Certification', id: 'GOOG-SEARCH-892401', status: 'Active' },
    { title: 'Google Ads Apps Certification', id: 'GOOG-APPS-719342', status: 'Active' },
    { title: 'Google Ads Measurement Certification', id: 'GOOG-MEAS-652981', status: 'Active' },
    { title: 'Google Analytics (GA4) Certification', id: 'GA4-ENTERPRISE-504193', status: 'Active' },
  ];

  const timeline = [
    {
      period: '2024 — Present',
      title: 'Founder & Managing Director — Veloxis Global',
      color: 'bg-blue-600 shadow-blue-500/30',
      desc: 'Leading a specialized growth agency that builds high-converting paid ad campaigns and 60-second WhatsApp lead systems for real estate developers and growing brands.',
    },
    {
      period: '2024 — Present',
      title: 'Lead Digital Marketing Educator — ASDC Kanpur',
      color: 'bg-emerald-600',
      desc: 'Mentoring students, freshers, and professionals in Google Ads, Meta Ads, conversion tracking, and automated n8n workflows.',
    },
    {
      period: '2024 — 2025',
      title: 'Principal Researcher — 749 PropTech Benchmark Study',
      color: 'bg-indigo-600',
      desc: 'Conducted a deep benchmark study of 749 live property websites in UP and Delhi NCR, uncovering why most developers lose 70% of their ad spend through slow response times.',
    },
    {
      period: '2023 — 2024',
      title: 'Digital Marketing Trainer — NDMIT',
      color: 'bg-slate-400',
      desc: 'Trained multiple student batches with hands-on live agency simulations and practical campaign building.',
    },
    {
      period: '2022 — 2023',
      title: 'B2B Business Development & Outreach Lead',
      color: 'bg-slate-400',
      desc: 'Built outbound email systems, CRM automations, and sales pipelines for B2B tech companies.',
    },
    {
      period: '2018 — 2021',
      title: 'Outbound Telesales Specialist',
      color: 'bg-slate-400',
      desc: 'Mastered direct human communication, objection handling, and fast customer qualification on high-volume international campaigns.',
    },
  ];

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="section-label !text-blue-700 !text-xs">ABOUT MUDDASSIR ALI</span>
            </div>
            
            <h1 className="text-display font-bold text-slate-900 leading-tight">
              I Engineer What I Teach. <br className="hidden sm:block" />
              <span className="hero-highlight">Conversion Is The Only Truth.</span>
            </h1>

            <p className="font-mono text-xs font-semibold tracking-wider text-emerald-600 uppercase flex items-center gap-2">
              <span>Founder &amp; MD @ Veloxis Global</span>
              <span>&middot;</span>
              <span>Google Certified Marketer</span>
            </p>

            <p className="text-sub text-slate-700 leading-relaxed max-w-2xl font-normal">
              I build marketing systems that turn ad clicks into real revenue. Instead of chasing vanity impressions, I design high-converting paid ads and automated WhatsApp systems that reply to interested buyers in under 60 seconds.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/projects" className="btn btn-primary shadow-lg shadow-blue-500/20">
                <span>View Delivered Systems</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <a
                href="https://www.linkedin.com/in/muddassir-alii/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center gap-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Content (Portrait Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group select-none max-w-sm w-full">
              {/* Glow gradient backing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Picture container */}
              <div className="relative bg-white p-3 border border-slate-200 rounded-2xl shadow-xl z-10 overflow-hidden">
                <img
                  src="/images/Muddassir_Ali.webp"
                  alt="Muddassir Ali Portrait"
                  className="w-full h-auto rounded-xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-heading font-bold text-slate-900 block">Muddassir Ali</span>
                    <span className="text-slate-500 text-[11px]">Kanpur, India &middot; Global Deployment</span>
                  </div>
                  <div className="verified-pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Verified Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-7 text-slate-600 text-base leading-relaxed">
            <div>
              <span className="section-label block mb-2">The Trajectory</span>
              <h2 className="section-heading text-heading text-slate-900">From Direct Outreach to Autonomous Systems</h2>
            </div>
            
            <p>
              My trajectory began on the frontline of direct sales — dialing high-volume international campaigns across healthcare and cross-border trade. That early exposure to direct human communication drilled in one irreversible principle: <strong className="text-slate-900 font-semibold">if it doesn't result in a closed transaction or scheduled appointment, it is noise.</strong>
            </p>

            <blockquote className="my-6 border-l-4 border-blue-600 pl-6 py-3 bg-blue-50/50 rounded-r-xl">
              <p className="font-heading text-xl font-bold text-slate-900 leading-snug">
                &ldquo;I don't teach passive theory. I engineer live campaigns, audit real developer budgets, and stress-test every automation on production traffic.&rdquo;
              </p>
            </blockquote>

            <p>
              Seeking to eliminate the manual friction that hobbles modern sales teams, I immersed myself in algorithmic search buying, server-side attribution, and workflow orchestration. After achieving formal accreditations across <strong className="text-slate-900 font-semibold">Google Search, Apps, Measurement, and GA4</strong>, I transitioned from manual outreach to engineering autonomous lead pipelines.
            </p>

            <p>
              Today, as Founder &amp; Managing Director of <strong className="text-slate-900 font-semibold">Veloxis Global</strong>, I lead the development of high-velocity PropTech marketing architectures. Most notably, I authored the proprietary <strong className="text-slate-900 font-semibold">749 Real Estate Research Study</strong> across UP &amp; Delhi NCR, diagnosing why Indian property firms lose up to 70% of their ad spend through tracking failures and response latency.
            </p>
          </div>

          {/* Authority Highlights Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card p-6 md:p-8 space-y-6 border-l-4 border-l-blue-600">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block">Executive Summary</span>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-sm">4x Google Skillshop Certified</strong>
                    <span className="text-slate-700 text-xs font-medium">Search, Apps, Measurement, and GA4 Analytics verified credentials.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-sm">AI Lead Systems Architect</strong>
                    <span className="text-slate-700 text-xs font-medium">Creator of the 60-second WhatsApp automated buyer qualification engine.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-sm">Lead Educator (300+ Students)</strong>
                    <span className="text-slate-700 text-xs font-medium">Instructor across ASDC Kanpur &amp; NDMIT teaching modern marketing skills.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-sm">$2.4M+ Ad Spend Managed</strong>
                    <span className="text-slate-700 text-xs font-medium">Smart bidding and data-driven tracking models deployed.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/contact" className="btn btn-secondary w-full justify-center">
                  <span>Schedule Executive Briefing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Career Evolution Timeline */}
        <section className="mb-24">
          <div className="mb-12">
            <span className="section-label block mb-2">Track Record</span>
            <h2 className="section-heading text-heading text-slate-900">Career Evolution Timeline</h2>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <span className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ${item.color} border-4 border-white shadow-md`} />
                <div className="font-mono text-xs text-blue-600 font-bold uppercase tracking-wider">{item.period}</div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-1 max-w-3xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack & Tooling Architecture */}
        <section className="mb-24">
          <div className="mb-8">
            <span className="section-label block mb-2">Systems Tooling</span>
            <h2 className="section-heading text-heading text-slate-900">Enterprise Stack &amp; Infrastructure</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tools.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-3 text-xs font-mono font-medium text-slate-800 hover:border-blue-500 transition-colors"
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${t.color}`} />
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education & Formal Credentials */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Academic Background */}
          <div className="card p-6 md:p-8">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-4">Academic Background</span>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Bachelor of Arts</span>
                <h3 className="font-heading text-lg font-bold text-slate-900 mt-0.5">DAV College</h3>
                <p className="text-xs text-slate-600 mt-1">Graduated &middot; 2023</p>
              </div>
            </div>
          </div>

          {/* Professional Accreditations */}
          <div className="card p-6 md:p-8">
            <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-4">Verified Accreditations</span>
            <div className="space-y-3">
              {credentials.map((cred, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-xs text-slate-900">{cred.title}</h4>
                    <span className="text-[10px] font-mono text-slate-500">ID: {cred.id}</span>
                  </div>
                  <span className="verified-pill !text-[9.5px]">Active</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Retainer Callout */}
        <section className="max-w-3xl mx-auto card p-8 md:p-12 text-center border-t-4 border-t-blue-600">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold block mb-2">Direct Engagement</span>
          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
            Looking for Institutional Systems Architecture?
          </h3>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Muddassir Ali is available for strategic consulting retainers, enterprise ad audits, and speaking keynotes on PropTech automation and performance marketing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary shadow-lg shadow-blue-500/20">
              <span>Initiate Strategic Brief</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <a href="mailto:theofficialmuddassir@gmail.com" className="btn btn-secondary">
              Email Directly
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-medium text-slate-600">
            <span>Explore More:</span>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-semibold">Client Systems &amp; Work</Link>
            <span>&middot;</span>
            <Link href="/training" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-semibold">16-Step Curriculum</Link>
            <span>&middot;</span>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-semibold">Career &amp; AI Playbooks</Link>
          </div>
        </section>

      </div>
    </main>
  );
}
