import classNames from "classnames";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { IconChevronLeft, IconChevronRight } from "./Icons";

export type CarouselControls = {
  prev: boolean;
  next: boolean;
  step: (dir: 1 | -1) => void;
};

type CarouselProps = {
  children: ReactNode;
  /** Announced to screen readers as the name of the scrollable region. */
  label: string;
  className?: string;
  /** When set, arrows are not drawn under the rail — the caller places them. */
  renderControls?: (controls: CarouselControls) => ReactNode;
  /** Matches the section fill so the right-edge fade dissolves into the right colour. */
  tone?: "paper" | "paper-2";
};

export const carouselArrowClass =
  // solid ink discs: the outlined version disappeared against the paper background
  "btn-gradient inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:bg-ink-200 disabled:text-ink-500 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const DRAG_THRESHOLD = 6;

/**
 * Horizontal rail built on native scroll-snap. Touch and trackpad scroll
 * themselves; a mouse can also drag the slides. Children need `data-slide`
 * for the arrows and snap-after-drag to measure a step.
 */
export const Carousel = ({ children, label, className, renderControls, tone = "paper" }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [{ prev, next }, setCan] = useState({ prev: false, next: false });
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const suppressClick = useRef(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setCan({ prev: el.scrollLeft > 1, next: el.scrollLeft < max });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    Array.from(el.children).forEach((c) => observer.observe(c));
    return () => {
      el.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  const slideStep = () => {
    const el = ref.current;
    if (!el) return 0;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return slide ? slide.offsetWidth + gap : el.clientWidth * 0.8;
  };

  const step = useCallback(
    (dir: 1 | -1) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({ left: dir * slideStep(), behavior: reduceMotion ? "auto" : "smooth" });
    },
    [reduceMotion]
  );

  const snap = () => {
    const el = ref.current;
    const amount = slideStep();
    if (!el || !amount) return;
    const i = Math.round(el.scrollLeft / amount);
    el.scrollTo({ left: i * amount, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Touch already pans the overflow rail; this is for a mouse (or pen) grab.
    if (e.pointerType === "touch" || e.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    if (!drag.current.active) return;
    const moved = drag.current.moved;
    drag.current.active = false;
    setDragging(false);
    if (moved) {
      suppressClick.current = true;
      snap();
    }
  };

  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    e.preventDefault();
    e.stopPropagation();
    suppressClick.current = false;
  };

  const controls = { prev, next, step };

  return (
    <div className={className}>
      {renderControls?.(controls)}

      <div className="relative">
        <div
          ref={ref}
          role="group"
          aria-label={label}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className={classNames(
            "no-scrollbar -mx-1 flex cursor-grab gap-6 overflow-x-auto px-1 py-1 pb-2 scroll-px-1 select-none",
            dragging ? "snap-none cursor-grabbing" : "snap-x snap-mandatory"
          )}
        >
          {children}
        </div>
        <div
          aria-hidden
          className={classNames(
            // covers the rail's 4px overhang (-mx-1) and fades out over a wider, softer ramp
            "pointer-events-none absolute inset-y-0 -right-1 w-24 bg-gradient-to-l to-transparent transition-opacity duration-300 md:w-40",
            tone === "paper-2" ? "from-paper-2 via-paper-2/55" : "from-paper via-paper/55",
            "from-15% via-55%",
            next ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {!renderControls && (
        <div className="mt-8 flex items-center gap-3">
          <button type="button" className={carouselArrowClass} onClick={() => step(-1)} disabled={!prev} aria-label="Previous">
            <IconChevronLeft size={18} />
          </button>
          <button type="button" className={carouselArrowClass} onClick={() => step(1)} disabled={!next} aria-label="Next">
            <IconChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
