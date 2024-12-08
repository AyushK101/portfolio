/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'back': '#151312',
        'navbar': '#1C1A19'
      }
    },
  },
  plugins: [],
}

