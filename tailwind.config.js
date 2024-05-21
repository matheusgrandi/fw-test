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
        gray100: '#F3F4F6',
        gray400: '#D1D5DB',
        gray500: '#6B7280',
        gray700: '#374151',
        gray900: '#1F2937',
        yellow: '#FDE047',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
