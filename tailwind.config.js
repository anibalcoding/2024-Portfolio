/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e2f8ff',
          100: '#b3e5ff',
          400: '#61dafb',
          600: '#0a61ae',
          700: '#084a8a',
          800: '#0a61ae',
          900: '#00112c',
        },
        secondary: {
          50: '#fffbe6',
          100: '#fff7cc',
          400: '#ffda4b',
          500: '#ffd100',
          600: '#ffc800',
          700: '#e6b400',
          800: '#8b6f00',
        },
        accent: {
          50: '#C5EFCB',
          100: '#A8E5B0',
          400: '#9BE0A3',
          600: '#758173',
        },
        dark: '#020402',
        background: '#00112c',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
