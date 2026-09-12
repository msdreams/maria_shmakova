export const site = {
  name: "Maria Shmakova",
  roleLine: "UX/UI Designer & Frontend Developer",
  email: "masha.shmakova@gmail.com",
  phone: "+380660372751",
  phoneDisplay: "+380 66 037 27 51",
  location: "Kyiv, Ukraine",
  locationUrl: "https://www.google.com/maps/place/Kyiv",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/msdreams" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/mariashmakova" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/maria_mariash_" },
  ],
} as const;

export type SocialId = (typeof site.socials)[number]["id"];
