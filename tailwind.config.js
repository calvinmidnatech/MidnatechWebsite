/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1e3a8a',
        'charcoal': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'Satoshi', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

