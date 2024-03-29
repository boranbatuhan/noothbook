/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  mode : "jit",
  darkMode:"class",
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'hwri':["hwri"],
        'zai':["zai"],
        'soAu':["soAu"]
      }
    },
  },
  plugins: [],
}
