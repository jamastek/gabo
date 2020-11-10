module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: "all",
    content: [
      './src/**/*.jsx',
      './src/**/*.tsx',
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
