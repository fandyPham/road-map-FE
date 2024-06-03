import { Theme } from "@mui/material";

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "8px",
            },
            "&:hover fieldset": {
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "8px",
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
          ".MuiInputBase-root": {
            "&:hover": {
              borderColor: "none",
            },
            "&.Mui-focused": {
              borderColor: "none",
            },
            // '.MuiInputBase-input': {
            //   padding: '12.5px 15px',
            //   backgroundColor: theme.palette.common.white,
            //   borderRadius: '8px',
            //   '&::placeholder': {
            //     color: theme.palette.grey[450],
            //     opacity: 0.5,
            //     display: 'block',
            //     visibility: 'visible',
            //   },
            // },
            // ".MuiInputBase-inputMultiline": {
            //   padding: "8px 12px",
            // },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.neutral.lighter,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.neutral.main,
              },
            },
            "&.Mui-error": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.neutral.main,
              },
            },
          },
          // ".MuiInputBase-input": {
          //   padding: "12.5px 14px",
          //   fontSize: "16px",
          // },
          ".MuiButtonBase-root:hover": {
            backgroundColor: theme.palette.common.white,
          },
          ".MuiTouchRipple-root": {
            display: "none",
          },
          "& .MuiFormHelperText-root": {
            "&.Mui-error": {
              margin: "6px 0 0 0",
              color: `${theme.palette.error.main} !important`,
            },
          },
        },
      },
    },
  };
}
