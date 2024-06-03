// ----------------------------------------------------------------------

import { TypographyOptions } from '@mui/material/styles/createTypography';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

interface ResponsiveFontSizeProps {
  xs: number;
}

function responsiveFontSizes({ xs }: ResponsiveFontSizeProps) {
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(xs),
    },
  };
}

const FONT_PRIMARY = 'Lexend Deca';

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    lineHeight: 75 / 64,
    fontSize: pxToRem(64),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 54 / 42,
    fontSize: pxToRem(42),
  },
  h3: {
    fontWeight: 400,
    lineHeight: 45 / 36,
    fontSize: pxToRem(36),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(18),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 16 }),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(16),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(13),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
  },
};

export default typography;
