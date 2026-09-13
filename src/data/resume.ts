export interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  companyUrl?: string;
  location?: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}

export interface EducationItem {
  period: string;
  title: string;
  place?: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export const intro = {
  headline: "I'm a UX/UI designer who ships her own code — and a creative coder who thinks in interfaces.",
  body: [
    "I work on projects that are challenging — whether it's crafting fluid, dynamic interfaces or turning raw data into something visually meaningful.",
    "I believe the most engaging digital experiences aren't just seen — they're felt.",
  ],
};

export const experience: ExperienceItem[] = [
  {
    period: "May 2025 — present",
    title: "Frontend Developer",
    company: "SportyLabs Digital",
    companyUrl: "https://www.sportylabs.io/",
    location: "Gdańsk, Poland",
    bullets: [
      "Work at the intersection of design and engineering — I own a design system spanning CRM, client-facing and mobile platforms.",
      "Design interfaces alongside the data models they run on: I see the product from schema to pixel.",
      "Build and maintain a unified design system across multiple platforms.",
      "Ship my own work to production — React, TypeScript, Next.js, Tailwind, PostgreSQL.",
      "Bridge design taste with engineering judgment, closing the gap between what's intended and what actually ships.",
    ],
    links: [
      { label: "loopsport.io", href: "https://loopsport.io/en-US" },
      { label: "crm.loopsport.io", href: "https://crm.loopsport.io/en-US" },
    ],
  },
  {
    period: "Apr — Jul 2025",
    title: "Frontend Developer",
    company: "PetHelsi",
    companyUrl: "https://pet-helsi-front.vercel.app/",
    location: "Kyiv, Ukraine",
    bullets: [
      "Migrated the product from React to Next.js: server-side rendering, routing and project structure.",
      "Collaborated with back-end developers to translate data-driven requirements and business logic into functional UI.",
    ],
  },
  {
    period: "Jul 2024 — Mar 2025",
    title: "Frontend Developer",
    company: "Kidty",
    companyUrl: "https://kidty.com.ua/",
    location: "Kyiv, Ukraine",
    bullets: [
      "HealthTech web app that helps parents and paediatricians track a child's development — built from scratch with a focus on adaptability, data visualisation and storage.",
      "Interactive data visualisation with D3; state management with Context API; performance optimisation.",
      "Led the team: business logic and the architecture of client–server interactions.",
    ],
  },
  {
    period: "Oct 2024 — Mar 2025",
    title: "Frontend Developer",
    company: "Moneta",
    companyUrl: "https://mariashmakova-frontend.moneta.adammudrak.pp.ua/",
    bullets: [
      "Finance dashboard for expense tracking: React, Redux Toolkit, REST API, two-factor authentication.",
      "Data visualisation with Recharts; reusable components on top of UI libraries, with consistency and usability in mind.",
    ],
  },
  {
    period: "Apr 2023 — Mar 2025",
    title: "Frontend Developer",
    company: "Mate academy",
    bullets: ["Two-year front-end program: JavaScript, TypeScript, React, Redux, testing, team projects."],
  },
  {
    period: "Jan 2022 — Dec 2023",
    title: "Product Designer",
    company: "WCH Service Bureau",
    companyUrl: "https://wchsb.com/",
    location: "American product company, Kyiv office",
    bullets: [
      "Graphic web designer (2022), then product designer (Aug 2022 — Dec 2023): responsible for the design and development of the company's products.",
      "Led the rebranding and restructuring of internal products — a medical-services platform used by American doctors and clinics.",
    ],
    links: [{ label: "Product page & demo", href: "https://credyapp.com/" }],
  },
  {
    period: "Oct — Dec 2021",
    title: "Motion Graphic Designer",
    company: "Freelance",
    bullets: ["Motion graphics and animation for brands."],
  },
  {
    period: "Dec 2020 — Oct 2021",
    title: "UX Designer",
    company: "Calaton",
    companyUrl: "https://calaton.com",
    location: "Software development agency",
    bullets: [
      "Worked directly with the founder: structural market and user analysis, then a visual system that lets the company grow in every planned direction.",
      "Designed in sequence with frontend developers — reviewing and refining parts of the project together. Scrum with Jira.",
    ],
  },
  {
    period: "2015 — 2019",
    title: "Graphic Designer",
    company: "Honey Shmoney",
    location: "Kyiv, Ukraine",
    bullets: ["Graphic design, web design and marketing for the Honey Shmoney and Мед-шмед brands."],
  },
];

export const education: EducationItem[] = [
  { period: "2023 — 2025", title: "Frontend Developer program", place: "Mate academy" },
  { period: "2022", title: "UX/UI Animation & Motion Design", place: "Projector Institute" },
  { period: "2021", title: "Motion Graphics in After Effects", place: "Projector Institute" },
  { period: "2021", title: "Typography", place: "School of Visual Communication" },
  { period: "2020", title: "UX/UI Design", place: "Apollo Design Center" },
  { period: "2005 — 2012", title: "Higher education, Faculty of Graphic Design" },
];

export const certifications: string[] = [
  "Next.js & React — The Complete Guide",
  "Professional Program in Front-End Web Development",
  "Data Visualisation in JavaScript with React and D3",
  "Next.js — The Beginner Guide",
  "React Native — The Beginner Guide",
];

export const designStack: StackGroup[] = [
  {
    label: "Practice",
    items: ["UX/UI", "Design systems", "User research", "Journey mapping", "Interactive prototyping", "Responsive design"],
  },
  {
    label: "Craft",
    items: ["Typography", "Color theory", "Iconography", "Motion & animation"],
  },
  {
    label: "Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"],
  },
];

export const engineeringStack: StackGroup[] = [
  {
    label: "Languages & frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "React Native", "Redux Toolkit", "Tailwind", "HTML5", "CSS & SCSS"],
  },
  {
    label: "Data & APIs",
    items: ["REST API", "PostgreSQL", "D3", "Recharts", "Docker"],
  },
  {
    label: "Workflow",
    items: ["Git / GitHub", "Scrum · Kanban", "Jira", "VS Code", "Chrome DevTools"],
  },
  {
    label: "AI tooling",
    items: ["Cursor", "Claude Code CLI", "AI-assisted development"],
  },
];

/** When each track started. Set a real month if you want the count to tick
 *  over mid-year; a bare January means "since <year>". */
const DESIGN_START = "2015-01-01";
const CODE_START = "2023-01-01";

/** Whole years elapsed, so a birthday that hasn't happened yet doesn't count. */
const yearsSince = (iso: string) => {
  const start = new Date(iso);
  const now = new Date();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  return now.getFullYear() - start.getFullYear() - (beforeAnniversary ? 1 : 0);
};

const inYears = (iso: string) => {
  const n = yearsSince(iso);
  return `${n} ${n === 1 ? "year" : "years"}`;
};

/** Short facts for the hero. The experience counts derive from the dates above
 *  so they stay right without anyone editing them. */
export const facts = [
  { label: "Based in", value: "Gdynia, Poland" },
  { label: "Designing for", value: inYears(DESIGN_START) },
  { label: "Shipping code for", value: inYears(CODE_START) },
];
