import { createTheme } from "@mui/material";
import { colors } from "../colors";
import { bluePalette } from "./customPalettes";

const palettes = {
  blue: bluePalette,
};

export const theme = (themeColor: keyof typeof palettes) =>
  createTheme({
    palette: palettes[themeColor].palette,
    components: {
      // Name of the component
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: palettes[themeColor].palette.primary.main,
          },
        },
      },

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

      MuiTextField: {
        styleOverrides: {
          root: {
            ".MuiFilledInput-root": {
              backgroundColor: palettes[themeColor].palette.primary.main,
              fontSize: "30px",
              //   color: "white",
            },
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: palettes[themeColor].palette.primary.main,

            ".MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: palettes[themeColor].palette.primary.main,
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          },
        },
      },
    },
  });
