// import { useEffect } from "react";
// import useUserLocation from "../hooks/useUserLocationHook";

// export default function UserLocationTracker() {
//   const { location } = useUserLocation();

//   useEffect(() => {
//     if (location && mapRef.current) {
//       const { latitude, longitude } = location.coords;
//       mapRef.current.animateToRegion(
//         {
//           latitude,
//           longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         },
//         1000 // duration ms
//       );
//     }
//   }, [location]);

//   return null; // nothing to render, just side-effects
// }
