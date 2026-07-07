"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Consistent section header used across all page sections. `eyebrow` is a
 * short label naming the section (no numbering — these sections aren't a
 * literal sequence the reader steps through, so a plain label reads more
 * premium than an artificial 01/02/03 marker).
 */
export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-display-2 font-semibold text-ink">{title}</h2>
      {description ? <p className="mt-4 text-ink-dim leading-relaxed">{description}</p> : null}
    </motion.div>
  );
}
