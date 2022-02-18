module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      gray: '#D3DEDC',
      darkGray: '#6B7280',
      font: '#0099FF',
      primary: '#00A1DF',
      secondary: '#A1E7FF',
      gradient1l: '#00D2FF',
      gradient1r: '#3A7BD5',
      gradient2l: '#00F5A0',
      gradient2r: '#00D9F5',
      gradient3l: '#0CEBEB',
      gradient3m: '#20E3B2',
      gradient3r: '#29FFC6',
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
        xs: '480px',
        ml: '955px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar-hide')]
}
