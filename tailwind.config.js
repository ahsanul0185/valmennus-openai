/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#171717",
        light : "#878787"
      },
      screens: {
        'xs': '470px',    
        'sm': '640px',    
        'md': '835px',    
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1536px', 
        '3xl': '1920px'   
      }
    },
  },
  plugins: [],
}