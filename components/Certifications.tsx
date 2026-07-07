"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="container-content pb-28">
      <SectionHeading eyebrow="Certifications" title="Credentials" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            className="glass-panel flex items-start gap-4 p-6 transition-colors hover:border-line-strong"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-glass bg-accent/10 text-accent">
              <Award size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-medium text-ink">{cert.name}</p>
              <p className="mt-1 text-sm text-ink-dim">
                {cert.issuer} · <span className="font-mono text-xs">{cert.year}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
