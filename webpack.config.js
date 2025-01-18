const path = require('path')

module.exports = {
  entry: './src/client/index.tsx',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/, // Include both .js, .ts, .tsx
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript', // Add the TypeScript preset
            ],
            plugins: ['@babel/plugin-transform-class-properties'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // Add .ts and .tsx to resolve extensions
  },

  mode: 'development',
}
