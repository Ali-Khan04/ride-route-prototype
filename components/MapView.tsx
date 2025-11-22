import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import RouteLine from "@/components/RouteLine";
import MapControls from "@/components/MapControls";
import StatusBar from "@/components/StatusBar";
import MapMarkers from "./MapMarker";
import InstructionsOverlay from "./InstructionOverlay";
import { fetchRoute } from "@/services/mapboxService";

MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN!);

type SelectionMode = "start" | "end" | null;

export default function MapView() {
  const [startPoint, setStartPoint] = useState<number[] | null>(null);
  const [endPoint, setEndPoint] = useState<number[] | null>(null);
  const [routeCoords, setRouteCoords] = useState<number[][]>([]);
  const [selectionMode, setSelectionMode] = useState<SelectionMode>(null);
  const [loading, setLoading] = useState(false);

  const ISB = [73.0479, 33.6844];

  const handleMapPress = (event: any) => {
    if (!selectionMode) return;

    const coords = event.geometry.coordinates;

    if (selectionMode === "start") {
      setStartPoint(coords);
      Alert.alert(
        "Start Point",
        `Selected: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`
      );
    } else if (selectionMode === "end") {
      setEndPoint(coords);
      Alert.alert(
        "End Point",
        `Selected: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`
      );
    }

    setSelectionMode(null);
  };

  useEffect(() => {
    if (startPoint && endPoint) {
      (async () => {
        try {
          setLoading(true);
          const route = await fetchRoute(startPoint, endPoint);
          setRouteCoords(route);
        } catch (error) {
          Alert.alert("Error", "Failed to fetch route. Please try again.");
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [startPoint, endPoint]);

  const handleStartPress = () => {
    setSelectionMode(selectionMode === "start" ? null : "start");
  };

  const handleEndPress = () => {
    setSelectionMode(selectionMode === "end" ? null : "end");
  };

  const handleReset = () => {
    setStartPoint(null);
    setEndPoint(null);
    setRouteCoords([]);
    setSelectionMode(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        isStartSelected={startPoint !== null}
        isEndSelected={endPoint !== null}
        loading={loading}
      />

      {/* MapboxGL.MapView is the main map component that renders the map on screen */}
      <MapboxGL.MapView style={styles.map} onPress={handleMapPress}>
        {/*MapboxGL.Camera controls how users view map*/}
        <MapboxGL.Camera
          zoomLevel={13}
          centerCoordinate={ISB}
          animationMode="flyTo"
        />
        {/* Tracks and displays the device's real-time GPS location on the map */}
        <MapboxGL.UserLocation visible />
        {/* Controls the visual appearance of the user's location (animated blue pulse effect) */}
        <MapboxGL.LocationPuck pulsing={{ isEnabled: true }} />

        <MapMarkers startPoint={startPoint} endPoint={endPoint} />
        {routeCoords.length > 0 && <RouteLine coordinates={routeCoords} />}
      </MapboxGL.MapView>

      <MapControls
        selectionMode={selectionMode}
        isStartSelected={startPoint !== null}
        isEndSelected={endPoint !== null}
        onStartPress={handleStartPress}
        onEndPress={handleEndPress}
        onResetPress={handleReset}
      />

      <InstructionsOverlay visible={!startPoint && !endPoint} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
