"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pt-52">
      {/* Ambient background glow — decorative only, no content */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob animate-floatSlow h-[420px] w-[420px] from-accent/25 -top-32 left-1/4" />
        <div className="glow-blob animate-floatSlow h-[360px] w-[360px] from-accent/10 top-20 right-0 [animation-delay:3s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(237,238,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(237,238,240,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-content flex flex-col-reverse items-center gap-14 md:flex-row md:items-center"
      >
        <div className="max-w-xl">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-glass bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulseGlow" />
            Data Analyst · SQL · Python · Power BI
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-display-1 font-semibold leading-[1.0] text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-ink-dim md:text-xl">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-6 text-ink-dim">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-ink"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-ink"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative aspect-[4/5] w-56 shrink-0 md:w-80"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-line-glass bg-surface-raised shadow-card">
            <Image
              src={profile.avatarUrl}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 320px, 224px"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
