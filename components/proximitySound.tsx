import { useAudioPlayer } from "expo-audio";
import * as Location from "expo-location";
import { useEffect, useRef } from "react";
import { Flagpole } from "../data/flagpoles";
import { calcDistance } from "../utils/calcDistance";

interface proximitySoundsProps {
  userLocation: Location.LocationObject;
  flagpoles: Flagpole[];
}

export default function ProximitySound({
  userLocation,
  flagpoles,
}: proximitySoundsProps) {
  const player = useAudioPlayer("../assets/audio/caroonslip.mp3");
  const audioInterval = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    return () => {
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
      }
    };
  }, []);

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

    if (distance < 200) {
      const intervalSpeed = Math.max(200, distance * 10);

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
  }, [userLocation, flagpoles, player]);

  return null;
}
