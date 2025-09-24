import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import UserLocationMap from "../components/userLocationMap";

export default function App() {
  return (
    <View style={styles.container}>
      <UserLocationMap />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
