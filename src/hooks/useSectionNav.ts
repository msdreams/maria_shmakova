import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type SectionId = "top" | "work" | "lab" | "contact";

export const scrollToSection = (id: SectionId, behavior: ScrollBehavior = "smooth") => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};

/**
 * Anchor navigation that is safe with HashRouter: never uses `href="#id"`
 * (that would change the route). On the home page it scrolls; elsewhere it
 * navigates home and lets HomePage pick up `state.scrollTo`.
 */
export const useSectionNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (id: SectionId) => {
      if (pathname === "/") {
        scrollToSection(id);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    },
    [navigate, pathname]
  );
};
