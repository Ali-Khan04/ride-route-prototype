import React from "react";
import MapboxGL from "@rnmapbox/maps";

interface MapLayersProps {
  showTraffic: boolean;
  showBuildings: boolean;
  show3D: boolean;
}

export default function MapLayers({
  showTraffic,
  showBuildings,
  show3D,
}: MapLayersProps) {
  return (
    <>
      {/* Traffic Layer */}
      {showTraffic && (
        <MapboxGL.RasterSource
          id="traffic-source"
          url="mapbox://mapbox.mapbox-traffic-v1"
          tileSize={512}
        >
          <MapboxGL.RasterLayer
            id="traffic-layer"
            sourceID="traffic-source"
            style={{
              rasterOpacity: 0.7,
            }}
          />
        </MapboxGL.RasterSource>
      )}

      {/* 3D Buildings Layer */}
      {show3D && (
        <MapboxGL.VectorSource
          id="building-source"
          url="mapbox://mapbox.mapbox-streets-v8"
        >
          <MapboxGL.FillLayer
            id="buildings"
            sourceID="building-source"
            sourceLayerID="building"
            style={{
              fillColor: "#888888",
              fillOpacity: 0.7,
            }}
          />
          <MapboxGL.LineLayer
            id="building-line"
            sourceID="building-source"
            sourceLayerID="building"
            style={{
              lineColor: "#666666",
              lineWidth: 1,
              lineOpacity: 0.5,
            }}
          />
        </MapboxGL.VectorSource>
      )}
    </>
  );
}
