const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

// 기본 설정
const defaultConfig = getDefaultConfig(__dirname);

// 사용자 정의 설정
const customConfig = {
  resolver: {
    // extraNodeModules 설정
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, "../../node_modules/@example-app/shared");
        },
      }
    ),
    // SVG 처리 설정
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

// 두 설정 병합
module.exports = mergeConfig(defaultConfig, customConfig);

