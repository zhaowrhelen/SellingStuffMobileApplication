import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "andriod" ? "Roboto" : "Avenir",
  },
});
export default AppText;
