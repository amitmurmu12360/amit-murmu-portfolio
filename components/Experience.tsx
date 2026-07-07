"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="container-content py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience"
        description="Where the numbers above actually come from."
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line-strong to-transparent md:left-[19px]" />

        <div className="space-y-14">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-surface shadow-glow md:h-10 md:w-10">
                <Briefcase size={15} className="text-accent" />
              </div>

              <div className="glass-panel p-7 transition-all duration-300 hover:border-line-strong md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink">{job.company}</h3>
                  <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-accent">{job.role}</p>
                  <span className="text-ink-faint">·</span>
                  <p className="font-mono text-xs text-ink-faint">{job.location}</p>
                </div>

                <p className="mt-5 text-ink-dim leading-relaxed">{job.summary}</p>

                <ul className="mt-5 space-y-3">
                  {job.impact.map((line, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line-glass bg-white/[0.02] px-3 py-1 font-mono text-xs text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
