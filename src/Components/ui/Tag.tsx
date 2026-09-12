import classNames from "classnames";
import type { ReactNode } from "react";

export const Tag = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={classNames(
      "inline-flex items-center rounded-full border border-line bg-paper px-2.5 py-1 font-label text-[11px] font-medium uppercase tracking-[0.12em] text-ink-700",
      className
    )}
  >
    {children}
  </span>
);
