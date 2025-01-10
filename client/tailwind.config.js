/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0099ff',

          secondary: '#006bff',

          accent: '#008c19',

          neutral: '#1e313b',

          'base-100': '#fcfcfc',

          info: '#00a3f4',

          success: '#00aa52',

          warning: '#ffb400',

          error: '#ff2154',
        },
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
}
