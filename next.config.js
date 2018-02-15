require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
        'CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CONTENTFUL_SPACE_ID)
      })
    )
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}
