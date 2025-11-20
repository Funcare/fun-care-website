/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  safelist: [
    // Ensure all program card colors are always generated
    'bg-coral',
    'bg-teal',
    'bg-peach',
    'bg-yellow',
    'bg-green',
    'bg-lavender',
    'bg-mint',
    'bg-rose',
    'bg-sky',
    'bg-apricot',
    'bg-sage',
    'bg-lilac',
    'bg-sand',
    'bg-blush',
    'bg-aqua',
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
        green: "#67e12fff",
        // Additional program card colors
        lavender: "#C8A8E9",  // soft lavender
        mint: "#A8E6CF",     // fresh mint
        rose: "#F4A5AE",      // soft rose
        sky: "#A8D5E2",       // sky blue
        apricot: "#FFB88C",   // warm apricot
        sage: "#B8C5A6",      // sage green
        lilac: "#D4B3E8",     // light lilac
        sand: "#E8D5B7",      // sandy beige
        blush: "#F5C2C7",     // pink blush
        aqua: "#9DD9D2",      // aqua teal
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
