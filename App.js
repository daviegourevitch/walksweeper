import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Board from "./Board";

export default function App() {
  return (
    <View style={styles.container}>
      <Board width={10} height={10} numBombs={10} />
      <StatusBar style="auto" />
    </View>
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
