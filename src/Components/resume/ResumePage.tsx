import classNames from "classnames";
import type { ReactNode } from "react";
import { certifications, designStack, education, engineeringStack, experience, type StackGroup } from "../../data/resume";
import { IconArrowUpRight } from "../ui/Icons";
import { Container } from "../ui/Section";
import { Tag } from "../ui/Tag";

const label = "font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700";

/** The rule separates one block from the previous one, so the first block on
 *  the page opts out. Titles are sticky inside their own section: they pin
 *  under the site header, then the next section's title pushes them out. */
const Block = ({
  title,
  children,
  divider = true,
}: {
  title: string;
  children: ReactNode;
  divider?: boolean;
}) => (
  <section
    className={classNames(
      "grid grid-cols-1 gap-6 py-12 md:grid-cols-[220px_1fr] md:gap-12 md:py-16",
      divider && "border-t border-line"
    )}
  >
    {/* self-start: a stretched grid item has nothing to stick. Opaque paper
        so the incoming title covers the outgoing one instead of overlapping. */}
    <h2 className="sticky top-16 z-10 -mx-5 bg-paper px-5 py-4 font-heading font-semibold text-display-md text-ink md:top-24 md:mx-0 md:self-start md:px-0 md:py-0">
      {title}
    </h2>
    <div>{children}</div>
  </section>
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
    {/* No page header: the site header carries the nav, and Experience's own
        padding opens the page. */}
    <Container className="pt-4 md:pt-6">
      <Block title="Experience" divider={false}>
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

      <Block title="Certifications">
        <ul className="flex flex-col divide-y divide-line">
          {certifications.map((c) => (
            <li key={c} className="py-3 text-ink">
              {c}
            </li>
          ))}
        </ul>
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
    </Container>
  </article>
);
