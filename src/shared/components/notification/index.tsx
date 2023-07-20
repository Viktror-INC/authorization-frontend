import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";
import React, { useState } from "react";

interface INotification extends SnackbarProps {
  message: string;
  AlertProps?: AlertProps;
}

const Notification: React.FC<INotification> = (props) => {
  const { message, AlertProps, ...otherSnackbarProps } = props;

  return (
    <Snackbar {...otherSnackbarProps}>
      <Alert {...AlertProps}>{message}</Alert>
    </Snackbar>
  );
};

export default Notification;
