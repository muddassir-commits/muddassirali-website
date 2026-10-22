import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, GithubIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="footer py-16 border-t border-slate-200 bg-slate-100/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-200">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-md text-sm">
                MA
              </span>
              <span className="font-heading font-bold text-lg text-slate-900">Muddassir Ali</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Founder &amp; Managing Director of Veloxis Global. AI Marketing Systems Architect and Google Certified Performance Marketer.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-blue-700 font-bold">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm text-slate-600 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-slate-900 transition-colors font-semibold text-blue-600">Career &amp; AI Blog</Link>
              <Link href="/projects" className="hover:text-slate-900 transition-colors">Systems &amp; Work</Link>
              <Link href="/training" className="hover:text-slate-900 transition-colors">Training</Link>
              <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold">Verified Authority Hubs</h4>
            <div className="flex items-center space-x-3 text-slate-600">
              <a
                href="https://www.linkedin.com/in/muddassir-alii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/muddassir-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/muddassir__ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 transition-colors p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:theofficialmuddassir@gmail.com"
                className="hover:text-emerald-600 transition-colors p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-500 font-mono text-[11px] mt-2">
              Kanpur, India &middot; Global Strategic Deployment
            </p>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Muddassir Ali &middot; Veloxis Global.</span>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <span>&middot;</span>
            <Link href="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
          </div>
          <div className="tracking-widest uppercase text-[10px] font-mono text-slate-500 flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Enterprise Authority Architecture
          </div>
        </div>
      </div>
    </footer>
  );
}
