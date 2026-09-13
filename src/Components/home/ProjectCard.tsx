import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { ProjectVisual } from "../project/ProjectVisual";

type ProjectCardProps = { project: Project; wide?: boolean; lead?: boolean };

export const ProjectCard = ({ project, wide = false, lead = false }: ProjectCardProps) => (
  <Link to={`/projects/${project.id}`} className="group block" data-active={lead ? "" : undefined} aria-label={`${project.title} — open case study`}>
    <ProjectVisual project={project} wide={wide} />

    <div className="mt-5">
      <p className="eyebrow mb-3">{project.year}</p>
      <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink">
        <span className="link-underline">{project.title}</span>
      </h3>
      <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{project.subtitle}</p>
    </div>
  </Link>
);
