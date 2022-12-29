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
            "@hooks": "./src/hooks",
          },
        },
      ],

      'react-native-reanimated/plugin',
    ],
  };
};
