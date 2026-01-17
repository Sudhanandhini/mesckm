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
        secondary: '#fffbeb',
        accent: '#990c28', // Red for headings
        gold: '#fffbeb',
      },
    },
  },
  plugins: [],
}
