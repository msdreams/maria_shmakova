import type { Sketch } from "../../data/sketches";
import { P5Canvas } from "../p5/P5Canvas";
import { IconChevronLeft, IconChevronRight, IconClose } from "../ui/Icons";
import { Modal } from "../ui/Modal";

type SketchModalProps = {
  sketch: Sketch | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const chrome =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-paper/50 hover:text-paper";

/** Immersive full-screen p5 sketch. Sketches draw on a black, window-sized canvas. */
export const SketchModal = ({ sketch, onClose, onPrev, onNext }: SketchModalProps) => (
  <Modal open={sketch !== null} onClose={onClose} label={sketch ? `${sketch.title} — p5.js sketch` : "Sketch"} variant="fullscreen">
    {sketch && (
      <>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 md:px-8">
          <div className="pointer-events-auto">
            <p className="font-label text-[11px] uppercase tracking-[0.14em] text-paper/60">p5.js sketch</p>
            <p className="font-heading text-xl font-semibold text-paper">{sketch.title}</p>
            {sketch.hint && <p className="mt-1 text-xs text-paper/50">{sketch.hint}</p>}
          </div>
          <div className="pointer-events-auto flex items-center gap-2">
            <button type="button" className={chrome} onClick={onPrev} aria-label="Previous sketch">
              <IconChevronLeft />
            </button>
            <button type="button" className={chrome} onClick={onNext} aria-label="Next sketch">
              <IconChevronRight />
            </button>
            <button type="button" className={chrome} onClick={onClose} aria-label="Close">
              <IconClose />
            </button>
          </div>
        </div>
        <P5Canvas key={sketch.id} sketch={sketch.component} className="h-[100dvh] w-full overflow-hidden" />
      </>
    )}
  </Modal>
);
