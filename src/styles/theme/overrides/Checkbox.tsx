// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          '&.Mui-disabled': {
            color: theme.palette.neutral.main,
          },
          '&:focus-within': {
            img: {
              outline: `2px ${theme.palette.common.outline} solid`,
              outlineOffset: '2px',
              borderRadius: '2px',
            },
          },
        },
      },
    },
  };
}
