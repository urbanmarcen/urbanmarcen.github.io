// Materil UI
import {
  createMuiTheme,
} from "@material-ui/core/styles";
import  { blue } from "@material-ui/core/colors";
import deepOrange from "@material-ui/core/colors/deepOrange";

// MUI THEME CORE SETTINGS
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: deepOrange
  },
  //typography: {},
  zIndex: {
    modal: 1350,
    tooltip: 3000
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: 600
      }
    },
    MuiButton: {
      root: {
        textTransform: "inherit",
        minWidth: 45
      }
    },
    MuiMenu: {
      paper: {
        minWidth: 200
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 40,
        textAlign: "center"
      }
    },
    MuiTableCell: {
      root: {
        fontSize: 13     
      },
      sizeSmall: {
        padding: "5px 5px 5px 5px"
      }
    },
    MuiListItemText: {
      root: {
        fontSize: 13
      }
    }
  }
});

export default theme;
