import { CSSObject } from "@emotion/css";
import { Theme } from "@mui/material";

type AppTheme = {
  appBar: CSSObject;
  button: CSSObject;
  header: CSSObject;
  page: CSSObject;
};

const appTheme = (theme: Theme): AppTheme => ({
  appBar: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    padding: theme.spacing(2),
  },
  page: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  }
});

export default appTheme;
