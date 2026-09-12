import { motion } from "framer-motion";
import photo from "../../assets/images/Photo.png";
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
      {/* keep the grid out of the way of the headline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_28%_50%,#F8F8FA_0%,rgba(248,248,250,0.85)_45%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>

    <div className="mx-auto grid w-full max-w-wrap grid-cols-1 items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-12 md:gap-10 md:px-8 md:pb-12 md:pt-16">
      <div className="order-2 md:order-1 md:col-span-8">
        <motion.p className="eyebrow mb-5" {...fadeUp(0.05)}>
          {site.roleLine}
        </motion.p>
        <motion.h1 className="font-heading text-display-xl font-semibold text-ink" {...fadeUp(0.15)}>
          I design interfaces that feel <em className="gradient-text not-italic">alive</em> — and build them.
        </motion.h1>
        <motion.p className="mt-5 max-w-[46ch] text-lg text-ink-600" {...fadeUp(0.3)}>
          Product design, React development and a habit of turning data into something people actually
          want to look at. Based in {site.location.split(",")[0]}.
        </motion.p>
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
