import { CSSObject } from "@emotion/css";
import { GlobalTheme } from "./globalTheme";

type AppTheme = {
  container: CSSObject;
  header: CSSObject;
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
  }
});

export default appTheme;
