import React from "react";
import {
  SwapInputWrapStyle,
  SwapInputsWrapStyle,
  SwapTopStyle,
  SwapWindowStyle,
} from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  InputAdornment,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { theme } from "@/shared/styles/themes";
import { ICoin } from "@/shared/types/coin-type";

interface ISwapWindow {
  coinsList: ICoin[];
}

const SwapWindow: React.FC<ISwapWindow> = (props) => {
  const { coinsList } = props;
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
          <SwapInputWrapStyle>
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              className=" w-full"
            />

            <TextField
              select
              id="filled-basic"
              className=" flex w-full max-w-[100px]"
            >
              {coinsList.map((coin) => (
                <MenuItem key={coin.ticker} value={coin.ticker}>
                  {coin.ticker}
                </MenuItem>
              ))}
            </TextField>
          </SwapInputWrapStyle>

          <SwapInputWrapStyle>
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              className=" w-full"
            />

            <TextField
              select
              id="filled-basic"
              className=" flex w-full max-w-[100px]"
            >
              {coinsList.map((coin) => (
                <MenuItem key={coin.ticker} value={coin.ticker}>
                  {coin.ticker}
                </MenuItem>
              ))}
            </TextField>
          </SwapInputWrapStyle>
        </ThemeProvider>
      </SwapInputsWrapStyle>
    </SwapWindowStyle>
  );
};

export default SwapWindow;
