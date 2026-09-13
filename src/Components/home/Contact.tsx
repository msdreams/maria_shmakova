import { site } from "../../data/site";
import { SocialIcon } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export const Contact = () => (
  <Section id="contact" eyebrow="03 — Contact" className="border-t border-line">
    <Reveal>
      <h2 className="max-w-[18ch] font-heading text-display-lg font-semibold text-ink">
        Let's build something that makes people stop, explore, and remember.
      </h2>
    </Reveal>

    <Reveal delay={0.1} className="mt-12">
      <a
        href={`mailto:${site.email}`}
        className="group inline-block break-all font-heading font-semibold text-display-md text-ink md:text-display-lg"
      >
        <span className="gradient-text transition-opacity duration-300 group-hover:opacity-80">{site.email}</span>
      </a>
    </Reveal>

    <Reveal delay={0.15} className="mt-12 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-6">
        {site.socials.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 text-ink-700 hover:text-ink"
            >
              <SocialIcon id={s.id} size={18} />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500">
        <a href={`tel:${site.phone}`} className="link-underline">
          {site.phoneDisplay}
        </a>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.location}
        </span>
      </div>
    </Reveal>
  </Section>
);
