/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: '#990c28',      // Maroon (unchanged)
  secondary: '#facc15',    // Dark blue-gray
  accent: '#facc15',       // Teal - modern, energetic
  gold: '#facc15',         // Amber gold
      },
    },
  },
  plugins: [],
}
