var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var smartImport = require('postcss-smart-import');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var IconfontWebpackPlugin = require('iconfont-webpack-plugin');
var WrapperPlugin = require('wrapper-webpack-plugin');

var isProduction = /--env=production/.test(process.argv);

var PATH = {
  COMMON: __dirname + '/src/styles/common.scss'
}

var DIR = {
  OUTPUT: __dirname + '/../../src/main/webapp/assist/'
}

let extractCSS = new ExtractTextPlugin('[name].css');

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
      sasslint: {
        configFile: './.sass-lint.yml'
      }
    }
  }),
  new IconfontWebpackPlugin(),
  extractCSS
];

if (!isProduction) {
  plugins.push(new WrapperPlugin({
    header: isProduction ? '' : '/* NOTE(thrbrd) v4crs/frontend/assist/src/ 以下のファイルを編集してください */\n'
  }));
}

module.exports = {
  cache: true,
  entry: {
    common: PATH.COMMON
  },
  output: {
    path: DIR.OUTPUT,
    filename: '[name].css'
  },
  module: {
    rules: [isProduction ? {} : {
      enforce: 'pre',
      test: /\.scss$/,
      loader: 'sasslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader!sass-loader'
      })
    }]
  },
  plugins: plugins
};
