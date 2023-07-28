import { createSlice } from "@reduxjs/toolkit";

import { ICoin } from "@/shared/types/coin-type";
import { asyncGetCoins } from "./requests";

export interface ICoinsSlice {
  coinsList: ICoin[];
  error: { show: boolean; message: string };
  isLoading: boolean;
}

interface IRejectAction {
  payload: {
    message: string;
  };
}

const initialState = {
  isLoading: false,
  error: { show: false, message: "" },
} as ICoinsSlice;

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //Get all coins
    builder.addCase(asyncGetCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncGetCoins.fulfilled, (state, action) => {
      state.coinsList = action.payload[0].list;
      state.isLoading = false;
    });
    builder.addCase(asyncGetCoins.rejected, (state, action) => {
      state.error = {
        show: true,
        message: (action as IRejectAction).payload.message,
      };
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = coinsSlice.actions;

export default coinsSlice.reducer;
