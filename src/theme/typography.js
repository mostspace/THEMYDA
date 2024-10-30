// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Montserrat, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    lineHeight: 80 / 64,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-ExtraBold',
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 22, md: 28, lg: 32 }),
  },
  h3: {
    lineHeight: 1.5,
    fontSize: pxToRem(28),
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    ...responsiveFontSizes({ sm: 22, md: 26, lg: 28 }),
  },
  h4: {
    lineHeight: 1.5,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 20 }),
  },
  h6: {
    lineHeight: 28 / 18,
    fontSize: pxToRem(18),
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 18 }),
  },
  title: {
    fontWeight: 500,
    lineHeight: '25px',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: pxToRem(16),
  },
  subtitle: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: pxToRem(14),
  },
  text: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    color: '#666',
    fontFamily: 'Montserrat',
    fontSize: pxToRem(14),
  },
  label: {
    fontWeight: 400,
    lineHeight: '20px',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: pxToRem(12),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
};

export default typography;