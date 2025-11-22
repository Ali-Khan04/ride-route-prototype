export const fetchRoute = async (start: number[], end: number[]) => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.routes[0].geometry.coordinates;
};
