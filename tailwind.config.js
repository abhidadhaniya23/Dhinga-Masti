module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bolder: ["bold"],
        text: ["text"],
        // poppins: ["body, sans-serif"],
      },
      colors: {
        whitesmoke: ["#F3F4F5"],
      },
      backgroundImage: {
        IntroPatternPhone: "url(/src/Assets/phoneBg.svg)",
        IntroPatternScreen: "url(/src/Assets/screenBg.svg)",
        QuoteBgPattern: "url(/src/Assets/quoteBg.svg)",
        Polygon:"url(/src/Assets/Polygon.png)",
        polygonScatter:"url(/src/Assets/polygonScatter.png)",
        TeamBgGradient:"url(/src/Assets/TeamGradient.svg)",
      },
    },
  },
  plugins: [],
};
