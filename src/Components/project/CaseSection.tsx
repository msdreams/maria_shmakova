import classNames from "classnames";
import type { ReactNode } from "react";

type CaseSectionProps = { title: string; children: ReactNode; className?: string };

export const CaseSection = ({ title, children, className }: CaseSectionProps) => (
  <section className={classNames("py-10 md:py-12", className)}>
    <h2 className="font-heading text-xl font-semibold tracking-tight text-ink">{title}</h2>
    <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-600">{children}</div>
  </section>
);
