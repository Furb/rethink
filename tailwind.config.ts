import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      light: "var(--color-light)",
      dark: "var(--color-dark)",
      white: "var(--color-white)",
      grey: "var(--color-grey)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
