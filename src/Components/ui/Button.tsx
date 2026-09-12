import classNames from "classnames";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "solid" | "outline" | "link";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid:
    "rounded-full bg-ink text-paper hover:bg-ink-700 active:scale-[0.98] shadow-sm",
  outline:
    "rounded-full border border-ink text-ink hover:bg-ink hover:text-paper active:scale-[0.98]",
  link: "link-underline text-ink px-0 py-0 gap-1.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const classes = (variant: Variant, size: Size, className?: string) =>
  classNames(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-smooth",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variants[variant],
    variant !== "link" && sizes[size],
    className
  );

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

type ButtonAsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
type ButtonAsLink = Common & LinkProps & { as: "link" };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  const { variant = "solid", size = "md", className, children } = props;
  const cls = classes(variant, size, className);

  if (props.as === "a") {
    const { as, variant: _v, size: _s, className: _c, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }
  if (props.as === "link") {
    const { as, variant: _v, size: _s, className: _c, ...rest } = props;
    return (
      <Link className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const { as, variant: _v, size: _s, className: _c, ...rest } = props;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
};
