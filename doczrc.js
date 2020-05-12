import { css } from 'docz-plugin-css';

const FONT_FAMILY =
  '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif';

export default {
  name: 'Remember UI',
  description: 'Remember UI Components',
  base: '/remember-ui',
  src: './docsSrc',
  dest: './docs',
  themeConfig: {
    initialColorMode: 'light',
    showPlaygroundEditor: false,
    fonts: {
      monospace: FONT_FAMILY,
      heading: FONT_FAMILY,
      body: FONT_FAMILY,
    },
  },
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
};
