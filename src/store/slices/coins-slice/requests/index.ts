import { api } from "@/shared/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IResponseError {
  response: {
    data: {
      message: string;
    };
  };
}

export const asyncGetCoins = createAsyncThunk(
  "get coins",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/coinList");
      return data;
    } catch (error) {
      console.log(
        "asyncGetUsers error:",
        (error as IResponseError).response.data
      );
      return rejectWithValue((error as IResponseError).response.data);
    }
  }
);
