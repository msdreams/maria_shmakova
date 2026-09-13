import {
  loopCover,
  loopImages,
  loopMockup,
  kidtyCoverImage,
  kidtyImages,
  monetaCover,
  monetaImages,
  phonesCoverImage,
  phonesImages,
  potsCoverImage,
  potsImages,
  ProjectImage,
} from "./imageSets";

export type { ProjectImage } from "./imageSets";

export type ProjectKind = "development" | "design" | "design+development";

export interface Project {
  /** URL slug → /projects/:id */
  id: string;
  order: number;
  /** Drafts are hidden from the home page and only render in development. */
  status: "published" | "draft";
  featured: boolean;
  title: string;
  subtitle: string;
  kind: ProjectKind;
  role: string;
  year: string;
  stack: string[];
  /** Up to three short pills shown on the card. */
  tags: string[];
  url?: string;
  urlLabel?: string;
  /** Extra live links (e.g. a second product surface) shown next to `url`. */
  links?: { label: string; href: string }[];
  cover?: ProjectImage;
  /** Optional transparent-background mockups composed on the home card instead of a browser window. */
  mockup?: {
    device: ProjectImage;
    phone?: ProjectImage;
    card?: ProjectImage;
    /** A screen shown in a window behind the devices (something with photos/colour works best). */
    backdrop?: ProjectImage;
    /** Two glow colours behind the scene; defaults to the accent. */
    glow?: [string, string];
    /** Labels for the rail under the scene, left → right (e.g. platforms). */
    labels?: string[];
  };
  images: ProjectImage[];
  /** Project's own brand colour — tints the screenshot mosaic and the subtitle tile. */
  accent: string;
  overview: string;
  challenge: string;
  process: string[];
  solution: string;
  result: string;
}

