/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      "3/4": "70vh",
    },
    extend: {
      width: {
        1000: "900px",
      },
      fontFamily: {
        gotham: ['"Gotham"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
