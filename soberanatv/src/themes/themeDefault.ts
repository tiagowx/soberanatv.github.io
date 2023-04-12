import { createTheme } from "@mui/material";
import { fonts } from "./fonts";

export const themeDefault = createTheme({
  typography: {
    fontFamily: fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face: 
          font-family: "Molot";  
          src: url("@/assets/fonts/Molot.woff2");
        `,
    },
  },
});
