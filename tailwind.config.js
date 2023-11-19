/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37BBEC",
        secondary: "#244E6C",
        lightPrimary: "#fff",
        lightSecondary: "#9a9898",
        darkPrimary: "#151718",
        darkSecondary: "#202425",
        darkTerciary: "#131515",
        gamerRed: "#FF006B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fogBlueLeft: {
          "0%": {
            opacity: 1,
            transform: "translateY(0) scaleY(1) tranlateX(0)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(-8%) scaleY(1.02) translateX(-10%)",
          },
        },
        fogBlueRight: {
          "0%": {
            opacity: 1,
            transform: "translateY(0) scaleY(1) tranlateX(0)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(-8%) scaleY(1.02) translateX(10%)",
          },
        },
        fogWhite: {
          "0%": {
            opacity: 1,
            transform: "translateY(0) scaleY(1)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(-10%) scaleY(1.05)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
