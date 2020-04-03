module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'raklet-yellow':'#FFD200',
      'raklet-yellow-dark':'#d9b300',
      'raklet-blue':'#8dd2fa',
      'raklet-light-grey':'#f7f8fe'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'raklet-blue':'#8dd2fa'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'raklet-blue':'#1c6ed4'
    }),
    screens: {
      'sm': '320px',

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {},
  plugins: [],
}
