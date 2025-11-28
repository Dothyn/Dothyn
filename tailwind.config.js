/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class", // 支持 class 控制深色模式
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};