import React from "react";
// Theme
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

// Create Theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const Theme = ({ children, direction }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div dir={direction}>{children}</div>
    </ThemeProvider>
  );
};

export default Theme;
