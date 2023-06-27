import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import authApi from "../api/auth";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    console.log(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      ></Image>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          //   onChangeText={handleChange("email")}
          placeholder="Email"
          //   onBlur={() => setFieldTouched("email")}
          textContentType="emailAddress"
        ></AppFormField>

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          //   onChangeText={handleChange("password")}
          secureTextEntry
          //   onBlur={() => setFieldTouched("password")}
          textContentType="password"
        ></AppFormField>

        <SubmitButton title="Login"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
