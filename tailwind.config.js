module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      primary: '#00A1DF',
      secondary: '#A1E7FF',
      gradient1l: '#00D2FF',
      gradient1r: '#3A7BD5',
      gradient2l: '#00F5A0',
      gradient2r: '#00D9F5',
      dark: '#0E37A3',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      sans: 'Inter',
      kanit: ['Kanit', 'sans-serif']
    },
    extend: {
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar-hide')]
}
