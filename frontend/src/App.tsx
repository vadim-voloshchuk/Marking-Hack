import React from "react";
import Main from "./page/Main/Main";

import { ThemeProvider, createTheme } from "@mui/material";
import styles from "./App.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    background: {
      default: "#212121",
      paper: "#212121",
    },
    info: {
      main: "#212121",
      contrastText: "#212121",
    },
  },
  typography: {
    fontFamily: "Montserrat Alternates",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <Main />
        </div>
    </ThemeProvider>
  );
}

export default App;
