import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
