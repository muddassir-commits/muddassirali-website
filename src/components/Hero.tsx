"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./Button";

const ROTATING_WORDS = ["Performance", "Meta Ads", "Automation", "AI Systems"];

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 500, y: 500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headlineLine2 = "engineered end-to-end.";

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-24 md:py-32">
      {/* Background dot grid with parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0 bg-dot-grid opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      
      {/* Moving colorful orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient background orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20 md:opacity-30 animate-orb"
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 md:opacity-30 animate-orb-delayed"
        />
        
        {/* Cursor tracking orb */}
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", damping: 40, stiffness: 150, mass: 0.8 }}
          className="absolute top-0 left-0 w-[40vw] h-[40vw] -ml-[20vw] -mt-[20vw] bg-highlight rounded-full mix-blend-multiply filter blur-[120px] opacity-40 md:opacity-50"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full relative z-10 flex flex-col justify-center min-h-[60vh]">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm tracking-wider uppercase text-ink-3 mb-8"
        >
          Meta Ads · Performance · Automation · AI
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.75rem,6vw,5.25rem)] font-semibold tracking-[-0.03em] leading-[0.98] text-ink mb-8 max-w-[14ch] md:max-w-[16ch] flex flex-col items-start">
          <motion.div layout className="overflow-hidden flex items-end gap-[0.2em] flex-wrap">
            <motion.div layout className="relative inline-flex items-end h-[1.1em] pb-2 -mb-2 overflow-hidden min-w-0">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentWord}
                  layout
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap bg-gradient-to-r from-accent via-secondary to-highlight bg-clip-text text-transparent"
                >
                  {ROTATING_WORDS[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <motion.span
              layout
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              marketing,
            </motion.span>
          </motion.div>
          <motion.div layout className="overflow-hidden mt-2">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {headlineLine2}
            </motion.div>
          </motion.div>
        </h1>

        {/* Accent line draw */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="h-px w-24 bg-accent mb-8 origin-left"
        />

        {/* Sub-headline / Lede */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[48ch]"
        >
          <p className="text-lg md:text-xl text-ink-2 leading-[1.6] mb-4">
            I run full-funnel Meta & Google Ads — and I build the n8n / CRM / AI automation systems that make them convert.
          </p>
          <p className="text-lg md:text-xl text-ink-3 leading-[1.6] font-mono text-sm uppercase tracking-wide">
            4+ years. 300+ marketers trained.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4 md:gap-6"
        >
          <Button href="#work" icon={<ArrowRight className="w-4 h-4" />}>
            View selected work
          </Button>
          <Button variant="secondary" href="mailto:theofficialmuddassir@gmail.com" icon={<Mail className="w-4 h-4" />}>
            Email
          </Button>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-8 flex flex-col items-center gap-4 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-line overflow-hidden relative">
          <motion.div 
            className="w-full h-1/2 bg-ink"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
