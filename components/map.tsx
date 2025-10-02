import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import FlagpoleMarker from "./flagpoleMarker";

export default function Map() {
  // const mapRef = useRef<MapView>(null);

  return (
    <View style={styles.container}>
      <MapView
        showsPointsOfInterest={false}
        showsUserLocation
        style={styles.map}
        customMapStyle={mapStyle}
        followsUserLocation={true}
      >
        <FlagpoleMarker />
      </MapView>

      {/* <UserLocationTracker mapRef={mapRef} /> */}
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
