"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    period: "2024 – Present",
    role: "Meta Ads Manager & Trainer",
    org: "Advanced Skill Development Center",
    desc: "Delivered curriculum to 50+ professionals. Managed live Meta Ads achieving 38% conversion rate using AI segmentation."
  },
  {
    period: "2024 – 2025",
    role: "Digital Marketing Manager",
    org: "NDMIT",
    desc: "Trained 150+ marketers across 17 cohorts. Managed student admission funnels achieving 42% conversion rate."
  },
  {
    period: "2021 – 2024",
    role: "SEO & Sales Executive",
    org: "Global Trade Plaza",
    desc: "Achieved 500% organic traffic growth (2K to 12K monthly sessions) and increased organic leads by 340% via technical SEO."
  },
  {
    period: "2020 – 2021",
    role: "Marketing & Sales Executive",
    org: "Bharat Wood Works",
    desc: "Managed B2B marketing for industrial products, driving consistent sales growth across distributor segments."
  },
  {
    period: "2019 – 2020",
    role: "Healthcare Sales Rep",
    org: "UK Healthcare Telesales",
    desc: "Handled outbound telesales and CRM records, consistently meeting revenue targets through consultative selling."
  }
];

function TimelineItem({ item }: { item: typeof EXPERIENCES[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  
  return (
    <div ref={ref} className="relative pl-8 md:pl-12 pb-16 last:pb-0 group">
      {/* Node */}
      <motion.div 
        className={cn(
          "absolute left-0 top-1.5 w-3 h-3 border-2 transition-colors duration-300 z-10 bg-bg rounded-full",
          isInView ? "border-accent bg-accent" : "border-line-strong"
        )}
        style={{ transform: "translateX(-50%)" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.4, ease: "backOut" }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn("transition-opacity duration-300 bg-white p-6 md:p-8 rounded-2xl border border-line shadow-sm", isInView ? "opacity-100" : "opacity-40")}
      >
        <div className="font-mono text-xs md:text-sm tracking-wider uppercase text-accent mb-3 font-semibold">
          {item.period}
        </div>
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-ink mb-2">
          {item.role} <span className="text-ink-4 font-normal mx-1">—</span> <span className="text-ink-2 font-medium">{item.org}</span>
        </h3>
        <p className="text-base md:text-lg text-ink-3">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && lineRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        animation: gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          { scaleY: 1, ease: "none" }
        ),
        scrub: true
      });
    }
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-alt border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader index="05" label="Experience" title="Professional history." />
        
        <div ref={containerRef} className="relative mt-16 ml-4 md:ml-8 max-w-[800px]">
          {/* Background rail */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-line-strong" />
          
          {/* Animated active rail */}
          <div 
            ref={lineRef}
            className="absolute top-0 bottom-0 left-0 w-[2px] bg-accent origin-top -translate-x-[0.5px]" 
          />
          
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={i} item={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
