import React from "react";
import { SwapInputsWrapStyle, SwapTopStyle, SwapWindowStyle } from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "@/shared/styles/themes";

const SwapWindow = () => {
  return (
    <SwapWindowStyle>
      <SwapTopStyle>
        <h4>Swap</h4>
        <div className="flex transform hover:rotate-180 transition duration-500 ease-in-out cursor-pointer">
          <SettingsIcon />
        </div>
      </SwapTopStyle>
      <SwapInputsWrapStyle>
        <ThemeProvider theme={theme("blue")}>
          <TextField
            className=" w-full"
            id="filled-basic"
            variant="filled"
            value={0}

          />
          <TextField
            className=" w-full"
            id="filled-basic"
            variant="filled"
            value={0}
          />
        </ThemeProvider>
      </SwapInputsWrapStyle>
    </SwapWindowStyle>
  );
};

export default SwapWindow;
