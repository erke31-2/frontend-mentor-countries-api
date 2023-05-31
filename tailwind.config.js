/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'mobile' : '375px'
      },
      colors : {
        'DarkBlue' : 'hsl(209, 23%, 22%)',
        'DarkBlueDark' : 'hsl(207, 26%, 17%)',
        'DarkBlueLight' : 'hsl(200, 15%, 8%)',
        'DarkGrayLight' : 'hsl(0, 0%, 52%)',
        'LightGrayLight' : 'hsl(0, 0%, 98%)',
        'White' : 'hsl(0, 0%, 100%)'
      },
      fontFamily:{
        'Nunito800': ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

