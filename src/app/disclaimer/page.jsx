import Link from 'next/link';
import { AlertCircle, ArrowLeft, ShieldAlert, Award } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer & Advertising Disclosures — Muddassir Ali',
  description:
    'Earnings disclaimer, advertising disclosures, Google AdSense terms, and educational declarations for muddassirali.com.',
  alternates: {
    canonical: 'https://muddassirali.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  const lastUpdated = 'October 23, 2026';

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4 shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 font-semibold">
              Statutory Disclosures &middot; Advertising &middot; Results Disclaimer
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Disclaimer &amp; Disclosures
          </h1>
          <p className="text-sm font-mono text-slate-500 mt-2">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              1. General Information &amp; Educational Purpose
            </h2>
            <p>
              The content published on <strong>muddassirali.com</strong> (including articles, calculators, automation guides, prompts, and frameworks) is authored by <strong>Muddassir Ali</strong> for educational, informational, and professional discussion purposes only. While every reasonable effort is made to guarantee accuracy, timeliness, and technical precision, we make no representations or warranties regarding completeness, suitability, or commercial infallibility.
            </p>
          </section>

          <section className="space-y-4 p-6 bg-amber-50/50 rounded-2xl border border-amber-200/70">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-700" />
              2. Earnings &amp; Results Disclaimer
            </h2>
            <p>
              Case studies, performance figures (such as lead acquisition costs, return on ad spend, or client pipeline volumes), and career roadmap earnings benchmarks discussed on this Website reflect real past performances under specific market, creative, and operational variables.
            </p>
            <p>
              <strong>Past performance is never an absolute guarantee of future outcomes.</strong> Your individual results in career progression, freelance acquisition, salary negotiation, or paid ad marketing will depend entirely on your market environment, technical discipline, capital, execution velocity, and factors beyond anyone&rsquo;s direct control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              3. Google AdSense &amp; Advertising Disclosures
            </h2>
            <p>
              This Website partners with <strong>Google AdSense</strong> and other programmatic ad platforms to serve digital advertisements across published blog articles and resource tools. These ads may be contextually relevant or targeted based on your previous browsing history via DoubleClick DART cookies.
            </p>
            <p>
              We do not directly endorse or guarantee the products, software, or services promoted inside third-party banner units unless explicitly stated in a dedicated sponsored review.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              4. Affiliate Links &amp; Software Endorsements
            </h2>
            <p>
              Certain links on this Website may be affiliate links. If you click on an affiliate link and make a purchase or subscribe to a software platform (such as cloud hosting, domains, or SaaS tools), we may receive an affiliate referral commission at <strong>no additional cost to you</strong>. We only recommend software, workflows, and infrastructure that we personally test, verify, and utilize.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              5. Professional Certifications
            </h2>
            <p>
              Muddassir Ali holds verified credentials including <em>Google Ads Search Certification</em>, <em>Google Ads Apps Certification</em>, <em>Google Ads Measurement Certification</em>, and <em>Google Analytics (GA4) Certification</em>. These certifications verify individual proficiency with Google platforms and do not imply official partnership, endorsement, or direct corporate affiliation by Google LLC.
            </p>
          </section>

          <section className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              6. Direct Questions
            </h2>
            <p>
              For inquiries or clarifications regarding these disclosures, please write to: <a href="mailto:theofficialmuddassir@gmail.com" className="text-blue-600 hover:underline">theofficialmuddassir@gmail.com</a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
