import { Theme } from '@mui/material';

export default function Switch(theme: Theme) {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '38px',
          height: '20px',
          padding: '0',
          '&:focus-within': {
            outline: `2px ${theme.palette.common.outline} solid`,
            outlineOffset: '2px',
            borderRadius: '14px',
          },
          '.MuiSwitch-switchBase': {
            padding: '0',
            margin: '2px',
            transitionDuration: '300ms',
            '& .MuiSwitch-thumb': {
              width: '16px',
              height: '16px',
            },
            '&.Mui-checked': {
              color: '#fff',
              transform: 'translateX(18px)',
              marginRight: '0px',

              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.base,
                opacity: 1,
              },
            },
            '&.Mui-disabled': {
              '& .MuiSwitch-thumb': {
                color: theme.palette.grey[100],
                boxShadow: 'none',
                backgroundColor: theme.palette.common.white,
              },
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.grey[100],
              },
            },
          },
          '.MuiSwitch-track': {
            borderRadius: '999px',
            backgroundColor: theme.palette.grey[300],
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
        },
      },
    },
  };
}
