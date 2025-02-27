/** @type {import('tailwindcss').Config} */

const lightTheme = {
  myTheme: {
    primary: '#E2D46B',

    secondary: '#6C8CBF',

    accent: '#97D7C6',

    neutral: '#0a1e06',

    'base-100': '#fffbff',

    info: '#44bcff',

    success: '#63b31f',

    warning: '#ed2500',

    error: '#ff4366',
  },
}
const darkTheme = {
  myTheme: {
    primary: '#E2D46B',

    secondary: '#6C8CBF',

    accent: '#97D7C6',

    neutral: '#0a1e06',

    'base-100': '#1f2937',

    info: '#44bcff',

    success: '#63b31f',

    warning: '#ed2500',

    error: '#ff4366',
  },
}
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [lightTheme],
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
}
