const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "./src/**/*.{ts,tsx}")],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#4be2ff",
        sub: "#ff4b4b",
      },
    },
  },
  plugins: [],
};
