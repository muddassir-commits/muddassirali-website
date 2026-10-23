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
  { num: '01', category: 'Foundation', title: 'Marketing Fundamentals', desc: 'How marketing generates revenue, key numbers (CAC, ROI, profit), and customer economics.', color: 'blue' },
  { num: '02', category: 'Positioning', title: 'Brand Strategy', desc: 'Finding your brand voice, unique selling point, and why customers choose you.', color: 'blue' },
  { num: '03', category: 'Targeting', title: 'Audience Targeting', desc: 'Finding the exact people who need your service using smart interest and demographic filters.', color: 'blue' },
  { num: '04', category: 'Psychology', title: 'Buyer Psychology', desc: 'Understanding customer doubts, objections, and the triggers that make them buy.', color: 'blue' },
  { num: '05', category: 'Funnel', title: 'Customer Journey', desc: 'Guiding a stranger from seeing your first ad to becoming a paying client.', color: 'blue' },
  { num: '06', category: 'Conversion', title: 'High-Converting Pages', desc: 'Building fast, simple mobile landing pages that turn visitors into calls and leads.', color: 'blue' },
  { num: '07', category: 'Channels', title: 'Multi-Channel Growth', desc: 'Combining Google Search, Instagram Ads, and SEO for predictable growth.', color: 'blue' },
  { num: '08', category: 'Web Platform', title: 'WordPress & Modern Web', desc: 'Building clean, mobile-friendly websites with zero layout shift.', color: 'blue' },
  { num: '09', category: 'Search', title: 'SEO & Google Ranking', desc: 'Ranking on page 1 of Google with keyword research and clean technical optimization.', color: 'emerald' },
  { num: '10', category: 'Organic Social', title: 'Reels & Video Content', desc: 'Writing strong video hooks and making short-form content that reaches thousands.', color: 'emerald' },
  { num: '11', category: 'Media Buying', title: 'Meta & Instagram Ads', desc: 'Running profitable Facebook and Instagram ads with creative video testing.', color: 'emerald' },
  { num: '12', category: 'Search Buying', title: 'Google Search Ads', desc: 'Capturing high-intent buyers who are searching to buy your service right now.', color: 'emerald' },
  { num: '13', category: 'Automation', title: 'WhatsApp & n8n Workflows', desc: 'Setting up automated 60-second WhatsApp replies and automated lead alerts.', color: 'indigo' },
  { num: '14', category: 'Measurement', title: 'Google Analytics 4 & GTM', desc: 'Setting up custom event tracking so you know which ad produced each sale.', color: 'indigo' },
  { num: '15', category: 'Diagnostic', title: 'Search Console Audits', desc: 'Finding indexing errors, checking site health, and boosting search visibility.', color: 'indigo' },
  { num: '16', category: 'Commercial', title: 'Landing Retainers & Clients', desc: 'How to pitch clients, present audits, and close ₹25,000/month recurring contracts.', color: 'indigo' },
];

export default function TrainingPage() {
  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-semibold">
            Practical Education &amp; Mentorship
          </span>
        </div>

        <h1 className="text-display font-bold text-slate-900 mb-6">
          Training The Next Generation <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            of Practical Marketers
          </span>
        </h1>

        <p className="text-sub text-slate-700 max-w-2xl mx-auto mb-12 text-base leading-relaxed font-normal">
          Practical training on Google Ads, Meta and automation. Real campaigns, practical systems, zero fluff.
        </p>

      </section>

      {/* 16-Step Curriculum Journey */}
      <section className="py-16 max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold block mb-2">
            Structured Learning
          </span>
          <h2 className="text-heading text-slate-900 font-bold">The 16-Step Practical Curriculum</h2>
          <p className="text-sm text-slate-700 mt-2 max-w-xl mx-auto">
            From basic marketing psychology to automated WhatsApp replies and high-converting Google ads.
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
                    ? 'text-emerald-700'
                    : step.color === 'indigo'
                    ? 'text-indigo-700'
                    : 'text-blue-700'
                }`}
              >
                {step.num} / {step.category}
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">{step.desc}</p>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn !bg-white !text-blue-700 hover:!bg-blue-50 !shadow-none !px-6 !py-3 text-xs font-semibold inline-flex items-center gap-2"
          >
            <span>Inquire for Corporate Training</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="btn !bg-blue-700/60 hover:!bg-blue-700 !text-white !border-white/20 !shadow-none !px-6 !py-3 text-xs font-semibold"
          >
            See Delivered Client Systems &rarr;
          </Link>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 text-xs font-mono text-blue-100 flex items-center justify-center gap-2">
          <span>Looking for free practical guides?</span>
          <Link href="/blog" className="underline font-bold text-white hover:text-blue-200">
            Read Free Career &amp; AI Playbooks &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
