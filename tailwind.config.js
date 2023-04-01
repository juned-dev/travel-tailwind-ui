/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "1240px",
        },
        padding: "1rem",
        center: true,
      },
      fontFamily: {
        "DM-sans": ["'DM Sans', sans-serif"],
      },

      backgroundImage: {
        "hero-img": "url('../images/hero-image.svg')",
        "hp-hero-img": "url('../images/hp-coast-house-view.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
