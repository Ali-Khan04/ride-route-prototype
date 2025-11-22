import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";

interface MapStyleToggleProps {
  currentStyle: string;
  onStyleChange: (style: string) => void;
}

// mapbox style options
const STYLES = [
  {
    name: "Dark",
    value: "mapbox://styles/mapbox/dark-v11",
    icon: "🌙",
    description: "Dark with traffic",
  },
  {
    name: "Light",
    value: "mapbox://styles/mapbox/light-v11",
    icon: "☀️",
    description: "Bright & clear",
  },
  {
    name: "Streets",
    value: "mapbox://styles/mapbox/streets-v12",
    icon: "🛣️",
    description: "Detailed streets",
  },
  {
    name: "Satellite",
    value: "mapbox://styles/mapbox/satellite-streets-v12",
    icon: "🛰️",
    description: "Satellite + streets",
  },
  {
    name: "Outdoors",
    value: "mapbox://styles/mapbox/outdoors-v12",
    icon: "🏔️",
    description: "Terrain & nature",
  },
];

export default function MapStyleToggle({
  currentStyle,
  onStyleChange,
}: MapStyleToggleProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {STYLES.map((style) => (
          <Pressable
            key={style.value}
            style={[
              styles.styleButton,
              currentStyle === style.value && styles.activeStyle,
            ]}
            onPress={() => onStyleChange(style.value)}
          >
            <Text style={styles.icon}>{style.icon}</Text>
            <Text
              style={[
                styles.styleName,
                currentStyle === style.value && styles.activeText,
              ]}
            >
              {style.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    left: 10,
    right: 10,
    zIndex: 5,
  },
  scroll: {
    flexDirection: "row",
  },
  styleButton: {
    backgroundColor: "rgba(31, 41, 55, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  activeStyle: {
    backgroundColor: "#3B82F6",
    borderColor: "#93C5FD",
  },
  icon: {
    fontSize: 18,
    marginBottom: 4,
  },
  styleName: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
  activeText: {
    color: "#DBEAFE",
  },
});
