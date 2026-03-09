/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'divine-primary': '#6B46C1', // Purple for ethereal AI vibe
        'divine-accent': '#0785c4', // Blue glow for highlights
        'divine-bg-dark': '#1A202C',
        'divine-bg-light': '#F7FAFC',
      },
      animation: {
        'aura-pulse': 'aura-pulse 2s infinite',
        'neural-fade': 'neural-fade 1.5s ease-in-out',
      },
      keyframes: {
        'aura-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'neural-fade': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // For theme toggle
};