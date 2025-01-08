/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // 確保包含 Vue 文件
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

