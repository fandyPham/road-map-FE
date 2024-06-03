import { Theme, alpha } from '@mui/material';

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
          borderRadius: '8px',
          border: `1px solid ${theme.palette.primary.main}`,
          marginTop: '6px',
          position: 'relative',
          ul: {
            '::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },

            '::-webkit-scrollbar-thumb': {
              background: '#DBDBDB',
              borderRadius: '8px',
            },
          },
          '.MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: 'transparent !important',
          },
          '.MuiAutocomplete-option[aria-selected="true"].muiFocus': {
            backgroundColor: 'transparent',
          },
          '.MuiAutocomplete-option': {
            padding: '1px 8px !important',
          },
        },
        root: {
          '& fieldset': {
            borderColor: `${theme.palette.primary.main} !important`,
          },
          '& .Mui-disabled fieldset': {
            borderColor: `${alpha(
              theme.palette.primary.contrastText,
              0.2,
            )} !important`,
          },
          '& .Mui-disabled input': {
            '-webkit-text-fill-color': `${alpha(
              theme.palette.primary.contrastText,
              0.85,
            )} !important`,
          },
          '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            padding: '1px',
          },
          '& .MuiAutocomplete-endAdornment': {
            top: 'auto',
          },
          '& .MuiAutocomplete-popupIndicator': {
            marginBottom: '5px',
          },
          '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input':
            {
              padding: '4px 4px 4px 8px',
              fontSize: '14px',
            },
        },
      },
    },
  };
}
