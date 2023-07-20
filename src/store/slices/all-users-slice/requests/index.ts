import { api } from "@/shared/requests";
import { AuthResponse } from "@/shared/types/response/auth-response";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";


interface IResponseError {
  response: {
    data: {
      message: string;
    };
  };
}

export const asyncGetUsers = createAsyncThunk(
  "get users",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/users");
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
