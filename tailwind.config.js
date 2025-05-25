/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sushi: {
          primary: "#8B0000",
          secondary: "#eab308",
          accent: "#5c8374",
          neutral: "#1c1c1c",
          "base-100": "#faf4ed",
          "base-200": "#f0eae3",
          "base-300": "#e2dbd0",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
