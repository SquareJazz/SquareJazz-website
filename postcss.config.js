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
    require('postcss-uncss')({
      html: [
        "./www/index.html"
      ],
      ignore: [

      ]
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
    require('cssnano')({
      zindex: false
    }),
    require('postcss-hash')({
      algorithm: 'sha256',
      trim: 20,
      manifest: './src/php/busters.json'
    }),
  ]
}
