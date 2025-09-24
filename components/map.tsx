import * as Location from "expo-location";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

interface MapProps {
  location: Location.LocationObject;
}

export default function Map({ location }: MapProps) {
  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
