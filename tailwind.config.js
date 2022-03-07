module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-orangeColor", "bg-purpleColor", "bg-redPink", "bg-cyanColor", "bg-greenColor"],
  theme: {
    extend: {
      fontFamily: {
        bolder: ["bold"],
        text: ["text"],
        // poppins: ["body, sans-serif"],
      },
      colors: {
        whitesmoke: "#F3F4F5",
        orangeColor: "#ffc700",
        purpleColor: "#8F00FF",
        redPink: "#FF007A",
        cyanColor: "#00F0FF",
        greenColor: "#ADFF00",
      },
      backgroundImage: {
        IntroPatternPhone: "url(/src/Assets/phoneBg.svg)",
        IntroPatternScreen: "url(/src/Assets/screenBg.svg)",
        QuoteBgPattern: "url(/src/Assets/quoteBg.svg)",
        Polygon: "url(/src/Assets/Polygon.png)",
        polygonScatter: "url(/src/Assets/polygonScatter.png)",
        featuresBg: "url(/src/Assets/featuresBg.png)",
        TeamBgGradient: "url(/src/Assets/TeamGradient.svg)",
        Team: "url(/src/Assets/blurry.png)",
      },
    },
  },
  plugins: [],
};
