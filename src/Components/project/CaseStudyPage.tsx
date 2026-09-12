import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNextProject, getProject, projectIndex } from "../../data/projects";
import { Container } from "../ui/Section";
import { IconArrowUpRight, IconChevronLeft } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { CaseSection } from "./CaseSection";
import { Gallery } from "./Gallery";
import { NextProject } from "./NextProject";

const ease = [0.2, 0.7, 0.2, 1] as const;

export const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id);

  if (!project) return <Navigate to="/" replace />;

  const number = project.status === "published" ? String(projectIndex(project.id)).padStart(2, "0") : "draft";
  const next = project.status === "published" ? getNextProject(project.id) : undefined;

  return (
    <article>
      <Container className="pt-10 md:pt-14">
        <Link to="/" className="link-underline inline-flex items-center gap-1 text-sm text-ink-600 hover:text-ink">
          <IconChevronLeft size={16} />
          Home
        </Link>

        <motion.header
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow">
            Case {number} · {project.year}
          </p>
          <h1 className="mt-5 max-w-[16ch] font-display text-display-xl font-normal text-ink">{project.title}</h1>
          <p className="mt-5 max-w-[52ch] text-xl text-ink-600 md:text-2xl">{project.subtitle}</p>
        </motion.header>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-line bg-paper-2 md:mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          {project.cover ? (
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              className="aspect-[4/3] w-full object-cover object-top md:aspect-[16/9]"
              decoding="async"
            />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-accent-diag opacity-30 md:aspect-[16/9]">
              <span className="font-label text-xs uppercase tracking-[0.14em] text-ink">cover image — TODO</span>
            </div>
          )}
        </motion.div>

        <Reveal className="mt-10 md:mt-14">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 md:grid-cols-4">
            <div>
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Role</dt>
              <dd className="mt-2 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Timeline</dt>
              <dd className="mt-2 text-ink">{project.timeline ?? project.year}</dd>
            </div>
            <div>
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Live</dt>
              <dd className="mt-2">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-ink"
                  >
                    {project.urlLabel ?? "Open project"}
                    <IconArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-ink-400">—</span>
                )}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-4">
          <CaseSection number="01" title="Overview">
            <p>{project.overview}</p>
          </CaseSection>

          <CaseSection number="02" title="Challenge">
            <p>{project.challenge}</p>
          </CaseSection>

          <CaseSection number="03" title="Process">
            <ol className="flex flex-col gap-5">
              {project.process.map((step, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="pt-1 font-label text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection number="04" title="Solution">
            <p>{project.solution}</p>
          </CaseSection>
        </div>

        {project.images.length > 0 && (
          <Reveal>
            <section className="border-t border-line py-12 md:py-16">
              <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">Screens</p>
              <Gallery images={project.images} title={project.title} />
            </section>
          </Reveal>
        )}

        <CaseSection number="05" title="Result">
          <p>{project.result}</p>
        </CaseSection>

        {next && next.id !== project.id && <NextProject project={next} />}
      </Container>
    </article>
  );
};
