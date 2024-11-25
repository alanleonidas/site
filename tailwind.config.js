/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08212f',
        cobalto: '#0D47A1',
        secondary: '#08212f',
        amarelo_dourado: '#FFB300',
        amarelo_mostarda: '#FDD835',
        amarelo_vivo: '#FFC107',
      }
    },
  },
  plugins: [],
  corePlugins: {
    textJustify: true,
  },
}