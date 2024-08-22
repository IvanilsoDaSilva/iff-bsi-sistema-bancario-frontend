/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF00FF",
        secondary: "#FFFFFF",
        tertiary: "#111827",
        quarter: "#374151",
      },
      backgroundImage: {
        admin: "url('/src/assets/img/admin-banner.png')",
        client: "url('/src/assets/img/client-banner.png')",
      },
      keyframes: {
        fall: {
          "0%": { transform: "rotate(0deg) translateY(0px)" },
          "4%": { transform: "rotate(20deg) translateY(10px)" },

          "100%": { transform: " translateY(500px)" },
        },
        "rotate-z": {
          "0%": { transform: "rotate(-10deg)" },

          "100%": { transform: "rotate(-10deg)" },
        },
        "scale": {
          "0%": { transform: "scale(1.10)" },

          "100%": { transform: "scale(1.10)" },
        },
        "top-down": {
          "0%": { transform: "translateY(-100px)" },

          "100%": { transform: "translateY(0px)" },
        },
        "down-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "left-right-bouce": {
          "0%": { transform: "translateX(-600px)" },
          "60%": { transform: "translateX(0px)" },
          "70%": { transform: "translateX(-30px)" },
          "80%": { transform: "translateX(0px)" },
          "90%": { transform: "translateX(-15px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "right-left-bouce": {
          "0%": { transform: "translateX(600px)" },
          "60%": { transform: "translateX(0px)" },
          "70%": { transform: "translateX(30px)" },
          "80%": { transform: "translateX(0px)" },
          "90%": { transform: "translateX(15px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "left-right": {
          "0%": { transform: "translateX(-500px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "right-left": {
          "0%": { transform: "translateX(500px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        fall: "fall 3s linear",
        "rotate-z": "rotate-z 0.1s linear infinite",
        "scale": "scale 0.1s linear infinite",
        "top-down": "top-down 0.5s linear",
        "down-top": "down-top 0.5s linear",
        "left-right-bouce": "left-right-bouce 1s linear",
        "right-left-bouce": "right-left-bouce 1s linear",
        "left-right-50": "left-right 0.5s linear",
        "left-right-100": "left-right 0.9s linear",
        "left-right-200": "left-right 1s linear",
        "left-right-300": "left-right 1.1s linear",
        "left-right-400": "left-right 1.2s linear",
        "left-right-500": "left-right 1.3s linear",
        "left-right-600": "left-right 1.4s linear",
        "left-right-700": "left-right 1.5s linear",
      },
    },
  },
  plugins: [],
};
