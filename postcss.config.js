module.exports = (cfg) => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {
        preset: 'default',
      },
    },
  };
};
