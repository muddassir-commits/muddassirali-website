'use client';

import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERT_DATA } from '../data/certifications';

export default function CertModal({ certKey, onClose }) {
  if (!certKey) return null;
  const data = CERT_DATA[certKey];
  if (!data) return null;

  return (
    <div
      className="cert-modal-backdrop active"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="cert-modal-content relative p-8 max-w-lg w-full bg-white rounded-2xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top 4-Color Google Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-t-2xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-bold">
            {data.category}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
          {data.title}
        </h3>

        <div className="flex items-center gap-2 mb-5">
          <span className="px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 font-mono text-[10.5px] text-blue-700 font-semibold">
            Issued by {data.org}
          </span>
          <span className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10.5px] text-slate-700 font-semibold">
            ID: {data.id}
          </span>
        </div>

        {/* Description */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Competencies */}
        <div className="mb-7">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-600 mb-3 font-bold">
            Validated Competencies &amp; Algorithms:
          </h4>
          <ul className="space-y-2.5">
            {data.competencies.map((comp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{comp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-200 gap-4">
          <a
            href={data.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-grow justify-center !py-3 flex items-center gap-1.5"
          >
            <span>Verify on Google Skillshop Registry</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
