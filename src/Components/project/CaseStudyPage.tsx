import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNextProject, getProject, projectIndex } from "../../data/projects";
import { Container } from "../ui/Section";
import { IconArrowUpRight, IconChevronLeft } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { CaseSection } from "./CaseSection";
import { NextProject } from "./NextProject";
import { ScreenMosaic } from "./ScreenMosaic";

const ease = [0.2, 0.7, 0.2, 1] as const;
const label = "font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700";

export const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id);

  if (!project) return <Navigate to="/" replace />;

  const number = project.status === "published" ? String(projectIndex(project.id)).padStart(2, "0") : "draft";
  const next = project.status === "published" ? getNextProject(project.id) : undefined;

  return (
    <article>
      <Container className="pt-5 md:pt-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-ink-600 transition-colors hover:text-ink [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:-translate-x-0.5">
          <IconChevronLeft size={16} />
          Home
        </Link>

        <motion.header
          className="mt-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex flex-col-reverse gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
            <h1 className="font-heading text-display-lg font-semibold text-ink">{project.title}</h1>
            <p className="eyebrow md:pt-2">
              Case {number} · {project.year}
            </p>
          </div>

          {/* one balanced facts row: three narrow cells + a wide one for the stack */}
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-4 md:grid-cols-[1fr_1fr_2.4fr] md:gap-x-8">
            <div>
              <dt className={label}>Role</dt>
              <dd className="mt-1.5 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className={label}>Live</dt>
              <dd className="mt-1.5 flex flex-col gap-1.5 text-sm">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 self-start text-ink"
                  >
                    {project.urlLabel ?? "Open project"}
                    <IconArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-ink-400">—</span>
                )}
                {project.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 self-start text-ink"
                  >
                    {l.label}
                    <IconArrowUpRight size={14} />
                  </a>
                ))}
              </dd>
            </div>
            <div className="col-span-2 md:col-span-1">
              <dt className={label}>Stack</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink">{project.stack.join(" · ")}</dd>
            </div>
          </dl>
        </motion.header>

        <motion.div
          className="mt-6"
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
              <CaseSection number="01" title="Overview">
                <p>{project.overview}</p>
              </CaseSection>
              <CaseSection number="02" title="Challenge">
                <p>{project.challenge}</p>
              </CaseSection>
            </div>
          </Reveal>

          <Reveal>
            <CaseSection number="03" title="Process" className="border-t border-line">
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
              <CaseSection number="04" title="Solution">
                <p>{project.solution}</p>
              </CaseSection>
              <CaseSection number="05" title="Result">
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
