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
        primary: '#388E3C',
        secondary:'#E8F5E9',
        background:'#fff'
      }
    },
  },
  plugins: [],
}