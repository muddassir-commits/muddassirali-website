'use client';

import { useState } from 'react';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Bot,
  Calendar,
  CheckCircle2,
  Cpu,
  Globe,
  Zap,
  Activity,
  Terminal,
} from 'lucide-react';

const NODES = [
  {
    id: 'ingestion',
    step: '01',
    title: 'Omnichannel Ingestion',
    subtitle: 'Meta Advantage+ & Google Search Intent',
    icon: Globe,
    color: 'blue',
    latency: '12ms',
    metrics: '+340% Higher Intent',
    tech: 'Google Ads API & Meta CAPI',
    description:
      'High-velocity buyer acquisition engineered across Google search query intent clusters and Meta high-ticket Advantage+ creative testing matrices.',
    details: [
      'Exact-match high-ticket property search queries',
      'Exclusion filters for brokers, job-seekers, and unqualified inquiries',
      'Dynamic creative testing matrices with algorithmic CBO allocation',
    ],
  },
  {
    id: 'attribution',
    step: '02',
    title: 'Attribution & Cookie Synapse',
    subtitle: 'Server-Side GTM & GA4 BigQuery',
    icon: Activity,
    color: 'indigo',
    latency: '24ms',
    metrics: '99.4% Event Match Quality',
    tech: 'Cloudflare Workers & BigQuery',
    description:
      'Server-side container bypassing client ad-blockers and iOS privacy constraints. Synced directly to GA4 data warehouses for true closed-loop ROAS.',
    details: [
      'First-party cookie generation via Cloudflare server edge',
      '100% deduplicated Meta Conversions API (CAPI) events',
      'Offline lead status synchronization back into Google Ads bidding',
    ],
  },
  {
    id: 'microsite',
    step: '03',
    title: 'High-Velocity Microsite',
    subtitle: 'Sub-second Edge Single-Focus Portal',
    icon: Cpu,
    color: 'emerald',
    latency: '410ms Load',
    metrics: '14.2% Conversion Rate',
    tech: 'Next.js Edge & Tailwind CSS',
    description:
      'Ultra-fast single-project microsite built solely for conversion. Zero navigation distractions, interactive 3D floor plans, and instant WhatsApp trigger.',
    details: [
      'Sub-500ms time-to-interactive on 4G/5G mobile connections',
      'One-tap direct WhatsApp lead trigger pre-filling inventory unit',
      'Dynamic phone number insertion and campaign UTM capture',
    ],
  },
  {
    id: 'qualifier',
    step: '04',
    title: 'WhatsApp AI Qualifier',
    subtitle: '24/7 Conversational Lead Triage in <60s',
    icon: Bot,
    color: 'emerald',
    latency: '<60s SLA',
    metrics: '88.6% Response Velocity',
    tech: 'n8n & Meta Cloud WhatsApp API',
    description:
      'Autonomous conversational agent engages prospects within 60 seconds of inquiry. Collects budget, timeline, and preferred unit configurations.',
    details: [
      'Natural language conversation mimicking a human sales director',
      'Instant automated floor plan PDF dispatch on demand',
      'Budget & loan readiness verification before sales rep handoff',
    ],
  },
  {
    id: 'closer',
    step: '05',
    title: 'CRM & Site Visit Closer',
    subtitle: 'HubSpot Sync & Calendar Dispatch',
    icon: Calendar,
    color: 'blue',
    latency: 'Real-time',
    metrics: '4.8x Higher Site Visits',
    tech: 'HubSpot CRM & Cal.com Scheduling',
    description:
      'Qualified prospects are automatically scheduled for physical site visits, synced to developer CRM pipelines, and dispatched to on-ground relationship managers.',
    details: [
      'Automatic appointment booking with SMS/WhatsApp reminders',
      'Full lead dossier and conversation transcript delivered to sales rep',
      'Automated follow-up sequences for no-shows and re-scheduling',
    ],
  },
];

export default function SystemArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState(NODES[0]);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 md:p-10 relative">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      
      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-emerald-600 font-bold">
              AUTONOMOUS ARCHITECTURE // LIVE PIPELINE
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
            The Veloxis AI Lead Infrastructure
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Interactive system architecture: Click any node below to inspect real-time latency, conversion benchmarks, and protocol specifications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="text-slate-400">Total Pipeline SLA:</span>{' '}
            <strong className="text-emerald-600 font-semibold">&lt; 90 Seconds</strong>
          </div>
        </div>
      </div>

      {/* Nodes Stepper (Interactive 5-Stage Visual Bar) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {NODES.map((node) => {
          const isSelected = selectedNode.id === node.id;
          const IconComp = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer ${
                isSelected
                  ? 'bg-blue-50/70 border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                  : 'bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {node.step}
                </span>
                <span className="font-mono text-[10.5px] text-slate-400">
                  {node.latency}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <IconComp
                  className={`w-4 h-4 ${
                    isSelected ? 'text-blue-600' : 'text-slate-600'
                  }`}
                />
                <h4
                  className={`font-heading font-bold text-xs truncate ${
                    isSelected ? 'text-blue-900' : 'text-slate-900'
                  }`}
                >
                  {node.title}
                </h4>
              </div>

              <p className="text-[11px] text-slate-500 truncate font-mono">
                {node.tech}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive Inspector */}
      <div className="relative z-10 bg-slate-50/90 border border-slate-200 rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white">
                STAGE {selectedNode.step}
              </span>
              <h4 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
                {selectedNode.title}
              </h4>
            </div>

            <p className="text-sm font-mono text-blue-700 font-medium">
              {selectedNode.subtitle}
            </p>

            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {selectedNode.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold block">
                Protocol Architecture Specs:
              </span>
              {selectedNode.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-mono text-xs text-slate-600 uppercase tracking-wider font-semibold">
                Live Node Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Node
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs font-mono text-slate-600 block uppercase font-medium">
                  Node Latency
                </span>
                <span className="font-mono text-lg font-bold text-slate-900">
                  {selectedNode.latency}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs font-mono text-slate-600 block uppercase font-medium">
                  Measured Lift
                </span>
                <span className="font-mono text-lg font-bold text-blue-600">
                  {selectedNode.metrics}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-100 space-y-1">
              <span className="text-xs font-mono text-blue-900 font-semibold block">
                Core Stack Integration:
              </span>
              <p className="text-xs font-mono text-slate-800 font-medium">
                {selectedNode.tech}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
