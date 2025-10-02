import { atom } from "jotai";

export const atomLastNavigatedFlagpole = atom<string | null>(null);

export const atomFlagpoleMessageById = (id: string) =>
  atom(
    (get) => get(atomFlagpoles).find((fp) => fp.id === id)?.messages ?? null
  );

export const atomFlagpoles = atom([
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
    messages: ["sdsss", "dsadad", "ddadsafag"],
  },
  {
    id: "4",
    title: "vid kaffet vid skolan",
    latitude: 57.7169625,
    longitude: 12.9424782,
    messages: ["sdsss", "dsadad", "ddadsafag"],
  },
  {
    id: "5",
    title: "kolan",
    latitude: 57.7174286,
    longitude: 12.9417387,
    messages: ["sdsss", "dsadad", "ddadsafag"],
  },
  {
    id: "6",
    title: "olan",
    latitude: 57.7172155,
    longitude: 12.941259,
    messages: ["sdsss", "dsadad", "ddadsafag"],
  },
]);
