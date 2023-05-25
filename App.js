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

export default function App() {
  console.log("app executed");

  const handlePress = () => console.log("Text pressed");
  const handleTouch = () => console.log("image touch");
  const buttonClick = () =>
    Alert.alert("title", "message", [
      { text: "yes", onPress: () => console.log("yes") },
      { text: "no", onPress: () => console.log("no") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>hello World!</Text>
      {/* <Image source={require("./assets/splash.png")} /> */}
      <TouchableOpacity onPress={handleTouch}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>

      <Button title="Click Me" onPress={buttonClick} />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
