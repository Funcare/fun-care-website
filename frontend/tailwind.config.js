/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌟 FunCare Brand Palette
        bronze: "#9A6D46",    // warm bronze
        plum: "#76285A",      // deep plum
        violet: "#512867",    // dark violet
        steel: "#49637A",     // muted steel blue
        olive: "#8EA22D",     // earthy olive green

        // 🌤️ Light Variants (for backgrounds, highlights, gradients)
        bronzeLight: "#C49B73",  // lighter bronze
        plumLight: "#A45A84",    // softer plum
        violetLight: "#7A4C91",  // lavender-violet
        steelLight: "#7991A5",   // soft blue-gray
        oliveLight: "#B3C865",   // pale olive green
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
