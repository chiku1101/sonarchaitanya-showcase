import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      md2: '1330px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'gradient-start': "hsl(var(--gradient-primary-start))",
        'gradient-end': "hsl(var(--gradient-primary-end))",
        'glass': {
          DEFAULT: "hsl(var(--card-glass))",
          border: "hsl(var(--card-border))",
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--gradient-primary-start)), hsl(var(--gradient-primary-end)))',
        'gradient-secondary': 'linear-gradient(135deg, hsl(var(--gradient-secondary-start)), hsl(var(--gradient-secondary-end)))',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "glow": {
          "from": { boxShadow: "0 0 20px hsl(var(--gradient-primary-start) / 0.5)" },
          "to": { boxShadow: "0 0 30px hsl(var(--gradient-primary-start) / 0.8)" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
