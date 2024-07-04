/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px', 
        'ml': '1140px',
        'lg': '1550px'
      },
    },
  },
  plugins: [],
}