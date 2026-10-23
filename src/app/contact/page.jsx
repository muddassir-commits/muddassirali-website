'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Check,
  Copy,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon, GithubIcon } from '../../components/BrandIcons';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('theofficialmuddassir@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // The old n8n webhook domain does not exist, so the form used to show "success" and drop every message.
  // Now the message opens in the visitor's own email app, addressed to the founder.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry: ${formData.subject || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:theofficialmuddassir@gmail.com?subject=${subject}&body=${body}`;
    setStatus('mailto');
  };

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Header */}
        <section className="max-w-3xl text-center mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="section-label !text-blue-700 !text-[10px]">EXECUTIVE TRANSMISSION &amp; INQUIRY HUB</span>
          </div>
          <h1 className="text-display font-bold text-slate-900 mb-4">
            Initiate Strategic Consultation
          </h1>
          <p className="text-sub text-slate-600">
            Available for enterprise growth retainers, PropTech lead system audits, speaking keynotes, and specialized marketing infrastructure.
          </p>
        </section>

        {/* Main Layout: 2 Columns */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left Column: Contact Cards & Direct Access */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="section-heading text-heading text-slate-900 mb-6">Direct Channels</h2>
            
            <div className="space-y-4">
              {/* Email Card */}
              <div className="card p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block font-mono text-[10.5px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Direct Email</span>
                  <a
                    href="mailto:theofficialmuddassir@gmail.com"
                    className="font-heading font-bold text-slate-900 hover:text-blue-600 transition-colors text-base block"
                  >
                    theofficialmuddassir@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="font-mono text-[10.5px] text-blue-600 mt-2 hover:underline cursor-pointer uppercase tracking-wider font-semibold flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email to Clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="card p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Phone &amp; WhatsApp Direct</span>
                  <a
                    href="https://wa.me/918887620727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-slate-900 hover:text-emerald-600 transition-colors text-base block"
                  >
                    +91 88876 20727
                  </a>
                  <span className="font-mono text-[10px] text-emerald-600 mt-1 block font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified WhatsApp Business
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div className="card p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Headquarters</span>
                  <span className="font-heading font-bold text-slate-900 text-base block">Kanpur, Uttar Pradesh, India</span>
                  <span className="font-mono text-[10.5px] text-slate-500 mt-1 block">Global Strategy &amp; Remote Architecture</span>
                </div>
              </div>

              {/* Veloxis Global Link */}
              <div className="card p-6 flex items-start space-x-4 border-l-4 border-l-blue-600">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Agency Infrastructure</span>
                  <a
                    href="https://www.veloxisglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-slate-900 hover:text-blue-600 transition-colors text-base block"
                  >
                    veloxisglobal.com
                  </a>
                  <span className="font-mono text-[10.5px] text-slate-500 mt-1 block">Institutional PropTech Growth Agency</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-3 font-semibold">Verified Networks</span>
              <div className="flex items-center space-x-3 text-slate-700">
                <a
                  href="https://www.linkedin.com/in/muddassir-alii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/muddassir-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:text-slate-900 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/muddassir__ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:text-rose-600 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Transmission Form */}
          <div className="lg:col-span-7">
            <div className="card p-8 md:p-10 shadow-lg relative contact-form-card">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-slate-900">Direct Transmission</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Automated n8n webhook connection &middot; 24h SLA response</p>
                </div>
                <div className="verified-pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>SSL Encrypted</span>
                </div>
              </div>
              
              {status === 'mailto' && (
                <p className="text-sm text-slate-700 mb-4">
                  Your email app should open with your message. If it did not, email{' '}
                  <a className="font-bold text-blue-700 underline" href="mailto:theofficialmuddassir@gmail.com">theofficialmuddassir@gmail.com</a> directly.
                </p>
              )}
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Transmission Delivered</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your brief has been delivered to Muddassir Ali&apos;s direct dispatch workflow. You will receive an executive response within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-secondary mt-4"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border border-slate-300 px-4 py-3 rounded-lg text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="e.g., Vikram Malhotra"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">Corporate Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white border border-slate-300 px-4 py-3 rounded-lg text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white border border-slate-300 px-4 py-3 rounded-lg text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Subject / Engagement Focus */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="subject" className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">Engagement Category *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white border border-slate-300 px-4 py-3 rounded-lg text-slate-900 text-sm transition-all cursor-pointer focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select collaboration focus...</option>
                      <option value="PropTech Lead Engine">Veloxis Autonomous PropTech Lead Engine</option>
                      <option value="Performance Marketing Retainer">Algorithmic Meta / Google Ads Retainer</option>
                      <option value="749 Audit Consulting">Real Estate Ad Spend &amp; Conversion Audit</option>
                      <option value="Corporate Training">Corporate Training or Institution Workshop</option>
                      <option value="Speaking Engagement">Keynote Presentation / Summit Speaking</option>
                      <option value="Other">Other Strategic Opportunity</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">Project Scope &amp; Target Outcomes *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white border border-slate-300 px-4 py-3 rounded-lg text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="Briefly specify your monthly ad spend, current CPA bottleneck, and desired timeline..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary w-full cursor-pointer justify-center !py-3.5 shadow-lg shadow-blue-500/25"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Transmit Strategic Brief</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[11px] text-slate-400 text-center font-mono mt-3">
                    Delivered straight to Muddassir Ali&apos;s n8n operational workflow.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Internal Hub Navigation */}
        <section className="mt-8 pt-12 border-t border-slate-200 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold block mb-4">
            Explore Free Resources &amp; Credentials
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/blog"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-left group"
            >
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-1">Playbooks</span>
              <h3 className="font-heading font-bold text-slate-900 group-hover:text-blue-600 text-sm mb-1">Career &amp; AI Guides</h3>
              <p className="text-xs text-slate-600">Free practical tutorials on n8n, salary scripts, and workplace English.</p>
            </Link>
            <Link
              href="/training"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-left group"
            >
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-1">Education</span>
              <h3 className="font-heading font-bold text-slate-900 group-hover:text-emerald-600 text-sm mb-1">16-Step Curriculum</h3>
              <p className="text-xs text-slate-600">Practical performance marketing and automation mentorship.</p>
            </Link>
            <Link
              href="/projects"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-left group"
            >
              <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-1">Work</span>
              <h3 className="font-heading font-bold text-slate-900 group-hover:text-indigo-600 text-sm mb-1">Client Systems</h3>
              <p className="text-xs text-slate-600">PropTech lead funnels and live web systems delivered.</p>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
