import {
  createMuiTheme
} from '@material-ui/core/styles';

const themeColors = {
  blue: "#0b72b9",
  orange: "#ffba60",
  grey: "#868686"
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
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: themeColors.blue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color : themeColors.blue
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: themeColors.blue
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "300",
      color: themeColors.grey
    },
    subtitle2: {
      color :"white",
      fontSize: "1.25rem",
      fontWeight: 300
    },
    learnButton: {
      borderColor: themeColors.blue,
      color: themeColors.blue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    }
  }
})