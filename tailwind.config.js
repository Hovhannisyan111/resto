/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans 3', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7D2E46', // Burgundy
          light: '#A54B66',
          dark: '#5A1C31',
        },
        secondary: {
          DEFAULT: '#F2E8DC', // Beige
          light: '#FBF5EE',
          dark: '#D8C9B8',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E9CD6D',
          dark: '#A58829',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};