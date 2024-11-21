/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          900: '#4C1D95',
          800: '#5B21B6',
          700: '#6D28D9',
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
        'sugar': {
          DEFAULT: '#FFB5CC',
          light: '#FFC8D9',
          dark: '#FF94B3',
          50: '#FFF0F4',
          100: '#FFE1EA',
          200: '#FFC8D9',
          300: '#FFB5CC',
          400: '#FF94B3',
          500: '#FF739A',
          600: '#FF5281',
          700: '#FF3168',
          800: '#FF104F',
          900: '#E60036',
        },
      },
    },
  },
  plugins: [],
}
