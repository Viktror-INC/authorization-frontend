import { api } from "@/shared/requests";
import { AuthResponse } from "@/shared/types/response/auth-response";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface IAsyncLogin {
  email: string;
  password: string;
}

interface IResponseError {
  response: {
    data: {
      message: string;
    };
  };
}

export const asyncLogin = createAsyncThunk(
  "login",
  async ({ email, password }: IAsyncLogin, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });
      return data;
    } catch (error) {
      console.log(
        "loginService error:",
        (error as IResponseError).response.data
      );
      return rejectWithValue((error as IResponseError).response.data);
    }
  }
);

export const asyncRegistration = createAsyncThunk(
  "registration",
  async ({ email, password }: IAsyncLogin, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/registration", {
        email,
        password,
      });
      return data;
    } catch (error) {
      console.log(
        "registrationService error:",
        (error as IResponseError).response.data
      );
      return rejectWithValue((error as IResponseError).response.data);
    }
  }
);

export const asyncCheckAuth = createAsyncThunk(
  "check auth",
  async (_, { rejectWithValue }) => {
    try {
      const response = (await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/refresh`,
        {
          withCredentials: true,
        }
      )) as AuthResponse;
      return response;
    } catch (error) {
      console.log(
        "check authorization error:",
        (error as IResponseError).response.data
      );

      return rejectWithValue((error as IResponseError).response.data);
    }
  }
);

export const asyncLogOut = createAsyncThunk(
  "log out",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.log(
        "asyncLogOut error:",
        (error as IResponseError).response.data
      );

      return rejectWithValue((error as IResponseError).response.data);
    }
  }
);
