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
            "@screens": "./src/screens",
            "@themes": "./src/themes",
            "@components": "./src/components",
          },
        },
      ],

      'react-native-reanimated/plugin',
    ],
  };
};
