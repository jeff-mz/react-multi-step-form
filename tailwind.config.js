/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        marine: "#02295a",
        purplish: "#473dff",
        pastel: "#adbeff",
        light: "#bfe2fd",
      },
      gray: {
        cool: "#9699ab",
        light: "#d6d9e6",
      },
      red: "#ed3548",
      white: "#ffffff",
      magnolia: "#f0f6ff",
      alabaster: "#fafbff",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
