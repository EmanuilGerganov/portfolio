const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibre", ...defaultTheme.fontFamily.sans],
        mono: ["SF Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "#e3f6f5",
        darkerBg: "#bae8e8",
        headline: "#272343",
        button: "#ffd803",
        darkModeBg: "#16161a",
        darkModeHead: "#fffffe",
        darkModeButton: "#7f5af0",
        darkModePar: "#94a1b2",
        primary: "#DFF2D8",
        secondary: "#C6DEA6",
        tertiary: "#7EBDC3",
        deepToupe: "#7A6263",
        sage: "#CED097",
      },
    },
  },
  plugins: [],
};
