/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        primary: "#0F2137",
        secondary: "#8D448B" 
        
      }
    },
  },
  plugins: [],
}