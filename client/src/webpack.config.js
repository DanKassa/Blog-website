// webpack.config.js

module.exports = {
    // Your existing configuration...
  
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "util": require.resolve("util/"),
        "http": require.resolve("stream-http"),
        "querystring": require.resolve("querystring-es3"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
      },
    },
  };
  