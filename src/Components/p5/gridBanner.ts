import type p5 from "p5";

export type GridBannerOptions = {
  /** Canvas background; use the page colour so the canvas blends in. */
  bg?: string;
  /** Square colour. */
  fill?: string;
  /** Approximate number of columns across the width. */
  columns?: number;
};

/**
 * Grid of squares whose size breathes with distance from the centre. Light
 * version of the original hero banner. Sizes itself to its parent element.
 */
export const createGridBanner = ({ bg = "#F8F8FA", fill = "#E5E5EA", columns = 56 }: GridBannerOptions = {}) =>
  (p: p5) => {
    let step = 0;
    let padding = 0;

    const parentSize = () => {
      const el = (p as unknown as { _userNode?: HTMLElement })._userNode;
      return {
        w: el?.clientWidth || p.windowWidth,
        h: el?.clientHeight || 600,
      };
    };

    const layout = () => {
      const cols = p.width < 640 ? Math.round(columns / 2) : columns;
      step = p.width / cols;
      padding = step / 2;
    };

    p.setup = () => {
      const { w, h } = parentSize();
      p.createCanvas(w, h);
      p.frameRate(30);
      layout();
    };

    p.windowResized = () => {
      const { w, h } = parentSize();
      p.resizeCanvas(w, h);
      layout();
    };

    p.draw = () => {
      p.background(bg);
      p.noStroke();
      p.fill(fill);
      p.rectMode(p.CENTER);

      const cx = p.width / 2;
      const cy = p.height / 2;
      const wave = p.sin(p.radians(p.frameCount * 0.6)) * step * 0.5;
      const maxSize = step * 0.5;

      for (let x = padding; x < p.width; x += step) {
        for (let y = padding; y < p.height; y += step) {
          const d = p.dist(cx, cy, x, y) / 18;
          const s = p.constrain(d + wave - step * 0.6, 0, maxSize);
          if (s > 0.5) p.rect(x, y, s, s);
        }
      }
    };
  };

export const heroGridBanner = createGridBanner();
