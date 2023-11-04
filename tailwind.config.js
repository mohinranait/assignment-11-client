/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    container:{
      center:true,
    },
    extend: {
      animation:{
        blob:"blob 1s infinite "
      },
      keyframes:{
        blob:{
          '0%':{
            transform: "scale(1.1)",
            opacity : '7',
          },"33%":{
            transform: "scale(1.5)",
            opacity: '5',
          },"50%":{
            transform: "scale(2)",
            opacity : "3",
          }, "100%":{
            transform: "scale(2.5)",
            opacity: '1',
          }
        }
      },
      colors:{
        dark: '#192335',
      },
      fontFamily:{
        primary:['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

