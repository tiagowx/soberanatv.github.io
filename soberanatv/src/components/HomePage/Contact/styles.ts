import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  minHeight: "calc(100vh - 32px)",
  paddingTop: "5rem",
  gap: "1rem",
  color: "white",
  h2: {
    marginLeft: "10rem",
    fontFamily: "Molot",
    width: "25%",
    paddingY: "1rem",
    alignItems: "center",
    color: "white",
    fontWeight: 400,
    textAlign: "center",
    borderTop: "4px solid #eb005c",
  },
  ".content": {
    display: "flex",
    paddingX: "10rem",
    gap: "1rem",
    color: "#fff",
    'form': {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      gap: "1rem",
      minWidth: "50%",
      border: "4px solid #eb005c"
    }
    
  }
};


