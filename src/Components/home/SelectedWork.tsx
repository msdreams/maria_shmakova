import { featuredProjects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

/** All case studies live on the home page; each card opens its own page. */
export const SelectedWork = () => (
  <Section id="work" tone="paper-2">
    <Reveal className="mb-6 md:mb-8">
      <h2 className="font-heading text-display-lg font-semibold text-ink">Selected projects</h2>
    </Reveal>

    <div className="cards grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
      {featuredProjects.map((project, i) => {
        // with an odd number of projects the first one spans the row
        const wide = i === 0 && featuredProjects.length % 2 === 1;
        return (
          <Reveal key={project.id} delay={(i % 2) * 0.1} className={wide ? "md:col-span-2" : undefined}>
            <ProjectCard project={project} wide={wide} lead={i === 0} textFirst />
          </Reveal>
        );
      })}
    </div>
  </Section>
);
