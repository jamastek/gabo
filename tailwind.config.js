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
    container: {
      center: true,
      padding: "1.5rem"
    }
  },
  variants: {},
  plugins: [],
}
