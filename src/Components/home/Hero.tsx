import { motion } from "framer-motion";
import photo from "../../assets/images/Photo.png";
import { facts } from "../../data/resume";
import { site } from "../../data/site";
import { scrollToSection } from "../../hooks/useSectionNav";
import { heroGridBanner } from "../p5/gridBanner";
import { P5Canvas } from "../p5/P5Canvas";
import { Button } from "../ui/Button";
import { IconArrowDown, IconArrowRight } from "../ui/Icons";

const ease = [0.2, 0.7, 0.2, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden">
    {/* live, very light grid behind the hero */}
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
      <P5Canvas sketch={heroGridBanner} pauseWhenHidden />
      {/* keep the grid out of the way of the text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_28%_50%,#F8F8FA_0%,rgba(248,248,250,0.85)_45%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>

    <div className="mx-auto grid w-full max-w-wrap grid-cols-1 items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-12 md:gap-10 md:px-8 md:pb-12 md:pt-16">
      <div className="order-2 md:order-1 md:col-span-8">
        <motion.p className="eyebrow mb-5" {...fadeUp(0.05)}>
          {site.roleLine}
        </motion.p>
        <motion.h1 className="font-heading text-display-xl font-semibold text-ink" {...fadeUp(0.15)}>
          Interfaces that aren't just seen — they're <em className="gradient-text not-italic">felt</em>.
        </motion.h1>

        <motion.div className="mt-6 flex max-w-[56ch] flex-col gap-4 text-[17px] leading-relaxed text-ink-700" {...fadeUp(0.3)}>
          <p>
            I'm Maria — a UX/UI designer who writes the code, and a creative coder who thinks in
            interfaces. Over ten years in design, and the last few shipping React products end-to-end:
            research, design systems, and the frontend that makes them real.
          </p>
          <p>
            I love projects that challenge conventions — fluid, dynamic interfaces and data turned into
            something people actually want to look at. Let's build something that makes people stop,
            explore, and remember.
          </p>
        </motion.div>

        <motion.div className="mt-8 flex flex-wrap items-center gap-6" {...fadeUp(0.42)}>
          <Button as="link" to="/resume" size="lg">
            Resume
            <IconArrowRight size={16} />
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("work")}>
            Explore projects
            <IconArrowDown size={16} />
          </Button>
        </motion.div>

        <motion.dl className="mt-10 grid max-w-[36rem] grid-cols-3 gap-6 border-t border-line pt-5" {...fadeUp(0.55)}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700">{f.label}</dt>
              <dd className="mt-1.5 font-heading text-lg font-semibold tracking-tight text-ink">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        className="order-1 md:order-2 md:col-span-4"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
      >
        <div className="relative isolate mx-auto w-full max-w-[340px] md:max-w-[380px]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-diag opacity-[0.12] blur-2xl" />
          <img
            src={photo}
            alt={`${site.name}, portrait`}
            className="aspect-square w-full rounded-3xl border border-line object-cover object-top shadow-[0_24px_60px_-30px_rgba(17,17,17,0.35)]"
            width={891}
            height={891}
          />
        </div>
      </motion.div>
    </div>
  </section>
);
