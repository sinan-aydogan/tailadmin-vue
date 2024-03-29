module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'active' ,'focus'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
