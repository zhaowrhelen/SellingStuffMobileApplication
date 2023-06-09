import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={
      {
        //   headerShown: false,
        //   presentation: "modal",
        //   headerMode: "none",
      }
    }
  >
    <Stack.Screen
      name="Account Screen"
      component={AccountScreen}
    ></Stack.Screen>
    <Stack.Screen
      name="Messages"
      component={MessageScreen}
      //   options={{
      //     headerShown: false,
      //   }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default AccountNavigator;
