import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/maps";

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function getCurrentLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync({}, (loc) => {
        console.log(loc.coords.latitude);
        console.log(loc.coords.longitude);
        console.log(loc?.timestamp);
        setLocation(loc);
      });
    }
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{location?.timestamp}</Text>
      <Map />
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
