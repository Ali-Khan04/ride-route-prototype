import React from "react";
import { StyleSheet } from "react-native";
import Mapbox from "../services/mapbox";

export default function MapViewComponent() {
  return (
    <Mapbox.MapView style={styles.map}>
      <Mapbox.Camera
        zoomLevel={14}
        centerCoordinate={[73.0479, 33.6844]} //for Islamabad
      />
      <Mapbox.UserLocation visible />
    </Mapbox.MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
