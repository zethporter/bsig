// /** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--pacifico-font)", ...fontFamily.serif],
        mono: ["var(--libre-bodono-font)", ...fontFamily.mono],
      },
    },
  },
  daisyui: {
    themes: [
      "dracula",
      {
        darkTheme: {
          primary: "#01e9d8",
          secondary: "#323838",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
};
