import { createMuiTheme } from '@material-ui/core/styles';

const themeColors = {
  blue: "#0b72b9",
  orange: "#ffba60"
}

export default createMuiTheme({
  palette: {
    common: {
      blue: themeColors.blue,
      orange: themeColors.orange
    },
    primary: {
      main: themeColors.blue
    },
    secondary: {
      main: themeColors.orange
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }
})