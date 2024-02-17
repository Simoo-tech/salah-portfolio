/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        color1: "#8c9185",
        color2: "#9b9e3c",
        color3: "#9a4e3d",
        color4: "#2f2d31",
      },
      keyframes: {
        rightLeft: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-25%)" },
        },
      },
      animation: {
        rightLeft: "rightLeft .7s linear infinite",
      },
    },
    screens: {
      xs: "0px",
      sm: "450px",
      md: "650px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1900px",
      "3xl": "2100px",
    },
    container: {
      padding: {
        xs: "1.5rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "5rem",
        xl: "10rem",
      },
    },
  },
};
