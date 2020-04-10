let webpack = require('webpack')
let ImageminPlugin = require('imagemin-webpack-plugin').default
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'
const NODE_ENV_DEV = NODE_ENV === 'development'
const PORT = process.env.PORT || 3000
const FAVICON_DIR = './src/assets/favicon/favicon.png'
const TITLE = 'ProjectName'

module.exports = {
  entry: ['./src/index.tsx'],
  mode: NODE_ENV,
  devtool: NODE_ENV_DEV ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // TODO this will rename all vendor scss if they are
                localIdentName: '[name]--[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // https://stackoverflow.com/a/59075858/2046647
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff)(\?v=[0-9].[0-9].[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: PORT,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.PORT': JSON.stringify(PORT)
    }),
    new CopyWebpackPlugin([]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: TITLE,
      filename: 'index.html'
    }),
    ...(FAVICON_DIR ? [new FaviconsWebpackPlugin(FAVICON_DIR)] : []),
    new ImageminPlugin({
      disable: NODE_ENV_DEV,
      pngquant: {
        quality: '95-100'
      },
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
}
