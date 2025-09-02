/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeİnleft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 1s ease-in-out",
      },
    },
  },
  safelist: [
    "animate-fade-in-left",
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
  ],
  plugins: [],
};
