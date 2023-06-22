/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cost-white' : '#fafafb',
        'cost-blue' : '#f6f8fb',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(cost-white|cost-blue)/,
    }
  ]
}

