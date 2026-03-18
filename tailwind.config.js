/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#050B14',
        panel:   '#0D1B2E',
        panel2:  '#0F2040',
        cyan:    '#00D9FF',
        cyan2:   '#00FFCC',
        green:   '#00FF88',
        purple:  '#7B5EA7',
        purple2: '#9D7FD4',
        muted:   '#4A6480',
        white2:  '#A8C4D8',
      },
      fontFamily: {
        mono:    ['"JetBrains Mono"', 'monospace'],
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}