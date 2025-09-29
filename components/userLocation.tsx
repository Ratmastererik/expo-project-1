import { Text, View } from "react-native";
import useUserLocation from "../hooks/useUserLocationHook";
import Map from "./map";

export default function UserLocation() {
  const { location, errorMsg } = useUserLocation();

  if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return location && <Map location={location} />;
}
