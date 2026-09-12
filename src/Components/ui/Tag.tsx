import classNames from "classnames";
import type { CSSProperties, ReactNode } from "react";

type TagProps = { children: ReactNode; className?: string; style?: CSSProperties };

/** Solid pill. Pass `style` (background / inset edge) to tint it with a project colour. */
export const Tag = ({ children, className, style }: TagProps) => (
  <span
    className={classNames(
      "inline-flex items-center rounded-full bg-ink-100 px-3 py-1 text-xs font-medium leading-5 text-ink-800",
      className
    )}
    style={style}
  >
    {children}
  </span>
);
