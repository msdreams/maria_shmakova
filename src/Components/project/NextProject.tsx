import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { IconArrowRight } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";

export const NextProject = ({ project }: { project: Project }) => (
  <Reveal>
    <Link
      to={`/project/${project.id}`}
      className="group grid grid-cols-1 items-center gap-6 border-t border-line py-12 md:grid-cols-[1fr_280px] md:py-16"
    >
      <div>
        <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Next project</p>
        <p className="mt-3 font-display text-display-lg text-ink">
          <span className="link-underline">{project.title}</span>
        </p>
        <p className="mt-3 inline-flex items-center gap-2 text-ink-600">
          {project.subtitle}
          <IconArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {project.cover && (
        <div className="overflow-hidden rounded-xl border border-line">
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[5/3] w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
          />
        </div>
      )}
    </Link>
  </Reveal>
);
