import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNextProject, getProject } from "../../data/projects";
import { Button } from "../ui/Button";
import { Container } from "../ui/Section";
import { IconArrowUpRight, IconChevronLeft } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { CaseSection } from "./CaseSection";
import { NextProject } from "./NextProject";
import { ScreenMosaic } from "./ScreenMosaic";

const ease = [0.2, 0.7, 0.2, 1] as const;

export const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id);

  if (!project) return <Navigate to="/projects" replace />;

  const next = project.status === "published" ? getNextProject(project.id) : undefined;

  return (
    <article>
      <Container className="pt-5 md:pt-6">
        <Link to="/projects" className="link-underline inline-flex items-center gap-1 text-sm text-ink-600 transition-colors hover:text-ink [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:-translate-x-0.5">
          <IconChevronLeft size={16} />
          Projects
        </Link>

        <motion.header
          className="mt-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* one block: title with the live links beside it, role · year, then the stack */}
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
            <h1 className="font-heading text-display-lg font-semibold text-ink">{project.title}</h1>
            {(project.url || project.links) && (
              <div className="flex flex-wrap gap-3 md:pt-2">
                {project.url && (
                  <Button as="a" href={project.url} target="_blank" rel="noopener noreferrer" variant="outline">
                    {project.urlLabel ?? "Open project"}
                    <IconArrowUpRight size={15} />
                  </Button>
                )}
                {project.links?.map((l) => (
                  <Button key={l.href} as="a" href={l.href} target="_blank" rel="noopener noreferrer" variant="outline">
                    {l.label}
                    <IconArrowUpRight size={15} />
                  </Button>
                ))}
              </div>
            )}
          </div>
          <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-600">{project.tagline ?? project.subtitle}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        </motion.header>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          {project.images.length > 0 ? (
            <ScreenMosaic project={project} />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-line bg-accent-diag opacity-30 md:aspect-[16/7]">
              <span className="font-label text-xs uppercase tracking-[0.14em] text-ink">screens — TODO</span>
            </div>
          )}
        </motion.div>

        <div className="mt-10 md:mt-14">
          <Reveal>
            <div className="grid grid-cols-1 border-t border-line md:grid-cols-2 md:gap-x-12">
              <CaseSection title="Overview">
                <p>{project.overview}</p>
              </CaseSection>
              <CaseSection title="Challenge">
                <p>{project.challenge}</p>
              </CaseSection>
            </div>
          </Reveal>

          <Reveal>
            <CaseSection title="Process" className="border-t border-line">
              <ol className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
                {project.process.map((step, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="pt-1 font-label text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </CaseSection>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 border-t border-line md:grid-cols-2 md:gap-x-12">
              <CaseSection title="Solution">
                <p>{project.solution}</p>
              </CaseSection>
              <CaseSection title="Result">
                <p>{project.result}</p>
              </CaseSection>
            </div>
          </Reveal>
        </div>

        {next && next.id !== project.id && <NextProject project={next} />}
      </Container>
    </article>
  );
};
