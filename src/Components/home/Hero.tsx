import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import photo from "../../assets/images/Photo.png";
import { site } from "../../data/site";
import { INTRO_MS, introSeen } from "../layout/LoadingScreen";
import { Button } from "../ui/Button";
import { TiltCard } from "../ui/TiltCard";

const ease = [0.2, 0.7, 0.2, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const titleCopy = (
  <>
    Interfaces that aren't just seen — they're <em className="not-italic">felt</em>.
  </>
);

/** Pixels of a line the light covers per second — duration is width / this. */
const SWEEP_PX_PER_S = 720;

type LineBox = { top: number; left: number; width: number; height: number };
type FeltWin = { x: number; w: number };

/** Merge inline boxes that sit on the same row (a word + the <em>). */
const lineBoxes = (root: DOMRect, rects: DOMRectList | DOMRect[]): LineBox[] => {
  const rows: { top: number; left: number; right: number; bottom: number }[] = [];
  for (const r of Array.from(rects)) {
    if (r.width < 1 || r.height < 1) continue;
    const row = rows.find((l) => Math.abs(l.top - r.top) < 4);
    if (row) {
      row.left = Math.min(row.left, r.left);
      row.right = Math.max(row.right, r.right);
      row.bottom = Math.max(row.bottom, r.bottom);
    } else {
      rows.push({ top: r.top, left: r.left, right: r.right, bottom: r.bottom });
    }
  }
  rows.sort((a, b) => a.top - b.top);
  return rows.map((l) => ({
    top: l.top - root.top,
    left: l.left - root.left,
    width: l.right - l.left,
    height: l.bottom - l.top,
  }));
};

const bandSpread = (first: LineBox) => first.width * 0.22;

const sweepTiming = (lines: LineBox[], delay: number, feltWin: FeltWin | null) => {
  const last = lines.length - 1;
  const first = lines[0];
  const durations = lines.map((l, i) => {
    const full = l.width / SWEEP_PX_PER_S;
    if (i !== last || !feltWin || !first) return Math.max(0.2, full);
    const travel = feltWin.x + feltWin.w / 2 + bandSpread(first);
    // 64% of the last-row keyframes is travel; the rest eases onto "felt."
    return Math.max(0.32, travel / (SWEEP_PX_PER_S * 2.2) / 0.64);
  });
  const delays: number[] = [];
  let t = delay;
  for (const d of durations) {
    delays.push(t);
    t += d;
  }
  return { delays, durations };
};

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const feltRef = useRef<HTMLElement>(null);
  const [lines, setLines] = useState<LineBox[]>([]);
  const [titleWidth, setTitleWidth] = useState(0);
  const [feltWin, setFeltWin] = useState<FeltWin | null>(null);
  // First visit: wait for the curtain. Later visits: start with the fade-up.
  const [sweepDelay] = useState(() => (introSeen() ? 0.35 : INTRO_MS / 1000 + 0.2));

  useEffect(() => {
    if (reduceMotion) return;
    const h1 = h1Ref.current;
    const text = textRef.current;
    if (!h1 || !text) return;

    const measure = () => {
      const range = document.createRange();
      range.selectNodeContents(text);
      const next = lineBoxes(h1.getBoundingClientRect(), range.getClientRects());
      setLines(next);
      setTitleWidth(text.offsetWidth);
      const felt = feltRef.current;
      const last = next[next.length - 1];
      if (felt && last) {
        const box = felt.getBoundingClientRect();
        const lineLeft = h1.getBoundingClientRect().left + last.left;
        setFeltWin({
          x: Math.max(0, box.left - lineLeft),
          w: box.width,
        });
      }
    };

    let gone = false;
    const run = () => {
      if (!gone) measure();
    };
    void document.fonts.ready.then(run);
    const ro = new ResizeObserver(run);
    ro.observe(h1);
    return () => {
      gone = true;
      ro.disconnect();
    };
  }, [reduceMotion]);

  const { delays, durations } = sweepTiming(lines, sweepDelay, feltWin);

  return (
  <section id="top" className="relative isolate overflow-hidden">
    <div className="mx-auto grid w-full max-w-wrap grid-cols-1 items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-12 md:gap-10 md:px-8 md:pb-12 md:pt-16">
      <div className="order-2 md:order-1 md:col-span-8">
        <motion.p className="eyebrow mb-5" {...fadeUp(0.05)}>
          {site.roleLine}
        </motion.p>
        <motion.h1
          ref={h1Ref}
          className="relative font-heading text-display-xl font-semibold text-ink"
          {...fadeUp(0.15)}
        >
          <span ref={textRef}>
            Interfaces that aren't just seen — they're{" "}
            <span
              ref={feltRef}
              className={classNames(reduceMotion && "gradient-text")}
            >
              <em className="not-italic">felt</em>.
            </span>
          </span>
          {!reduceMotion &&
            lines.map((line, i) => {
              const last = i === lines.length - 1;
              const first = lines[0];
              const spread = first ? bandSpread(first) : line.width * 0.22;
              return (
              <span
                key={`${line.top}-${line.left}`}
                aria-hidden
                className={classNames(
                  "hero-title-sweep pointer-events-none absolute overflow-hidden",
                  last && feltWin && "hero-title-sweep-end",
                )}
                style={{
                  top: line.top,
                  left: line.left,
                  width: line.width,
                  height: line.height,
                  animationDelay: `${delays[i]}s`,
                  animationDuration: `${durations[i]}s`,
                  ...(last && feltWin
                    ? {
                        ["--spread-w" as string]: `${spread}px`,
                        ["--felt-x" as string]: `${feltWin.x}px`,
                        ["--felt-w" as string]: `${feltWin.w}px`,
                      }
                    : {}),
                }}
              >
                <span className="absolute" style={{ top: -line.top, left: -line.left, width: titleWidth }}>
                  {titleCopy}
                </span>
              </span>
              );
            })}
        </motion.h1>

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
          <Button as="link" to="/resume" variant="ghost">
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
            <img
              src={photo}
              alt={`${site.name}, portrait`}
              className="aspect-square w-full rounded-3xl border border-line object-cover object-top shadow-[0_24px_60px_-30px_rgba(17,17,17,0.35)]"
              width={891}
              height={891}
            />
          </TiltCard>
        </div>
      </motion.div>
    </div>
  </section>
  );
};
