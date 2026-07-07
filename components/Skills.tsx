"use client";

import { motion } from "framer-motion";
import { Code2, LineChart, Brain, Workflow, SearchCheck, type LucideIcon } from "lucide-react";
import { skills } from "@/data/site";
import SectionHeading from "./SectionHeading";

// Maps each category name from data/site.ts to an icon — presentation only,
// the category names and skill lists themselves are untouched.
const categoryIcons: Record<string, LucideIcon> = {
  "Programming & Databases": Code2,
  Visualization: LineChart,
  Analytics: Brain,
  "Data Processing & Automation": Workflow,
  "Data Exploration & Quality": SearchCheck,
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="container-content py-28">
      <SectionHeading eyebrow="Skills" title="Tools and disciplines" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, items], i) => {
          const Icon = categoryIcons[category] ?? Code2;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="group glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-line-glass bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">{category}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
