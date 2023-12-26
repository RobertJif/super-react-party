/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yugioh: ["yugioh", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
  },
  plugins: [],
};
