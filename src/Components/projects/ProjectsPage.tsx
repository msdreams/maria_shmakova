import { featuredProjects } from "../../data/projects";
import { ProjectCard } from "../home/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Section";

/** No page title: the first project's name and description open the page. */
export const ProjectsPage = () => (
  <article>
    <Container className="pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="cards grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {featuredProjects.map((project, i) => {
          // with an odd number of projects the first (current) one spans the row
          const wide = i === 0 && featuredProjects.length % 2 === 1;
          return (
            <Reveal key={project.id} delay={(i % 2) * 0.1} className={wide ? "md:col-span-2" : undefined}>
              <ProjectCard project={project} wide={wide} lead={i === 0} textFirst />
            </Reveal>
          );
        })}
      </div>
    </Container>
  </article>
);

export default ProjectsPage;
