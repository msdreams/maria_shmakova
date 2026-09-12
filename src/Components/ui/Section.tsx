import classNames from "classnames";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "paper" | "paper-2";
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={classNames("mx-auto w-full max-w-wrap px-5 md:px-8", className)}>{children}</div>
);

export const Section = ({ id, eyebrow, title, intro, tone = "paper", className, children }: SectionProps) => (
  <section
    id={id}
    className={classNames("py-20 md:py-28", tone === "paper-2" && "bg-paper-2", className)}
  >
    <Container>
      {(eyebrow || title) && (
        <Reveal className="mb-10 md:mb-14">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          {title && <h2 className="font-heading text-display-lg font-semibold text-ink">{title}</h2>}
          {intro && <div className="mt-4 max-w-prose text-lg text-ink-600">{intro}</div>}
        </Reveal>
      )}
      {children}
    </Container>
  </section>
);
