import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects, seo } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — ${seo.title}`,
      description: project.tagline,
      images: [{ url: project.cover }],
    },
  };
}

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <div className="text-ink-dim leading-relaxed">{children}</div>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="container-content pb-24 pt-32">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
        <ArrowLeft size={15} />
        Back to projects
      </Link>

      <header className="mt-8 max-w-2xl">
        <h1 className="font-display text-display-2 font-semibold text-ink">{project.name}</h1>
        <p className="mt-4 text-lg text-ink-dim">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={15} />
            View Code
          </a>
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : null}
        </div>
      </header>

      <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line-glass bg-surface-inset">
        <Image src={project.cover} alt={`${project.name} cover`} fill sizes="100vw" className="object-cover" priority />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <DetailBlock label="Business Problem">{project.businessProblem}</DetailBlock>
        <DetailBlock label="Business Objective">{project.businessObjective}</DetailBlock>
      </div>

      <div className="mt-16 border-t border-line-glass pt-16">
        <p className="eyebrow mb-4">Architecture</p>
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-dashed border-line-strong bg-surface-inset">
          <Image
            src={project.architectureImage}
            alt={`${project.name} architecture diagram`}
            fill
            sizes="100vw"
            className="object-contain p-6"
          />
        </div>
      </div>

      <div className="mt-16 border-t border-line-glass grid gap-12 pt-16 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Workflow</p>
          <ol className="space-y-3">
            {project.workflow.map((step, i) => (
              <li key={i} className="flex gap-4 text-sm text-ink-dim">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="eyebrow mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="rounded-full border border-line-glass bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-ink-dim">
                {tag}
              </span>
            ))}
          </div>

          <p className="eyebrow mb-4 mt-10">Features</p>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-dim">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-line-glass grid gap-12 pt-16 md:grid-cols-3">
        <DetailBlock label="Business Impact">
          <ul className="space-y-2">
            {project.businessImpact.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock label="Challenges">
          <ul className="space-y-2">
            {project.challenges.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock label="What I Learned">{project.learning}</DetailBlock>
      </div>

      <div className="mt-16 border-t border-line-glass pt-16">
        <DetailBlock label="Future Improvements">
          <ul className="space-y-2">
            {project.future.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </DetailBlock>
      </div>

      {project.screenshots.length ? (
        <div className="mt-16 border-t border-line-glass pt-16">
          <p className="eyebrow mb-6">Screenshots</p>
          <div className="grid gap-6 md:grid-cols-2">
            {project.screenshots.map((src) => (
              <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line-glass bg-surface-inset">
                <Image src={src} alt={`${project.name} screenshot`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}
