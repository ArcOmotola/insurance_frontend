module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor : "#F7F9FF",
        backgroundColor2: '#F3F5FC',
        buttonColor: '#2054D2',
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "full/10": "10%",
        "full/90": "90%",

      },
    },
    // colors: {
    //   backgroundColor : "#F7F9FF",
    // }
  },
  plugins: [],
}
