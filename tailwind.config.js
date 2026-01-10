/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flat UI Colors - defo 팔레트
        flat: {
          'wet-asphalt': '#2c3e50',
          'clouds': '#ecf0f1',
          'peter-river': '#3498db',
          'alizarin': '#e74c3c',
          'concrete': '#95a5a6',
          'silver': '#bdc3c7',
          'midnight-blue': '#34495e',
          'turquoise': '#1abc9c',
          'emerald': '#2ecc71',
          'sun-flower': '#f1c40f',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}

