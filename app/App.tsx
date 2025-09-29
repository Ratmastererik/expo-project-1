import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import UserLocation from "../components/userLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <UserLocation />
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
