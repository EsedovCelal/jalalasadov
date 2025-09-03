/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js", // 👈 include this
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
