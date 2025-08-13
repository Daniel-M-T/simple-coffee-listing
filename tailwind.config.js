/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111315',
        'accent': '#F6C768',
        'text-secondary': '#6F757C',
        'text-primary': '#FEF7EE',
        'available': '#BEE3CC',
        'sold-out': '#ED735D',
        'card-bg': '#1B1D1F',
        'card-text': '#FEF7EE',
        'card-secondary': '#4D5562',
        'card-tertiary': '#302522'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'heading': ['2rem', {
          fontWeight: '600',
          lineHeight: '1.2',
        }],
        'body': ['1rem', {
          lineHeight: '1.5',
        }],
        'label': ['0.875rem', {
          fontWeight: '600',
          lineHeight: '1.4',
        }],
        'small': ['0.625rem', {
          lineHeight: '1.2',
          letterSpacing: '0.05em',
        }],
      }
    },
  },
  plugins: [],
}