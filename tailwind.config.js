export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        paper: '#F8F5EF',
        sand: '#EEE6D8',
        line: '#E3DACB',
        muted: '#6A6358',
        teal: {
          DEFAULT: '#237B7D',
          dark: '#1A5F61',
          light: '#E1EFEE',
          bright: '#3AA6A8',
        },
        tan: {
          DEFAULT: '#9A7550',
          light: '#D9C2A3',
        },
      },
      fontFamily: {
        sans: ['Cabin', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Cabin', 'sans-serif'],
      },
      transitionTimingFunction: {
        snap: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
