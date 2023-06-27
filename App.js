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
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     {/* <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetDetails")}
//     ></Button> */}
//     <Link />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet details {route.params.id}</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     ></Stack.Screen>
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: "white",
//       tabBarActiveBackgroundColor: "tomato",
//       tabBarInactiveBackgroundColor: "#eee",
//       tabBarInactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={StackNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons
//             name="home"
//             size={size}
//             color={color}
//           ></MaterialCommunityIcons>
//         ),
//       }}
//     ></Tab.Screen>
//     <Tab.Screen name="Account" component={Account}></Tab.Screen>
//   </Tab.Navigator>
// );

// const [imageUris, setImageUris] = useState([]);
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
// return <ListingEditScreen></ListingEditScreen>;
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

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

// export default function App() {
// NetInfo.fetch().then((netInfo) => console.log(netInfo));

//componentDidMount
// const unsubscribe = NetInfo.addEventListener((netInfo) =>
//   console.log(netInfo)
// );

//componentWillUmount
// unsubscribe();

// const netInfo = useNetInfo();
//   const demo = async () => {
//     try {
//       await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
//       const value = await AsyncStorage.getItem("person");
//       const person = JSON.parse(value);
//       console.log(person);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   demo();

//   return null;
// }
