"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const TOOLS = [
  "Meta Ads", "Google Ads", "GA4", "Google Tag Manager", "HubSpot", 
  "Salesforce", "Klaviyo", "Looker Studio", "n8n", "Make.com", "Zapier",
  "Claude 3.5 Sonnet", "ChatGPT", "ActiveCampaign", "SEMrush",
  "Shopify", "Mixpanel", "Figma", "Apollo.io"
];

export function Marquee() {
  const shouldReduceMotion = useReducedMotion();

  // We duplicate the list to ensure a seamless loop
  const content = (
    <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap px-4 md:px-6">
      {TOOLS.map((tool, i) => (
        <div key={i} className="flex items-center gap-8 md:gap-12">
          <span className="font-semibold text-ink uppercase tracking-widest text-sm md:text-base">
            {tool}
          </span>
          <span className="text-accent text-lg md:text-xl leading-none select-none" aria-hidden="true">✦</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="marquee" className="bg-gradient-to-r from-bg-alt via-accent-wash/30 to-bg-alt border-y border-line-strong py-6 overflow-hidden flex select-none group shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)]">
      <div 
        className={cn(
          "flex shrink-0 min-w-full items-center justify-around",
          !shouldReduceMotion && "animate-[marquee_50s_linear_infinite]"
        )}
      >
        {content}
      </div>
      <div 
        aria-hidden="true" 
        className={cn(
          "flex shrink-0 min-w-full items-center justify-around",
          !shouldReduceMotion && "animate-[marquee_50s_linear_infinite]"
        )}
      >
        {content}
      </div>
    </section>
  );
}
