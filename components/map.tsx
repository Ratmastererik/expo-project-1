import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { mockedFlagPoles } from "../data/flagpoles";
import useUserLocation from "../hooks/useUserLocationHook";
import ProximitySound from "./proximitySound";

export default function Map() {
  const { location, errorMsg } = useUserLocation();

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    // Location hasn't loaded yet
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
        {mockedFlagPoles.map((flag) => (
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
      <ProximitySound userLocation={location} flagpoles={mockedFlagPoles} />
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
    featureType: "poi", // hide all points of interest
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit", // hide bus/train stations too
    stylers: [{ visibility: "off" }],
  },
];
