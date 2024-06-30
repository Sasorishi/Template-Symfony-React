/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // ou 'media' ou 'class'
  content: ["./assets/**/*.jsx", "./templates/**/*.html.twig"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      height: ["responsive"],
    },
  },
  plugins: [],
};
