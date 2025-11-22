import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface StatusBarProps {
  isStartSelected: boolean;
  isEndSelected: boolean;
  loading: boolean;
}

export default function StatusBar({
  isStartSelected,
  isEndSelected,
  loading,
}: StatusBarProps) {
  if (!isStartSelected && !isEndSelected) return null;

  return (
    <View style={styles.statusBar}>
      <Text style={styles.statusText}>
        {isStartSelected && <Text>✓ Start</Text>}
        {isStartSelected && isEndSelected && <Text> • </Text>}
        {isEndSelected && <Text>✓ End</Text>}
      </Text>
      {loading && <Text style={styles.loadingText}>Calculating route...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#059669",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  loadingText: {
    color: "white",
    fontSize: 12,
    fontStyle: "italic",
  },
});
