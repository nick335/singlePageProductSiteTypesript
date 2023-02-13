/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: 'hsl(219, 9%, 45%)',
        primaryBg: 'hsl(0, 0%, 100%)',
        primaryHighlight: 'hsl(25, 100%, 94%)',
        secondaryHighlight: 'hsl(26, 100%, 55%)',
        secondaryText: 'hsl(220, 13%, 13%)',
        boxbg: 'hsl(223, 64%, 98%)',
        cancel: 'hsl(220, 14%, 75%)',
      },
      keyframes: {
        comeout: {
          '0%' : { left: '-70%' },
          '100%' : { left: '0%' }
        },
        goout: {
          '0%' : { left: '0%' },
          '100%' : { left: '-70%' }
        },
       },
      boxShadow: {
        '3xl': ' 2px 6px 5px 0px rgba(255,237,224, 0.5)'
      }
    },
    

  },
  plugins: [],
}
