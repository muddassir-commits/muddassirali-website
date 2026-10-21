'use client';

import { useState } from 'react';
import { Smartphone, CheckCheck } from 'lucide-react';

const CONVERSATION_STEPS = [
  {
    userMsg: 'Hi, I saw your ad for Skyline Residences. Can I get the brochure and pricing details?',
    botMsg:
      'Hi there! 👋 Here is the official project brochure and pricing breakdown for Skyline Residences [PDF • 4.8 MB]. Are you looking for self-use or high-yield investment?',
    options: [
      { text: 'Family / Self-Use 🏡', next: 1 },
      { text: 'Investment Portfolio 📈', next: 1 },
    ],
  },
  {
    botMsg: 'Got it! We have 3BHK & 4BHK configurations. What budget bracket are you optimizing for?',
    options: [
      { text: '₹1.50 Cr – ₹2.25 Cr', next: 2 },
      { text: '₹2.50 Cr+ (Penthouse)', next: 2 },
    ],
  },
  {
    botMsg:
      'Perfect! We have 2 exclusive corner units matching your criteria. Would you like to schedule a private VIP site walkthrough this Saturday?',
    options: [
      { text: 'Saturday 11:30 AM (Confirm)', next: 3 },
      { text: 'Sunday 03:00 PM (Confirm)', next: 3 },
    ],
  },
  {
    botMsg:
      '✅ Walkthrough Confirmed! Calendar invite sent to your WhatsApp. Lead qualified and synced to HubSpot CRM via Veloxis Lead Engine in 43 seconds.',
    options: [{ text: '🔄 Replay Simulator', next: 0, isReset: true }],
  },
];

export default function QualifierSimulator() {
  const [messages, setMessages] = useState([
    { text: CONVERSATION_STEPS[0].userMsg, isUser: true, time: 'Just now' },
    { text: CONVERSATION_STEPS[0].botMsg, isUser: false, time: 'Just now' },
  ]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleOptionClick = (opt) => {
    if (opt.isReset) {
      setStepIndex(0);
      setMessages([
        { text: CONVERSATION_STEPS[0].userMsg, isUser: true, time: 'Just now' },
        { text: CONVERSATION_STEPS[0].botMsg, isUser: false, time: 'Just now' },
      ]);
      return;
    }

    // Add user message
    setMessages((prev) => [
      ...prev,
      { text: opt.text, isUser: true, time: 'Just now' },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      const nextStep = CONVERSATION_STEPS[opt.next];
      setStepIndex(opt.next);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: nextStep.botMsg, isUser: false, time: 'Just now' },
      ]);
    }, 750);
  };

  const currentOptions = CONVERSATION_STEPS[stepIndex]?.options || [];

  return (
    <div className="relative mx-auto max-w-[360px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-700">
      {/* Phone Notch & Speaker */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
        <span className="w-10 h-1 bg-slate-700 rounded-full" />
      </div>

      {/* Screen Frame */}
      <div className="rounded-[28px] bg-slate-50 overflow-hidden flex flex-col h-[520px] text-xs">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white px-4 pt-7 pb-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs">
              VR
            </span>
            <div>
              <span className="font-bold block text-sm">Skyline Residences</span>
              <span className="text-[10px] text-emerald-200 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {isTyping ? 'typing...' : 'Veloxis Lead Bot • Online'}
              </span>
            </div>
          </div>
          <Smartphone className="w-4 h-4 text-emerald-200 opacity-60" />
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#ECE5DD]/40">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-2.5 rounded-2xl shadow-sm text-[12px] leading-relaxed ${
                  m.isUser
                    ? 'bg-[#DCF8C6] text-slate-900 rounded-tr-none'
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-200/60'
                }`}
              >
                <p>{m.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-500">
                  <span>{m.time}</span>
                  {m.isUser && <CheckCheck className="w-3 h-3 text-blue-600" />}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200/60 rounded-2xl rounded-tl-none p-2.5 text-slate-400 text-[11px] flex items-center gap-1">
                <span>Veloxis AI is replying</span>
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-2.5 bg-white border-t border-slate-200 flex flex-wrap gap-1.5 justify-center">
          {currentOptions.map((opt, i) => (
            <button
              key={i}
              disabled={isTyping}
              onClick={() => handleOptionClick(opt)}
              className="text-[11px] font-medium px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-sm disabled:opacity-50"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
