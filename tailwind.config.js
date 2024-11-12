/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#3E92CC',
        background: '#FFFAFF',
        accent: '#D8315B',
        dark: '#0C1618'
      },
    },
  },
  plugins: [],
}

