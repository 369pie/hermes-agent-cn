import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midground: 'var(--midground)',
        'midground-base': 'var(--midground-base)',
        background: 'var(--background)',
        'background-base': 'var(--background-base)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'var(--font-noto-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
