/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deadmatte: "#0a0a0a", // deep black background
        institutional: "#f5f5f5" // high contrast white
      },
      fontFamily: {
        brutalist: ['Inter', 'Impact', 'Arial Black', 'sans-serif'], // High impact brutalist stack
      }
    },
  },
  plugins: [],
}
