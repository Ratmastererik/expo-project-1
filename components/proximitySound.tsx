import * as Location from "expo-location";
import { Flagpole } from "../data/flagPoles";

interface proximitySoundsProps {
  userLocation: Location.LocationObject;
  flagpoles: Flagpole[];
}

export default function proximitySound({
  userLocation,
  flagpoles,
}: proximitySoundsProps) {}
