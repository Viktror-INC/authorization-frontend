import React, { ReactNode, useEffect } from "react";
import Login from "../Login";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { asyncCheckAuth } from "@/store/slices/user-slice/requests";
import { CircularProgress } from "@mui/material";
import { PreloaderBody } from "./styles";
import { setError } from "@/store/slices/user-slice";
import Notification from "@/shared/components/notification";
import Header from "../Header";

interface IAuthorization {
  children: ReactNode;
}

const Authorization: React.FC<IAuthorization> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncCheckAuth());
    dispatch(setError({ show: false, message: "" }));
  }, []);

  const disabledNotify = () => {
    dispatch(setError({ show: false, message: "" }));
  };

  const renderComponent = () => {
    if (user.isLoading) {
      return (
        <PreloaderBody>
          <CircularProgress />
        </PreloaderBody>
      );
    }

    return (
      <>
        <Notification
          open={user.error.show}
          message={user.error.message}
          onClose={disabledNotify}
          AlertProps={{ onClose: disabledNotify, severity: "error" }}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
        {user.isAuth ? (
          <>
            <Header />
            {children}
          </>
        ) : (
          <PreloaderBody>
            <Login />
          </PreloaderBody>
        )}
      </>
    );
  };

  return renderComponent();
};

export default Authorization;
