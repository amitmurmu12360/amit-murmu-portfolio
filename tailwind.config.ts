import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0A0B0D", // primary background — near-black, not pure black
          raised: "#111318",  // card / panel surface
          inset: "#08090B",   // recessed areas (code blocks, inputs)
          glass: "rgba(17, 19, 24, 0.6)", // translucent panel over gradient glow
        },
        ink: {
          DEFAULT: "#EDEEF0", // primary text
          dim: "#9BA1AC",     // secondary text
          faint: "#5B616C",   // tertiary / disabled text
        },
        line: {
          DEFAULT: "#1E2128", // hairline borders
          strong: "#2A2E37",
          glass: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#C9A227", // brass/amber — the one accent color
          dim: "#8A701E",
          soft: "#3A331A",    // accent tinted background wash
          glow: "rgba(201, 162, 39, 0.16)",
        },
        signal: {
          up: "#3FA772",   // positive metric delta
          down: "#C2483F", // negative metric delta
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201, 162, 39, 0.12), 0 8px 40px -8px rgba(201, 162, 39, 0.18)",
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 60px -24px rgba(0,0,0,0.65)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.04) inset, 0 28px 80px -20px rgba(0,0,0,0.7)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
        floatSlow: "floatSlow 12s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
