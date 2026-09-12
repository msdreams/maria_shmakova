import classNames from "classnames";
import { useState } from "react";
import type { ProjectImage } from "../../data/imageSets";
import { Lightbox } from "../ui/Lightbox";
import { Modal } from "../ui/Modal";

/**
 * Mosaic layouts on an 8-column grid of square cells (row-start / col-start /
 * row-end / col-end). The first image is always the hero tile; the whole block
 * always fills a clean rectangle. Up to MAX_TILES images are shown in the
 * mosaic; anything beyond that is still reachable in the slideshow.
 */
const MAX_TILES = 10;

const layouts: Record<number, { rows: number; areas: string[] }> = {
  1: { rows: 2, areas: ["md:[grid-area:1/1/3/9]"] },
  2: { rows: 2, areas: ["md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/9]"] },
  3: { rows: 2, areas: ["md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/2/9]", "md:[grid-area:2/5/3/9]"] },
  4: {
    rows: 2,
    areas: ["md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]", "md:[grid-area:2/5/3/9]"],
  },
  5: {
    rows: 2,
    areas: [
      "md:[grid-area:1/1/3/5]",
      "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]",
      "md:[grid-area:2/5/3/7]", "md:[grid-area:2/7/3/9]",
    ],
  },
  6: {
    rows: 3,
    areas: [
      "md:[grid-area:1/1/4/5]",
      "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]",
      "md:[grid-area:2/5/3/9]",
      "md:[grid-area:3/5/4/7]", "md:[grid-area:3/7/4/9]",
    ],
  },
  7: {
    // wide cover + six equal tiles
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]",
      "md:[grid-area:1/5/3/7]", "md:[grid-area:1/7/3/9]",
      "md:[grid-area:3/1/5/3]", "md:[grid-area:3/3/5/5]", "md:[grid-area:3/5/5/7]", "md:[grid-area:3/7/5/9]",
    ],
  },
  8: {
    rows: 3,
    areas: [
      "md:[grid-area:1/1/3/5]",
      "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]",
      "md:[grid-area:2/5/3/7]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/4/3]", "md:[grid-area:3/3/4/6]", "md:[grid-area:3/6/4/9]",
    ],
  },
  9: {
    rows: 3,
    areas: [
      "md:[grid-area:1/1/3/5]",
      "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]",
      "md:[grid-area:2/5/3/7]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/4/3]", "md:[grid-area:3/3/4/5]", "md:[grid-area:3/5/4/7]", "md:[grid-area:3/7/4/9]",
    ],
  },
  10: {
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]",
      "md:[grid-area:1/5/2/7]", "md:[grid-area:1/7/2/9]",
      "md:[grid-area:2/5/3/7]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/5/3]",
      "md:[grid-area:3/3/4/5]", "md:[grid-area:4/3/5/5]",
      "md:[grid-area:3/5/5/7]", "md:[grid-area:3/7/5/9]",
    ],
  },
};

// On desktop the block is sized by the viewport (so the header + mosaic fit
// on one screen); rows share that height equally.
const frame: Record<number, string> = {
  2: "md:grid-rows-2 md:h-[clamp(300px,calc(100svh-290px),520px)]",
  3: "md:grid-rows-3 md:h-[clamp(340px,calc(100svh-290px),600px)]",
  4: "md:grid-rows-4 md:h-[clamp(380px,calc(100svh-290px),680px)]",
};

export const ScreenMosaic = ({ images, title }: { images: ProjectImage[]; title: string }) => {
  const [index, setIndex] = useState<number | null>(null);
  const tiles = images.slice(0, MAX_TILES);
  const layout = layouts[tiles.length];

  if (tiles.length === 0 || !layout) return null;

  // Mobile (2-col) flow: the first image is a full-width cover; if the rest
  // doesn't pair up, stretch the last one too so no tile is left alone.
  const lastIsOrphan = (tiles.length - 1) % 2 === 1;
  const mobileSpan = (i: number) =>
    i === 0 || (lastIsOrphan && i === tiles.length - 1) ? "col-span-2 aspect-[16/10]" : "aspect-[5/3]";

  return (
    <>
      <div className={classNames("grid grid-cols-2 gap-3 md:grid-cols-8 md:gap-3", frame[layout.rows])}>
        {tiles.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className={classNames(
              "group relative overflow-hidden rounded-xl border border-line bg-paper-2 md:col-auto md:aspect-auto",
              mobileSpan(i),
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30",
              layout.areas[i]
            )}
            aria-label={`Open screen ${i + 1} of ${images.length}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {images.length > MAX_TILES && (
        <p className="mt-3 text-sm text-ink-600">
          +{images.length - MAX_TILES} more in the slideshow
        </p>
      )}

      <Modal open={index !== null} onClose={() => setIndex(null)} label={`${title} — screens`}>
        {index !== null && <Lightbox images={images} startIndex={index} onClose={() => setIndex(null)} />}
      </Modal>
    </>
  );
};
