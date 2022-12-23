/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    "./src/*.{js,vue}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tiny_mobile': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    
    fontSize: {
      xs: ['13px', '16px'],
      sm: ['14px', '20px'],
      tiny: ['16px', '24px'],
      double_tiny: ['32px', '42px'],
      base: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['56px', '72px'],
    },
    extend: {
      colors: {
        'base-text': '#666666',
      }
    },
  },
  plugins: [],
}
