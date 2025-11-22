import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

type SelectionMode = "start" | "end" | null;

interface MapControlsProps {
  selectionMode: SelectionMode;
  isStartSelected: boolean;
  isEndSelected: boolean;
  onStartPress: () => void;
  onEndPress: () => void;
  onResetPress: () => void;
}

export default function MapControls({
  selectionMode,
  isStartSelected,
  isEndSelected,
  onStartPress,
  onEndPress,
  onResetPress,
}: MapControlsProps) {
  return (
    <View style={styles.controls}>
      <Pressable
        style={[
          styles.button,
          selectionMode === "start" && styles.activeButton,
          isStartSelected && styles.selectedButton,
        ]}
        onPress={onStartPress}
      >
        <Text style={styles.buttonLabel}>
          {selectionMode === "start" ? "📍 Tap on map" : "📍"}
        </Text>
        <Text style={styles.buttonText}>
          {isStartSelected ? "Start Set" : "Start"}
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          selectionMode === "end" && styles.activeButton,
          isEndSelected && styles.selectedButton,
        ]}
        onPress={onEndPress}
      >
        <Text style={styles.buttonLabel}>
          {selectionMode === "end" ? "📍 Tap on map" : "🎯"}
        </Text>
        <Text style={styles.buttonText}>
          {isEndSelected ? "End Set" : "End"}
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.resetButton,
          !isStartSelected && !isEndSelected && styles.disabledButton,
        ]}
        onPress={onResetPress}
        disabled={!isStartSelected && !isEndSelected}
      >
        <Text style={styles.buttonText}>🔄 Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    position: "absolute",
    top: 20,
    left: 10,
    right: 10,
    zIndex: 10,
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#374151",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#3B82F6",
    borderColor: "#93C5FD",
    borderWidth: 2,
  },
  selectedButton: {
    backgroundColor: "#10B981",
    borderColor: "#6EE7B7",
  },
  resetButton: {
    backgroundColor: "#991b1b",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonLabel: {
    fontSize: 16,
    marginBottom: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
});
