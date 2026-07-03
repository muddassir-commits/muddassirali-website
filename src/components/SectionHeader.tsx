"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  label: string;
  title?: string;
  className?: string;
};

export function SectionHeader({ index, label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-sm tracking-wider uppercase text-ink-3 mb-6 flex items-center gap-2"
      >
        <span>{index}</span>
        <span className="text-line-strong">/</span>
        <span>{label}</span>
      </motion.div>

      {title && (
        <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-semibold tracking-[-0.02em] leading-tight text-ink max-w-[24ch]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.div>
        </h2>
      )}
    </div>
  );
}
