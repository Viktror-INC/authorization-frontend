import { createTheme } from "@mui/material";

const palette = {
  primary: { main: "#f5aeae" },
};

export const redTheme = createTheme({
  palette,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
  },
});
