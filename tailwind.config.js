/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
          // use hyphen
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 1s ease-in-out",
      },
    },
  },
  safelist: ["animate-fade-in-left"],
  plugins: [],
  darkMode: "class",
};
