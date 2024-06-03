import { Theme } from '@mui/material';

export default function FormControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          flexDirection: 'column-reverse',
          alignItems: 'flex-start',

          '.MuiFormHelperText-root': {
            marginLeft: '0',
            marginRight: '0',
          },

          '.MuiFormControlLabel-label': {
            marginBottom: '5px',
            fontSize: '14px',
          },
        },
      },
    },
  };
}
