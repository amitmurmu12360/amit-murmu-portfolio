"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { profile } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-content py-28">
      <SectionHeading eyebrow="About" title="What I actually do with data" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel relative max-w-3xl overflow-hidden p-8 md:p-10"
      >
        <Quote size={32} className="mb-5 text-accent/60" strokeWidth={1.5} />
        <p className="text-base leading-relaxed text-ink-dim md:text-lg">
          {profile.shortBio}
        </p>
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </motion.div>
    </section>
  );
}
