/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grayish: '#D6DBDC',
        'sn-dark': '#293e40',
        'sn-light': '#80b6a1',
        'sn-light-100': '#9DE0C6',
        'sn-light-300': '#65907F',
        'sn-light-500': '#54786A',
        'sn-light-700': '#334941',
        'deep-blue': '#334155',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin.cjs'),
    require("flowbite/plugin"),
  ],
};
