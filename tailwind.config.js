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
        primary: '#0891b2',
        secondary:'#e0f2fe',
        background:'#fff9ff'
      }
    },
  },
  plugins: [],
}