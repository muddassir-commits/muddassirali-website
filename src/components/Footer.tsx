import { Button } from "./Button";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-bg relative overflow-hidden">
      {/* Colorful Gradient Border at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-colorful" />

      {/* Background Orb for Footer */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none opacity-40 animate-orb-delayed" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-12 relative z-10">

        {/* Pre-Footer CTA */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-6">
            Ready to engineer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-highlight">
              predictable revenue?
            </span>
          </h2>
          <p className="text-ink-3 text-lg md:text-xl max-w-[48ch] mb-10">
            Whether you need a full-funnel Meta Ads strategy, an automated CRM build, or aggressive SEO scaling — let's talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="mailto:theofficialmuddassir@gmail.com" icon={<Mail className="w-4 h-4" />}>
              theofficialmuddassir@gmail.com
            </Button>
            <Button variant="secondary" href="https://wa.me/919194020727" target="_blank" icon={<ArrowUpRight className="w-4 h-4" />}>
              WhatsApp Me
            </Button>
          </div>
        </div>

        <div className="h-px w-full bg-line-strong/20 mb-16" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="font-mono text-xs border border-bg flex items-center justify-center w-8 h-8 rounded-sm bg-bg text-ink">
                MA
              </div>
              <span className="font-sans font-semibold text-lg text-bg">Muddassir Ali</span>
            </div>
            <p className="text-ink-3 text-sm leading-[1.6] max-w-[40ch]">
              Performance Marketing Strategist & Automation Architect. Bridging the gap between creative ads, technical SEO, and agentic AI workflows.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-4 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#work" className="text-ink-2 hover:text-bg transition-colors">Selected Work</a></li>
              <li><a href="#case-studies" className="text-ink-2 hover:text-bg transition-colors">Case Studies</a></li>
              <li><a href="#capabilities" className="text-ink-2 hover:text-bg transition-colors">Tech Stack</a></li>
              <li><a href="#experience" className="text-ink-2 hover:text-bg transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-4 mb-6">Socials</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="https://linkedin.com/in/muddassir-ali/" target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-bg transition-colors flex items-center gap-2 group">
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-ink-4 group-hover:text-bg transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@MuddassirAli" target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-bg transition-colors flex items-center gap-2 group">
                  YouTube
                  <ArrowUpRight className="w-3 h-3 text-ink-4 group-hover:text-bg transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/919194020727" target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-bg transition-colors flex items-center gap-2 group">
                  WhatsApp
                  <ArrowUpRight className="w-3 h-3 text-ink-4 group-hover:text-bg transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-4">
          <div>
            © {currentYear} Muddassir Ali. All rights reserved.
          </div>
          <div>
            Built with Next.js & Tailwind.
          </div>
        </div>

      </div>
    </footer>
  );
}
