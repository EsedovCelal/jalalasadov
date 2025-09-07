/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/container/**/*.{jsx,ts,tsx}", "./src/**/*.{jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
