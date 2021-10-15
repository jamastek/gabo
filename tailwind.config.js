const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      lineHeight: {
        11: "3rem",
        12: "3.5rem",
      },
      fontSize: {
        tiny: "0.94rem",
      },
      colors: {
        blueGray: colors.blueGray,
        blue: {
          light: "#56CCF2",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
