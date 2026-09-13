import { motion } from "framer-motion";
import { featuredProjects } from "../../data/projects";
import { ProjectCard } from "../home/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Section";
import { SweepTitle } from "../ui/SweepTitle";

export const ProjectsPage = () => (
  <article>
    <Container className="pt-10 md:pt-16">
      {/* same header as the CV page: eyebrow, light-sweep title, one-line intro */}
      <motion.header
        className="mb-7 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <p className="eyebrow mb-5">Projects</p>
        <SweepTitle className="font-heading text-display-xl font-semibold text-ink">Projects where design and code met</SweepTitle>
        <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-ink-700">
          A few things I've designed, built, or both. Each one opens into a short case study.
        </p>
      </motion.header>

      <div className="cards grid grid-cols-1 gap-x-8 gap-y-14 pb-20 md:grid-cols-2 md:pb-28">
        {featuredProjects.map((project, i) => {
          // with an odd number of projects the first (current) one spans the row
          const wide = i === 0 && featuredProjects.length % 2 === 1;
          return (
            <Reveal key={project.id} delay={(i % 2) * 0.1} className={wide ? "md:col-span-2" : undefined}>
              <ProjectCard project={project} wide={wide} lead={i === 0} />
            </Reveal>
          );
        })}
      </div>
    </Container>
  </article>
);

export default ProjectsPage;
