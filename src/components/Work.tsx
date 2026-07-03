"use client";

import useEmblaCarousel from "embla-carousel-react";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const PROJECTS = [
  {
    title: "Multi-Agent B2B Lead Generation System",
    desc: "Built end-to-end cold outreach automation with Claude API agentic qualification and n8n orchestration. Generated 47 qualified leads in 27 days.",
    tags: ["Apollo.io", "Claude API", "n8n", "Gmail"],
    href: "#contact"
  },
  {
    title: "AI-Powered CRM System",
    desc: "Architected a production CRM with multi-agent AI coordination, managing business leads across multiple verticals with automated scoring and routing.",
    tags: ["Supabase", "Next.js", "Claude API", "n8n"],
    href: "#contact"
  },
  {
    title: "Agentic AI Lead Qualification Workflow",
    desc: "Designed autonomous 24/7 lead evaluation agent with 0–100 confidence scoring across 5+ decision criteria, reducing manual qualification time by 80%.",
    tags: ["Claude API", "n8n", "Airtable"],
    href: "#contact"
  },
  {
    title: "Meta Ads Campaign Architecture",
    desc: "Designed full-funnel Meta Ads campaigns achieving 38% conversion rate and 35% CPA reduction. Generated 150+ qualified enrollments.",
    tags: ["Meta Ads", "GA4", "WhatsApp Automation"],
    href: "#contact"
  },
  {
    title: "SEO & Organic Growth Strategy",
    desc: "Achieved 500% organic traffic growth (2K to 12K/month) in 14 months with 25+ first-page rankings and a 340% increase in organic leads.",
    tags: ["Technical SEO", "On-Page", "Content Strategy"],
    href: "#contact"
  }
];

export function Work() {
  return (
    <section id="work" className="bg-bg-alt py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-bg-alt pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <SectionHeader 
            index="02" 
            label="Selected Work & Systems" 
            title="Architecting engines for predictable revenue." 
            className="!mb-0 flex flex-col items-center text-center [&_h2]:text-center"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex">
              <ProjectCard 
                {...project}
                delay={0.1 + (i * 0.1)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
