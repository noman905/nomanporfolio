

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",], // Adjust paths based on your project
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Adding Poppins
        inter: ["Inter", "sans-serif"], // Adding Inter
      },
    },
  },
  plugins: [],
};
