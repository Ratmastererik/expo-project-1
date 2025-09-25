import * as Location from "expo-location";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MockedFlagPoles } from "../data/flagPoles";

interface MapProps {
  location: Location.LocationObject;
}

export default function Map({ location }: MapProps) {
  const { latitude, longitude } = location.coords;
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
        {MockedFlagPoles.map((flag) => (
          <Marker
            key={flag.id}
            coordinate={{ latitude: flag.latitude, longitude: flag.longtitude }}
          />
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
