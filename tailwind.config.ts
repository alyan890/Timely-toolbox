import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)"
        },
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        "dark-surface": "var(--color-dark-surface)",
        graphite: "var(--color-graphite)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      maxWidth: {
        content: "80rem"
      },
      boxShadow: {
        subtle: "0 8px 24px rgb(23 23 23 / 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
