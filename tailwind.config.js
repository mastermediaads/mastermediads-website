/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Master Media Cyan & Electric Blue Spectrum
        electric: {
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0066FF',
          700: '#0052FF',
          800: '#1D4ED8',
          900: '#1E3A8A',
        },
        cyanGlow: {
          50: '#F0FDFF',
          100: '#E0F9FE',
          200: '#BAF3FD',
          300: '#7CE7FB',
          400: '#38BDF8',
          500: '#00F0FF',
          600: '#06B6D4',
          700: '#0891B2',
          800: '#0E7490',
          900: '#155E75',
        },
        // Deep obsidian midnight base
        deep: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          800: '#0B132B',
          850: '#091024',
          900: '#060B18',
          950: '#030712',
        },
        // Liquid glass backdrop surfaces
        glass: {
          surface: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.12)',
          borderHover: 'rgba(0, 240, 255, 0.35)',
          glow: 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Alexandria', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Alexandria', 'Cairo', 'sans-serif'],
        mono: ['Plus Jakarta Sans', 'monospace'],
      },
      boxShadow: {
        'liquid-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'liquid-hover': '0 16px 48px 0 rgba(0, 102, 255, 0.25), inset 0 1px 2px 0 rgba(255, 255, 255, 0.3)',
        'cyan-glow': '0 0 35px -5px rgba(0, 240, 255, 0.4)',
        'electric-glow': '0 0 45px -5px rgba(0, 102, 255, 0.5)',
        'glass-button': '0 4px 20px -2px rgba(0, 102, 255, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'refraction-shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
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
