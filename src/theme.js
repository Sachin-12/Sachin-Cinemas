import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {

  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#87CEFE",
          "&.Mui-selected": {
            color: "#fff",
          },
        },
      }
    }
  }
});

export default theme;
