import Link from 'next/link';
import { FileText, ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — Muddassir Ali | Personal Authority & Growth Hub',
  description:
    'Terms of Service and legal usage conditions for muddassirali.com, educational resources, training curricula, and software blueprints.',
  alternates: {
    canonical: 'https://muddassirali.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-blue-700 font-semibold">
              Statutory Terms &middot; User Agreement
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-slate-500 mt-2">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the resources provided on <strong>muddassirali.com</strong> (&ldquo;the Website&rdquo;), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service. If you do not agree to these terms, you must discontinue your use of this Website immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              2. Intellectual Property Rights
            </h2>
            <p>
              All published articles, proprietary benchmarks (including the 749 Real Estate Developer Audit), custom code snippets, SVG diagrams, calculators, slide decks, and visual media are the intellectual property of <strong>Muddassir Ali</strong> and/or <strong>Veloxis Global</strong> unless otherwise attributed.
            </p>
            <p>
              You are granted a revocable, non-exclusive license to read, quote, and reference excerpts for personal educational purposes, provided clear canonical attribution and a clickable link back to <em>muddassirali.com</em> are maintained. Unlawful wholesale reproduction, scraping, or republication for commercial exploitation is strictly prohibited without prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              3. Permissible Use &amp; Prohibited Conduct
            </h2>
            <p>You agree not to engage in any of the following prohibited behaviors:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deploying automated crawlers, scrapers, or bot nets to overwhelm server resources or harvest contact information.</li>
              <li>Attempting to bypass authentication layers, probe system vulnerabilities, or tamper with security headers.</li>
              <li>Injecting malicious scripts, ad fraud bots, or unauthorized tracking pixels.</li>
              <li>Using our educational blueprints, training materials, or contact forms for unsolicited commercial spam.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              4. Educational &amp; Professional Advice Disclaimer
            </h2>
            <p>
              The materials, tutorials, case studies, and code samples provided on this Website are for educational and informational purposes only. While authored with rigorous industry standards, they do not constitute formal legal, accounting, tax, or guaranteed financial consulting. Real marketing performance and campaign return-on-ad-spend (ROAS) will naturally fluctuate depending on market dynamics, ad spend, and creative execution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              5. Third-Party Links &amp; Advertisements
            </h2>
            <p>
              This Website contains links to external platforms, open-source repositories (GitHub), social media networks, and third-party advertising units (Google AdSense). We hold no ownership or operational control over third-party websites, their privacy standards, or their commercial practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall Muddassir Ali, Veloxis Global, or any affiliated contributors be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, reliance upon, or inability to use this Website, its calculators, or its published automation scripts.
            </p>
          </section>

          <section className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India. Any legal dispute or controversy arising in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Kanpur, Uttar Pradesh, India.
            </p>
            <p className="pt-2 font-mono text-xs text-slate-600">
              Direct inquiries regarding these terms may be transmitted to: <a href="mailto:theofficialmuddassir@gmail.com" className="text-blue-600 hover:underline">theofficialmuddassir@gmail.com</a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
