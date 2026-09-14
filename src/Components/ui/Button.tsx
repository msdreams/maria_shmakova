import classNames from "classnames";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "solid" | "outline" | "link" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "btn-gradient rounded-full bg-ink text-paper active:scale-[0.98] shadow-sm",
  outline:
    "btn-gradient rounded-full border border-ink text-ink hover:border-transparent hover:text-paper active:scale-[0.98]",
  link: "link-underline text-ink px-0 py-0 gap-1.5",
  ghost:
    "btn-underline text-ink px-0 py-0 gap-1.5 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

/** Class string of a button — for elements that must look like one but can't be one (e.g. inside a link). */
export const buttonClasses = (variant: Variant, size: Size, className?: string) =>
  classNames(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-smooth",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variants[variant],
    variant !== "link" && variant !== "ghost" && sizes[size],
    className
  );

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

type ButtonAsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
type ButtonAsLink = Common & LinkProps & { as: "link" };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  const { variant = "solid", size = "md", className, children } = props;
  const cls = buttonClasses(variant, size, className);

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
