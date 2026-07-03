"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm tracking-wider uppercase text-ink-3 mb-6 pb-4 border-b border-line-strong/20 max-w-xl"
        >
          06 <span className="text-line-strong/40 mx-2">/</span> Contact
        </motion.div>

        <div className="max-w-2xl mt-16 md:mt-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[1.05] mb-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's build the
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-accent"
              >
                system.
              </motion.div>
            </div>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-ink-3 leading-[1.65] mb-12 max-w-[48ch]"
          >
            I work with a small number of ambitious brands at a time. If you need performance marketing that scales, or the automation architecture to handle it — let's talk.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a 
              href="mailto:theofficialmuddassir@gmail.com"
              className="inline-flex items-center gap-2 bg-bg text-ink px-6 py-4 rounded font-medium hover:bg-bg-alt transition-colors group"
            >
              Email Me
              <ArrowUpRight className="w-4 h-4 text-ink-3 group-hover:text-ink transition-colors" />
            </a>
            <a 
              href="https://wa.me/919194020727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-line-strong/30 text-bg px-6 py-4 rounded font-medium hover:border-line-strong transition-colors group"
            >
              WhatsApp
              <ArrowUpRight className="w-4 h-4 text-ink-3 group-hover:text-bg transition-colors" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 font-mono text-sm text-ink-3"
          >
            <div>
              <span className="block text-ink-4 mb-1 uppercase tracking-wider text-xs">Email</span>
              theofficialmuddassir@gmail.com
            </div>
            <div>
              <span className="block text-ink-4 mb-1 uppercase tracking-wider text-xs">Phone</span>
              +91-9194020727
            </div>
            <div>
              <span className="block text-ink-4 mb-1 uppercase tracking-wider text-xs">Location</span>
              India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
