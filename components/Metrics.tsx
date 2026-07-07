"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";
import AnimatedCounter from "./AnimatedCounter";

export default function Metrics() {
  return (
    <section className="relative border-y border-line-glass bg-surface-raised/40 py-16">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-glass bg-line-glass md:grid-cols-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative flex flex-col justify-between gap-3 bg-surface px-6 py-8 transition-colors hover:bg-surface-raised"
            >
              <span className="font-mono text-3xl font-medium tabular-nums text-ink md:text-4xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </span>
              <span className="text-xs leading-snug text-ink-dim">{m.label}</span>
              <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
