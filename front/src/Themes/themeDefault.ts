import { createTheme } from "@mui/material";
import { fonts } from "./fonts";

export const themeDefault = createTheme({
  typography: {
    fontFamily: fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:{
        "body": {
          backgroundColor: "#fff"
        },
      },
    },
  },
});
