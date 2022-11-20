/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    'xsm':'400px',
    sm:'640px',
    md:'768px',
    lg:'1024px',
    xl:'1280px',
    '2xl':'1536px',

    extend: {
      // backgroundImage: {
      //   'coffee': "url('./src/assets/background.jpg')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // },
    
        colors: {
          strongCyan: 'hsl(171, 66%, 44%)',
          lightBlue: 'hsl(233, 100%, 69%)',
          darkGrayishBlue: 'hsl(210, 10%, 33%)',
          grayishBlue: 'hsl(201, 11%, 66%)',
        },
      
          fontFamily:{
            'burtons' : "burtons",
            'poppins': ['Poppins', 'sans-serif'],
            'Roboto_Mono': ['Roboto Mono', 'monospace'],
            'Gemini_Libre': ['Gemunu Libre', 'sans-serif'],
            sans: ['Bai Jamjuree', 'sans-serif'],
          },
          
      
      
      spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
        ,
        boxShadow:{
          'neon': '0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 40px #2196f3'
        }
    },
    
  },
  plugins: [
    
  ],
}