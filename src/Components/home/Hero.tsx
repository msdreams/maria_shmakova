import { motion } from "framer-motion";
import photo from "../../assets/images/Photo.jpg";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { LightRing } from "../ui/LightRing";
import { SweepTitle } from "../ui/SweepTitle";
import { TiltCard } from "../ui/TiltCard";

const ease = [0.16, 1, 0.3, 1] as const; // expo-style ease-out: quick start, very soft landing
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay },
});

export const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden">
    <div className="mx-auto grid w-full max-w-wrap grid-cols-1 items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-12 md:gap-10 md:px-8 md:pb-12 md:pt-16">
      <div className="order-2 md:order-1 md:col-span-8">
        <motion.p className="eyebrow mb-5" {...fadeUp(0.05)}>
          {site.roleLine}
        </motion.p>
        <motion.div {...fadeUp(0.15)}>
          <SweepTitle className="font-heading text-display-xl font-semibold text-ink">
            Interfaces that aren't just seen — they're felt.
          </SweepTitle>
        </motion.div>

        <motion.div className="mt-6 flex max-w-[56ch] flex-col gap-4 text-[17px] leading-relaxed text-ink-700" {...fadeUp(0.3)}>
          <p>
            I'm Maria — a UX/UI designer who ships her own code. Right now I own a design system that
            spans a CRM, a client app and a mobile app, and I design interfaces alongside the data
            models they run on — from schema to pixel, in React, Next.js and TypeScript.
          </p>
        </motion.div>

        <motion.div className="mt-8 flex flex-wrap items-center gap-6" {...fadeUp(0.42)}>
          <Button as="link" to="/projects" size="lg">
            Projects
          </Button>
          <Button as="link" to="/cv" variant="ghost">
            Curriculum Vitae
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
          {/* outside the tilt, so the glow stays put and adds depth */}
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-diag opacity-[0.12] blur-2xl" />
          <TiltCard className="rounded-3xl">
            <div className="group relative rounded-3xl">
              {/* gradient light running along the frame: one lap after the photo appears,
                  a pass every ~10s, continuous while hovered */}
              <LightRing mode="auto" />
              <img
                src={photo}
                alt={`${site.name}, portrait`}
                className="relative aspect-square w-full rounded-3xl border border-line object-cover object-top shadow-[0_24px_60px_-30px_rgba(17,17,17,0.35)]"
                width={1100}
                height={1063}
              />
            </div>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  </section>
);

