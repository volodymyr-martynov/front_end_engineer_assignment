import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        diamond: '#B9F2FF',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'scale-repeatedly': 'scale 1.5s infinite',
      },
      boxShadow: {
        medium: '0 5px 10px rgba(0, 0, 0, 0.7)',
        heavy: '0 5px 10px rgba(0, 0, 0, 1)',
        light: '0 5px 10px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
};
