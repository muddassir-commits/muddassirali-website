import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../BrandIcons';

export default function AuthorBio() {
  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/90 shadow-sm relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Author Avatar with Active Pulse Ring */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md relative">
            <Image
              src="/images/Muddassir_Ali.webp"
              alt="Muddassir Ali"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Active Author" />
        </div>

        {/* Bio Content */}
        <div className="flex-grow space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900">
              Muddassir Ali
            </h3>
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono text-[10px] font-semibold border border-blue-200/60">
              Verified Author
            </span>
          </div>

          <p className="text-xs font-mono text-slate-500">
            Founder &amp; Managing Director @ Veloxis Global &middot; AI Marketing Systems Architect
          </p>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Architecting scalable AI automation pipelines, performance ad engines, and high-velocity lead acquisition systems. Principal researcher behind the 749 UP &amp; Delhi NCR Developer Audit and mentor to 300+ students.
          </p>

          {/* Credentials Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Google Ads Search Certified',
              'Google Ads Apps Certified',
              'Google Ads Measurement Certified',
              'GA4 Certified',
            ].map((cred, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-mono shadow-xs"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{cred}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Link & Socials */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/muddassir-alii/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors shadow-xs"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/muddassir-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-xs"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <Link
            href="/about"
            className="text-xs font-mono text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 group"
          >
            <span>Full Profile</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
