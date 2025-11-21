/*
This file controls how Expo builds the native Android
and iOS applications. Any change here requires a full rebuild using:
 npx expo run:android
*/
import "dotenv/config";

export default {
  expo: {
    name: "Company Ride TestApp",
    slug: "company-ride-testapp",
    version: "1.0.0",

    android: {
      package: "com.company.ridetestapp",
      permissions: ["ACCESS_FINE_LOCATION"],
    },

    ios: {
      bundleIdentifier: "com.company.ridetestapp",
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          "Allow location access to show your position on the map",
      },
    },

    plugins: [
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsImpl: "mapbox",
          accessToken: process.env.MAPBOX_ACCESS_TOKEN,
        },
      ],
    ],
  },
};
