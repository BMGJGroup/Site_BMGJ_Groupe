/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        'blue-vif': '#2158C6',
        'blue-ciel': '#5FA8E0',
        'blue-ciel-dark': '#3A7BC8',
        'gris-clair': '#F4F6F9',
        'gris-moyen': '#6B7280',
        'gris-fonce': '#3D4552',
        'gris-border': '#8A93A3',
        success: '#2E9E6D',
        error: '#C0392B',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
