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
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("app executed");

  const handlePress = () => console.log("Text pressed");
  const handleTouch = () => console.log("image touch");
  const buttonClick = () =>
    Alert.alert("title", "message", [
      { text: "yes", onPress: () => console.log("yes") },
      { text: "no", onPress: () => console.log("no") },
    ]);

  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "orange",
  },
});
