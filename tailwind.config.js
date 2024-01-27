/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEB741',
        secondary: '#DF711B'
      }, fontFamily: {
        primary: ['Poppins']
      }
    },
  },
  plugins: [],
}

