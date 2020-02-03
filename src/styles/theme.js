import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#EAEAEA' },
    primary: {
      light: 'rgba(81, 92, 128, 1)',
      main: 'rgba(38, 51, 83, 1)',
      dark: 'rgba(0, 12, 42, 1)',
      contrastText: 'rgba(185, 255, 90, 1)',
    },
    secondary: {
      light: 'rgba(238, 255, 141, 1)',
      main: 'rgba(185, 255, 90, 1)',
      dark: 'rgba(133, 203, 33, 1)',
      contrastText: 'rgba(38, 51, 83, 1)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  // overrides: {
  //   MuiIconButton: {
  //     root: {
  //       '&:focus': {
  //         backgroundColor: 'red',
  //         borderWidth: 1,
  //         borderColor: 'red',
  //       },
  //     },
  //   },
  // },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
