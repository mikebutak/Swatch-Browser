const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      path: path.resolve(__dirname, 'client/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            plugins: ['syntax-dynamic-import'],
          },
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            Object.assign(
              {
                fallback: {
                  loader: require.resolve('style-loader'),
                  options: {
                    hmr: false,
                  },
                },
                use: [
                  {
                    loader: require.resolve('css-loader'),
                    options: {
                      importLoaders: 1,
                      minimize: true,
                      // sourceMap: shouldUseSourceMap,
                      modules: true,
                      localIdentName: '[name]__[local]__[hash:base64:5]'
                    },
                  },
                  {
                    loader: require.resolve('postcss-loader'),
                    options: {
                      // Necessary for external CSS imports to work
                      // https://github.com/facebookincubator/create-react-app/issues/2677
                      ident: 'postcss',
                      plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                          browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                          ],
                          flexbox: 'no-2009',
                        }),
                      ],
                    },
                  },
                ],
              },
              // extractTextPluginOptions
            )
          )
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new ExtractTextPlugin("styles.css"),
      // ,
      // new UglifyJSPlugin(),
    ],
  };
  