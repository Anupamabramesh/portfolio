/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-light': '#8aa3ea',
        'ai-dark': '#1e293b',
        'ai-purple': '#7c3aed',
        'ai-blue': '#0ea5e9',
        'ai-pink': '#482a39',
        'divine-primary': '#7c3aed',
        'divine-accent': '#0ea5e9',
        'divine-bg-dark': '#1e293b',
        'divine-bg-light': '#adaeb3',
      },
      animation: {
        'aura-pulse': 'aura-pulse 2s infinite',
        'neural-fade': 'neural-fade 1.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
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
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

