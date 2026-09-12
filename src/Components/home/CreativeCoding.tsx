import classNames from "classnames";
import { useCallback, useState } from "react";
import { site } from "../../data/site";
import { sketches } from "../../data/sketches";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { sectionIcosahedron } from "../p5/icosahedron";
import { P5Canvas } from "../p5/P5Canvas";
import { Button } from "../ui/Button";
import { IconArrowUpRight } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SketchModal } from "./SketchModal";

const Thumb = ({ img, title, onClick, className, eager }: { img: string; title: string; onClick: () => void; className?: string; eager?: boolean }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(
      "group relative block overflow-hidden rounded-2xl border border-line bg-ink text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30",
      className
    )}
    aria-label={`Open sketch: ${title}`}
  >
    <img
      src={img}
      alt={title}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
    />
    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-8 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="font-heading text-base font-semibold">{title}</span>
      <IconArrowUpRight size={16} />
    </span>
  </button>
);

export const CreativeCoding = () => {
  const [index, setIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const instagram = site.socials.find((s) => s.id === "instagram");

  const open = useCallback((i: number) => setIndex(i % sketches.length), []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + sketches.length) % sketches.length)), []);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % sketches.length)), []);

  return (
    <Section id="lab" eyebrow="02 — Creative coding" title="Sketches in p5.js" tone="paper-2">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="max-w-prose text-lg text-ink-600">
            Interactive visualisations, generative patterns and small JavaScript experiments — a place to
            research ideas before they become interfaces. Everything here runs live in the browser.
          </p>
          <p className="mt-4 text-sm text-ink-500">Built with p5.js · WebGL</p>
          {instagram && (
            <Button as="a" href={instagram.href} target="_blank" rel="noopener noreferrer" variant="link" className="mt-8">
              More on Instagram
              <IconArrowUpRight size={16} />
            </Button>
          )}
        </Reveal>

        <Reveal delay={0.1} className="relative isolate mx-auto h-[300px] w-[300px] md:h-[360px] md:w-[360px]">
          <div className="absolute inset-6 -z-10 rounded-full bg-accent-radial opacity-30 blur-3xl" />
          <P5Canvas sketch={sectionIcosahedron} pauseWhenHidden className="[&>canvas]:!h-full [&>canvas]:!w-full" />
          <p className="pointer-events-none absolute inset-x-0 -bottom-6 text-center font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600">
            drag to rotate
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        {isDesktop ? (
          <div className="overflow-hidden">
            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
              {[...sketches, ...sketches].map((s, i) => (
                <Thumb key={`${s.id}-${i}`} img={s.img} title={s.title} onClick={() => open(i)} className="w-[300px] lg:w-[340px]" eager />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {sketches.map((s, i) => (
              <Thumb key={s.id} img={s.img} title={s.title} onClick={() => open(i)} />
            ))}
          </div>
        )}
      </Reveal>

      <SketchModal sketch={index === null ? null : sketches[index]} onClose={close} onPrev={prev} onNext={next} />
    </Section>
  );
};
