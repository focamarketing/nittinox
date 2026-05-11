import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        cyan: {
          brand: "#0490D1",
          deep: "#0276AE",
          soft: "#E6F3FA",
        },
        wa: {
          DEFAULT: "#25D366",
          hover: "#1EBE5A",
        },
        ink: {
          DEFAULT: "#201F1F",
          soft: "#616161",
        },
        line: "#E5E7EA",
        alt: "#F8FAFB",
        flag: "#A10000",
      },
      maxWidth: {
        shell: "1240px",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
