/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // dark blue from memory/logo assumption
          light: '#3b82f6',
          dark: '#172554',
        },
        secondary: {
          DEFAULT: '#00AEC7', // Cyan/Teal from banner
        }
      }
    },
  },
  plugins: [],
}
