const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.nautral,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
      backdropFilter: {}, // Enable backdrop-filter feature
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // Add responsive variant for backdrop-filter
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
