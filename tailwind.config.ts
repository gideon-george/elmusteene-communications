import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2C59",
          dark: "#0A1F40",
          light: "#1A3D73",
        },
        electric: {
          DEFAULT: "#2E7DFF",
          dark: "#1E63D6", // darker shade for accessible text on light backgrounds
          light: "#EAF1FF",
        },
        canvas: "#F5F7FA",
        ink: "#161A20",
        muted: "#5B6472",
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C4A", // WCAG-friendly hover / text shade
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
