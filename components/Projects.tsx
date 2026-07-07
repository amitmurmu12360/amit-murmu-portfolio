import { projects } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="container-content py-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Projects with a business problem behind them"
        description="Each project page includes the business problem, architecture, workflow, impact and what I'd do differently — not just a tech-stack list."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
