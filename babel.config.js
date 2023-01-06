module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@routes": "./src/routes",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@themes": "./src/themes",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@services": "./src/services",
          },
        },
      ],

      "react-native-reanimated/plugin",
    ],
  };
};
