var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var smartImport = require('postcss-smart-import');
var IconfontWebpackPlugin = require('iconfont-webpack-plugin');

var PATH = {
  MAIN: __dirname + '/test/main.test.ts',
}

var plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        smartImport,
        precss,
        autoprefixer({
          browsers: [
            'ie >= 9'
          ]
        })
      ],
      tslint: {
        configFile: './tslint.json'
      }
    }
  }),
  new IconfontWebpackPlugin()
];

module.exports = {
  entry: {
    main: PATH.MAIN
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  module: {
    exprContextCritical: false,
    rules: [{
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /vendor.ts|node_modules/
    }, {
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ]
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.scss$/,
      use: [
        'to-string-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: plugins
};
