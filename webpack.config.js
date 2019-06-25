const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageJson = require('./package.json')

const extractCSS = new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true })

module.exports = {
  entry: [
    '@babel/polyfill', './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ],
            plugins: [
              [
                'react-intl-auto',
                {
                  removePrefix: 'src/',
                  filebase: true
                }
              ],
              'lodash',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-json-strings',
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true
                }
              ],
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-throw-expressions',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-logical-assignment-operators',
              '@babel/plugin-proposal-optional-chaining',
              [
                '@babel/plugin-proposal-pipeline-operator',
                {
                  proposal: 'minimal'
                }
              ],
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-do-expressions'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        include: /style|react-icons-weather/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: /fonts|react-icons-weather/,
        exclude: /images/,
        use: {
          loader: 'url-loader?limit=100000&name=fonts/[hash].[ext]'
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: /images/,
        exclude: /fonts/,
        use: {
          loader: 'url-loader?limit=100000&name=images/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version)
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: 'src/translations', to: 'translations' }
    ]),
    extractCSS
  ]
}

