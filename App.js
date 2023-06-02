import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  // return <WelcomeScreen />;

  // return <ListingDetailsScreen />;

  // return <ViewImageScreen />;
  // return <MessageScreen></MessageScreen>;
  // return <AccountScreen></AccountScreen>;
  // return <ListingsScreen></ListingsScreen>;

  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      {/* <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      ></TextInput> */}
      <AppPicker placeholder="Category" icon="apps"></AppPicker>
      <AppTextInput placeholder="Email" icon="email"></AppTextInput>
    </Screen>
  );
}
