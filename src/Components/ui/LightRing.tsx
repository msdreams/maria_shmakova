import classNames from "classnames";

type LightRingProps = {
  /**
   * `auto`: one lap after mount, a pass every ~10s, continuous on hover (hero photo).
   * `hover`: only while the closest `.group` ancestor is hovered (cards).
   */
  mode?: "auto" | "hover";
  /** Radius class of the framed element; the ring adds 3px around it. */
  radius?: string;
  className?: string;
};

/**
 * A short gradient light running along the frame of the parent. The parent
 * must be `relative`; the ring sits 3px outside it, so keep the framed
 * element on top (e.g. `relative`) and give it the same radius.
 */
export const LightRing = ({ mode = "hover", radius = "rounded-[calc(1.5rem+3px)]", className }: LightRingProps) => (
  <div
    aria-hidden="true"
    className={classNames(
      "light-ring pointer-events-none absolute -inset-[3px] overflow-hidden",
      mode === "auto" && "light-ring--auto",
      radius,
      className
    )}
  >
    <div className="light-ring-beam" />
  </div>
);
