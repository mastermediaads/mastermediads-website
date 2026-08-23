/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#06b6d4', // Primary Cyan
          600: '#0891b2', // Rich Cyan
          700: '#0e7490', // Deep Cyan
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        luxury: {
          white: '#ffffff',
          surface: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          cyanGlow: '#06b6d4',
          dark: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Alexandria', 'Tajawal', 'sans-serif'],
        heading: ['Alexandria', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(6, 182, 212, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'luxury-hover': '0 20px 40px -10px rgba(6, 182, 212, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'cyan-glow': '0 0 25px -3px rgba(6, 182, 212, 0.35)',
        'cyan-glow-lg': '0 0 40px -5px rgba(6, 182, 212, 0.45)',
        'card': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
