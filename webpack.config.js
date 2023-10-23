module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Set "sourceType" to "module" for all non-server files
        config.module.rules.push({
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: {
            loader: 'next-babel-loader',
            options: {
              isServer: false,
              sourceType: 'module', // Set sourceType to "module"
            },
          },
        })
      }
  
      return config
    },
  }
  