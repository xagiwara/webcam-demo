module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/background/preload.ts',
      mainProcessFile: 'src/background/index.ts',
    },
  },
};
