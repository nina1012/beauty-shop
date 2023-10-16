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
  plugins: [],
};
