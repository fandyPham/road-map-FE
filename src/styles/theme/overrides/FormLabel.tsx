import { Theme } from '@mui/material';

export default function FormLabel(theme: Theme) {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText,
          fontSize: '14px',
          display: 'block',
          marginBottom: '8px',
        },

        asterisk: {
          color: theme.palette.error.dark,
        },
      },
    },
  };
}
