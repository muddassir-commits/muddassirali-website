'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function LeakageCalculator() {
  const [spend, setSpend] = useState(1500000); // 15 Lakhs default

  const formatINR = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const totalLeads = Math.floor(spend / 1250);
  const lostLeads = Math.floor(totalLeads * 0.6);
  const wastedSpend = Math.floor(spend * 0.56);
  const recoveredSiteVisits = Math.floor(lostLeads * 0.32);
  const pipelineRecovered = recoveredSiteVisits * 7500000 * 0.02;
  const percentage = Math.min(94, Math.max(35, (spend / 5000000) * 100));

  return (
    <div className="card max-w-4xl mx-auto p-6 md:p-8 bg-white/95 rounded-2xl border border-slate-200 shadow-xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
        <div>
          <span className="font-mono text-xs uppercase text-blue-600 font-bold tracking-wider block mb-1">
            Interactive Diagnostic Engine
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
            Ad Budget Leakage &amp; Pipeline Recovery Calculator
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
          <Calculator className="w-5 h-5" />
        </div>
      </div>

      {/* Slider Control */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-slate-700">
            Monthly Digital Ad Spend:
          </label>
          <span className="font-mono text-xl font-bold text-blue-600">
            {formatINR(spend)}
          </span>
        </div>
        <input
          type="range"
          min="200000"
          max="5000000"
          step="100000"
          value={spend}
          onChange={(e) => setSpend(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
          <span>₹2 Lakhs / Mo</span>
          <span>₹25 Lakhs</span>
          <span>₹50 Lakhs / Mo</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
          <span className="font-mono text-xs uppercase text-rose-600 font-semibold block mb-1">
            Estimated Budget Burned
          </span>
          <span className="font-mono text-2xl font-bold text-rose-700 block">
            {formatINR(wastedSpend)}
          </span>
          <span className="text-[11px] text-rose-600/80 mt-1 block">
            Lost on zero-tracking clicks &amp; unresponsive leads
          </span>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <span className="font-mono text-xs uppercase text-amber-700 font-semibold block mb-1">
            Lost Buyer Inquiries
          </span>
          <span className="font-mono text-2xl font-bold text-amber-800 block">
            {lostLeads.toLocaleString()} Leads / Mo
          </span>
          <span className="text-[11px] text-amber-700/80 mt-1 block">
            Drop off due to &gt;6hr delay in manual follow-up
          </span>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <span className="font-mono text-xs uppercase text-emerald-700 font-semibold block mb-1">
            Recoverable Pipeline Value
          </span>
          <span className="font-mono text-2xl font-bold text-emerald-800 block">
            {formatINR(pipelineRecovered)}
          </span>
          <span className="text-[11px] text-emerald-700/80 mt-1 block">
            Recovered via 60s WhatsApp qualification
          </span>
        </div>
      </div>

      {/* Recovery Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold text-slate-700">
          <span>Veloxis System Pipeline Recovery Efficiency</span>
          <span className="font-mono text-emerald-700">{percentage.toFixed(0)}% Restored</span>
        </div>
        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 h-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
