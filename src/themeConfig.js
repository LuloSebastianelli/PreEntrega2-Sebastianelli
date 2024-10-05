import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: { main: "#A02334", mainClaro: "#86AB89" },
    secondary: { main: "#FFAD60" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});
export const dark = createTheme({
  palette: {
    primary: { main: "#A02334", mainClaro: "#86AB89" },
    secondary: { main: "#FFAD60" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});
