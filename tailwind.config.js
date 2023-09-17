/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./app.js', './routes/**/*.js', './views/**/*.ejs', './public/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

