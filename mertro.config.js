const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, "node_modules", name), // 경로 수정
      }
    ),
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  watchFolders: [
    path.resolve(__dirname, "../"),
    path.resolve(__dirname, "../.."),
  ], 
};

module.exports = mergeConfig(defaultConfig, customConfig);


