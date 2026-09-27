import type { Config } from "tailwindcss";

/* ============================================================
   BUNGEE JUMP INSURANCE — "High Voltage" design system
   Warm black base · blaze orange primary · amber accent
   clay = blaze orange · sage = amber · gold = amber
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
        cream: "#0E0A07",
        sand: "#16110D",
        white: "#ffffff",
        // Was electric blue; now blaze orange (Josh: no blue/purple/pink).
        // #FF7A1F is 7.7:1 as text on the near-black base. It is too bright for
        // white text, so text sitting on an orange fill uses text-cream (near-black here).
        clay: {
          DEFAULT: "#FF7A1F",
          dark: "#E0600F",
          light: "#FF9A4D",
          50: "#FFF1E6",
          100: "#FFDDC2",
          200: "#FFBC8A",
          300: "#FF9A4D",
          400: "#FF8733",
          500: "#FF7A1F",
          600: "#E0600F",
          700: "#B04A0B",
          800: "#7A3408",
          900: "#3D1A04",
        },
        // Was neon green, same values as gold; now amber.
        sage: {
          DEFAULT: "#FFC233",
          dark: "#E6A200",
          light: "#FFD166",
          50: "#FFF8E6",
          100: "#FFEFC2",
          200: "#FFE08A",
          300: "#FFD166",
          400: "#FFC94D",
          500: "#FFC233",
          600: "#E6A200",
          700: "#B37E00",
        },
        gold: {
          DEFAULT: "#FFC233",
          dark: "#E6A200",
          light: "#FFD166",
          50: "#FFF8E6",
          100: "#FFEFC2",
          200: "#FFE08A",
          300: "#FFD166",
          400: "#FFC94D",
          500: "#FFC233",
          600: "#E6A200",
        },
        espresso: "#ffffff",
        cocoa: "#EDE4D8",
        mocha: "#B3A899",
        adobe: "#2A221B",
        adobeDark: "#3A3028",
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
          "linear-gradient(180deg, #0B0806 0%, #120C08 40%, #1A1009 70%, #0B0806 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,122,31,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,194,51,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #FF7A1F 0%, #FF9A4D 100%)",
        "sage-gradient": "linear-gradient(135deg, #FFC233 0%, #FFD166 100%)",
        "gold-gradient": "linear-gradient(135deg, #FF7A1F 0%, #FFC233 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(255, 122, 31, 0.4), 0 4px 12px -6px rgba(255, 122, 31, 0.2)",
        "warm-lg": "0 30px 70px -20px rgba(255, 122, 31, 0.5), 0 10px 30px -10px rgba(255, 122, 31, 0.25)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 1px 3px -1px rgba(255, 122, 31, 0.1)",
        "card-hover": "0 20px 50px -15px rgba(255, 122, 31, 0.4), 0 8px 20px -8px rgba(255, 194, 51, 0.15)",
        arch: "inset 0 -8px 30px -10px rgba(255, 122, 31, 0.2)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
        "pulse-glow": { "0%, 100%": { boxShadow: "0 0 20px rgba(255,122,31,0.4)" }, "50%": { boxShadow: "0 0 40px rgba(255,122,31,0.7), 0 0 80px rgba(255,194,51,0.2)" } },
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
