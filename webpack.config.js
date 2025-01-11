const path = require('path')

module.exports = {
  entry: './src/client/index.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-class-properties'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Add this rule to handle .css files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Resolve @import and url() in CSS
          'postcss-loader', // Use PostCSS (including Tailwind and Autoprefixer)
        ],
      },
    ],
  },

  mode: 'development',
}
