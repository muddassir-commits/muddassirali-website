"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatCounterProps = {
  value: string | number;
  label: string;
};

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    const valueStr = String(value);
    const numericMatch = valueStr.match(/^(\d+)(.*)$/);

    if (numericMatch) {
      const target = parseInt(numericMatch[1], 10);
      const suffix = numericMatch[2];
      
      const duration = 1600; // 1.6s
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setDisplayValue(`${target}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(current)}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else {
      // Non-numeric (like "[REAL]")
      setDisplayValue(valueStr);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col border-b border-line pb-4 last:border-b-0 last:pb-0">
      <span className="font-mono tabular-nums text-3xl font-medium text-ink mb-1">
        {displayValue}
      </span>
      <span className="text-sm text-ink-3">
        {label}
      </span>
    </div>
  );
}
