import { Image } from "expo-image";
import { useAtomValue } from "jotai";
import { View } from "react-native";
import { Marker } from "react-native-maps";
import { atomFlagpoles } from "../atoms";

export default function FlagpoleMarker() {
  const flagpole = useAtomValue(atomFlagpoles);

  return (
    <View>
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
    </View>
  );
}
