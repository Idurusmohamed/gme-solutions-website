/** @type {import('tailwindcss').Config} */
export default {
  content:,
  theme: {
    extend: {
      // You can add your custom theme extensions here later
      // For example:
      // colors: {
      //   'gme-blue': '#0044cc', // Example color
      // },
    },
  },
  plugins:[
    require('@tailwindcss/typography'), // Add this line
  ],
}