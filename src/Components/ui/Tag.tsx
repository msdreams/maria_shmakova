import classNames from "classnames";
import type { CSSProperties, ReactNode } from "react";

type TagProps = { children: ReactNode; className?: string; style?: CSSProperties };

/** Pill on a faint accent-gradient wash. Pass `style` (background / inset edge) to tint it with a project colour instead. */
export const Tag = ({ children, className, style }: TagProps) => (
  <span
    className={classNames(
      "tag-accent inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-ink-800 md:px-3.5 md:py-1.5 md:text-sm",
      className
    )}
    style={style}
  >
    {children}
  </span>
);
