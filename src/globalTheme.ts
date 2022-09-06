import { createTheme, responsiveFontSizes } from "@mui/material";

const globalTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#7FB069",
        light: "#B2D9A3",
        dark: "#4C7F3E",
      },
      secondary: {
        main: '#E6AA68',
        light: '#F8D7A9',
        dark: '#B37C3F',
      },
      text: {
        primary: "#1D1A05",
      },
      background: {
        default: '#FFFBBD',
      }
    },
    typography: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    }
  })
);
export default globalTheme;
