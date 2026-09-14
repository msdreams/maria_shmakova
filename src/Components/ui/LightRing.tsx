import classNames from "classnames";

type LightRingProps = {
  /**
   * `auto`: one lap after mount, a pass every ~10s, continuous on hover (hero photo).
   * `hover`: only while the closest `.group` ancestor is hovered (cards).
   */
  mode?: "auto" | "hover";
  /** Radius class of the framed element; the ring sits `width` px outside it. */
  radius?: string;
  /** Ring thickness in px. */
  width?: number;
  className?: string;
};

/**
 * A short gradient light running along the frame of the parent. The parent
 * must be `relative`; the ring sits 3px outside it, so keep the framed
 * element on top (e.g. `relative`) and give it the same radius.
 */
export const LightRing = ({ mode = "hover", radius, width = 3, className }: LightRingProps) => (
  <div
    aria-hidden="true"
    className={classNames(
      "light-ring pointer-events-none absolute overflow-hidden",
      mode === "auto" && "light-ring--auto",
      radius,
      className
    )}
    style={{
      inset: -width,
      padding: width,
      borderRadius: radius ? undefined : `calc(1.5rem + ${width}px)`,
    }}
  >
    <div className="light-ring-beam" />
  </div>
);
