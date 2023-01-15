/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      CTA: "#f9a826",
      BG: "#1e1e24",
      Accent: "#60c3ff",
      Silver: "#090C02",
      White: "#fbf5f3",
      Black: "#1e1e24",
    },
    extend: {},
  },
  plugins: [],
};
