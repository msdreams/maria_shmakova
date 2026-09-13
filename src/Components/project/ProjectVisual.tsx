import { Fragment } from "react";
import type { Project } from "../../data/projects";
import { BrowserBar } from "../ui/BrowserBar";
import { IconArrowUpRight } from "../ui/Icons";

type ProjectVisualProps = {
  project: Project;
  /** Spans a full grid row: the scene spreads out instead of stacking. */
  wide?: boolean;
};

const window_ =
  "absolute overflow-hidden rounded-t-lg bg-white shadow-[0_12px_32px_-12px_rgba(17,17,17,0.5)] ring-1 ring-ink/10 transition-transform duration-700 ease-smooth";

/**
 * The tinted board with the project's screenshots. Shared by the grid card and
 * the carousel slide, and it expects an ancestor with `group` for the hover
 * lift and the corner badge.
 */
export const ProjectVisual = ({ project, wide = false }: ProjectVisualProps) => {
  const [front, back] = project.images;
  const cover = project.cover ?? front;

  return (
    // tinted board in the project's colour; screenshots rise out of its bottom edge
    <div
      className={wide ? "relative aspect-[5/3] overflow-hidden rounded-2xl md:aspect-[12/5]" : "relative aspect-[5/3] overflow-hidden rounded-2xl"}
      style={{ backgroundColor: `${project.accent}38`, boxShadow: `inset 0 0 0 1px ${project.accent}55` }}
    >
      {project.mockup ? (
        // "scene": the laptop is the hero, a smaller phone overlaps its corner in front,
        // a small floating panel hangs over the top-left corner; soft glow instead of a back window
        <>
          <div
            className="absolute left-[24%] top-[6%] h-[90%] w-[55%] rounded-full opacity-50 blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${project.mockup.glow?.[0] ?? project.accent}, transparent)` }}
          />
          <div
            className="absolute left-[-6%] top-[-14%] h-[80%] w-[45%] rounded-full opacity-60 blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${project.mockup.glow?.[1] ?? project.accent}, transparent)` }}
          />
          {project.mockup.backdrop && (
            <div className={`${window_} ${wide ? "bottom-[17%] left-[3%] top-[7%] w-[42%]" : "left-[-6%] top-[5%] h-[50%] w-[60%]"} rounded-lg opacity-95 group-hover:-translate-y-0.5`}>
              <img
                src={project.mockup.backdrop.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-left-top"
                // zoom into the top-left of the page (the trainer's photo), skipping the header
                style={{ transformOrigin: "0 0", transform: "scale(1.35) translate(-1%, -8.5%)" }}
              />
            </div>
          )}
          <img
            src={project.mockup.device.src}
            alt={project.mockup.device.alt}
            loading="lazy"
            decoding="async"
            className={`absolute ${wide ? "bottom-[15%] left-[19%] w-[58%]" : "bottom-[14%] left-[6%] w-[80%]"} drop-shadow-[0_28px_44px_rgba(17,17,17,0.35)] transition-transform duration-700 ease-smooth group-hover:-translate-y-1`}
          />
          {project.mockup.phone && (
            <img
              src={project.mockup.phone.src}
              alt={project.mockup.phone.alt}
              loading="lazy"
              decoding="async"
              className={`absolute ${wide ? "bottom-[13%] right-[13%] h-[62%]" : "bottom-[12%] right-[3%] h-[54%]"} drop-shadow-[0_20px_36px_rgba(17,17,17,0.4)] transition-transform duration-700 ease-smooth group-hover:-translate-y-2`}
            />
          )}
          {project.mockup.labels && (
            <ul className="absolute inset-x-[6%] bottom-[9%] flex items-start md:bottom-[10%]">
              {project.mockup.labels.map((l, i) => (
                <Fragment key={l}>
                  {/* the rail runs only between bullets */}
                  {i > 0 && <li aria-hidden="true" className="mt-[3px] h-px flex-1 bg-ink/15" />}
                  <li className="relative">
                    <span
                      className="block h-[7px] w-[7px] rounded-full ring-4 ring-white/70"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-label text-[10px] font-medium uppercase tracking-[0.16em] text-ink-700">
                      {l}
                    </span>
                  </li>
                </Fragment>
              ))}
            </ul>
          )}
          {project.mockup.card && (
            <img
              src={project.mockup.card.src}
              alt={project.mockup.card.alt}
              loading="lazy"
              decoding="async"
              className={`absolute ${wide ? "right-[5%] top-[5%] w-[12%]" : "right-[2%] top-[4%] w-[19%]"} rotate-3 drop-shadow-[0_16px_28px_rgba(17,17,17,0.25)] transition-transform delay-75 duration-700 ease-smooth group-hover:-translate-y-2 group-hover:rotate-2`}
            />
          )}
        </>
      ) : (
        <>
          {back && (
            <div className={`${window_} ${wide ? "bottom-[10%] left-[48%] right-[-2%] top-[12%]" : "bottom-[14%] left-[38%] right-[-4%] top-[10%]"} opacity-90 group-hover:-translate-y-1`}>
              <img
                src={back.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
          )}
          {cover && (
            <div className={`${window_} ${wide ? "bottom-0 left-[5%] right-[40%] top-[16%]" : "bottom-0 left-[7%] right-[22%] top-[18%]"} flex flex-col group-hover:-translate-y-2`}>
              <BrowserBar url={project.url} compact />
              <img
                src={cover.src}
                alt={cover.alt}
                loading="lazy"
                decoding="async"
                className="min-h-0 flex-1 object-cover object-top"
              />
            </div>
          )}
        </>
      )}
      <span className="absolute right-4 top-4 inline-flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 shadow-sm backdrop-blur transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        <IconArrowUpRight />
      </span>
    </div>
  );
};
