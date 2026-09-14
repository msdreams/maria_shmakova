import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection, type SectionId } from "../../hooks/useSectionNav";
import { Contact } from "./Contact";
import { CreativeCoding } from "./CreativeCoding";
import { Hero } from "./Hero";
import { SelectedWork } from "./SelectedWork";

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Arriving from another page via the nav: scroll to the requested section.
  useEffect(() => {
    const id = (location.state as { scrollTo?: SectionId } | null)?.scrollTo;
    if (!id) return;
    // wait for the page-enter transition to paint, then scroll and clear the state
    const t = window.setTimeout(() => {
      scrollToSection(id);
      navigate(".", { replace: true, state: null });
    }, 60);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const homeTick = (location.state as { homeTick?: number } | null)?.homeTick ?? 0;

  return (
    <div key={homeTick}>
      <Hero />
      <SelectedWork />
      <CreativeCoding />
      <Contact />
    </div>
  );
};

export default HomePage;
