export const site = {
  name: "Maria Shmakova",
  roleLine: "UX/UI Designer & Frontend Developer",
  /** ROT13'd halves of the address, joined only when someone clicks. Neither
   *  the address nor an "@" is present in the markup or the bundle, so the
   *  patterns scrapers grep for never appear. */
  emailParts: ["znfun.fuznxbin", "tznvy.pbz"],
  location: "Gdynia, Poland",
  locationUrl: "https://www.google.com/maps/place/Gdynia",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/msdreams" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/mariashmakova/" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/maria_mariash_" },
  ],
} as const;

export type SocialId = (typeof site.socials)[number]["id"];

const rot13 = (s: string) =>
  s.replace(/[a-z]/gi, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });

export const emailAddress = () => site.emailParts.map(rot13).join("@");
