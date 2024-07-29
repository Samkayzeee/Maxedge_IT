/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        '56':'56px'
      },
      width:{
        '30':'30%'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

