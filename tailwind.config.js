/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: "'Sora', sans-serif",
        Outfit: "'Outfit', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
