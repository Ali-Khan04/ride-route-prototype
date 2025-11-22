import React from "react";
import MapboxGL from "@rnmapbox/maps";
import type { Feature, LineString } from "geojson";

interface Props {
  coordinates: number[][];
}

export default function RouteLine({ coordinates }: Props) {
  if (!coordinates.length) return null;
  // Create a GeoJSON feature for the route line
  const routeFeature: Feature<LineString> = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates,
    },
  };

  return (
    <>
      {/* Provides GeoJSON data source for drawing routes or shapes on the map */}
      <MapboxGL.ShapeSource id="routeSource" shape={routeFeature}>
        {/* Visually renders the route line using the provided shape data */}
        <MapboxGL.LineLayer
          id="routeLine"
          style={{
            lineColor: "#2563eb",
            lineWidth: 5,
          }}
        />
      </MapboxGL.ShapeSource>
    </>
  );
}
