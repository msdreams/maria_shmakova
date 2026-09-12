import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { designStack, education, engineeringStack, experience, intro, type StackGroup } from "../../data/resume";
import { site } from "../../data/site";
import { Link } from "react-router-dom";
import { IconArrowUpRight, IconChevronLeft, SocialIcon } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Section";
import { Tag } from "../ui/Tag";

const ease = [0.2, 0.7, 0.2, 1] as const;
const label = "font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700";

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <Reveal>
    <section className="grid grid-cols-1 gap-6 border-t border-line py-12 md:grid-cols-[220px_1fr] md:gap-12 md:py-16">
      <h2 className="font-display text-display-md text-ink">{title}</h2>
      <div>{children}</div>
    </section>
  </Reveal>
);

const Stack = ({ groups }: { groups: StackGroup[] }) => (
  <div className="flex flex-col gap-6">
    {groups.map((g) => (
      <div key={g.label}>
        <p className={label}>{g.label}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {g.items.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const ResumePage = () => (
  <article>
    <Container className="pt-10 md:pt-14">
      <Link to="/" className="link-underline inline-flex items-center gap-1 text-sm text-ink-600 hover:text-ink">
        <IconChevronLeft size={16} />
        Home
      </Link>
      <motion.header className="mt-10 md:mt-14" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
        <p className="eyebrow">Resume</p>
        <h1 className="mt-5 max-w-[20ch] font-display text-display-lg font-normal text-ink">{intro.headline}</h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-600">
          <a href={`mailto:${site.email}`} className="link-underline">
            {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="link-underline">
            {site.phoneDisplay}
          </a>
          <span>{site.location}</span>
          <ul className="flex items-center gap-4">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-ink-600 transition-colors hover:text-ink"
                  aria-label={s.label}
                >
                  <SocialIcon id={s.id} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.header>

      <div className="mt-14 md:mt-20">
        <Block title="Experience">
          <ol className="flex flex-col gap-10">
            {experience.map((job) => (
              <li key={job.period + job.title} className="grid grid-cols-1 gap-3 md:grid-cols-[160px_1fr] md:gap-8">
                <p className={label}>{job.period}</p>
                <div>
                  <h3 className="text-xl text-ink">
                    {job.title}
                    {job.company && (
                      <>
                        {" · "}
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1"
                          >
                            {job.company}
                            <IconArrowUpRight size={14} />
                          </a>
                        ) : (
                          job.company
                        )}
                      </>
                    )}
                  </h3>
                  {job.location && <p className="mt-1 text-sm text-ink-500">{job.location}</p>}
                  <ul className="mt-4 flex flex-col gap-2 text-ink-600">
                    {job.bullets.map((b) => (
                      <li key={b} className="grid grid-cols-[1rem_1fr] gap-2">
                        <span className="mt-[0.7em] h-px w-3 bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {job.links && (
                    <p className="mt-4 flex flex-wrap gap-4 text-sm">
                      {job.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center gap-1 text-ink"
                        >
                          {l.label}
                          <IconArrowUpRight size={14} />
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Design">
          <Stack groups={designStack} />
        </Block>

        <Block title="Engineering">
          <Stack groups={engineeringStack} />
        </Block>

        <Block title="Education">
          <ol className="flex flex-col divide-y divide-line">
            {education.map((e) => (
              <li key={e.period + e.title} className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[160px_1fr] md:gap-8">
                <p className={label}>{e.period}</p>
                <p className="text-ink">
                  {e.title}
                  {e.place && <span className="text-ink-500"> · {e.place}</span>}
                </p>
              </li>
            ))}
          </ol>
        </Block>
      </div>
    </Container>
  </article>
);
