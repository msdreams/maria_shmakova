import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { ProjectVisual } from "../project/ProjectVisual";
import { Button } from "../ui/Button";
import { IconArrowRight } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

/** Two highlighted projects on the home page; the full grid lives on /projects. */
const HOME_PROJECT_IDS = ["loop", "moneta"];

export const SelectedWork = () => {
  const projects = HOME_PROJECT_IDS.map((id) => featuredProjects.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <Section id="work" tone="paper-2">
      <Reveal className="mb-6 flex items-start justify-between gap-6 md:mb-8">
        <h2 className="font-heading text-display-lg font-semibold text-ink">Selected projects</h2>
        <Button as="link" to="/projects" variant="outline" className="mt-2 shrink-0">
          All projects
          <IconArrowRight size={15} />
        </Button>
      </Reveal>

      <div className="cards grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <Link
              to={`/projects/${project.id}`}
              aria-label={`${project.title} — open case study`}
              className="group flex flex-col-reverse"
              data-active={i === 0 ? "" : undefined}
            >
              <ProjectVisual project={project} />
              {/* text above the visual, like the cards on /projects */}
              <div className="mb-4">
                <p className="eyebrow mb-2">{project.year}</p>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
                  <span className="link-underline">{project.title}</span>
                </h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
