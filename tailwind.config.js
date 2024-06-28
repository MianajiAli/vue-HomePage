module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': "MainFont",
      },
      colors: {
        primary: '#e61782',
        secondary:'#ffcce6',
        
      }
    },
  },
  plugins: [],
}