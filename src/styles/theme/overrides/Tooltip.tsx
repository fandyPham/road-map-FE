import { Theme } from '@mui/material';

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: 'top',
      },
    },
  };
}
