import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        "base-soft": "#0A0F24",
        surface: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        ink: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          faint: "#64748B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.14), transparent 35%)",
        "hero-gradient":
          "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(37,99,235,0.5)",
        "glow-cyan": "0 0 60px -15px rgba(6,182,212,0.45)",
        card: "0 8px 32px 0 rgba(0,0,0,0.36)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
