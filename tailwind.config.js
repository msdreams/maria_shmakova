/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F8F8FA", 2: "#F0F0F3" },
        ink: {
          DEFAULT: "#111111",
          50: "#F5F5F3",
          100: "#EBEBEB",
          200: "#D6D6D6",
          300: "#B3B3B3",
          400: "#8A8A8A",
          500: "#6B6B6B",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1F1F1F",
          900: "#111111",
        },
        line: "#E2E2E7",
        // accent stops are only used to compose the gradient, never flat
        accent: { coral: "#FF6B6B", violet: "#A66CFF", sky: "#5DD3FF" },
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        label: ["Jura", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5.5vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      backgroundImage: {
        accent: "linear-gradient(90deg, var(--c-coral), var(--c-violet), var(--c-sky))",
        "accent-diag": "linear-gradient(135deg, var(--c-coral), var(--c-violet), var(--c-sky))",
        "accent-radial": "radial-gradient(circle at 30% 30%, var(--c-coral), var(--c-violet) 50%, var(--c-sky))",
      },
      backgroundSize: { 200: "200% 200%" },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up .6s cubic-bezier(.2,.7,.2,1) both",
      },
      maxWidth: { wrap: "80rem" },
      transitionTimingFunction: { smooth: "cubic-bezier(.2,.7,.2,1)" },
    },
  },
  plugins: [],
};
