const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        "purple": "#7868E6",
        "semi-purple": "#9d91ee",
        "gray": "#C4C4C4",
        "light-gray": "#F1F1F1",
        "semi-gray": "#B8B5FF",
        "light-blue": "#EDEEF7",
        "red": colors.red,
        "yellow" : colors.yellow,
      },
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
      },
      screens: {
        xs: "400px",
      },
      backgroundImage: (theme) => ({
        auth: "url('/src/assets/pictures/background.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
