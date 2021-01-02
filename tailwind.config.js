module.exports = {
  purge: {
    layers: ['utilities'],
    content: ['./src/**/*.vue',
      "./src/**/*.html",
      "./src/**/*.js"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'lm': { 'min': '1024px', 'max': '1279px' },
        'lx': { 'min': '1280px', 'max': '1535px' },
        'ms': { 'min': '530px', 'max': '848px' }
      },
      colors: {
        "luna-gray-100": "#EEEEEE",
        "luna-gray-200": "#A7A7A7",
        "luna-gray-300": "#363A41",
        "luna-gray-900": "#3A3A3A",
        "luna-orange-100": "#E89F71",
        "luna-gold": "#E9A426"
      },
      fontFamily: {
        'luna': ['Futura']
      },
      fontSize: {
        "luna-xs": ".6rem",
        "luna-sm": "11.38px",
        "luna-base": "12.65px",
        "luna-lg": "25.3px",
        "luna-xl": "37.95px"
      },
      spacing: {
        "18": "4.5rem",
        "33": "8.25rem",
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "148": "37rem",
        "152": "38rem",
        "176": "44rem"
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      boxShadow: {
        "luna-sm": "0 0 0 1px #cfd1d1"
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      transitionProperty: ['hover', 'focus'],
      cursor: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
      padding: ['hover', 'focus'],
    },
  },
  plugins: [],
}
