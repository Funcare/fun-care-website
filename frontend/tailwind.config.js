/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        // 🍑 FunCare Brand Palette
        peach: "#F3C6A4",    // soft peach
        teal: "#90B7B3",     // calm teal
        coral: "#E59BAA",    // gentle coral
        cream: "#FFF4E3",    // warm cream
        yellow: "#FFD166",   // cheerful yellow
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
