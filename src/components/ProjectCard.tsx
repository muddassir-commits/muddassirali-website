"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import Tilt from "react-parallax-tilt";

type ProjectCardProps = {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  delay?: number;
};

export function ProjectCard({ title, desc, tags, href, delay = 0 }: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full w-full"
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1000}
        className="h-full"
      >
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group relative flex flex-col h-full bg-white border border-line rounded-2xl p-8 outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300 hover:border-line-strong shadow-sm hover:shadow-md"
        >
      {/* Top accent line that draws on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] rounded-t-2xl" />
      
      <div className="w-12 h-12 bg-bg-alt rounded-xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
        <Code2 className="w-6 h-6" />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink mb-3 pr-8">
          {title}
        </h3>
        <p className="text-ink-3 leading-[1.6] mb-8 flex-grow text-base md:text-lg">
          {desc}
        </p>
        
        <div className="flex flex-col gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span 
                key={tag}
                className="font-medium text-[0.75rem] uppercase tracking-wide text-ink-2 px-3 py-1.5 rounded-md bg-bg-alt border border-line"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-secondary transition-colors duration-300 uppercase tracking-wider">
            {isExternal ? (
              <>
                View Live System
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                View Details
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </div>
        </div>
      </div>
        </a>
      </Tilt>
    </motion.div>
  );
}
