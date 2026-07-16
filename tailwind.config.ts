import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050505",
          raised: "#0A0A0D",
          line: "#161619",
        },
        NodeBeta: {
          core: "#8B5CF6",
          bright: "#B794FF",
          dim: "#3F2E6B",
          ghost: "#1C1330",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.15), rgba(5,5,5,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
