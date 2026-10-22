import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Muddassir Ali | Personal Authority & Growth Hub',
  description:
    'Privacy Policy for muddassirali.com outlining data handling, Google AdSense, DoubleClick DART cookies, analytics, and visitor privacy protections.',
  alternates: {
    canonical: 'https://muddassirali.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-blue-700 font-semibold">
              Legal Compliance &middot; GDPR &middot; CCPA &middot; AdSense
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-slate-500 mt-2">
            Effective Date &amp; Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              1. Overview &amp; Commitment to Privacy
            </h2>
            <p>
              Welcome to <strong>muddassirali.com</strong> (the &ldquo;Website&rdquo;), operated by 
              <strong> Muddassir Ali</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to safeguarding your personal data and respecting your privacy rights. This Privacy Policy clarifies what information we collect, how it is processed, and your rights concerning your personal information when you access our content, tutorials, calculators, and educational resources.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>We collect information in two primary ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information You Voluntarily Provide:</strong> When you submit inquiries through our contact forms, book a consultation, or register for training cohorts, we may collect your name, corporate email address, telephone/WhatsApp number, company name, and project scope notes.
              </li>
              <li>
                <strong>Automatically Collected Technical Data:</strong> When you navigate our Website, our servers and analytics providers automatically log diagnostic information such as your Internet Protocol (IP) address, browser type, operating system, referring URLs, pages viewed, time spent, and telemetry metadata.
              </li>
            </ul>
          </section>

          <section className="space-y-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              3. Google AdSense &amp; Third-Party Advertising
            </h2>
            <p>
              This Website may display advertisements served by <strong>Google AdSense</strong> and other third-party ad networks. Google is a third-party vendor that uses cookies to serve ads based on your prior visits to this Website or other sites across the Internet:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>DoubleClick DART Cookie:</strong> Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
              </li>
              <li>
                <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Google Ads Settings
                </a>
                . Alternatively, you can opt out of a third-party vendor&rsquo;s use of cookies for personalized advertising by visiting{' '}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  www.aboutads.info
                </a>
                .
              </li>
              <li>
                Third-party ad servers or ad networks use technology in their respective advertisements and links that appear on our Website, which are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our Website&rsquo;s third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see.
              </li>
              <li>
                Please note that <em>muddassirali.com</em> has no access to or control over these cookies that are used by third-party advertisers.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              4. Analytics &amp; Tracking Technologies
            </h2>
            <p>
              We utilize <strong>Google Analytics 4 (GA4)</strong> and Microsoft Clarity to inspect aggregate traffic patterns, diagnose technical faults, and understand which educational content and engineering playbooks provide the most utility to our community. These tools collect anonymized interaction data and do not store personally identifiable credit card or banking information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              5. How We Use Your Data
            </h2>
            <p>We process collected data exclusively for lawful business purposes, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Delivering requested consultation briefs and case studies',
                'Responding to training and masterclass inquiries',
                'Maintaining site infrastructure and cyber security',
                'Monitoring ad fraud, bot traffic, and unauthorized scraping',
                'Improving user experience and Core Web Vitals performance',
                'Complying with statutory and legal obligations',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs md:text-sm bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              6. GDPR &amp; CCPA/CPRA Privacy Rights
            </h2>
            <p>
              Depending on your jurisdiction (such as the European Economic Area or California), you may possess statutory rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data held by us.</li>
              <li><strong>The Right to Rectification:</strong> You can request correction of any information you believe is inaccurate.</li>
              <li><strong>The Right to Erasure:</strong> You can request the deletion of your personal data under certain statutory conditions.</li>
              <li><strong>The Right to Object / Restrict:</strong> You may object to or restrict processing of your personal information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us directly via email. We respond to all verified requests within thirty (30) business days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              7. Data Retention &amp; Security Measures
            </h2>
            <p>
              We apply industry-standard SSL/TLS cryptographic encryption across all transmission endpoints. We do not sell, rent, or trade your personal contact details to third-party telemarketers or external broker databases under any circumstances.
            </p>
          </section>

          <section className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
              8. Contacting the Data Controller
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact:
            </p>
            <div className="font-mono text-xs md:text-sm text-slate-700 space-y-1 pt-2">
              <p><strong>Name:</strong> Muddassir Ali</p>
              <p><strong>Organization:</strong> Veloxis Global &middot; muddassirali.com</p>
              <p><strong>Email:</strong> <a href="mailto:theofficialmuddassir@gmail.com" className="text-blue-600 hover:underline">theofficialmuddassir@gmail.com</a></p>
              <p><strong>Jurisdiction:</strong> Kanpur, Uttar Pradesh, India</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
