import React from "react";
import {
  Button,
  ButtonProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { FormStyle } from "./styles";
import { FormikProps } from "formik";

type ButtonObject = ButtonProps & {
  buttonText: string;
};

interface IForm<T> {
  formik: FormikProps<T>;
  fields: {
    id: string;
    name: string;
    label: string;
    variant?: TextFieldVariants;
  }[];
  buttons: ButtonObject[];
}

const Form = <T,>(props: IForm<T>) => {
  const { formik, fields, buttons } = props;
  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      {fields.map((field, index) => (
        <TextField
          key={`${field.id}_${index}`}
          id={field.id}
          name={field.name}
          label={field.label}
          variant={field.variant || "outlined"}
          onChange={formik.handleChange}
        />
      ))}
      {buttons.map((button, index) => {
        const { buttonText = "Text", ...buttonProps } = button;
        return (
          <Button
            key={`${buttonText}_${index}`}
            variant="contained"
            {...buttonProps}
          >
            {buttonText}
          </Button>
        );
      })}
    </FormStyle>
  );
};

export default Form;
