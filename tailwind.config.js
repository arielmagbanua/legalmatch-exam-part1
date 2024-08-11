const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      'xxs': '375px',
      '2xxs': '360px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

