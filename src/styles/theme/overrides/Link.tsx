import { Theme } from '@mui/material/styles';

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          paddingLeft: '6px',
          paddingRight: '6px',
          '&:focus': {
            border: `1.5px ${theme.palette.primary.light} solid`,
            backgroundColor: theme.palette.primary.lighter,
            borderRadius: '11px',
          },
        },
      },
    },
  };
}
