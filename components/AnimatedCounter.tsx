"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string; // e.g. "79,000", "3.2M", "1"
  suffix?: string;
  durationMs?: number;
};

/**
 * Renders a numeric string with a count-up animation the first time it
 * scrolls into view. Preserves the original formatting style (commas,
 * a trailing letter like "M", decimal places) so the displayed value at
 * the end of the animation is byte-identical to what was passed in from
 * data/site.ts — only the animation is new, the content is untouched.
 */
export default function AnimatedCounter({ value, suffix = "", durationMs = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(() => formatFrom(0, value));

  useEffect(() => {
    if (!inView) return;

    const match = value.match(/^([\d.,]+)([A-Za-z]*)$/);
    const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : 0;

    let start: number | null = null;
    const easeOutQuad = (t: number) => t * (2 - t);

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const current = numeric * easeOutQuad(progress);
      setDisplay(formatFrom(current, value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value); // snap to exact source string at the end
    }

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function formatFrom(current: number, original: string): string {
  const match = original.match(/^([\d.,]+)([A-Za-z]*)$/);
  if (!match) return original;
  const [, numPart, letters] = match;
  const decimals = numPart.includes(".") ? numPart.split(".")[1].length : 0;
  const formatted = current.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${formatted}${letters}`;
}
