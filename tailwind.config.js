module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-orangeColor", "text-orangeColor", "group-hover:text-orangeColor", "hover:bg-orangeColor/10", "bg-purpleColor", "text-purpleColor", "group-hover:text-purpleColor", "hover:bg-purpleColor/10", "bg-redPink", "text-redPink", "group-hover:text-redPink", "hover:bg-redPink/10", "bg-cyanColor", "text-cyanColor", "group-hover:text-cyanColor", "hover:bg-cyanColor/10", "bg-greenColor", "text-greenColor", "group-hover:text-greenColor", "hover:bg-greenColor/10"],
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
