const colors = {
  'primary': {
    '50': '#f5f5f9',
    '100': '#eaeaf3',
    '200': '#cccce1',
    '300': '#adadcf',
    '400': '#6f6faa',
    '500': '#313186',
    '600': '#2c2c79',
    '700': '#252565',
    '800': '#1d1d50',
    '900': '#181842'
  },
  'orange' : '#FF9A00'
}
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      maxWidth: {
        container: '1232px',
      },
      // fontFamily: {
      //   sans: 'Sarabun, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      // },
      colors: {
        ...colors
      },
    },
  },
};
