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
  headline: "I'm a UX/UI designer who writes the code — and a creative coder who thinks in interfaces.",
  body: [
    "I love working on projects that challenge conventions, whether it's crafting fluid, dynamic interfaces or transforming raw data into something visually meaningful.",
    "I believe the most engaging digital experiences aren't just seen — they are felt. Let's build something that makes people stop, explore, and remember.",
  ],
};

export const experience: ExperienceItem[] = [
  {
    period: "2023 — present",
    title: "Frontend Developer",
    bullets: [
      "Develop and maintain web applications with a focus on adaptability, data visualisation and storage.",
      "Optimise performance and build reusable components; ensure security, including two-factor authentication.",
      "Collaborate with back-end developers and other professionals to translate data-driven requirements and business logic into functional UI.",
      "Build state management with Context API and Redux Toolkit; collaborate on database interaction logic.",
      "Stack: JavaScript, React, Redux Toolkit, TypeScript, HTML, CSS, Tailwind, Docker.",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Product Designer",
    company: "WCH Service Bureau",
    companyUrl: "https://wchsb.com/",
    location: "American product company, Kyiv office",
    bullets: [
      "Led the rebranding and restructuring of the company's internal products — a medical-services platform used by American doctors and clinics.",
    ],
    links: [{ label: "Product page & demo", href: "https://credyapp.com/" }],
  },
  {
    period: "2020 — 2021",
    title: "UX/UI Designer",
    company: "Calaton Systems",
    companyUrl: "https://calaton.com",
    location: "Software development agency",
    bullets: [
      "Worked directly with the founder: structural market and user analysis, then a visual system that lets the company grow in every planned direction.",
      "Designed in sequence with frontend developers — reviewing and refining parts of the project together.",
      "Scrum with Jira.",
    ],
  },
];

export const education: EducationItem[] = [
  { period: "2023 — 2025", title: "Front End Development", place: "Mate Academy" },
  { period: "2024", title: "Data Visualization in JavaScript with React and D3.js", place: "Udemy" },
  { period: "2024", title: "Tailwind CSS", place: "Udemy" },
  { period: "2022", title: "UX/UI Animation", place: "Projector" },
  { period: "2021", title: "Motion Design", place: "Projector" },
  { period: "2021", title: "Brand Strategy for Online Platforms", place: "Domestika" },
  { period: "2020", title: "UX/UI Design", place: "Apollo Design Center" },
  { period: "2019", title: "Graphic Design", place: "School of Visual Communication" },
  { period: "2005 — 2012", title: "Higher education, Faculty of Graphic Design" },
];

export const designStack: StackGroup[] = [
  {
    label: "Practice",
    items: ["UX/UI", "Design systems", "User research", "Journey mapping", "Interactive prototyping", "Responsive design"],
  },
  {
    label: "Craft",
    items: ["Typography", "Color theory", "Iconography", "Animation & motion"],
  },
  {
    label: "Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"],
  },
];

export const engineeringStack: StackGroup[] = [
  {
    label: "Languages & frameworks",
    items: ["HTML5", "CSS & SCSS", "JavaScript", "TypeScript", "React", "Redux Toolkit", "Tailwind"],
  },
  {
    label: "Data & APIs",
    items: ["REST API", "D3", "Recharts", "Docker"],
  },
  {
    label: "Workflow",
    items: ["Git / GitHub", "VS Code", "Chrome DevTools", "NPM", "OOP", "SDLC · Agile · Scrum · Kanban"],
  },
];

/** Short facts for the About block on the home page. */
export const facts = [
  { label: "Based in", value: "Kyiv, Ukraine" },
  { label: "Designing since", value: "2012" },
  { label: "Coding since", value: "2023" },
];
