import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './scenes/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        nectar: '#ffbf3c',
        pollen: '#f97316',
        wax: '#fde68a',
        hive: '#1f2937'
      }
    }
  },
  plugins: []
} satisfies Config;
