import React, { useState, useEffect } from "react";
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
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) {
  //     alert("You need to enable permission to access the library");
  //   }
  // };
  // useEffect(() => {
  //   requestPermission();
  // }, []);

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

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.canceled) {
  //       setImageUri(result.uri);
  //     }
  //   } catch (error) {
  //     console.log("error reading an image");
  //   }
  // };

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };
  // return (
  //   <Screen>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       // onChangeImage={(uri) => setImageUri(uri)}
  //       onAddImage={(uri) => handleAdd(uri)}
  //       onRemoveImage={(uri) => handleRemove(uri)}
  //     ></ImageInputList>
  //   </Screen>
  // );
}
