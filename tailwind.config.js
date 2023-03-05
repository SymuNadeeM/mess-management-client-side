/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Roboto Condensed", "sans-serif"],
        Robbi: ["Poppins", "sans-serif"],
        jose: ["Josefin Sans", "sans-serif"],
        logo: ["'Julee', cursive", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        archivo2: ["Archivo Narrow", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Images/ding2.jpg')",
      },
      colors: {
        current: "currentColor",
        maintext: "#000000de",
        bgdshb: "#222a45",
        icon: "#8990a2",
        black: "#000000",
        white: "#fff",
        black2: "#181823",
        black3: "#20262E",
        blackbg: "#03001C",
        green: "#7AC751",
        green2: "#2fbf71",
        btnbg: "#dd2476",
        text1: "#73777B",
        text2: "#181D31",

        dtext1: "#B2B2B2",
      },
    },
  },
  plugins: [],
};
