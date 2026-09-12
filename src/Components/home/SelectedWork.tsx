import { featuredProjects } from "../../data/projects";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { ProjectCard } from "./ProjectCard";

export const SelectedWork = () => (
  <Section
    id="work"
    eyebrow="01 — Explore projects"
    title="Projects where design and code met"
    intro="A few things I've designed, built, or both. Each one opens into a short case study."
  >
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
      {featuredProjects.map((project, i) => (
        <Reveal key={project.id} delay={(i % 2) * 0.1}>
          <ProjectCard project={project} index={i + 1} />
        </Reveal>
      ))}
    </div>
  </Section>
);
