import { Theme } from '@mui/material';

export default function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  };
}
