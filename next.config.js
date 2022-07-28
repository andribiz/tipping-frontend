// const withPlugins = require("next-compose-plugins");
// const withOptimizedImages = require("next-optimized-images");
// const withFonts = require("next-fonts");

const nextConfiguration = {
  images: {
    disableStaticImages: true,
    domains: ['s3.amazonaws.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
  // webpack: (config) => {
  //   config.externals = config.externals || {};
  //   config.externals["styletron-server"] = "styletron-server";
  //   return config;
  // },
};

// module.exports = withPlugins(
//   [withOptimizedImages, withFonts],
//   nextConfiguration
// );
module.exports = nextConfiguration;
