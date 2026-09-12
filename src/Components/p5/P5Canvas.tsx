import classNames from "classnames";
import p5 from "p5";
import { useEffect, useRef } from "react";

type P5CanvasProps = {
  sketch: (p: p5) => void;
  className?: string;
  /** Stop the draw loop while the canvas is scrolled out of view. */
  pauseWhenHidden?: boolean;
};

/**
 * Mounts a p5 instance into a div sized by its parent. The `sketch` function
 * must have a stable identity (module-level or memoised) or the canvas will be
 * re-created on every render.
 */
export const P5Canvas = ({ sketch, className, pauseWhenHidden = false }: P5CanvasProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let instance: p5;
    try {
      instance = new p5(sketch, node);
      // p5 binds window mouse/key listeners immediately but defers setup()
      // until window "load" when the page is still loading — so a click while
      // images are downloading would hit the sketch before its canvas exists.
      // Start right away instead.
      const internals = instance as unknown as { _startListener?: () => void; _start?: () => void };
      if (internals._startListener && internals._start) {
        window.removeEventListener("load", internals._startListener, false);
        internals._startListener = undefined;
        internals._start();
      }
    } catch (err) {
      // e.g. no WebGL: leave the slot empty instead of crashing the page
      console.warn("p5 sketch failed to start", err);
      return;
    }

    let observer: IntersectionObserver | undefined;
    if (pauseWhenHidden) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) instance.loop();
          else instance.noLoop();
        },
        { threshold: 0 }
      );
      observer.observe(node);
    }

    return () => {
      observer?.disconnect();
      instance.remove();
    };
  }, [sketch, pauseWhenHidden]);

  return <div ref={ref} className={classNames("h-full w-full [&>canvas]:block", className)} aria-hidden="true" />;
};
