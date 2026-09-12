import classNames from "classnames";
import type { ReactNode } from "react";

type CaseSectionProps = { number: string; title: string; children: ReactNode; className?: string };

export const CaseSection = ({ number, title, children, className }: CaseSectionProps) => (
  <section className={classNames("py-10 md:py-12", className)}>
    <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">{number}</p>
    <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight text-ink">{title}</h2>
    <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-600">{children}</div>
  </section>
);
