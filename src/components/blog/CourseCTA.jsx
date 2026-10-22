import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, Users, Calendar } from 'lucide-react';

export default function CourseCTA({
  title = 'Want to Master AI Automations & High-Income Ad Buying in 30 Days?',
  subtitle = 'Skip 6 months of trial and error. Join 300+ students and working professionals trained by Muddassir Ali. Practical case studies, live cohorts, and direct mentorship.',
  badge = 'Accelerated Masterclass &middot; Live Cohorts',
  ctaText = 'Explore Syllabi & Reserve Spot',
  ctaHref = '/training',
}) {
  return (
    <div className="my-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white shadow-xl relative overflow-hidden border border-blue-500/20">
      {/* Background Cyber Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[10.5px] uppercase tracking-wider font-semibold">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span>{badge}</span>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          {title}
        </h3>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>

        {/* Feature Checks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Fluff &middot; 100% Practical</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400 shrink-0" />
            <span>300+ Students Mentored</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Weekend Executive Batches</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href={ctaHref}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:gap-3 group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-[11px] font-mono text-slate-400">
            Next Cohort Enrollment Closing Soon &middot; Limited 25 Seats
          </span>
        </div>
      </div>
    </div>
  );
}
