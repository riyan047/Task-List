import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem', 
        center: true,
      },
      backgroundSize: {
        '200': '200% 100%',
      },
      animation: {
        'slide-bg': 'slide-bg 4s linear infinite',
      },
      keyframes: {
        'slide-bg': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        }
    },
  },
  },
  plugins: [],
};
export default config;
