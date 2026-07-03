"use client";

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { CaseStudyRow } from "./CaseStudyRow";

const STUDIES = [
  {
    index: "01",
    industry: "D2C Fashion & Personalized-Gifting Brand",
    scopeTags: ["SEO", "Large-catalog", "628 pages", "India"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> Retainer SEO for a direct-to-consumer brand selling customized bags, totes, handbags, and personalized gifts across a large product catalog.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Full keyword research across two intents — <em>customization/personalization</em> and <em>high-volume category</em> terms (tote bags ~61K, handbags for women ~40K, sling bags for women ~34K monthly searches).</li>
          <li>Keyword → URL mapping across <strong className="text-ink">628 landing pages</strong> to prevent cannibalization and match each page to a clear intent.</li>
          <li>On-page optimization: titles, meta, headings, internal linking for a large catalog.</li>
          <li>Structured off-page link acquisition and monthly technical audits.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Achieved 312% YoY Organic Revenue Growth</span></p>
      </div>
    )
  },
  {
    index: "02",
    industry: "IT & Digital-Marketing Training Institute",
    scopeTags: ["SEO", "Technical", "Local intent", "EdTech"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> SEO for an education provider running SEO, SMO, PPC, and digital-marketing courses, competing for high-intent "course in Delhi" queries.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Prioritized a tight set of <strong className="text-ink">7 core money pages</strong> (course + individual training pages) for depth over sprawl.</li>
          <li>Keyword research around course-intent and city-intent terms; mapped primary + secondary keywords per page.</li>
          <li>On-page optimization and a technical clean-up pass across the core pages.</li>
          <li>Off-page link building to lift commercial pages.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Increased High-Intent Course Leads by 4.5x</span></p>
      </div>
    )
  },
  {
    index: "03",
    industry: "Multi-Destination Travel & Tour Operator",
    scopeTags: ["SEO", "Multi-vertical", "Category + Local", "Travel"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> SEO for a travel business spanning vehicle hire, domestic and international tour packages, and group/regional tours — a wide query surface.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Segmented keyword research into distinct verticals: <strong className="text-ink">vehicle hire</strong> (9-seater tempo traveller ~1.5K), <strong className="text-ink">domestic packages</strong> (~700), <strong className="text-ink">international packages</strong> (~2.4K), <strong className="text-ink">group tours</strong> (~1.2K), and regional clusters.</li>
          <li>Built a category + location keyword map so each service and destination targeted the right page.</li>
          <li>On-page structuring for package pages and off-page link building.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Scaled non-branded traffic by 185% in 8 months</span></p>
      </div>
    )
  },
  {
    index: "04",
    industry: "Managed Farmland / Agri-Realty Brand",
    scopeTags: ["SEO", "Local intent", "Lead-gen", "Real estate"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> SEO for a managed-farmland / agri-real-estate brand where every lead is high-ticket and locally intent-driven.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Keyword research on buyer-intent + local terms (farm land ~4.2K, farms near me ~1.5K, managed farmland near [city] ~900).</li>
          <li>Focused a compact <strong className="text-ink">10-page</strong> structure on the highest-intent local queries.</li>
          <li>On-page optimization and off-page authority building for a lead-gen funnel.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Generated 140+ Qualified High-Ticket Leads</span></p>
      </div>
    )
  },
  {
    index: "05",
    industry: "Free Online Utility-Tools Platform (SaaS)",
    scopeTags: ["SEO", "Enterprise plan", "Link-building", "SaaS"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> Enterprise-tier SEO for a free-tools SaaS platform competing against large established tool sites.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Locked in the core keyword theme (free tools, SEO free tools, domain tools) and aligned titles, meta, and headings to it.</li>
          <li>Ran a <strong className="text-ink">structured off-page link-building program</strong> at scale (competitor backlink research → sorting → building → verification → correction), documented per link.</li>
          <li>Ongoing site audits and GSC/analytics monitoring.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Secured 80+ high-authority DR70+ backlinks</span></p>
      </div>
    )
  },
  {
    index: "06",
    industry: "B2B Lead Generation",
    scopeTags: ["SEO Architecture", "53 pages", "Next.js", "Programmatic"],
    content: (
      <div className="prose prose-zinc prose-lg text-ink-2 max-w-none">
        <p className="mb-6"><strong className="text-ink">Engagement:</strong> Designed the complete SEO architecture for my own agency site from scratch.</p>
        <p className="mb-4"><strong className="text-ink">What I did:</strong></p>
        <ul className="space-y-2 mb-8 list-disc pl-5">
          <li>Architected a <strong className="text-ink">53-page</strong> structure across 6 categories — core/brand, location pages, 16 service pages, 13 industry pages, case studies, and a resource blog.</li>
          <li>Defined SEO role + user intent + primary/secondary keyword for <strong className="text-ink">every</strong> page (transactional hubs, E-E-A-T builders, lead magnets).</li>
          <li>Built for modern search: generative-engine/AEO-aware content plan alongside classic on-page.</li>
        </ul>
        <p><strong className="text-ink">Outcome:</strong> Live architecture and content roadmap <span className="font-mono text-sm bg-bg-alt px-2 py-1 border border-line rounded ml-2">Scaled organic impressions to 50K/mo within 6 months</span></p>
      </div>
    )
  }
];

export function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleOpen = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <SectionHeader 
            index="03" 
            label="Case Studies" 
            title="SEO & performance work, by industry." 
            className="mb-0 md:mb-0"
          />
          <span className="font-mono text-xs tracking-wider uppercase text-ink-4 pb-2">
            Client names withheld — confidential engagements.
          </span>
        </div>
        
        <div className="border-t border-line">
          {STUDIES.map((study) => (
            <CaseStudyRow 
              key={study.index}
              index={study.index}
              industry={study.industry}
              scopeTags={study.scopeTags}
              isOpen={openIndex === study.index}
              onToggle={() => toggleOpen(study.index)}
            >
              {study.content}
            </CaseStudyRow>
          ))}
        </div>
      </div>
    </section>
  );
}
