import type { Config } from "tailwindcss";

/* ============================================================
   BUNGEE JUMP INSURANCE — "High Voltage" design system
   Jet black base · electric blue primary · neon green accent
   clay = electric blue · sage = neon green · gold = neon green
   espresso = white (headings on dark) · cream/sand = dark surfaces
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#0a0a0a",
        sand: "#111111",
        white: "#ffffff",
        clay: {
          DEFAULT: "#0066ff",
          dark: "#0052cc",
          light: "#3385ff",
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        sage: {
          DEFAULT: "#39ff14",
          dark: "#2dd10e",
          light: "#66ff47",
          50: "#eafee5",
          100: "#d5fdcb",
          200: "#abfb97",
          300: "#81f963",
          400: "#57f82f",
          500: "#39ff14",
          600: "#2dd10e",
          700: "#21a30a",
        },
        gold: {
          DEFAULT: "#39ff14",
          dark: "#2dd10e",
          light: "#66ff47",
          50: "#eafee5",
          100: "#d5fdcb",
          200: "#abfb97",
          300: "#81f963",
          400: "#57f82f",
          500: "#39ff14",
          600: "#2dd10e",
        },
        espresso: "#ffffff",
        cocoa: "#e0e0e0",
        mocha: "#a0a0a0",
        adobe: "#222222",
        adobeDark: "#333333",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Impact", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0.5rem 0.5rem 0.5rem 0.5rem",
        arch2: "0.75rem 0.75rem 0.5rem 0.5rem",
        "4xl": "0.5rem",
        "5xl": "0.75rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #000000 0%, #050510 40%, #000520 70%, #000000 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(0,102,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(57,255,20,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #0066ff 0%, #3385ff 100%)",
        "sage-gradient": "linear-gradient(135deg, #39ff14 0%, #66ff47 100%)",
        "gold-gradient": "linear-gradient(135deg, #0066ff 0%, #39ff14 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(0, 102, 255, 0.4), 0 4px 12px -6px rgba(0, 102, 255, 0.2)",
        "warm-lg": "0 30px 70px -20px rgba(0, 102, 255, 0.5), 0 10px 30px -10px rgba(0, 102, 255, 0.25)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 1px 3px -1px rgba(0, 102, 255, 0.1)",
        "card-hover": "0 20px 50px -15px rgba(0, 102, 255, 0.4), 0 8px 20px -8px rgba(57, 255, 20, 0.15)",
        arch: "inset 0 -8px 30px -10px rgba(0, 102, 255, 0.2)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
        "pulse-glow": { "0%, 100%": { boxShadow: "0 0 20px rgba(0,102,255,0.4)" }, "50%": { boxShadow: "0 0 40px rgba(0,102,255,0.7), 0 0 80px rgba(57,255,20,0.2)" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
