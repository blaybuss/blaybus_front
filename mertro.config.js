const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // SVG 처리 설정
  config.transformer = {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"],
  };

  return config;
})();
