import { facts, intro } from "../../data/resume";
import { Button } from "../ui/Button";
import { IconArrowRight } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export const AboutShort = () => (
  <Section id="about" eyebrow="03 — About">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
      <Reveal>
        <h2 className="font-display text-display-lg font-normal text-ink">{intro.headline}</h2>
        <div className="mt-8 flex max-w-prose flex-col gap-4 text-lg text-ink-600">
          {intro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="flex flex-col justify-between gap-10">
        <dl className="divide-y divide-line border-y border-line">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-6 py-4">
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">{f.label}</dt>
              <dd className="font-display text-2xl text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
        <Button as="link" to="/resume" variant="outline" className="self-start">
          Full resume
          <IconArrowRight size={16} />
        </Button>
      </Reveal>
    </div>
  </Section>
);
