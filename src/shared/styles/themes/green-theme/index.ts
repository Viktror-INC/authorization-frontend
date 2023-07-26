import { createTheme } from "@mui/material";

const palette = {
  primary: { main: "#d1ffda" },
};

export const greenTheme = createTheme({
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
