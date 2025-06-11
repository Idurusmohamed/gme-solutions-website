/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- This line is critical
  ],
  theme: {
    extend: {
      // You can add your custom theme extensions here later
      // For example:
      // colors: {
      //   'gme-blue': '#0044cc', // Example color
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
}