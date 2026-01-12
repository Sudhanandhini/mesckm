/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#990c28', // Brown/olive gold from the website
        secondary: '#990c28',
        accent: '#990c28', // Red for headings
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
}
