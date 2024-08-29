/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ecd0a0",
        buttonborder:"#5a1c81"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
