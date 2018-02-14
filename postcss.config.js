module.exports = {
  plugins: [
    require('postcss-easy-import')({
      plugins: [
        require('stylelint')({})
      ]
    }),
    require('postcss-cssnext')({
      browsers: "last 2 versions",
      features:{
        rem:{
          rootValue: '10px'
        }
      }
    }),
    require('lost'),
    require('uncss').postcssPlugin({
      html: [
        "./www/index.html"
      ]
    }),
    require('cssnano')({
      zindex: false,
      autoprefixer: false
    }),
    require('postcss-hash')({
      algorithm: 'sha256',
      trim: 20,
      manifest: './src/php/busters.json'
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
}
