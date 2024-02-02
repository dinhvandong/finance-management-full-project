/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibriLight: ['Courier New', 'sans-serif'],
      },
      colors: {
        delete: '#ff4d4f',
        edit: '#1890ff',
        insert: '#83d76b',

      },
    },
  },
  plugins: [],
}