var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var smartImport = require('postcss-smart-import');
var IconfontWebpackPlugin = require('iconfont-webpack-plugin');
var WrapperPlugin = require('wrapper-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var isProduction = /--env=production/.test(process.argv);

var PATH = {
  VENDOR: __dirname + '/src/vendor.ts',
  MAIN: __dirname + '/src/main.ts'
}

var DIR = {
  OUTPUT: __dirname + '/../../src/main/webapp/assist/'
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
      },
      htmlhint: {
        configFile: './.htmlhintrc'
      },
      sasslint: {
        configFile: './.sass-lint.yml'
      },
      'html-minify-loader': {
        quotes: true,
        comments: false,
        dom: {
          lowerCaseAttributeNames: false
        }
      }
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: [
      'main',
      'vendor'
    ]
  }),
  new IconfontWebpackPlugin(),
];

if (isProduction) {
  plugins.push(new UglifyJSPlugin());
} else {
  new WrapperPlugin({
    header: isProduction ? '' : '// NOTE(thrbrd) v4crs/frontend/assist/src/ 以下のファイルを編集してください\n'
  })
}

module.exports = {
  cache: true,
  entry: {
    vendor: PATH.VENDOR,
    main: PATH.MAIN
  },
  output: {
    path: DIR.OUTPUT,
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  module: {
    exprContextCritical: false,
    rules: [ isProduction ? {} : {
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /vendor.ts|node_modules/
    }, isProduction ? {} : {
      enforce: 'pre',
      test: /\.html$/,
      loader: 'htmlhint-loader',
      exclude: /node_modules/
    }, isProduction ? {} : {
      enforce: 'pre',
      test: /\.scss$/,
      loader: 'sasslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ]
    }, {
      test: /\.html$/,
      use: isProduction ? [
        'html-loader',
        'html-minify-loader'
      ] : 'html-loader'
    }, {
      test: /\.scss$/,
      use: [
        'to-string-loader',
        isProduction ? 'css-loader?minimize' : 'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: plugins
};
