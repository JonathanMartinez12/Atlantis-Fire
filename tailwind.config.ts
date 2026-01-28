import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#334073',
          50: '#E8EBF0',
          100: '#D1D6E1',
          200: '#A3ADC3',
          300: '#7584A5',
          400: '#475B87',
          500: '#334073',
          600: '#29335C',
          700: '#1F2645',
          800: '#151A2E',
          900: '#0A0D17',
        },
        coral: {
          DEFAULT: '#c73629',
          50: '#F9E6E4',
          100: '#F3CCC9',
          200: '#E79993',
          300: '#DB665D',
          400: '#CF3327',
          500: '#c73629',
          600: '#9F2B21',
          700: '#772019',
          800: '#501610',
          900: '#280B08',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#F0EADF',
          400: '#EBE3D4',
        },
        'brand-blue': {
          DEFAULT: '#698aba',
          light: '#80adde',
        },
        'brand-orange': '#e3ad3d',
        'brand-yellow': '#e3c93d',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        avenir: ['Avenir', 'Avenir Next', 'Nunito Sans', 'Helvetica Neue', 'sans-serif'],
        palatino: ['Palatino Linotype', 'Palatino', 'Book Antiqua', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
