'use client';

import { useState } from 'react';
import { Terminal, Bot, CheckCircle2, Play, RefreshCw, Smartphone } from 'lucide-react';

const SCENARIOS = [
  {
    id: 'luxury-4bhk',
    name: 'Luxury 4BHK Penthouse (₹3.8 Cr)',
    location: 'Noida Expressway, Sector 128',
    channel: 'Meta Advantage+ Lead Ad -> WhatsApp Webhook',
    speed: '41 Seconds Total Duration',
    logs: [
      { time: '00:01.2s', type: 'SYS', text: 'Webhook Trigger: Ingested Form #9482 (Meta Ad Set: NCR_HighNetWorth_Expwy)' },
      { time: '00:03.4s', type: 'AI', text: 'Dispatched Veloxis WhatsApp Agent -> Prospect (+91 98112 XXXXX)' },
      { time: '00:09.1s', type: 'USER', text: '"Hi, saw the video tour of Tower C 4BHK. Is the golf view unit available?"' },
      { time: '00:14.8s', type: 'AI', text: '"Good morning Mr. Kapoor. Yes, Tower C Floors 18 & 22 have unobstructed golf views (3,450 sq.ft). Sending the floor plan PDF now."' },
      { time: '00:16.0s', type: 'SYS', text: 'Auto-dispatched asset: Tower_C_Penthouse_SpecSheet.pdf (9.4 MB)' },
      { time: '00:26.5s', type: 'USER', text: '"Looks solid. What is the booking amount and can I inspect the sample flat this weekend?"' },
      { time: '00:32.1s', type: 'AI', text: '"Booking token is ₹15L. Director of Sales, Mr. Sharma, has reserved VIP slots this Saturday at 11:30 AM or 3:00 PM. Which works best?"' },
      { time: '00:38.2s', type: 'USER', text: '"Saturday 3:00 PM works."' },
      { time: '00:41.0s', type: 'SYS', text: 'STATUS: QUALIFIED [Score 98/100]. Site visit synced to HubSpot & Google Calendar. Sales Manager notified.' },
    ],
  },
  {
    id: 'commercial-retail',
    name: 'High-Street Retail SCO (₹6.5 Cr)',
    location: 'Golf Course Extension Road, Gurugram',
    channel: 'Google Search Exact Intent ("commercial sco plots gurugram")',
    speed: '53 Seconds Total Duration',
    logs: [
      { time: '00:01.0s', type: 'SYS', text: 'Google Ads Conversion: Exact match query match [cpc: ₹240]' },
      { time: '00:02.5s', type: 'SYS', text: 'Attribution: Server-side GTM cookie set (UID: gclid_8917203)' },
      { time: '00:05.1s', type: 'AI', text: 'Veloxis Bot Initialized: "Welcome to Grand Central SCO. Looking for self-use retail or pre-leased ROI?"' },
      { time: '00:14.3s', type: 'USER', text: '"Pre-leased with minimum 7% rental yield. Budget around 6 to 7 Crore."' },
      { time: '00:21.0s', type: 'AI', text: '"We have a ground floor anchor store leased to a Tier-1 Bank at 7.4% ROI, 9-year lock-in. Would you like the lease agreement summary?"' },
      { time: '00:27.4s', type: 'USER', text: '"Yes send the lease abstract on this number."' },
      { time: '00:31.0s', type: 'SYS', text: 'Dispatched encrypted PDF: Bank_Lease_Abstract_ROI_Model.pdf' },
      { time: '00:46.2s', type: 'USER', text: '"Understood. Let us schedule an executive meeting with the promoter."' },
      { time: '00:52.8s', type: 'SYS', text: 'STATUS: INSTITUTIONAL_BUYER [High Yield]. Escalated to Managing Director directly.' },
    ],
  },
];

export default function AITerminal() {
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);

  return (
    <div className="w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Terminal Title Bar */}
      <div className="bg-slate-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 gap-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-semibold tracking-wider text-[11px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            VELOXIS_AI_RUNTIME // TELEMETRY TERMINAL v4.8
          </span>
        </div>

        {/* Scenario Switchers */}
        <div className="flex items-center gap-2">
          {SCENARIOS.map((scen) => (
            <button
              key={scen.id}
              onClick={() => setActiveScenario(scen)}
              className={`px-3 py-1 rounded-lg text-[10.5px] font-mono transition-all cursor-pointer ${
                activeScenario.id === scen.id
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {scen.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Sub-header Metadata */}
      <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-slate-200 font-bold">
            {activeScenario.name}
          </span>
          <span className="hidden md:inline text-slate-500">&middot;</span>
          <span className="hidden md:inline text-slate-400">
            {activeScenario.location}
          </span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{activeScenario.speed}</span>
        </div>
      </div>

      {/* Terminal Log Stream */}
      <div className="p-6 space-y-3.5 max-h-[420px] overflow-y-auto bg-slate-950/60 leading-relaxed">
        {activeScenario.logs.map((log, index) => {
          let badgeColor = 'bg-slate-800 text-slate-300';
          if (log.type === 'SYS') badgeColor = 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/50';
          if (log.type === 'AI') badgeColor = 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50';
          if (log.type === 'USER') badgeColor = 'bg-blue-900/60 text-blue-300 border border-blue-700/50';

          return (
            <div key={index} className="flex items-start gap-3 text-[11.5px] font-mono">
              <span className="text-slate-500 shrink-0 text-[10px] pt-0.5">
                {log.time}
              </span>
              <span
                className={`px-1.5 py-0.5 rounded text-[9.5px] font-bold shrink-0 uppercase tracking-wider ${badgeColor}`}
              >
                {log.type}
              </span>
              <span
                className={`${
                  log.type === 'USER'
                    ? 'text-blue-100 font-medium'
                    : log.type === 'AI'
                    ? 'text-emerald-300'
                    : 'text-slate-400'
                }`}
              >
                {log.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="bg-slate-950 px-6 py-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10.5px] text-slate-400 gap-1.5">
        <div className="flex items-center gap-2">
          <Bot className="w-3.5 h-3.5 text-emerald-400" />
          <span>Conversational Agent Active &middot; Automated Qualification</span>
        </div>
        <span className="text-slate-500 font-mono">
          Handshake: 200 OK &middot; End-to-End Encrypted
        </span>
      </div>
    </div>
  );
}
