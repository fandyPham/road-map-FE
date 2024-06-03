import { Theme } from '@mui/material';

export default function DatePicker(theme: Theme) {
  return {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& > div > div': {
            fontWeight: 400,
            fontSize: '18px',
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: theme.palette.common.white,
          },
        },
      },
    },
    MuiYearPicker: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: `${theme.palette.common.white} !important`,
          },
        },
      },
    },
  };
}
