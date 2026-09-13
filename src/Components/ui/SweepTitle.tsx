import classNames from "classnames";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { INTRO_MS, introSeen } from "../layout/LoadingScreen";

/** Pixels of a line the light covers per second — duration is width / this. */
export const SWEEP_PX_PER_S = 720;

export type LineBox = { top: number; left: number; width: number; height: number };

/** Merge inline boxes that sit on the same row (a word + an inline element). */
export const lineBoxes = (root: DOMRect, rects: DOMRectList | DOMRect[]): LineBox[] => {
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

/** Delay before the sweep: after the intro curtain on a first visit, otherwise just after the fade-up. */
export const sweepStartDelay = () => (introSeen() ? 0.35 : INTRO_MS / 1000 + 0.2);

type SweepTitleProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before the light starts; defaults to `sweepStartDelay()`. */
  delay?: number;
  as?: "h1" | "h2";
};

/**
 * A heading with the accent light sweeping once across each line, left to
 * right, then settling back to the plain text. Same effect as the landing
 * headline, minus the coloured ending.
 */
export const SweepTitle = ({ children, className, delay, as: Tag = "h1" }: SweepTitleProps) => {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<LineBox[]>([]);
  const [width, setWidth] = useState(0);
  const [startDelay] = useState(() => delay ?? sweepStartDelay());

  useEffect(() => {
    if (reduceMotion) return;
    const root = rootRef.current;
    const text = textRef.current;
    if (!root || !text) return;
    const measure = () => {
      const range = document.createRange();
      range.selectNodeContents(text);
      setLines(lineBoxes(root.getBoundingClientRect(), range.getClientRects()));
      setWidth(root.clientWidth);
    };
    let gone = false;
    const run = () => {
      if (!gone) measure();
    };
    void document.fonts.ready.then(run);
    const ro = new ResizeObserver(run);
    ro.observe(root);
    return () => {
      gone = true;
      ro.disconnect();
    };
  }, [reduceMotion]);

  let t = startDelay;

  return (
    <Tag ref={rootRef} className={classNames("relative", className)}>
      <span ref={textRef}>{children}</span>
      {!reduceMotion &&
        lines.map((line) => {
          const duration = Math.max(0.2, line.width / SWEEP_PX_PER_S);
          const lineDelay = t;
          t += duration;
          return (
            <span
              key={`${line.top}-${line.left}`}
              aria-hidden
              className="hero-title-sweep pointer-events-none absolute overflow-hidden"
              style={{
                top: line.top,
                left: line.left,
                width: line.width,
                height: line.height,
                animationDelay: `${lineDelay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              <span className="absolute" style={{ top: -line.top, left: -line.left, width }}>
                {children}
              </span>
            </span>
          );
        })}
    </Tag>
  );
};
