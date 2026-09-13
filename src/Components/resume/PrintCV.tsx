import { useEffect, useRef } from "react";
import photo from "../../assets/images/Photo.png";
import {
  aiNote,
  certifications,
  education,
  experience,
  languages,
  printContact,
  printSkills,
  printSummary,
} from "../../data/resume";
import { emailAddress, site } from "../../data/site";

const sectionLabel = "mb-[1.8mm] font-label text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-ink-600";

/**
 * The CV as a one-page A4 document: sidebar with photo, contacts and skills,
 * main column with summary and experience. Only rendered for print; built
 * from the same data as the web page. Contact details that must not sit in
 * the DOM are written in on `beforeprint` and cleared on `afterprint`.
 */
export const PrintCV = () => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const phoneRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const on = () => {
      if (emailRef.current) emailRef.current.textContent = emailAddress();
      if (phoneRef.current) phoneRef.current.textContent = printContact.phoneReversed.split("").reverse().join("");
    };
    const off = () => {
      if (emailRef.current) emailRef.current.textContent = "";
      if (phoneRef.current) phoneRef.current.textContent = "";
    };
    window.addEventListener("beforeprint", on);
    window.addEventListener("afterprint", off);
    return () => {
      window.removeEventListener("beforeprint", on);
      window.removeEventListener("afterprint", off);
    };
  }, []);

  const main = experience.filter((j) => !j.compact && !j.webOnly);
  const early = experience.filter((j) => j.compact);

  return (
    <div className="print-cv hidden print:grid" aria-hidden="true">
      {/* ---------- sidebar ---------- */}
      <aside className="print-cv-side">
        <img src={photo} alt="" className="mx-auto mb-[5mm] block h-[28mm] w-[28mm] rounded-full object-cover object-top" />

        <p className={sectionLabel}>Contact</p>
        <ul className="mb-[4mm] flex flex-col gap-[0.8mm] text-[7.8pt] leading-snug text-ink-800">
          <li>{printContact.locationLine}</li>
          <li>
            <span ref={phoneRef} />
          </li>
          <li>
            <span ref={emailRef} />
          </li>
          <li>{printContact.linkedin}</li>
          <li className="mt-[1.5mm] text-ink-600">{languages}</li>
        </ul>

        {printSkills.map((g) => (
          <div key={g.label} className="mb-[3.6mm]">
            <p className={sectionLabel}>{g.label}</p>
            <ul className="flex flex-wrap gap-[1.2mm]">
              {g.items.map((item) => (
                <li key={item} className="rounded-full border border-ink-300 px-[1.8mm] py-[0.3mm] text-[7.2pt] leading-snug text-ink-800">
                  {item}
                </li>
              ))}
            </ul>
            {g.label === "AI tooling" && <p className="mt-[1.6mm] text-[7.2pt] leading-snug text-ink-600">{aiNote}</p>}
          </div>
        ))}

        <p className={sectionLabel}>Education</p>
        <ul className="mb-[3.6mm] flex flex-col gap-[1.1mm] text-[7.4pt] leading-snug text-ink-700">
          {education.map((e) => (
            <li key={e.period + e.title}>
              {e.place && <span className="font-semibold text-ink-800">{e.place} · </span>}
              {e.title}, {e.period}
            </li>
          ))}
        </ul>

        <p className={sectionLabel}>Certifications</p>
        <ul className="flex flex-col gap-[0.8mm] pl-[3mm] text-[7.4pt] leading-snug text-ink-700 [list-style:disc]">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </aside>

      {/* ---------- main column ---------- */}
      <main className="print-cv-main">
        <h1 className="font-heading text-[22pt] font-semibold leading-none tracking-tight text-ink">{site.name}</h1>
        <p className="mt-[2mm] text-[10.5pt] text-ink-600">{site.roleLine}</p>
        <div className="mb-[5mm] mt-[3mm] h-[2px] w-[16mm] bg-accent" />

        <h2 className="font-heading text-[11pt] font-semibold text-ink">{printSummary.headline}</h2>
        {printSummary.paragraphs.map((t) => (
          <p key={t} className="mt-[1.8mm] text-[8.6pt] leading-[1.4] text-ink-700">
            {t}
          </p>
        ))}

        <p className={`${sectionLabel} mt-[5mm]`}>Experience</p>
        <ol className="flex flex-col gap-[3.4mm]">
          {main.map((job) => (
            <li key={job.period + job.title} className="[break-inside:avoid]">
              <div className="flex items-baseline justify-between gap-[4mm]">
                <h3 className="text-[9.4pt] font-semibold leading-snug text-ink">
                  {job.title}
                  {job.company && <span> · {job.company}</span>}
                </h3>
                <span className="shrink-0 text-[7.8pt] text-ink-500">{job.period}</span>
              </div>
              {job.summary ? (
                <p className="mt-[1mm] text-[8.4pt] leading-[1.4] text-ink-700">{job.summary}</p>
              ) : (
                <ul className="mt-[1mm] flex flex-col gap-[0.6mm] pl-[3.5mm] text-[8.4pt] leading-[1.4] text-ink-700 [list-style:disc]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {job.summary && job.bullets.length > 1 && job.company === "SportyLabs Digital" && (
                <ul className="mt-[1mm] flex flex-col gap-[0.6mm] pl-[3.5mm] text-[8.4pt] leading-[1.4] text-ink-700 [list-style:disc]">
                  {job.bullets.slice(1).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        {early.length > 0 && (
          <ul className="mt-[4mm] flex flex-col gap-[1.4mm] border-t border-ink-200 pt-[3mm] text-[8.4pt] leading-snug text-ink-700">
            {early.map((job) => (
              <li key={job.period + job.title}>
                <span className="font-semibold text-ink">{job.title}</span>
                {job.company && <span> · {job.company}</span>} · {job.period}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
