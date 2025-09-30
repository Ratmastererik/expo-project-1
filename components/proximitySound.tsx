import { useAudioPlayer } from "expo-audio";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { Flagpole } from "../data/flagpoles";
import { calcDistance } from "../utils/calcDistance";
import FlagpoleReachedPopup from "./flagpoleReached";

interface proximitySoundsProps {
  userLocation: Location.LocationObject;
  flagpoles: Flagpole[];
}

export default function ProximitySound({
  userLocation,
  flagpoles,
}: proximitySoundsProps) {
  const player = useAudioPlayer(require("../assets/audio/erro.mp3"));
  const audioInterval = useRef<NodeJS.Timeout>(null);
  const [distance, setDistance] = useState(0);
  const [closestFlagpole, setClosestFlagpole] = useState<Flagpole>();

  useEffect(() => {
    player.play();
    return () => {
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
      }
    };
  });

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

    const newDistance = calcDistance(
      userLocation.coords.latitude,
      userLocation.coords.longitude,
      closest.latitude,
      closest.longitude
    );

    setClosestFlagpole(closest);
    setDistance(newDistance);
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
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
      }
    }
  }, [userLocation, flagpoles, player, distance]);

  if (distance < 20) {
    return <FlagpoleReachedPopup flagpoleId={closestFlagpole!.id} />;
  }

  return null;
}
