/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        darkGray: "#242424",
        gray: "#D9D9D9",
        white: "#FFFFFF",
        accent: "#4EE1A0",
      },
    },
  },
  plugins: [],
};
