/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF5EB',
          200: '#F4E7CE',
          300: '#E8D4A6',
          400: '#D7BB7B',
          500: '#C5A059',
          600: '#A37E3B',
          700: '#7E5F28',
          800: '#5F461D',
          900: '#433114',
        },
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE4E8',
          200: '#F9C4CD',
          300: '#F394A5',
          400: '#E75874',
          500: '#C52B4D',
          600: '#A11F3C',
          700: '#8B263E',
          800: '#69182C',
          900: '#4A121F',
        },
        royalPurple: {
          50: '#F7F4FA',
          100: '#EEE6F4',
          500: '#7E529B',
          700: '#593275',
          900: '#3A1E4F',
        },
        warmCream: '#FAF7F2',
        darkEbony: '#2C2623'
      },
      fontFamily: {
        script: ['Alex Brush', 'Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
