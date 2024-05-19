/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {},
      colors: {
        primary: '#FDE047',
        secondary: '#374151',
        tertiary: '#1F2937',
        background: '#F3F4F6',
        black: '#000000',
        'gray-300': '#F3F4F6',
        'gray-700': '#374151',
        'gray-900': '#1F2937',
        yellow: '#FDE047',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
