/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060a09',
          900: '#09110f',
          850: '#0d1715',
          800: '#121f1c',
          750: '#182824',
          700: '#1e322d',
        },
        emerald: {
          glow: '#10b981',
          accent: '#34d399',
          light: '#6ee7b7',
          mint: '#a7f3d0',
        },
        odoo: {
          purple: '#714B67',
          light: '#875A7B',
          dark: '#017E84',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(52, 211, 153, 0.15)',
        'glow-md': '0 0 25px -5px rgba(52, 211, 153, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(52, 211, 153, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
