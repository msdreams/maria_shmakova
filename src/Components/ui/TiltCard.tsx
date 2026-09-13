import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef, type PointerEvent, type ReactNode } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type TiltCardProps = {
  children: ReactNode;
  /** Rotation in degrees at the edges. Past ~12 it stops reading as a tilt. */
  tilt?: number;
  /** Border radius has to come from the caller so the glare can inherit it. */
  className?: string;
};

const spring = { stiffness: 150, damping: 20, mass: 0.6 };

/**
 * Turns its child towards the pointer in 3D, with a highlight that tracks the
 * cursor so the surface reads as tilting rather than just skewing. Falls back
 * to a plain wrapper without a hover-capable pointer or with reduced motion.
 */
export const TiltCard = ({ children, tilt = 9, className }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");

  // Pointer offset from the centre, -0.5 to 0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const lift = useMotionValue(0);

  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const sLift = useSpring(lift, spring);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-tilt, tilt]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [tilt, -tilt]);
  const scale = useTransform(sLift, [0, 1], [1, 1.03]);
  const glareOpacity = useTransform(sLift, [0, 1], [0, 0.5]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["12%", "88%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["12%", "88%"]);
  const glare = useMotionTemplate`radial-gradient(40% 40% at ${glareX} ${glareY}, rgba(255,255,255,.9), transparent 70%)`;

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      px.set((e.clientX - rect.left) / rect.width - 0.5);
      py.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [px, py]
  );

  const reset = useCallback(() => {
    px.set(0);
    py.set(0);
    lift.set(0);
  }, [px, py, lift]);

  if (!canHover || reduceMotion) return <div className={className}>{children}</div>;

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: 1000 }}
      onPointerMove={onPointerMove}
      onPointerEnter={() => lift.set(1)}
      onPointerLeave={reset}
    >
      <motion.div
        className="relative rounded-[inherit]"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{ backgroundImage: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
};
