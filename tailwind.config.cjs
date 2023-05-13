/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend: {
          colors:{
            'primary': '#000656',
            'secondary': '#913CD0',
          },
          borderRadius: {
            'c': '8px'
          },
          borderWidth: {
            'c': '1px'
          },
      }
  },
  plugins: []
};
