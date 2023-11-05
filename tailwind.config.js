/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/renderer/src/**/*.jsx"
  ],
  theme: {
    extend: {
      backgrundImage: {
        'orange-gradient': "url('./OrangeGradient2.svg')"
      },
      colors: {
        orange1: '#d14545',
        orange2: '#ffd045',
        white: "ffffff"
      }
    },
    textColor: {
      orange: "#e85617",
    },
    fontFamily: {
      'sans': 'Roboto'
    },

  },
  plugins: [],
}

