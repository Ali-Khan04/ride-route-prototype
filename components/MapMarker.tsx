import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapboxGL from "@rnmapbox/maps";

interface MapMarkersProps {
  startPoint: number[] | null;
  endPoint: number[] | null;
}

export default function MapMarkers({ startPoint, endPoint }: MapMarkersProps) {
  return (
    <>
      {/* Render start and end point markers if they exist */}
      {/*MapboxGL.PointAnnotation lets you pin a place on map */}
      {startPoint && (
        <MapboxGL.PointAnnotation id="start" coordinate={startPoint}>
          <View style={styles.markerStart}>
            <Text style={styles.markerText}>S</Text>
          </View>
        </MapboxGL.PointAnnotation>
      )}

      {endPoint && (
        <MapboxGL.PointAnnotation id="end" coordinate={endPoint}>
          <View style={styles.markerEnd}>
            <Text style={styles.markerText}>E</Text>
          </View>
        </MapboxGL.PointAnnotation>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  markerStart: {
    width: 32,
    height: 32,
    backgroundColor: "#10B981",
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  markerEnd: {
    width: 32,
    height: 32,
    backgroundColor: "#EF4444",
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  markerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
