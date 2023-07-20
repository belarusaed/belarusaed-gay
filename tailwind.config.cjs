const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        gay: 'url("/gay.jpg")',
        'gradient-belarus':
          'linear-gradient(to top, rgba(255,255,255,1), calc(100%/3), rgba(204,0,0,1) calc(100%/3), rgba(204,0,0,1) calc(100%/3*2), rgba(255,255,255,1) calc(100%/3*2))'
      },
      fontFamily: {
        'sans': ['Noto Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
