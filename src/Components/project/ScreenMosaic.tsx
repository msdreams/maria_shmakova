import classNames from "classnames";
import { useState } from "react";
import type { Project } from "../../data/projects";
import { Lightbox } from "../ui/Lightbox";
import { Modal } from "../ui/Modal";

/**
 * Bento mosaic on an 8-column grid: the first screenshot is the cover (with a
 * browser bar), the second slot is a solid tile in the project's colour with
 * the subtitle, the rest are screenshots. Every tile sits on a tinted pad so
 * low-contrast screenshots still read against the page.
 *
 * Layouts are keyed by TOTAL tiles (images + 1 subtitle tile), grid areas as
 * row-start / col-start / row-end / col-end.
 */
const MAX_IMAGES = 10;

const layouts: Record<number, { rows: number; areas: string[] }> = {
  2: { rows: 2, areas: ["md:[grid-area:1/1/3/6]", "md:[grid-area:1/6/3/9]"] },
  3: { rows: 2, areas: ["md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/2/9]", "md:[grid-area:2/5/3/9]"] },
  4: {
    rows: 2,
    areas: ["md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]", "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]"],
  },
  5: {
    rows: 2,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/2/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/5/3/7]", "md:[grid-area:2/7/3/9]",
    ],
  },
  6: {
    rows: 3,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/4/5]", "md:[grid-area:3/5/4/9]",
    ],
  },
  7: {
    rows: 3,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/4/3]", "md:[grid-area:3/3/4/6]", "md:[grid-area:3/6/4/9]",
    ],
  },
  8: {
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/3/9]",
      "md:[grid-area:3/1/5/3]", "md:[grid-area:3/3/5/5]", "md:[grid-area:3/5/5/7]",
      "md:[grid-area:3/7/4/9]", "md:[grid-area:4/7/5/9]",
    ],
  },
  9: {
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/5/3]", "md:[grid-area:3/3/5/5]", "md:[grid-area:3/5/5/7]",
      "md:[grid-area:3/7/4/9]", "md:[grid-area:4/7/5/9]",
    ],
  },
  10: {
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/5/3]", "md:[grid-area:3/3/4/5]", "md:[grid-area:4/3/5/5]",
      "md:[grid-area:3/5/5/7]", "md:[grid-area:3/7/4/9]", "md:[grid-area:4/7/5/9]",
    ],
  },
  11: {
    rows: 4,
    areas: [
      "md:[grid-area:1/1/3/5]", "md:[grid-area:1/5/3/7]",
      "md:[grid-area:1/7/2/9]", "md:[grid-area:2/7/3/9]",
      "md:[grid-area:3/1/5/3]", "md:[grid-area:3/3/4/5]", "md:[grid-area:4/3/5/5]",
      "md:[grid-area:3/5/4/7]", "md:[grid-area:4/5/5/7]", "md:[grid-area:3/7/4/9]", "md:[grid-area:4/7/5/9]",
    ],
  },
};

// Desktop: the block is sized by the viewport so header + mosaic fit one screen.
const frame: Record<number, string> = {
  2: "md:grid-rows-2 md:h-[clamp(300px,calc(100svh-322px),520px)]",
  3: "md:grid-rows-3 md:h-[clamp(340px,calc(100svh-322px),600px)]",
  4: "md:grid-rows-4 md:h-[clamp(380px,calc(100svh-322px),680px)]",
};

type Tile = { kind: "image"; index: number } | { kind: "subtitle" };

