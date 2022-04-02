import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#22577a',
    },
    secondary: {
      main: '#66D8B8',
    },
  },
});

const theme = createTheme(baseTheme, {
  palette: {
    info: {
      main: baseTheme.palette.secondary.main,
    },
  },
});

export default theme;