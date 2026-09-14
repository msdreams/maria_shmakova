import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { certifications, designStack, education, engineeringStack, experience, intro, type StackGroup } from "../../data/resume";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { IconArrowUpRight, IconPrint } from "../ui/Icons";
import { Container } from "../ui/Section";
import { SweepTitle } from "../ui/SweepTitle";
import { PrintCV } from "./PrintCV";
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
      "print:grid-cols-[100px_1fr] print:gap-4 print:py-2.5",
      divider && "border-t border-line"
    )}
  >
    {/* self-start: a stretched grid item has nothing to stick. Opaque paper
        so the incoming title covers the outgoing one instead of overlapping. */}
    <h2 className="sticky top-16 z-10 -mx-5 bg-paper px-5 py-4 font-heading font-semibold text-display-md text-ink md:top-24 md:mx-0 md:self-start md:px-0 md:py-0 print:static print:mx-0 print:p-0 print:text-[11pt]">
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

// one flat cloud of pills; the groups only order them
const Stack = ({ groups }: { groups: StackGroup[] }) => (
  <ul className="flex flex-wrap gap-2 print:gap-1">
    {groups.flatMap((g) => g.items).map((item) => (
      <li key={item}>
        <Tag>{item}</Tag>
      </li>
    ))}
  </ul>
);

const PrintButton = () => (
  <Button variant="outline" onClick={() => window.print()} className="bg-paper" aria-label="Print or save as PDF">
    <IconPrint size={16} />
    Print PDF
  </Button>
);

export const ResumePage = () => (
  <article>
    <PrintCV />
    <Container className="pt-10 print:hidden md:pt-16">
      {/* on a phone the button gets its own row above the eyebrow; from md the row
          collapses to zero height so the button sits beside the eyebrow instead */}
      <div className="mb-6 flex items-start justify-end md:mb-0 md:h-0">
        <PrintButton />
      </div>

      {/* same voice and scale as the landing headline */}
      <motion.header
        className="mb-7 md:mb-10 print:mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <p className="eyebrow mb-5">Curriculum Vitae</p>
        <SweepTitle className="font-heading text-display-xl font-semibold text-ink print:text-[13pt] print:leading-tight">{site.roleLine}</SweepTitle>
        <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-ink-700 print:mt-1 print:max-w-none print:text-[9.5pt] print:leading-snug">{intro.headline}</p>
      </motion.header>

      <Block title="Experience" divider={false}>
        {/* timeline: a hairline with a dot per entry keeps the left edge anchored */}
        <ol className="relative flex flex-col gap-10 border-l border-line pl-7 print:gap-3 print:pl-4 md:pl-9">
          {experience.map((job) => (
            <li key={job.period + job.title} className="print:[break-inside:avoid]">
              <p className={label}>{job.period}</p>
              <div className="relative mt-2 print:mt-0.5">
                {/* dot centred on the title line (text-xl / 28px) */}
                <span
                  aria-hidden="true"
                  className="absolute -left-7 top-[10px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[3.5px] border-ink-400 bg-ink-400 ring-4 ring-paper print:left-[calc(-1rem_-_3.5px)] print:top-[6px] md:-left-9"
                />
                <h3 className="text-xl text-ink print:text-[10.5pt] print:leading-snug">
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
                {job.location && <p className="mt-1 text-sm text-ink-500 print:mt-0 print:text-[8.5pt]">{job.location}</p>}
                <ul className="mt-4 flex flex-col gap-2 text-ink-600 print:mt-1 print:gap-0.5 print:text-[9pt] print:leading-snug">
                  {job.bullets.map((b) => (
                    <li key={b} className="grid grid-cols-[1rem_1fr] gap-2">
                      <span className="mt-[0.75em] h-0 w-3 border-t border-ink-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {job.links && (
                  <p className="mt-4 flex flex-wrap gap-4 text-sm print:mt-1 print:text-[8.5pt]">
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
            <li key={c} className="py-3 text-ink print:py-0.5 print:text-[9.5pt]">
              {c}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Education">
        <ol className="relative flex flex-col gap-6 border-l border-line pl-7 print:gap-1.5 print:pl-4 md:pl-9">
          {education.map((e) => (
            <li key={e.period + e.title}>
              <p className={label}>{e.period}</p>
              <p className="relative mt-1.5 text-ink print:mt-0 print:text-[9.5pt]">
                <span
                  aria-hidden="true"
                  className="absolute -left-7 top-[8px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[3.5px] border-ink-400 bg-ink-400 ring-4 ring-paper print:left-[calc(-1rem_-_3.5px)] print:top-[5px] md:-left-9"
                />
                {e.title}
                {e.place && <span className="text-ink-500"> · {e.place}</span>}
              </p>
            </li>
          ))}
        </ol>
      </Block>

      {/* on a phone the top button is long gone by the end of the page */}
      <div className="flex justify-end border-t border-line py-10 md:hidden">
        <PrintButton />
      </div>
    </Container>
  </article>
);
