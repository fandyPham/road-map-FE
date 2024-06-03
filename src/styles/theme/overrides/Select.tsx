import { Theme } from '@mui/material';

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          '.MuiSelect-select': {
            fontSize: '14px',
          },
          paddingLeft: '8px',
          height: '30px',
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main} !important`,
          },
        },
      },
    },
  };
}
