import { useAudioPlayer } from "expo-audio";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { atomFlagpoles } from "../atoms";
import { Flagpole } from "../data/flagpoles";
import { calcDistance } from "../utils/calcDistance";

export default function useProximitySound(
  userLocation?: Location.LocationObject
) {
  const player = useAudioPlayer(require("../assets/audio/erro.mp3"));
  const audioInterval = useRef<NodeJS.Timeout>(null);
  const flagpoles = useAtomValue(atomFlagpoles);
  const [closestFlagpole, setClosestFlagpole] = useState<Flagpole>();
  const router = useRouter();

  useEffect(() => {
    if (!userLocation || flagpoles.length === 0) {
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
      }
      return;
    }

    const closest = flagpoles.reduce((prev, curr) => {
      const dPrev = calcDistance(
        userLocation.coords.latitude,
        userLocation.coords.longitude,
        prev.latitude,
        prev.longitude
      );
      const dCurr = calcDistance(
        userLocation.coords.latitude,
        userLocation.coords.longitude,
        curr.latitude,
        curr.longitude
      );

      return dCurr < dPrev ? curr : prev;
    }, flagpoles[0]);

    const distance = calcDistance(
      userLocation.coords.latitude,
      userLocation.coords.longitude,
      closest.latitude,
      closest.longitude
    );

    setClosestFlagpole(closest);
    if (distance < 200) {
      const intervalSpeed = Math.max(100, distance * 5);

      audioInterval.current = setInterval(() => {
        try {
          if (player.duration && player.currentTime >= player.duration) {
            player.seekTo(0);
          }
          player.play();
        } catch (err) {
          console.warn("error:", err);
        }
      }, intervalSpeed);
    }
    if (distance < 20) {
      router.navigate(`/flagpoles/${closest.id}`);
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
      }
    }
  }, [userLocation, flagpoles, player, router]);
}
