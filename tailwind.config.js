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
        IntroPattern: "url(/src/Assets/IntroSvg.svg)",
      },
    },
  },
  plugins: [],
};
