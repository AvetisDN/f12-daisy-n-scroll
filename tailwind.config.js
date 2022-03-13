module.exports = {
  content: ["./src/**/*.{svelte,js,css}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
