export interface Flagpole {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  messages: Text[];
}

export const mockedFlagPoles: Flagpole[] = [
  {
    id: "1",
    title: "dsadadsad",
    latitude: 57.721035,
    longitude: 12.939819,
    messages: [],
  },
  {
    id: "2",
    title: "Eriks ställe",
    latitude: 57.7810384,
    longitude: 13.4071798,
    messages: [],
  },
  {
    id: "3",
    title: "Skolan",
    latitude: 57.7168835,
    longitude: 12.9418385,
    messages: [],
  },
];
