import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { WrapperStyles } from "@/shared/styles/styles";
import Form from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  asyncLogin,
  asyncRegistration,
} from "@/store/slices/user-slice/requests";
import { theme } from "@/shared/styles/themes";

export const loginInitialValues = {
  email: "",
  password: "",
};

const fields = [
  { id: "email", name: "email", label: "Email" },
  { id: "password", name: "password", label: "Password" },
];

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: loginInitialValues,
    onSubmit: (values) => {
      console.log("request", JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getLogin = () => {
    dispatch(
      asyncLogin({
        email: formik.values.email,
        password: formik.values.password,
      })
    );
  };

  const getRegistration = () => {
    dispatch(
      asyncRegistration({
        email: formik.values.email,
        password: formik.values.password,
      })
    );
  };

  if (isClient) {
    return (
      <WrapperStyles>
        <ThemeProvider theme={theme("blue")}>
          <Form
            title="Authorization"
            formik={formik}
            fields={fields}
            buttons={[
              {
                type: "submit",
                variant: "contained",
                buttonText: "Login",
                onClick: getLogin,
              },
              {
                type: "submit",
                variant: "outlined",
                buttonText: "Registration",
                onClick: getRegistration,
              },
            ]}
          />
        </ThemeProvider>
      </WrapperStyles>
    );
  }

  return null;
};

export default Login;
