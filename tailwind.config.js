module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bolder: ["bold"],
        text: ["text"],
        // poppins: ["body, sans-serif"],
      },
      backgroundImage: {
        IntroPatternPhone: "url(/src/Assets/phoneBg.svg)",
        IntroPatternScreen: "url(/src/Assets/screenBg.svg)",
      },
    },
  },
  plugins: [],
};
