import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
// import useProximitySound from "../hooks/useProximitySound";
import userProximitySound from "../hooks/useProximitySound";
import useUserLocation from "../hooks/useUserLocationHook";
import FlagpoleMarker from "./flagpoleMarker";

export default function Map() {
  const { location, errorMsg } = useUserLocation();
  userProximitySound(location);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Hämtar plats...</Text>
      </View>
    );
  }

  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.container}>
      <MapView
        showsPointsOfInterest={false}
        showsUserLocation
        style={styles.map}
        customMapStyle={mapStyle}
        followsUserLocation={true}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <FlagpoleMarker />
      </MapView>
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

const mapStyle = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
];
