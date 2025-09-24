import * as Location from "expo-location";

export interface flagPole {
  id: string;
  name: string;
  coord: Location.LocationObjectCoords;
}

export const flagPoleData: flagPole[] = [];
