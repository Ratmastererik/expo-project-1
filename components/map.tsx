import { Image } from "expo-image";
import { useAtomValue } from "jotai";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { atomFlagpoles } from "../atoms";
import ProximitySound from "../hooks/useProximitySound";
import useUserLocation from "../hooks/useUserLocationHook";

export default function Map() {
  const { location, errorMsg } = useUserLocation();
  const flagpole = useAtomValue(atomFlagpoles);
  ProximitySound(location);

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View>
        <Text>Fetching location...</Text>
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
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {flagpole.map((flag) => (
          <Marker
            key={flag.id}
            coordinate={{ latitude: flag.latitude, longitude: flag.longitude }}
          >
            <Image
              source={require("../assets/images/flagpole.png")}
              style={{ width: 40, height: 40 }}
            />
          </Marker>
        ))}
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
