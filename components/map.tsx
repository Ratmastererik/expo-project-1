import { useAudioPlayer } from "expo-audio";
import * as Location from "expo-location";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MockedFlagPoles } from "../data/flagpoles";
import useProximitySound from "../hooks/useProximitySound";

interface MapProps {
  location: Location.LocationObject;
}

export default function Map({ location }: MapProps) {
  const { latitude, longitude } = location.coords;
  const player = useAudioPlayer(require("../assets/audio/cartoonslip.mp3"));

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

  useProximitySound(location, MockedFlagPoles);

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
            coordinate={{ latitude: flag.latitude, longitude: flag.longitude }}
          />
        ))}
      </MapView>
      <Button onPress={() => player.play()} title="Play sound" />
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
