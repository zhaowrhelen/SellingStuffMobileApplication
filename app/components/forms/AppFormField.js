import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        width={width}
        value={values[name]}
      ></AppTextInput>
      {
        <ErrorMessage
          error={errors[name]}
          visible={touched[name]}
        ></ErrorMessage>
      }
    </>
  );
}

export default AppFormField;
