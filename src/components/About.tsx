"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const FACTS = [
  { value: "4+", label: "Years Experience", icon: Target, color: "text-blue-500", bg: "bg-blue-50" },
  { value: "500%", label: "Organic Traffic Growth", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
  { value: "42%", label: "Ads Conversion Rate", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
  { value: "150+", label: "Marketers Trained", icon: Users, color: "text-purple-500", bg: "bg-purple-50" }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none opacity-50 animate-orb" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader index="01" label="About" title="A practitioner, not just a strategist." />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="prose prose-lg max-w-[60ch] text-ink-2"
            >
              <p className="leading-[1.7] mb-6 text-lg md:text-xl font-medium text-ink">
                I didn’t learn performance marketing from a course. I learned it by spending real budgets, breaking things, and building the automation systems needed to scale what actually works.
              </p>
              <p className="leading-[1.7] text-lg text-ink-3 mb-8">
                For the last 4+ years, I’ve operated at the intersection of media buying, AI, and systems architecture. Whether it’s structuring a comprehensive SEO strategy, deploying n8n to connect Apollo to WhatsApp for B2B outreach, or training over 150 marketers — my focus is always on engineering predictable revenue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 p-6 bg-bg-alt rounded-2xl border border-line"
            >
              <h3 className="font-semibold text-ink">Core Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-ink-2">
                  <span className="text-accent mt-1">✦</span>
                  <span><strong>Results-first:</strong> No vanity metrics, just measurable ROI.</span>
                </li>
                <li className="flex items-start gap-3 text-ink-2">
                  <span className="text-accent mt-1">✦</span>
                  <span><strong>Full transparency:</strong> No black boxes in campaign management.</span>
                </li>
                <li className="flex items-start gap-3 text-ink-2">
                  <span className="text-accent mt-1">✦</span>
                  <span><strong>Systems-thinking:</strong> The work earns the retainer through automation.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Stats Grid (Elementor Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {FACTS.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-line shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4 group"
                >
                  <div className={cn("p-3 rounded-xl transition-transform group-hover:scale-110", fact.bg, fact.color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
                      {fact.value}
                    </div>
                    <div className="font-medium text-ink-3 text-sm tracking-wide uppercase">
                      {fact.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
