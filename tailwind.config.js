/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agrandir: [
          "AgrandirRegular"
        ]
      },
      animation: {
        "slide-up": "slide-up 1s ease-in-out",
        "slide-down": "slide-down 1s ease-in-out",
        "slide-left": "slide-left 1s ease-in-out",
        "slide-right": "slide-right 1s ease-in-out",
        "slow-fade": "slow-fade 2.2s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          from: { opacity: 0, transform: "translateY(20%)" },
          to: { opacity: 1, transform: "none" },
        },
        "slide-down": {
          from: { opacity: 0, transform: "translateY(-20%)" },
          to: { opacity: 1, transform: "none" },
        },
        "slide-left": {
          from: { opacity: 0, transform: "translateX(-20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right": {
          from: { opacity: 0, transform: "translateX(20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slow-fade": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      screens: {
        "2xsmall": "416px",
        "xsmall": "450px",
        "small": "520px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
    },
  },
  plugins: [],
};
