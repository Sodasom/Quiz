/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SUIT", "sans-serif"],
      },
      boxShadow: {
        shadowBg: "0px 4px 16px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        point: "#008D97",
        base400: "#DEDEDE",
        correct: "#26D7AC",
        incorrect: "#EE675E",
        boxBg: "#F5F5F5",
        hover: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
