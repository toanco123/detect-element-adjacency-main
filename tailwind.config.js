module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
