import classNames from "classnames";
import { useCallback, useState } from "react";
import { site } from "../../data/site";
import { sketches } from "../../data/sketches";
import { sectionIcosahedron } from "../p5/icosahedron";
import { P5Canvas } from "../p5/P5Canvas";
import { Button } from "../ui/Button";
import { Carousel, carouselArrowClass } from "../ui/Carousel";
import { IconArrowUpRight, IconChevronLeft, IconChevronRight } from "../ui/Icons";
import { LightRing } from "../ui/LightRing";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SketchModal } from "./SketchModal";

const Thumb = ({ img, title, onClick, className, eager }: { img: string; title: string; onClick: () => void; className?: string; eager?: boolean }) => (
  <button
    type="button"
    onClick={onClick}
    data-slide
    className={classNames(
      "group relative block rounded-3xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30",
      className
    )}
    aria-label={`Open sketch: ${title}`}
  >
    <LightRing width={1.5} />
    <span className="relative block overflow-hidden rounded-3xl bg-ink">
      <img
        src={img}
        alt={title}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
      />
    </span>
  </button>
);

export const CreativeCoding = () => {
  const [index, setIndex] = useState<number | null>(null);
  const instagram = site.socials.find((s) => s.id === "instagram");

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + sketches.length) % sketches.length)), []);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % sketches.length)), []);

  return (
    <Section id="lab">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow mb-5">Creative coding</p>
          <h2 className="font-heading text-display-lg font-semibold text-ink">Procedural animations</h2>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-ink-700">
            Interactive visualisations, generative patterns and small JavaScript experiments — a place to
            research ideas before they become interfaces. Everything here runs live in the browser.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative isolate mx-auto h-[300px] w-[300px] md:h-[360px] md:w-[360px]">
          <P5Canvas sketch={sectionIcosahedron} pauseWhenHidden className="[&>canvas]:!h-full [&>canvas]:!w-full" />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <Carousel
          label="Creative coding sketches"
          renderControls={({ prev: canPrev, next: canNext, step }) => (
            <div className="mb-6 flex items-center justify-between gap-6">
              {instagram ? (
                <Button as="a" href={instagram.href} target="_blank" rel="noopener noreferrer" variant="link">
                  More on Instagram
                  <IconArrowUpRight size={16} />
                </Button>
              ) : (
                <span />
              )}
              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  className={carouselArrowClass}
                  onClick={() => step(-1)}
                  disabled={!canPrev}
                  aria-label="Previous sketches"
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className={carouselArrowClass}
                  onClick={() => step(1)}
                  disabled={!canNext}
                  aria-label="Next sketches"
                >
                  <IconChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        >
          {sketches.map((s, i) => (
            <Thumb
              key={s.id}
              img={s.img}
              title={s.title}
              onClick={() => open(i)}
              eager={i < 3}
              className="w-[82%] shrink-0 snap-start md:w-[calc((100%-3rem)/3.2)]"
            />
          ))}
        </Carousel>
      </Reveal>

      <SketchModal sketch={index === null ? null : sketches[index]} onClose={close} onPrev={prev} onNext={next} />
    </Section>
  );
};
