import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingLeft: '20px',
          paddingRight: '20px',
          backgroundColor: theme.palette.primary.main,
          lineHeight: '24px',
          '&.MuiButtonBase-root.Mui-disabled': {
            backgroundColor: `${theme.palette.neutral.lighter} !important`,
            border: 'none',
            color: `${theme.palette.grey[450]} !important`,
            opacity: '0.5',
          },
          '&:focus': {
            outline: `2px ${theme.palette.common.outline} solid`,
            outlineOffset: '3px',
          },
        },
        sizeLarge: {
          height: 48,
        },
        sizeMedium: {
          height: 40,
        },
        sizeSmall: {
          height: 36,
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.common.hover,
            color: `${theme.palette.common.white} !important`,
          },
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          boxShadow: 'none',
          color: theme.palette.common.white,
          '&:hover': {
            boxShadow: 'none',
            backgroundImage: theme.palette.gradients.primary,
            backgroundColor: theme.palette.primary.main,
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.main,
            borderColor: 'transparent',
          },
        },
        textPrimary: {
          backgroundColor: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
}
