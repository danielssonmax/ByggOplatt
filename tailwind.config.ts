import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        // Neutral, slightly cool charcoal. Darker than the old zinc-900 (#18181b).
        ink: {
          50: "#f5f6f7",
          100: "#e8eaed",
          200: "#cdd1d6",
          300: "#a6acb4",
          400: "#7f8690",
          500: "#5c636d",
          600: "#3d434b",
          700: "#2a2f36",
          800: "#1c1f24",
          850: "#16191d",
          900: "#101215",
          950: "#0a0b0d",
        },
        // Brand orange, matched to the logo stripes. Used for identity, not for actions.
        orange: {
          300: "#FFC470",
          400: "#FFAD3D",
          500: "#FF9800",
          600: "#FB8C00",
          700: "#E07B00",
        },
        // Glacier Blue: the action colour (CTA buttons, links, focus).
        glacier: {
          DEFAULT: "#77e7fe",
          50: "#effcff",
          100: "#d6f8ff",
          200: "#b5f3ff",
          300: "#9aeefe",
          400: "#77e7fe",
          500: "#45d6f5",
          600: "#1fb4d4",
          700: "#168fab",
          950: "#062a33",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        prose: "65ch",
      },
      zIndex: {
        header: "40",
        overlay: "50",
        skip: "60",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
export default config
