/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      dropShadow:{
        'xl' : '0 35px 35px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}