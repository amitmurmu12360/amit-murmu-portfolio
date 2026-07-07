"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/data/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group glass-panel flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-card-hover"
    >
      <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden border-b border-line-glass bg-surface-inset">
        <Image
          src={project.cover}
          alt={`${project.name} cover`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </Link>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
            {project.name}
          </h3>
        </Link>

        <p className="mt-1.5 text-sm text-ink-dim">{project.tagline}</p>

        <div className="mt-5 rounded-xl border border-line-glass bg-white/[0.02] p-4">
          <p className="eyebrow mb-1.5 text-[10px]">Business Problem</p>
          <p className="text-sm leading-relaxed text-ink-dim line-clamp-3">{project.businessProblem}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line-glass bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-ink-faint"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            View Case Study
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-line-strong">·</span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
