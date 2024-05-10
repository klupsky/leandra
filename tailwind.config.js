/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        white: {
          DEFAULT: '#fafafa',
        },
        red: {
          DEFAULT: '#eb5b2a',
        },
        blue: {
          DEFAULT: '#00305b',
        },
        green: {
          DEFAULT: '#d7da26',
        },
      },
    },
  },
  plugins: [],
};
