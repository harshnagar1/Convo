// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// let config = getDefaultConfig(__dirname);

// // Apply NativeWind configuration
// config = withNativeWind(config, { input: "./global.css" });

// module.exports = config;
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
