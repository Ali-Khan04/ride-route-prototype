import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

interface MapLayerControlsProps {
  showTraffic: boolean;
  showBuildings: boolean;
  show3D: boolean;
  onTrafficToggle: (value: boolean) => void;
  onBuildingsToggle: (value: boolean) => void;
  on3DToggle: (value: boolean) => void;
}

export default function MapLayerControls({
  showTraffic,
  showBuildings,
  show3D,
  onTrafficToggle,
  onBuildingsToggle,
  on3DToggle,
}: MapLayerControlsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, showTraffic && styles.activeButton]}
        onPress={() => onTrafficToggle(!showTraffic)}
      >
        <Text style={styles.buttonText}>🚗 Traffic</Text>
      </Pressable>

      <Pressable
        style={[styles.button, show3D && styles.activeButton]}
        onPress={() => on3DToggle(!show3D)}
      >
        <Text style={styles.buttonText}>🏢 3D</Text>
      </Pressable>

      <Pressable
        style={[styles.button, showBuildings && styles.activeButton]}
        onPress={() => onBuildingsToggle(!showBuildings)}
      >
        <Text style={styles.buttonText}>🏗️ Buildings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    top: 80,
    gap: 8,
    zIndex: 5,
  },
  button: {
    backgroundColor: "rgba(31, 41, 55, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  activeButton: {
    backgroundColor: "#10B981",
    borderColor: "#6EE7B7",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
});
