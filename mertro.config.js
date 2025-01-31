const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, "../../node_modules/@example-app/shared");
        },
      }
    ),
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  watchFolders: [
    path.resolve(__dirname, "../"),
    path.resolve(__dirname, "../.."),
    path.resolve(__dirname, "../../node_modules/@example-app/shared"),
  ],
};

module.exports = mergeConfig(defaultConfig, customConfig);

