module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'bg-image': "url('./images/bbh-home.jpg')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}