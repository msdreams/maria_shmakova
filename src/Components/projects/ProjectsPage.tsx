import { featuredProjects } from "../../data/projects";
import { ProjectCard } from "../home/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export const ProjectsPage = () => (
  <Section
    eyebrow="Projects"
    title="Projects where design and code met"
    intro="A few things I've designed, built, or both. Each one opens into a short case study."
  >
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
      {featuredProjects.map((project, i) => {
        // with an odd number of projects the first (current) one spans the row
        const wide = i === 0 && featuredProjects.length % 2 === 1;
        return (
          <Reveal key={project.id} delay={(i % 2) * 0.1} className={wide ? "md:col-span-2" : undefined}>
            <ProjectCard project={project} wide={wide} />
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default ProjectsPage;
