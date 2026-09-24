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
          bg: '#0A0A0A',
          surface: '#111111',
          card: '#161618',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.2)',
          muted: '#A1A1AA',
          text: '#F5F5F5',
        },
        accent: {
          DEFAULT: '#CCFF00', // Electric Lime / Acid Green
          glow: 'rgba(204, 255, 0, 0.25)',
          muted: 'rgba(204, 255, 0, 0.1)',
          cyan: '#00F0FF',
          blue: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(204, 255, 0, 0.2))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(204, 255, 0, 0.6))' }
        }
      }
    },
  },
  plugins: [],
}
