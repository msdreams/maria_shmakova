import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** HashRouter doesn't reset scroll on navigation — do it here on every
 *  pathname change, unless the target page is going to scroll to a section
 *  itself (it says so via `state.scrollTo`). */
export const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    if ((stateRef.current as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};
