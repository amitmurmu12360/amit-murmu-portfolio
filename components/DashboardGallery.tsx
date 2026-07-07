"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { dashboards } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function DashboardGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="dashboards" className="container-content py-28">
      <SectionHeading
        eyebrow="Dashboard Gallery"
        title="Dashboards in production"
        description="Click a dashboard to preview it larger."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboards.map((d, i) => (
          <motion.button
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            onClick={() => setActive(i)}
            className="group glass-panel relative aspect-[4/3] overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover"
          >
            <Image
              src={d.image}
              alt={d.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
              <span className="text-xs font-medium text-ink">{d.title}</span>
              <Maximize2 size={13} className="text-ink-dim opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={dashboards[active].title}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-surface/90 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close preview"
              className="absolute right-6 top-6 text-ink-dim transition-colors hover:text-ink"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl border border-line-glass shadow-card-hover"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={dashboards[active].image} alt={dashboards[active].title} fill sizes="100vw" className="object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
