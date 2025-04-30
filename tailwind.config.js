/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js",
    "./css/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41c1ba',
        secondary: '#41c1ba',
        accent: '#f59e0b',
        dark: '#1e293b',
        light: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        heading: ['Comfortaa', 'cursive'],
        body: ['Montserrat', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      borderRadius: {
        'none': '0px',
        'sm': '8px',
        DEFAULT: '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
        'full': '9999px',
        'button': '12px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 