/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" }, // match your bg-size for smooth repeat
        },
      },
      animation: {
        bgmove: "bgmove 40s infinite",
      },
    },
  },
  plugins: [],
};
