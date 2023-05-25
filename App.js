import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {

  console.log("app executed")

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>hello World!</Text>
      {/* <Image source = {require("./assets/splash.png")}/> */}
      <Image source = {{
        width:200,
        height:300,
      uri:"https://picsum.photos/200/300",}}/>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
