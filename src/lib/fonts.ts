import { Barlow_Condensed, Barlow } from "next/font/google";

// Heading font — Barlow Condensed (bold, condensed, kinetic energy)
export const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Body font — Barlow (clean companion to Barlow Condensed)
export const bodyFont = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
