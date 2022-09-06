import { AppBar, Box, Button, Typography, useTheme } from "@mui/material";
import appTheme from "App.style";

function App() {
  const theme = useTheme();
  const styles = appTheme(theme);
  return (
    <Box sx={styles.page}>
      <Box sx={styles.appBar}>
        <AppBar position="static">
          <Typography
            variant="h3"
            component={"div"}
            sx={styles.header}
            fontWeight="bold"
          >
            Why is my app so slow?
          </Typography>
        </AppBar>
      </Box>
      <Box sx={styles.button}>
        <Button variant="contained" color={"secondary"}>
          <Typography
            variant="button"
            fontWeight={"bold"}
            fontSize={"2em"}
          >
            Let's find out!
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default App;
