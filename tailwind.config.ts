import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#101010",
        "surface-card": "rgba(18, 18, 18, 0.75)",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "surface-border-bright": "rgba(255, 255, 255, 0.2)",
        primary: "#F2F0EA",
        muted: "#A5A5A5",
        subtle: "#666666",
        accent: {
          orange: "#FF784F",
          blue: "#3295FF",
          cyan: "#4DE1FF",
          violet: "#9D70FF",
          purple: "#A85BFF",
        },
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "Cormorant Garamond", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 30%, rgba(77, 225, 255, 0.12) 0%, rgba(157, 112, 255, 0.06) 40%, transparent 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
