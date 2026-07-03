"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ImpactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      id="impact" 
      ref={ref}
      className="bg-ink pt-8 md:pt-12 pb-0 md:pb-0 overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex justify-center text-center">
        <motion.h2 
          style={{ y }}
          className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-tight text-bg leading-[1.2] max-w-[20ch]"
        >
          "A good system doesn't just reduce workload.<br className="hidden md:block" /> It scales leverage."
        </motion.h2>
      </div>
    </section>
  );
}
