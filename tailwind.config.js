/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      CTA: "#e9c46a",
      BG: "#264653",
      Accent: "#2a9d8f",
      White: "#fbf5f3",
      Black: "#1e1e24"
    },
    extend: {},
  },
  plugins: [],
}
