import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "../../data/imageSets";
import { IconChevronLeft, IconChevronRight, IconClose, IconPause, IconPlay } from "./Icons";

type LightboxProps = {
  images: ProjectImage[];
  startIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  onClose: () => void;
};

const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm backdrop-blur transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60";

export const Lightbox = ({ images, startIndex = 0, autoPlay = false, interval = 3500, onClose }: LightboxProps) => {
  const count = images.length;
  const [index, setIndex] = useState(Math.min(startIndex, Math.max(count - 1, 0)));
  const [playing, setPlaying] = useState(autoPlay);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(next, interval);
    return () => window.clearTimeout(t);
  }, [index, playing, interval, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (count === 0) return null;

  return (
    <div className="relative w-full">
      <button type="button" className={classNames(iconButton, "absolute right-3 top-3 z-10")} onClick={onClose} aria-label="Close">
        <IconClose />
      </button>

      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-smooth"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="mx-auto max-h-[85vh] w-full rounded-2xl object-contain"
                loading={i === index ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-3 right-3 flex items-center justify-between">
            <button type="button" className={classNames(iconButton, "pointer-events-auto")} onClick={prev} aria-label="Previous">
              <IconChevronLeft />
            </button>
            <button type="button" className={classNames(iconButton, "pointer-events-auto")} onClick={next} aria-label="Next">
              <IconChevronRight />
            </button>
          </div>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-paper/90 px-3 py-2 backdrop-blur">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={classNames(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-ink-300 hover:bg-ink-500"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            className={classNames(iconButton, "absolute bottom-3 right-3")}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            {playing ? <IconPause size={16} /> : <IconPlay size={16} />}
          </button>

          <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-2 font-label text-[11px] tracking-[0.12em] text-ink-600 backdrop-blur">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </>
      )}
    </div>
  );
};
