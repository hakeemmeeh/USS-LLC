import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C2D6E',
          dark: '#141F4E',
          mid: '#2A3F8F',
          light: '#E8EBF8',
        },
        accent: {
          DEFAULT: '#E8A020',
          dark: '#C4871A',
          light: '#FEF5E6',
        },
        surface: '#F8F9FF',
        'text-dark': '#0F1A3E',
        'text-mid': '#2D3F6B',
        'text-muted': '#5A6A8A',
        border: '#D0D8F0',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(20, 31, 78, 0.08), 0 2px 6px -2px rgba(20, 31, 78, 0.04)',
        'soft-lg': '0 18px 48px -16px rgba(20, 31, 78, 0.18), 0 6px 16px -8px rgba(20, 31, 78, 0.08)',
        'soft-xl': '0 32px 80px -24px rgba(20, 31, 78, 0.24), 0 10px 24px -8px rgba(20, 31, 78, 0.12)',
      },
      letterSpacing: {
        'eyebrow': '0.16em',
      },
    },
  },
  plugins: [],
};

export default config;
