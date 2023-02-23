import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme({
  palette: {
    // Primary
    lightRed: { main: "hsl(0, 100%, 67%)", contrastText: "hsla(0, 100%, 67%, 0.1)" },
    orangeYellow: { main: "hsl(39, 100%, 56%)", contrastText: "hsla(39, 100%, 56%, 0.1)" },
    greenTeal: { main: "hsl(166, 100%, 37%)", contrastText: "hsla(166, 100%, 37%, 0.1)" },
    cobaltBlue: { main: "hsl(234, 85%, 45%)", contrastText: "hsla(234, 85%, 45%, 0.1)" },

    // Gradients
    lightSlateBlue: { main: "hsl(252, 100%, 67%)" },
    lightRoyalBlue: { main: "hsl(241, 81%, 54%)" },
    violetBlue: { main: "hsla(256, 72%, 46%, 1)" },
    persianBlue: { main: "hsla(241, 72%, 46%, 0)" },

    // Neutral
    paleBlue: { main: "hsl(221, 100%, 96%)" },
    lightLavender: { main: "hsl(241, 100%, 89%)" },
    darkGrayBlue: { main: "hsl(224, 30%, 27%)" },
  },
  typography: {
    fontFamily: "Hanken Grotesk",
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
