import { site } from "../../data/site";
import { SocialIcon } from "../ui/Icons";
import { Container } from "../ui/Section";

/** Contact row shared by every page. The home page shows the email CTA above
 *  it in the Contact section, so this row must not repeat the address. */
export const Footer = () => (
  <footer className="border-t border-line">
    <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
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
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.location}
        </span>
      </div>
    </Container>
  </footer>
);
