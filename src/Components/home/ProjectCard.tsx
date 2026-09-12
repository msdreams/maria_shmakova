import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { BrowserBar } from "../ui/BrowserBar";
import { IconArrowUpRight } from "../ui/Icons";
import { Tag } from "../ui/Tag";

type ProjectCardProps = { project: Project; index: number };

const window_ =
  "absolute overflow-hidden rounded-t-lg bg-white shadow-[0_12px_32px_-12px_rgba(17,17,17,0.5)] ring-1 ring-ink/10 transition-transform duration-700 ease-smooth";

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [front, back] = project.images;
  const cover = project.cover ?? front;

  return (
    <Link to={`/project/${project.id}`} className="group block" aria-label={`${project.title} — open case study`}>
      {/* tinted board in the project's colour; screenshots rise out of its bottom edge */}
      <div
        className="relative aspect-[5/3] overflow-hidden rounded-2xl"
        style={{ backgroundColor: `${project.accent}38`, boxShadow: `inset 0 0 0 1px ${project.accent}55` }}
      >
        {back && (
          <div className={`${window_} bottom-[14%] left-[38%] right-[-4%] top-[10%] opacity-90 group-hover:-translate-y-1`}>
            <img
              src={back.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}
        {cover && (
          <div className={`${window_} bottom-0 left-[7%] right-[22%] top-[18%] flex flex-col group-hover:-translate-y-2`}>
            <BrowserBar url={project.url} compact />
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              decoding="async"
              className="min-h-0 flex-1 object-cover object-top"
            />
          </div>
        )}
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 shadow-sm backdrop-blur transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <IconArrowUpRight />
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink">
            <span className="link-underline">{project.title}</span>
          </h3>
          <p className="shrink-0 font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">
            {String(index).padStart(2, "0")} · {project.year}
          </p>
        </div>
        <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-700">{project.subtitle}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag style={{ backgroundColor: `${project.accent}2e`, boxShadow: `inset 0 0 0 1px ${project.accent}55` }} className="text-ink-900">
              {t}
            </Tag>
          </li>
        ))}
      </ul>
    </Link>
  );
};
