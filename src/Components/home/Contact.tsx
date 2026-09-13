import { emailAddress } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Let's build something that makes people stop, explore, and remember."
    titleClassName="max-w-[18ch]"
    tone="paper-2"
  >
    <Reveal delay={0.1}>
      {/* A button, not a link: an href would put the address back in the
          markup, which is exactly what we're avoiding. */}
      <button
        type="button"
        onClick={() => {
          window.location.href = `mailto:${emailAddress()}`;
        }}
        className="group inline-block font-heading text-display-md font-semibold transition-transform duration-300 ease-smooth hover:-translate-y-0.5 active:translate-y-0 md:text-display-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-4 focus-visible:ring-offset-paper-2"
      >
        <span className="gradient-text-sweep">Contact Me</span>
      </button>
    </Reveal>
  </Section>
);
