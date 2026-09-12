import { site } from "../../data/site";
import { useSectionNav } from "../../hooks/useSectionNav";
import { SocialIcon } from "../ui/Icons";

export const Footer = () => {
  const goTo = useSectionNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-wrap flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-500">{site.roleLine}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex items-center gap-5">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink"
                >
                  <SocialIcon id={s.id} size={16} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 text-xs text-ink-500">
            <span>© {year}</span>
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
            <button type="button" className="link-underline" onClick={() => goTo("top")}>
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
