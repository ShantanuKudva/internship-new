import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    error: {
      main: "rgba(85,85,85,1)",
      light: "rgba(236,205,180,1)",
      dark: "rgba(235,83,81,1)",
    },
    text: {
      primary: "rgba(0,0,0,1)",
      secondary: "rgba(98,98,98,1)",
      disabled: "rgba(255,255,255,1)",
    },
    secondary: {
      main: "rgba(235,83,81,1)",
      light: "rgba(246,232,220,1)",
      dark: "rgba(85,85,85,1)",
    },
    primary: {
      main: "rgba(246,232,220,1)",
      light: "rgba(253,250,247,1)",
      dark: "rgba(237,207,182,1)",
      contrastText: "rgba(0,0,0,1)",
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
