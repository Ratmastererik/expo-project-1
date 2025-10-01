import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useUserLocation() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function getCurrentLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 5,
          timeInterval: 5000,
        },
        (loc) => {
          console.log(loc.coords.latitude);
          console.log(loc.coords.longitude);
          setLocation(loc);
        }
      );
    }
    getCurrentLocation();
  }, []);

  return { location, errorMsg };
}
