import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface InstructionsOverlayProps {
  visible: boolean;
}

export default function InstructionsOverlay({
  visible,
}: InstructionsOverlayProps) {
  if (!visible) return null;

  return (
    <View style={styles.instructionsOverlay}>
      <Text style={styles.instructionsText}>Press Start to begin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionsOverlay: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  instructionsText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
