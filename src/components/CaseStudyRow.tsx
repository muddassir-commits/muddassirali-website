"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CaseStudyRowProps = {
  index: string;
  industry: string;
  scopeTags: string[];
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function CaseStudyRow({ index, industry, scopeTags, isOpen, onToggle, children }: CaseStudyRowProps) {
  return (
    <div className="border-b border-line group">
      <button 
        onClick={onToggle}
        className="w-full py-8 flex items-start md:items-center justify-between text-left focus-visible:outline-none focus-visible:bg-bg-alt transition-colors"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 flex-grow pr-8">
          <span className="font-mono text-4xl md:text-5xl text-ink-4/40 group-hover:text-ink-3 transition-colors">
            {index}
          </span>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-ink tracking-tight">
              {industry}
            </h3>
            <div className="flex flex-wrap gap-2">
              {scopeTags.map(tag => (
                <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-ink-3 px-2 py-1 border border-line rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-2 md:mt-0 text-ink-3 group-hover:text-accent transition-colors">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-2 pl-0 md:pl-[88px] max-w-[800px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
