import {
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
  /** URL slug → /project/:id */
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
  timeline?: string;
  stack: string[];
  /** Up to three short pills shown on the card. */
  tags: string[];
  url?: string;
  urlLabel?: string;
  cover?: ProjectImage;
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
    id: "moneta",
    order: 1,
    status: "published",
    featured: true,
    title: "Moneta",
    subtitle: "Personal finance dashboard that turns spending into a story",
    kind: "design+development",
    role: "UX/UI Design & Frontend",
    year: "2024",
    timeline: "TODO: e.g. 3 months",
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router", "Recharts", "REST API"],
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
      "Built the UI in React + TypeScript with Tailwind, using Recharts for charts and a REST API for persistence; iterated on chart interactions (hover, filtering by legend, empty states) directly in code.",
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
    role: "Frontend & Data-viz Design",
    year: "2024 — present",
    timeline: "TODO: ongoing",
    stack: ["React", "TypeScript", "React Router", "D3", "REST API", "Docker"],
    tags: ["Health", "D3", "Data viz"],
    url: "https://kidty.com.ua/",
    urlLabel: "kidty.com.ua",
    cover: kidtyCoverImage,
    images: kidtyImages,
    accent: "#6A5AE0",
    overview:
      "Kidty is a web app that helps parents track a child's health indicators over time and see them in context — growth curves, percentiles and custom measurements — instead of reading raw numbers from a notebook.",
    challenge:
      "Medical data is stressful to look at. The visualisations had to be accurate enough for a doctor and gentle enough for a worried parent at 2 a.m., on a phone. TODO: add the project's origin and audience details.",
    process: [
      "Researched how paediatric growth charts are read and which comparisons parents actually care about.",
      "Prototyped chart types in D3 to find a balance between precision (percentile bands, exact points) and calm visual language.",
      "Built configurable chart components in React + TypeScript so each family can choose what to track; containerised the app with Docker for deployment.",
      "TODO: describe collaboration with backend / medical advisors.",
    ],
    solution:
      "A set of reusable D3 chart components with a soft, monochrome base and a single accent for the child's own line, responsive down to phone width, with clear empty and loading states.",
    result:
      "Project under active development. TODO: add current status, user feedback or metrics.",
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
    timeline: "TODO",
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
    timeline: "TODO",
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
    timeline: "TODO",
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
    timeline: "TODO",
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
