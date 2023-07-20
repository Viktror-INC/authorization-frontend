import { IUser } from "@/shared/types/user-type";
import { createSlice } from "@reduxjs/toolkit";
import {
  asyncCheckAuth,
  asyncLogOut,
  asyncLogin,
  asyncRegistration,
} from "./requests";

interface IUserSlice {
  user: IUser;
  isAuth: boolean;
  error: { show: boolean; message: string };
  isLoading: boolean;
}

interface IRejectAction {
  payload: {
    message: string;
  };
}

const initialState = {
  isAuth: false,
  isLoading: false,
  error: { show: false, message: "" },
} as IUserSlice;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setAuth: (state, action: PayloadAction<boolean>) => {
    //   state = { ...state, isAuth: action.payload };
    // },
    setError: (state, action) => {
      const { show, message } = action.payload;
      state.error = { show, message };
    },

    setAuth: (state, action) => {
      console.log("setAuth", action.payload);
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    //Login
    builder.addCase(asyncLogin.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.user = { ...user };
      state.isAuth = true;
      state.isLoading = false;
    });

    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.error = {
        show: true,
        message: (action as IRejectAction).payload.message,
      };
      state.isLoading = false;
    });

    //Registration
    builder.addCase(asyncRegistration.fulfilled, (state, action) => {
      state.user = { ...action.payload };
      state.isAuth = true;
    });

    builder.addCase(asyncRegistration.rejected, (state, action) => {
      state.error = {
        show: true,
        message: (action as IRejectAction).payload.message,
      };
    });

    //Check Auth
    builder.addCase(asyncCheckAuth.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(asyncCheckAuth.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      const { user } = action.payload;
      state.user = { ...user };
      state.isAuth = true;
      state.isLoading = false;
    });

    builder.addCase(asyncCheckAuth.rejected, (state, action) => {
      state.error = {
        show: true,
        message: (action as IRejectAction).payload.message,
      };
      state.isAuth = false;
      state.isLoading = false;
    });

    //LogOut

    builder.addCase(asyncLogOut.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(asyncLogOut.fulfilled, (state) => {
      state.isAuth = false;
      state.isLoading = false;
    });

    builder.addCase(asyncLogOut.rejected, (state, action) => {
      state.isAuth = false;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setError, setAuth } = userSlice.actions;

export default userSlice.reducer;
