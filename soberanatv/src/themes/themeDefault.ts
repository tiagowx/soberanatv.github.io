import { createTheme } from "@mui/material";
import { fonts } from "./fonts";

export const themeDefault = createTheme({
  typography: {
    fontFamily: fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: Molot;  
            src: url("../assets/fonts/Molot.woff2");
          }
        `,
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "white",
          background: "#333",
          borderRadius: "8px ",
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
          fieldset: {
            color: "white",
          },
        },
        
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
        },
      }
    }
  },
  palette: {
    primary: {
      light: "white",
      main: "#f2f2f2",
      dark: "#ccc",
      contrastText: "white",
    }
  }
});
