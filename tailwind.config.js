/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blood: {
          400: '#ff3344',
          500: '#dc143c',
          600: '#b3001b',
          800: '#5a060e',
          900: '#2b0206',
        },
        gothic: {
          900: '#070304',
          950: '#030102',
        },
      },
      fontFamily: {
        gothic: ['Cinzel Decorative', 'Cinzel', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
