/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#09090d', panel: '#121219', purple: '#8b5cf6', lime: '#b8f35a' },
    fontFamily: { sans: ['Heebo', 'Arial', 'sans-serif'] } } },
  plugins: []
}