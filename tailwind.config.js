/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        section1Bg1: "url('/src/assets/images/section1/sm_background.png')",
        section1Bg2: "url('/src/assets/images/section1/big_background.png')",
        section6: "url('/src/assets/images/section6/background.png')",
      },
      colors: {
        primary: "#3B52FF",
        text_black: "#0B1223",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
