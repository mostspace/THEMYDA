/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0C0724",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        montMedium: ["Montserrat-Medium", "sans-serif"],
        montBold: ["Montserrat-Bold", "sans-serif"],
        montSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        montExtraBold: ["Montserrat-ExtraBold", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};