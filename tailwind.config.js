const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('@/images/main-bg.jpeg')",
        mainBgSm: "url('@/images/main-bg-sm.jpg')",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        saint: ['Mrs Saint Delafield', 'cursive'],
        tenor: ['Tenor Sans', 'sans-serif'],
      },
      colors: {
        darkGray: '#222',
        pink: '#d05278',
        lightBeige: '#fcedeae6',
        lightGreen: '#a3d2a2',
        lightPink: '#df839e',
        lightPurple: '#faf9ff',
      },
    },
  },
  plugins: [
    // require('@headlessui/tailwindcss'),

    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
