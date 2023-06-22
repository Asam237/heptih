/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      // Create our own container component
      // and ask tailwind to take it into account.
      addComponents({
        ".container": {
          maxWidth: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "85vw",
          },
          "@screen xl": {
            maxWidth: "1380px",
          },
        },
        ".container-other": {
          maxWidth: "98vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "92vw",
          },
          "@screen xl": {
            maxWidth: "1380px",
          },
        },
      });
    },
  ],
};
