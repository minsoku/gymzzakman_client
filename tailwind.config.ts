import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      textColor: ['checked']
    }
  },
  theme: {
    extend: {
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        '5': '5',
      },
      fill: {
        'custom-gray': '#9A9A9A',
        'custom-hover': '#FFFFFF',
      },
      colors: {
        "main": '#4AADFF',
        "background": '#F7F7F7',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};
export default config;
