import { createTheme } from '@mui/material/styles';
import { green, purple, grey } from '@mui/material/colors';

export const MyTheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: green[500],
    },
    text: {
      // primary: green[500],
      // secondary: 'rgba(132, 146, 166, 1)',
      //disabled: 'rgba(60, 72, 88, 0.38)',
    },
  },
  typography: {
    //fontFamily: 'Fira Code, monospace', 
  },
});

export default MyTheme;
