/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3C5D',
        secondary: '#1F6FB2',
        accent: '#B30000',
        bgLight: '#F4F6F8',
        textDark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'serif'],
      }
    },
  },
  plugins: [],
}
