module.exports = {
    entry:'./src/index.jsx',
    output: {
        path: __dirname + '/public/js' ,
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}