// Text marked TODO is a draft written from the information already on the old
// site — replace with real facts (numbers, team size, timelines) when available.
export const projects: Project[] = [
  {
    id: "loop",
    order: 0,
    status: "published",
    featured: true,
    title: "Loop",
    subtitle: "Sports booking platform and CRM — one design system across web, CRM and mobile",
    kind: "design+development",
    role: "Product Designer & Frontend Developer",
    year: "2025 — present",
    stack: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS", "PostgreSQL", "Design system"],
    tags: ["Web", "CRM", "Mobile app", "Design system"],
    url: "https://loopsport.io/en-US",
    urlLabel: "loopsport.io",
    links: [{ label: "crm.loopsport.io", href: "https://crm.loopsport.io/en-US" }],
    cover: loopCover,
    mockup: loopMockup,
    images: loopImages,
    accent: "#3E5A97",
    overview:
      "Loop is a platform for sport. Players find and book fields, classes, trainers and competitions near them; clubs and trainers run their business in a CRM — bookings, schedules, pricing, staff and payments. A client web app, a CRM and a mobile app share one design system.",
    challenge:
      "Three products, one small team and no design system to start with. The client app, the CRM and the mobile app had to feel like one Loop while solving very different jobs: a player booking a court in three taps versus a club owner planning a year of prices per court, weekday and season. TODO: add team size and what existed when you joined.",
    process: [
      "Mapped the product together with the data models it runs on — courts, classes, bookings, price cards — so the interfaces were designed alongside the schema, not after it.",
      "Built the design system as tokens and components that live both in Figma and in code, and rolled it out across the CRM, the client app and the business landing.",
      "Designed the hard CRM widgets from scratch: a booking plan with occupancy per court, a schedule-and-prices editor, and a year-long price timeline where cards are dragged onto a calendar.",
      "Shipped it myself to production in Next.js, TypeScript and Tailwind on PostgreSQL, iterating on real usage with clubs.",
    ],
    solution:
      "One calm, structured visual language across every surface: a consumer search built around Where / Sport type / When, a CRM where a week of bookings across all courts reads at a glance, and pricing tools that turn a spreadsheet job into a timeline you can see.",
    result:
      "In production at loopsport.io and crm.loopsport.io, used by real clubs. TODO: add numbers — clubs onboarded, bookings, time saved on scheduling.",
  },
  {
    id: "moneta",
    order: 1,
    status: "published",
    featured: true,
    title: "Moneta",
    subtitle: "Personal finance dashboard that turns spending into a story",
    kind: "design+development",
    role: "Frontend Developer",
    year: "2024 — 2025",
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Recharts", "REST API", "2FA"],
    tags: ["Dashboard", "Data viz", "React"],
    url: "https://mariashmakova-frontend.moneta.adammudrak.pp.ua/",
    urlLabel: "Open Moneta",
    cover: monetaCover,
    images: monetaImages,
    accent: "#2F6B4F",
    overview:
      "Moneta is an expense-tracking web app for people who want to understand where their money goes without a spreadsheet. Users log transactions, group them into categories and explore their habits through interactive charts.",
    challenge:
      "Finance apps tend to be either too dense (bank-style tables) or too shallow (a single pie chart). The goal was an interface that stays calm at a glance but rewards curiosity: every number should be one click away from the transactions behind it. TODO: add the original brief / constraints.",
    process: [
      "Mapped the core loop — add a transaction, see the effect, adjust a budget — and cut everything that didn't serve it.",
      "Designed the information hierarchy in Figma: a summary layer (balance, month trend), an exploration layer (charts by category and time) and a detail layer (transaction list).",
      "Built the UI in React + TypeScript with Tailwind; state in Redux Toolkit, persistence through a REST API, two-factor authentication for sign-in.",
      "Charts with Recharts; iterated on interactions (hover, filtering by legend, empty states) directly in code, on top of reusable components from UI libraries.",
      "TODO: describe testing / feedback rounds if any.",
    ],
    solution:
      "A single-page dashboard with a clear visual rhythm: neutral surfaces, one accent for the selected category, and charts that share the same palette as the transaction list so users never lose the connection between the two.",
    result:
      "A working product used daily by its first users. TODO: add outcome metrics (e.g. time to log a transaction, number of active users) or a short quote from a user.",
  },
  {
    id: "kidty",
    order: 2,
    status: "published",
    featured: true,
    title: "Kidty",
    subtitle: "Customisable health data visualisation for parents",
    kind: "design+development",
    role: "Frontend Developer · team lead",
    year: "2024 — 2025",
    stack: ["React", "TypeScript", "React Router", "D3", "REST API", "Docker"],
    tags: ["Health", "D3", "Data viz"],
    url: "https://kidty.com.ua/",
    urlLabel: "kidty.com.ua",
    cover: kidtyCoverImage,
    images: kidtyImages,
    accent: "#6A5AE0",
    overview:
      "Kidty is a HealthTech web app that helps parents and paediatricians track a child's development over time and see it in context — growth curves, percentiles and custom measurements — instead of reading raw numbers from a notebook.",
    challenge:
      "Medical data is stressful to look at. The visualisations had to be accurate enough for a doctor and gentle enough for a worried parent at 2 a.m., on a phone. TODO: add the project's origin and audience details.",
    process: [
      "Researched how paediatric growth charts are read and which comparisons parents actually care about.",
      "Prototyped chart types in D3 to find a balance between precision (percentile bands, exact points) and calm visual language.",
      "Built the app from scratch in React + TypeScript with Context API for state; configurable chart components so each family can choose what to track; Docker for deployment.",
      "Led the team: defined the business logic and the architecture of client–server interactions with the backend developers.",
    ],
    solution:
      "A set of reusable D3 chart components with a soft, monochrome base and a single accent for the child's own line, responsive down to phone width, with clear empty and loading states.",
    result:
      "Shipped and live at kidty.com.ua. TODO: add user feedback or metrics.",
  },
  {
    id: "phone-catalog",
    order: 3,
    status: "published",
    featured: true,
    title: "Phone Catalog",
    subtitle: "E-commerce catalogue with filtering, favourites and cart",
    kind: "development",
    role: "Frontend Developer",
    year: "2023",
    stack: ["React", "TypeScript", "React Router", "Context API", "Custom hooks"],
    tags: ["E-commerce", "React", "TypeScript"],
    url: "https://msdreams.github.io/phone_catalog/#/",
    urlLabel: "Live demo",
    cover: phonesCoverImage,
    images: phonesImages,
    accent: "#2E3352",
    overview:
      "An online store front-end: product catalogue by category, filtering and sorting, product pages, favourites and a shopping cart that survive a page reload.",
    challenge:
      "Implement a complete shopping flow from a static design with no backend — state, persistence and routing all live on the client — while keeping the UI fast and pixel-accurate to the layout.",
    process: [
      "Broke the design into a component system (cards, sliders, filters, cart rows) before writing any page.",
      "Modelled global state with the Context API and a custom useLocalStorage hook so favourites and cart persist without a server.",
      "Implemented category, search and sort as URL parameters so every state is shareable and the back button works.",
    ],
    solution:
      "A responsive catalogue with hash-based routing, client-side persistence and consistent interaction patterns across product lists, product pages and the cart.",
    result:
      "Deployed on GitHub Pages as a portfolio piece. TODO: add anything measurable (Lighthouse score, review feedback).",
  },
  {
    id: "potr-pots",
    order: 4,
    status: "published",
    featured: true,
    title: "Potr Pots",
    subtitle: "Responsive landing page with a scalable CSS architecture",
    kind: "development",
    role: "Frontend Developer",
    year: "2023",
    stack: ["HTML", "SCSS", "BEM"],
    tags: ["Landing", "SCSS", "Responsive"],
    url: "https://msdreams.github.io/Potr_Pots_landing",
    urlLabel: "Live demo",
    cover: potsCoverImage,
    images: potsImages,
    accent: "#C9A227",
    overview:
      "A landing page for a ceramics brand, built from a Figma layout as an exercise in clean, maintainable CSS and fluid responsive behaviour.",
    challenge:
      "Match the design at every breakpoint without media-query soup: the layout had to scale from 320px to wide desktop with a small, readable stylesheet.",
    process: [
      "Set up an SCSS structure with variables, mixins and BEM naming so every block could be reasoned about in isolation.",
      "Used fluid units and a small set of breakpoints instead of per-element overrides.",
      "Checked the result against the layout at each breakpoint and tuned typography and spacing scales.",
    ],
    solution:
      "A single-page site with semantic HTML, a compact SCSS architecture and smooth transitions between breakpoints.",
    result:
      "Live on GitHub Pages. TODO: add any measurable outcome or what you'd do differently now.",
  },
  {
    id: "wch",
    order: 5,
    status: "draft",
    featured: false,
    title: "WCH Service Bureau",
    subtitle: "Rebranding and restructuring an internal medical-services platform",
    kind: "design",
    role: "Product Designer",
    year: "2022 — 2023",
    stack: ["Figma", "Design system", "User research", "Prototyping"],
    tags: ["Product design", "Healthcare", "Design system"],
    url: "https://credyapp.com/",
    urlLabel: "credyapp.com",
    images: [],
    accent: "#3A6EA5",
    overview:
      "Led the rebranding and restructuring of WCH Service Bureau's internal products — a medical-services platform used by American doctors and clinics. TODO: add a one-paragraph description of the product.",
    challenge: "TODO: what was broken in the old product, who the users were, what the business wanted.",
    process: [
      "TODO: research (interviews, audits) → information architecture → design system → prototypes → hand-off.",
    ],
    solution: "TODO: describe the new structure and visual system; add screenshots to `images`.",
    result: "TODO: adoption, feedback, business outcome.",
  },
  {
    id: "calaton",
    order: 6,
    status: "draft",
    featured: false,
    title: "Calaton Systems",
    subtitle: "Visual system for a growing software development agency",
    kind: "design",
    role: "UX/UI Designer",
    year: "2020 — 2021",
    stack: ["Figma", "Market & user analysis", "Design system", "Jira / Scrum"],
    tags: ["Brand", "UX research", "Design system"],
    url: "https://calaton.com",
    urlLabel: "calaton.com",
    images: [],
    accent: "#1F6F8B",
    overview:
      "Worked directly with the company founder on structural market and user analysis, then developed a visual system flexible enough to support every direction the company planned to grow in. TODO: expand.",
    challenge: "TODO: what the agency needed, constraints, timeline.",
    process: [
      "TODO: analysis → visual system → sequential design with frontend developers → review and refinement.",
    ],
    solution: "TODO: describe the system; add screenshots to `images`.",
    result: "TODO: outcome.",
  },
];

const isDev = process.env.NODE_ENV === "development";

export const publishedProjects = projects
  .filter((p) => p.status === "published")
  .sort((a, b) => a.order - b.order);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

/** Drafts are reachable by URL in development only, for previewing. */
export const getProject = (id?: string): Project | undefined => {
  const project = projects.find((p) => p.id === id);
  if (!project) return undefined;
  if (project.status === "draft" && !isDev) return undefined;
  return project;
};

export const getNextProject = (id: string): Project => {
  const i = publishedProjects.findIndex((p) => p.id === id);
  return publishedProjects[(i + 1) % publishedProjects.length];
};

export const projectIndex = (id: string) => publishedProjects.findIndex((p) => p.id === id) + 1;
