import { createStitches } from '@stitches/react';

export { type CSS } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      dark1: '#111727',
      dark2: '#292E3D',
      dark3: '#888B93',
      dark4: '#C3C3C4',
      light1: '#CFD1D4',
      light2: '#F8F8F8',
      light3: '#FCFCFD',
      light4: '#FFFFFF',
      darkGreen: '#12AB61',
      lightGreen: '#D7FFEC'
    },
    space: {
      0: '0rem'
    },
    fontSizes: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      md: '1rem' /* 16px */,
      lg: '1.125rem' /* 18px */,
      xl: '1.25rem' /* 20px */,
      xxl: '1.75rem' /* 28px */
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono' "
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    }
  },
  media: {
    bp1: '(max-width: 480px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 992px)'
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: any) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value: any) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: any) => ({ paddingTop: value, paddingBottom: value })
  }
});
