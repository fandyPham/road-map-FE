// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Radio(theme: Theme) {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[500],
          '&.Mui-disabled': {
            color: theme.palette.neutral.main,
          },
        },
      },
    },
  };
}
