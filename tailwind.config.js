/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      darkcyan: '#3c8067',
      cream: '#f2ebe3',
      veryDarkBlue: '#1c232b',
      darkGrayishBlue: '#6c7289',
      white: '#ffffff'
    },
    fontFamily: {
      fraunces: 'Fraunces, serif',
      montserrat: 'Montserrat, sans-serif'
    },
    fontWeight: {
      medium: '500',
      bold: '700',
    }
  },
  plugins: [],
}
