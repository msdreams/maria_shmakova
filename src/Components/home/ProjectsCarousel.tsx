import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { ProjectVisual } from "../project/ProjectVisual";
import { Button } from "../ui/Button";
import { Carousel, carouselArrowClass } from "../ui/Carousel";
import { IconChevronLeft, IconChevronRight } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

/** Previews only — the full grid with descriptions lives on /projects.
 *  Widths leave a sliver of the next card so the right-edge fade has
 *  something to dissolve, instead of chopping a full preview in half. */
export const ProjectsCarousel = () => (
  <Section id="work" tone="paper-2">
    <Carousel
      label="Project previews"
      tone="paper-2"
      renderControls={({ prev, next, step }) => (
        <Reveal className="mb-10 md:mb-14">
          <h2 className="mb-6 font-heading text-display-lg font-semibold text-ink">Selected projects</h2>
          <div className="flex items-center justify-between gap-6">
            <Button as="link" to="/projects" variant="link">
              More projects
            </Button>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                className={carouselArrowClass}
                onClick={() => step(-1)}
                disabled={!prev}
                aria-label="Previous projects"
              >
                <IconChevronLeft size={18} />
              </button>
              <button
                type="button"
                className={carouselArrowClass}
                onClick={() => step(1)}
                disabled={!next}
                aria-label="Next projects"
              >
                <IconChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      )}
    >
      {featuredProjects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          data-slide
          aria-label={`${project.title} — open case study`}
          className="group w-[82%] shrink-0 snap-start md:w-[calc((100%-1.5rem)/2.15)]"
        >
          <ProjectVisual project={project} />
          <div className="mt-4">
            <p className="eyebrow mb-2">{project.year}</p>
            <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
              <span className="link-underline">{project.title}</span>
            </h3>
          </div>
        </Link>
      ))}
    </Carousel>
  </Section>
);
