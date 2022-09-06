import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import { ThemeProvider } from "@mui/material";
import globalTheme from "globalTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={globalTheme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
