import { alpha, PaletteColor } from '@mui/material/styles';
import {
  PaletteAugmentColorOptions,
  PaletteTonalOffset,
  TypeAction,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';

function createGradient(direction: string, color1: string, color2: string) {
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

declare module '@mui/material' {
  interface Color {
    0: string;
    50: string;
    150: string;
    250: string;
    350: string;
    450: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
    550: string;
    650: string;
    750: string;
    850: string;
    950: string;
  }
  interface CommonColors {
    hyperlink: string;
    favorite: string;
    hover: string;
    overview: string;
    background: string;
    outline: string;
    purple: string;
  }

  interface ChartColor {
    skyBlue: string;
    blue: string;
    grey: string;
    yellow: string;
    purple: string;
    red: string;
    green: string;
    greenish: string;
  }

  interface TypeBackground {
    paper: string;
    default: string;
    neutral: string;
    blue: string;
    grey: string;
  }

  interface Gradient {
    primary: string;
    error: string;
    warning: string;
    success: string;
  }

  interface Palette {
    neutral: PaletteColor;
    danger: PaletteColor;
    common: CommonColors;
    mode: PaletteMode;
    contrastThreshold: number;
    tonalOffset: PaletteTonalOffset;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Color;
    text: TypeText;
    divider: TypeDivider;
    action: TypeAction;
    chart: ChartColor;
    background: TypeBackground;
    gradients: Gradient;
    getContrastText: (background: string) => string;
    augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
  }
}

const GREY = {
  0: '#FFFFFF',
  50: '#D7DBE1',
  100: '#C7C7CC',
  150: '#E7E7E7',
  200: '#D9D9D9',
  250: '#EBEDF0',
  300: '#CBD5E1',
  350: '#E5E5EA',
  400: '#C4CDD5',
  450: '#364C68',
  500: '#919EAB',
  550: '#8A979E',
  600: '#4A5569',
  650: '#5B686E',
  700: '#454F5B',
  750: '#5B616E',
  800: '#212B36',
  850: '#1D2326',
  900: '#161C24',
  950: '#0B0C0D',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  base: '#CDE4FF',
  lighter: '#EDF5FF',
  light: '#1E7EF280',
  main: '#1E7EF2',
  dark: '#006ca4',
  darker: '#004275',
  logo: '#1F9AD6',
  contrastText: '#364C68',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#005A9E',
  darker: '#091A7A',
  contrastText: '#fff',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};
const SUCCESS = {
  lighter: '#E6FDF7',
  light: '#00E9B1',
  main: '#00D3A1',
  dark: '#00A490',
  darker: '#08660D',
  contrastText: GREY[800],
};
const WARNING = {
  lighter: '#FFF8E5',
  light: '#FFC500',
  main: '#FF9920',
  dark: '#FF8A00',
  darker: '#7A4F01',
  contrastText: GREY[800],
};
const ERROR = {
  lighter: '#FDEEE4',
  light: '#FFA48D',
  main: '#FF0005',
  dark: '#CF202F',
  darker: '#7A0C2E',
  contrastText: '#fff',
};
const NEUTRAL = {
  lighter: '#F6F7FB',
  light: '#F3F2F1',
  main: '#DBDBDB',
  dark: '#8F8F8F',
  darker: '#2C313A',
};

const GRADIENTS = {
  primary: createGradient(
    '336deg',
    `${PRIMARY.main} 0%`,
    `rgba(0, 163, 233, 0.71) 100%`,
  ),
  error: createGradient(
    '336deg',
    `${ERROR.main} 0%`,
    `rgba(255, 0, 5, 0.71) 100%`,
  ),
  warning: createGradient(
    '336deg',
    `${WARNING.light} 0%`,
    `rgba(255, 197, 0, 0.71) 100%`,
  ),
  success: createGradient(
    '336deg',
    `${SUCCESS.light} 0%`,
    `rgba(0, 233, 177, 0.71) 100%`,
  ),
};

const palette = {
  common: {
    black: '#000',
    white: '#fff',
    hyperlink: '#0151FC',
    favorite: '#FF3366',
    hover: '#0D9FE4',
    overview: '#850C8F',
    background: '#F5FAFA',
    outline: '#7791F0',
    purple: '#C8D4FF',
  },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  neutral: { ...NEUTRAL },
  grey: GREY as any,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  text: {
    primary: PRIMARY.contrastText,
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200],
    blue: '#EDF5FF',
    grey: '#031730',
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
