import React, { Children } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Icon from "./Icon";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
