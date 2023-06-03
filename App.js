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
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

export default function App() {
  // return <WelcomeScreen />;

  // return <ListingDetailsScreen />;

  // return <ViewImageScreen />;
  // return <MessageScreen></MessageScreen>;
  // return <AccountScreen></AccountScreen>;
  // return <ListingsScreen></ListingsScreen>;

  // const [firstName, setFirstName] = useState("");
  // const [category, setCategory] = useState(categories[0]);

  // return (
  //   <Screen>
  //     <Text>{firstName}</Text>

  //     <AppPicker
  //       items={categories}
  //       placeholder="Category"
  //       icon="apps"
  //       selectedItem={category}
  //       onSelectItem={(item) => setCategory(item)}
  //     ></AppPicker>
  //     <AppTextInput placeholder="Email" icon="email"></AppTextInput>
  //   </Screen>
  // );

  // return <LoginScreen></LoginScreen>;
  // return <RegisterScreen></RegisterScreen>;
  return <ListingEditScreen></ListingEditScreen>;
}
