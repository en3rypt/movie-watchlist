module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      primary: '#00A1DF',
      secondary: '#A1E7FF',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      sans: 'Inter',
      kanit: ['Kanit', 'sans-serif']
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
