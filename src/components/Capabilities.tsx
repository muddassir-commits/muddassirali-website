"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TrendingUp, Search, Zap, Code, BarChart3, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CapabilityGroup = {
  category: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  skills: string[];
};

const CAPABILITIES: CapabilityGroup[] = [
  {
    category: "Performance Marketing",
    icon: TrendingUp,
    color: "text-blue-600 border-blue-200",
    bg: "bg-blue-50",
    skills: ["Meta Ads", "Google Ads", "Full-funnel", "CRO", "Performance Max"]
  },
  {
    category: "SEO",
    icon: Search,
    color: "text-emerald-600 border-emerald-200",
    bg: "bg-emerald-50",
    skills: ["Technical SEO", "On-page", "Off-page", "Keyword Architecture"]
  },
  {
    category: "AI & Automation",
    icon: Zap,
    color: "text-amber-600 border-amber-200",
    bg: "bg-amber-50",
    skills: ["n8n", "OpenAI API", "WhatsApp API", "CRM Automations"]
  },
  {
    category: "Web & Product",
    icon: Code,
    color: "text-purple-600 border-purple-200",
    bg: "bg-purple-50",
    skills: ["Next.js", "Supabase", "Vercel", "Razorpay"]
  },
  {
    category: "Analytics & Data",
    icon: BarChart3,
    color: "text-pink-600 border-pink-200",
    bg: "bg-pink-50",
    skills: ["GA4", "Attribution", "Airtable", "Dashboards"]
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader index="04" label="Capabilities" title="What I bring to the table." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {CAPABILITIES.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-8 border border-line shadow-sm hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-line">
                  <div className={cn("w-12 h-12 flex items-center justify-center rounded-xl transition-transform group-hover:scale-110 duration-300", group.bg, group.color.split(' ')[0])}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-ink text-xl">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="font-medium text-[0.8rem] uppercase tracking-wide text-ink-2 px-3 py-1.5 border border-line rounded-md bg-bg-alt"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
