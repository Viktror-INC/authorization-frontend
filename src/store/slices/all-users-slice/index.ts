import { IUser } from "@/shared/types/user-type";
import { createSlice } from "@reduxjs/toolkit";
import { asyncGetUsers } from "./requests";

export interface IUserSlice {
  users: IUser[];
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
} as IUserSlice;

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    setError: (state, action) => {
      const { show, message } = action.payload;
      state.error = { show, message };
    },
  },

  extraReducers: (builder) => {
    //Login
    builder.addCase(asyncGetUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(asyncGetUsers.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.users = action.payload;
      state.isLoading = false;
    });

    builder.addCase(asyncGetUsers.rejected, (state, action) => {
      state.error = {
        show: true,
        message: (action as IRejectAction).payload.message,
      };
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setError } = allUsersSlice.actions;

export default allUsersSlice.reducer;
