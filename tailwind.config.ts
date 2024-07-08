import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        standard: "1440px",
      },
      colors: {
        primary: {
          "50": "#f4f9f9",
          "100": "#dbecea",
          "200": "#b7d8d7",
          "300": "#8abebd",
          "400": "#67a1a2",
          "500": "#488284",
          "600": "#386669",
          "700": "#305355",
          "800": "#294446",
          "900": "#26393b",
          "950": "#121f21",
        },
        secondary: {
          "50": "#f7f7f7",
          "100": "#f0f0f0",
          "200": "#e3e3e3",
          "300": "#d1d1d1",
          "400": "#c3c3c3",
          "500": "#aaaaaa",
          "600": "#969696",
          "700": "#818181",
          "800": "#6a6a6a",
          "900": "#585858",
          "950": "#333333",
        },
        tertiary: {},
      },
    },
  },
  plugins: [],
};
export default config;
