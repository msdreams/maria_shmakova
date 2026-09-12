import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { IconArrowUpRight } from "../ui/Icons";
import { Tag } from "../ui/Tag";

type ProjectCardProps = { project: Project; index: number };

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <Link to={`/project/${project.id}`} className="group block" aria-label={`${project.title} — open case study`}>
    <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-line bg-paper-2">
      {project.cover ? (
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
        />
      ) : (
        <div className="h-full w-full bg-accent-diag opacity-40" />
      )}
      <span className="absolute right-4 top-4 inline-flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 shadow-sm backdrop-blur transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        <IconArrowUpRight />
      </span>
    </div>

    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">
          {String(index).padStart(2, "0")} · {project.year}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-ink">
          <span className="link-underline">{project.title}</span>
        </h3>
        <p className="mt-2 max-w-[48ch] text-ink-600">{project.subtitle}</p>
      </div>
    </div>
    <ul className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((t) => (
        <li key={t}>
          <Tag>{t}</Tag>
        </li>
      ))}
    </ul>
  </Link>
);
