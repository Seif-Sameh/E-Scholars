/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        colors: {
          'indigo-500/20': 'rgba(99, 102, 241, 0.2)',
          'purple-500/30': 'rgba(139, 92, 246, 0.3)',
        },
        blur: {
          '2xl': '40px',
        },
    },
  },
  plugins: [],
}