import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default theme;