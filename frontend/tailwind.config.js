/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",

          bg: "#080F25",
          text: "#c7d2fe",
          line: "#37446b",
        },
        sub: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },

      fontSize: {
        xxs: "0.625rem",
      },

      keyframes: {
        "skeleton-gradient": {
          "0%": { backgroundColor: "rgba(165, 165, 165, 0.1)" },
          "50%": { backgroundColor: "rgba(165, 165, 165, 0.5)" },
          "100%": { backgroundColor: "rgba(165, 165, 165, 0.1)" },
        },
      },
      animation: {
        "skeleton-gradient": "skeleton-gradient 1.4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
