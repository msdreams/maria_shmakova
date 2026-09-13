import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconClose = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconChevronLeft = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const IconChevronRight = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const IconArrowUpRight = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const IconArrowRight = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowDown = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const IconPrint = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M6 9V4h12v5M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="7" rx="1" />
  </svg>
);

export const IconMenu = ({ size = 22, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconGithub = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)} fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
  </svg>
);

export const IconLinkedin = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)} fill="currentColor" stroke="none">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const IconInstagram = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPlay = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)} fill="currentColor" stroke="none">
    <path d="M7 5v14l11-7z" />
  </svg>
);

export const IconPause = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size, props)} fill="currentColor" stroke="none">
    <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
  </svg>
);

export const SocialIcon = ({ id, size }: { id: string; size?: number }) => {
  switch (id) {
    case "github":
      return <IconGithub size={size} />;
    case "linkedin":
      return <IconLinkedin size={size} />;
    case "instagram":
      return <IconInstagram size={size} />;
    default:
      return null;
  }
};
