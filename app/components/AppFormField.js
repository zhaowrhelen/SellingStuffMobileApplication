import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        onChangeText={handleChange(name)}
        // placeholder="Email"
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        // textContentType="emailAddress"
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
