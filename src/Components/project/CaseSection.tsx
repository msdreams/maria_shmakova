import type { ReactNode } from "react";
import { Reveal } from "../ui/Reveal";

type CaseSectionProps = { number: string; title: string; children: ReactNode };

export const CaseSection = ({ number, title, children }: CaseSectionProps) => (
  <Reveal>
    <section className="grid grid-cols-1 gap-6 border-t border-line py-12 md:grid-cols-[220px_1fr] md:gap-12 md:py-16">
      <div>
        <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">{number}</p>
        <h2 className="mt-2 font-display text-display-md text-ink">{title}</h2>
      </div>
      <div className="flex max-w-prose flex-col gap-5 text-lg leading-relaxed text-ink-600">{children}</div>
    </section>
  </Reveal>
);
