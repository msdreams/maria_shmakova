import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { site } from "../../data/site";
import { IconArrowUpRight } from "../ui/Icons";
import { INTRO_MS, introSeen } from "./LoadingScreen";

const navClass = "btn-underline text-sm font-medium text-ink-700 transition-colors hover:text-ink";

export const Header = () => {
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // On a first visit the curtain owns the screen, so let it finish first.
  const [revealDelay] = useState(() => (introSeen() ? 0.25 : INTRO_MS / 1000 + 0.4));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={classNames(
        "sticky top-0 z-40 border-b transition-colors duration-300 ease-smooth",
        scrolled ? "border-line bg-paper/80 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      {/* h-16 is fixed on purpose: Hero pulls itself under the header by the
          same amount so its grid runs behind the transparent bar. */}
      <div className="mx-auto flex h-16 w-full max-w-wrap items-center justify-between gap-6 px-5 md:px-8">
        <Link
          to="/"
          aria-label={`${site.name} — home`}
          className="group inline-block transition-transform duration-300 ease-smooth hover:-translate-y-0.5 active:translate-y-0"
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            // Already home: a <Link to="/"> is a no-op. Scroll to the top and
            // remount the page so the load reveal plays again.
            if (pathname !== "/") return;
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
            navigate("/", { replace: true, state: { homeTick: Date.now() } });
          }}
        >
          {/* wiped in from the left, so the gradient letters arrive one by one */}
          <motion.span
            className="block"
            initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: revealDelay }}
          >
            <span className="gradient-text-sweep font-heading text-base font-semibold tracking-tight md:text-lg">
              {site.name}
            </span>
          </motion.span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/cv" className={navClass}>
            CV
          </NavLink>
          <a
            href={site.socials.find((s) => s.id === "linkedin")?.href ?? "https://www.linkedin.com/in/mariashmakova/"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${navClass} inline-flex items-center gap-1`}
          >
            Linkedin
            <IconArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
};
