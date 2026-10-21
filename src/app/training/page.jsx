'use client';

import Link from 'next/link';
import {
  GraduationCap,
  Users,
  Award,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const CURRICULUM_STEPS = [
  { num: '01', category: 'Foundation', title: 'Marketing Ecosystems', desc: 'Core economic models, metrics (CAC, LTV, CPA), and market dynamics.', color: 'blue' },
  { num: '02', category: 'Positioning', title: 'Brand Strategy', desc: 'Visual tone, value propositions, and core differentiation angles.', color: 'blue' },
  { num: '03', category: 'Targeting', title: 'Audience Segmentation', desc: 'Demographic scoping, interest layering, and in-market buyer signals.', color: 'blue' },
  { num: '04', category: 'Psychology', title: 'Buyer Persona Mapping', desc: 'Pain-point mapping, decision criteria, and trigger events.', color: 'blue' },
  { num: '05', category: 'Architecture', title: 'Customer Journey Maps', desc: 'Tracking touchpoints from first click to physical visit & close.', color: 'blue' },
  { num: '06', category: 'Conversion', title: 'High-Velocity Funnels', desc: 'Eliminating drop-offs with single-focus landing microsites.', color: 'blue' },
  { num: '07', category: 'Channels', title: 'Omnichannel Distribution', desc: 'Balancing paid search, paid social, and organic search indexing.', color: 'blue' },
  { num: '08', category: 'Web Platform', title: 'WordPress & CMS Systems', desc: 'Modern layout engineering, responsive CSS, and conversion blocks.', color: 'blue' },
  { num: '09', category: 'Search', title: 'Technical & On-Page SEO', desc: 'Schema markup, site speed, crawlability, and keyword intent trees.', color: 'emerald' },
  { num: '10', category: 'Organic Social', title: 'Content & Reels Growth', desc: 'Short-form video hooks, retention curves, and algorithmic distribution.', color: 'emerald' },
  { num: '11', category: 'Media Buying', title: 'Meta Ads Algorithmic Buying', desc: 'Advantage+ campaigns, creative testing matrices, and CBO structures.', color: 'emerald' },
  { num: '12', category: 'Search Buying', title: 'Google Ads Smart Bidding', desc: 'tCPA, tROAS, negative keyword architectures, and Quality Score.', color: 'emerald' },
  { num: '13', category: 'Automation', title: 'WhatsApp & n8n Workflows', desc: 'Sub-second webhook response triggers and conversational bot scripts.', color: 'indigo' },
  { num: '14', category: 'Measurement', title: 'Google Analytics 4 & GTM', desc: 'Event-driven taxonomy, server-side tracking, and conversion triggers.', color: 'indigo' },
  { num: '15', category: 'Diagnostic', title: 'Google Search Console', desc: 'Crawl error resolution, Core Web Vitals, and index coverage audits.', color: 'indigo' },
  { num: '16', category: 'Commercial', title: 'Client Retainers & Closing', desc: 'Pitch proposals, audit presentations, and value-based pricing models.', color: 'indigo' },
];

export default function TrainingPage() {
  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
            Executive Education &amp; Mentorship
          </span>
        </div>

        <h1 className="text-display font-bold text-slate-900 mb-6">
          Training The Next Generation <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            of Systems-Driven Marketers
          </span>
        </h1>

        <p className="text-sub text-slate-600 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
          300+ learners trained &middot; 17+ batches instructed &middot; Lead Educator across NDMIT &amp;
          ASDC Kanpur. Real-world campaigns, zero generic theory.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-200">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span className="text-stat text-blue-600 font-bold block mb-1">17+</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
              Batches Trained
            </span>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span className="text-stat text-emerald-600 font-bold block mb-1">300+</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
              Learners Instructed
            </span>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span className="text-stat text-indigo-600 font-bold block mb-1">6+</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
              Years Field Experience
            </span>
          </div>
        </div>
      </section>

      {/* 16-Step Curriculum Journey */}
      <section className="py-16 max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold block mb-2">
            Structured Execution
          </span>
          <h2 className="text-heading text-slate-900 font-bold">The 16-Step Practical Curriculum</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            From basic audience psychology to automated n8n webhook routing and algorithmic ad
            optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CURRICULUM_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all relative"
            >
              <span
                className={`font-mono text-xs font-bold block mb-1 ${
                  step.color === 'emerald'
                    ? 'text-emerald-600'
                    : step.color === 'indigo'
                    ? 'text-indigo-600'
                    : 'text-blue-600'
                }`}
              >
                {step.num} / {step.category}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip py-16 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center max-w-5xl mx-auto shadow-xl">
        <h3 className="font-heading text-2xl font-bold mb-3">
          Interested in Enterprise Team Training or Keynotes?
        </h3>
        <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
          Custom corporate marketing workshops on Google Ads smart bidding, Meta CAPI conversion
          pipelines, and automated lead qualifier state machines.
        </p>
        <Link
          href="/contact"
          className="btn !bg-white !text-blue-700 hover:!bg-blue-50 !shadow-none !px-6 !py-3 text-xs font-semibold inline-flex items-center gap-2"
        >
          <span>Inquire for Corporate Training</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
