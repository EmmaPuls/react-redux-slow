import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import appTheme from "./App.theme";
import { GlobalTheme } from "./globalTheme";

function App() {
  const theme = useTheme() as GlobalTheme;
  const styles = appTheme(theme);
  return (
    <div className={css(styles.container)}><header className={css(styles.header)}>Why is my app so slow?</header></div>
  );
}

export default App;
