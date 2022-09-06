import { CSSObject } from "@emotion/css";
import { GlobalTheme } from "./globalTheme";

type AppTheme = {
  container: CSSObject;
  header: CSSObject;
  button: CSSObject;
};

const appTheme = (theme: GlobalTheme): AppTheme => ({
  container: {
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
  },
  header: {
    color: theme.colors.text,
    fontSize: "2rem",
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    border: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    minHeight: theme.spacing(5.5),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondary,
    },
  },
});

export default appTheme;
