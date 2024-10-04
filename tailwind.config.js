/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#ffffcc',
        paleYellow: '#ffffc7',
        softYellow: '#ffffc4',
        creamYellow: '#ffffca',
        offWhiteYellow: '#ffffcd',
        lightGray: '#c9cacb',
        deepGrayBrown: '#625757',
        tealGreen: '#4d9a8f',
        mutedGray: '#a6a4a3',
        lightGrayishBeige: '#aeaaa6',
        oliveGreen: '#95802c',
        earthyBrown: '#99702b',
        darkRed: '#c03230',
        brightRed: '#e63e2c',
        orangeRed: '#f84a27',
        fieryOrange: '#f84e29',
        crimsonRed: '#ea452b',
        rubyRed: '#d43529',
        deepBurgundy: '#a52828',
        burntOrange: '#b65824'
      },
    },
  },
  plugins: [],
}
