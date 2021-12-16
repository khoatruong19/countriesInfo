module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primary" : "hsl(0, 0%, 100%)",
        "lightBg" : "hsl(0, 0%, 98%)",
        "lightText" : "hsl(200, 15%, 8%)",
        "input" : "hsl(0, 0%, 52%)"
      },
      screens: {
        'xs': '280px',
      },
      width: {
        '120' : '30rem',
        '128': '32rem',
        '130': '33rem',
        '132': '35rem',
        '134': '37rem',
      },
      height: {
        '116': '28rem',
        '120' : '30rem',
        '128': '32rem',
        '130': '33rem',
        '132': '35rem',
        '134': '37rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