const hostname = (url?: string) => {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const BrowserBar = ({ url }: { url?: string }) => (
  <div className="flex h-7 shrink-0 items-center gap-2 border-b border-ink/5 bg-white/90 px-3">
    <span className="flex gap-1.5">
      <i className="h-2 w-2 rounded-full bg-ink-200" />
      <i className="h-2 w-2 rounded-full bg-ink-200" />
      <i className="h-2 w-2 rounded-full bg-ink-200" />
    </span>
    {url && (
      <span className="ml-1 truncate rounded-md bg-ink-50 px-2 py-0.5 font-label text-[10px] tracking-[0.06em] text-ink-500">
        {hostname(url)}
      </span>
    )}
  </div>
);

export const ScreenMosaic = ({ project }: { project: Project }) => {
  const [index, setIndex] = useState<number | null>(null);
  const images = project.images.slice(0, MAX_IMAGES);

  // cover, subtitle tile, then the rest
  const tiles: Tile[] = images.map<Tile>((_, i) => ({ kind: "image", index: i }));
  if (tiles.length >= 2) tiles.splice(1, 0, { kind: "subtitle" });
  const layout = layouts[tiles.length];

  if (images.length === 0 || !layout) return null;

  // Mobile (2-col) flow: the cover is full-width; stretch the last tile too
  // if the rest doesn't pair up.
  const lastIsOrphan = (tiles.length - 1) % 2 === 1;
  const mobileSpan = (i: number) =>
    i === 0 || (lastIsOrphan && i === tiles.length - 1) ? "col-span-2 aspect-[16/10]" : "aspect-[5/3]";

  // one tinted board under the whole grid (~22% of the project colour) with a crisp edge
  const board = { backgroundColor: `${project.accent}38`, boxShadow: `inset 0 0 0 1px ${project.accent}55` };

  return (
    <>
      <div className="rounded-2xl p-3 md:p-4" style={board}>
      <div className={classNames("grid grid-cols-2 gap-3 md:grid-cols-8 md:gap-3", frame[layout.rows])}>
        {tiles.map((tile, i) =>
          tile.kind === "subtitle" ? (
            <div
              key="subtitle"
              className={classNames(
                "flex flex-col justify-between rounded-lg p-4 text-paper md:col-auto md:aspect-auto md:p-5",
                mobileSpan(i),
                layout.areas[i]
              )}
              style={{ backgroundColor: project.accent }}
            >
              <span className="font-label text-[10px] font-medium uppercase tracking-[0.14em] opacity-70">
                {project.kind === "design" ? "Design" : project.kind === "development" ? "Development" : "Design & Development"}
              </span>
              <p className="font-heading text-lg font-semibold leading-snug tracking-tight md:text-xl">{project.subtitle}</p>
            </div>
          ) : (
            <button
              key={project.images[tile.index].src}
              type="button"
              onClick={() => setIndex(tile.index)}
              className={classNames(
                "group relative flex flex-col overflow-hidden rounded-lg md:col-auto md:aspect-auto",
                "transition-transform duration-500 ease-smooth hover:-translate-y-0.5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30",
                mobileSpan(i),
                layout.areas[i]
              )}
              aria-label={`Open screen ${tile.index + 1} of ${project.images.length}`}
            >
              {/* the "window": screenshot with rounded corners and a soft shadow */}
              <span className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_-10px_rgba(17,17,17,0.5)] ring-1 ring-ink/10 transition-shadow duration-500 group-hover:shadow-[0_16px_36px_-12px_rgba(17,17,17,0.55)]">
                {tile.index === 0 && <BrowserBar url={project.url} />}
                <span className="relative min-h-0 flex-1">
                  <img
                    src={project.images[tile.index].src}
                    alt={project.images[tile.index].alt}
                    loading={tile.index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    // tall screenshots slowly scroll down while hovered
                    className="absolute inset-0 h-full w-full object-cover object-top transition-[object-position] duration-[6s] ease-linear group-hover:object-bottom"
                  />
                </span>
              </span>
            </button>
          )
        )}
      </div>
      </div>

      {project.images.length > MAX_IMAGES && (
        <p className="mt-3 text-sm text-ink-600">+{project.images.length - MAX_IMAGES} more in the slideshow</p>
      )}

      <Modal open={index !== null} onClose={() => setIndex(null)} label={`${project.title} — screens`}>
        {index !== null && <Lightbox images={project.images} startIndex={index} onClose={() => setIndex(null)} />}
      </Modal>
    </>
  );
};
