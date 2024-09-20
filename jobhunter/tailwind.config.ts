import type { Config } from 'tailwindcss'
import daisyui from "daisyui"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-grey-text': '#515B6F',
        'steel-blue': '#4D7EA8',
        'raisin-black': '#202430',
        'celestial-blue': '#26A4FF',
        'lavender': '#D6DDEB',
      }
    },
  },
  plugins: [
    daisyui
  ],
}

export default config
