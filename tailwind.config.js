/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-orange': '#FF4800',
        'primary-black': '#333',
        'primary-white': '#ededed',
        'secondary-white': '#fefefe'
      },
      spacing: {
        "responsive-padding-x": 'calc(1rem + (5 - 1) * ((100vw - 20rem) / (100 - 20)))',
        "responsive-padding-y": 'calc(2rem + (4 - 2) * ((100vw - 20rem) / (100 - 20)))',
      },
      screens: {
        "xs": "425px",
      },
    },
  },
  plugins: [],
};
