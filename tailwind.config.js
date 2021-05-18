module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'momondo': '#21033a',
      'sideBar': '#130026'
    }),
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       'content': '1fr 3fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
