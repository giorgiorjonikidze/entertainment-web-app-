/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      outfit: ["outfit"],
    },
    screens: {
      md: "768px",
      xl: "1440px"
    },
    colors: {
      "red": "#FC4747",
      "dark-blue": "#5A698F",
      "grey": "#5A698F",
      "blue": "#161D2F",
      "white": "#ffffff"
    }
  },
  plugins: [],
};
