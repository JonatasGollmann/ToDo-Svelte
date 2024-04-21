/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'shamrock': {
          '50': '#edfcf4',
          '100': '#d4f7e2',
          '200': '#aceeca',
          '300': '#5ad89b',
          '400': '#3fc88a',
          '500': '#1cad70',
          '600': '#0f8c5a',
          '700': '#0c704b',
          '800': '#0c593c',
          '900': '#0b4934',
          '950': '#05291d',
      },
      
      },fontFamily:{
        body: ['Work Sans']
      }
    }
  },
  plugins: []
};