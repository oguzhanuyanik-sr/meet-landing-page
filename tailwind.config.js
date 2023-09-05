/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1921px',
    },
    colors: {
      blue: '#4D96A9',
      softBlue: '#71C0D4',
      lightBlue: '#8FE3F9',
      ghostBlue: 'rgba(77, 150, 169, 0.7)',
      purple: '#855FB1',
      softPurple: '#B18BDD',
      lightPurple: '#D9B8FF',
      gray: '#28283D',
      lightGray: '#87879D',
      white: '#FAFAFA'
    },
    fontFamily: {
      redHat: ['Red Hat Display', 'sans-serif'],
    },
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1921px',
      },
    },
  },
  plugins: [],
};