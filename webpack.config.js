const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    filename: env.prod ? '[name].bundle.[hash].js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  mode: env.dev ? "development" : "production",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: env.dev ? "source-map" : "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: env.prod,
                sourceMap: env.dev
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourceMap: env.dev
              }
            }
          ]
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: env.prod ? '[path][name].[hash].[ext]' : '[path][name].[ext]'
            }  
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: env.prod && {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new ExtractTextPlugin({
      filename: env.prod ? 'styles.[hash].css' : 'styles.css'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  watch: env.dev
})
