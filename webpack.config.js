const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let resolve = (dir) => path.join(__dirname, 'src', dir);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ],
};

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },

//   // entry: {
//   //   page1: resolve('./page1'),
//   //   page2: resolve('./page2'),
//   // },
//   // output: {
//   //   path: path.join(__dirname, 'build'),
//   //   publicPath: '/',
//   //   filename: 'js/[name].js',
//   //   chunkFilename: 'js/[id].[name].js?[hash]',
//   //   library: '[name]',
//   // },
//   optimization: {
//     minimize: false,
//   },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       vue$: 'vue/dist/vue.esm.js',
//       '@': resolve('src'),
//     },
//   },

//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//       },
//       {
//         test: /\.css$/,
//         use: ['vue-style-loader', 'css-loader'],
//       },
//       {
//         test: /\.sass$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               indentedSyntax: true,
//               sassOptions: {
//                 indentedSyntax: true,
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.scss$/,
//         use: ['vue-style-loader', 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'img/[name].[hash:7].[ext]',
//         },
//       },
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'media/[name].[hash:7].[ext]',
//         },
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'fonts/[name].[hash:7].[ext]',
//         },
//       },
//     ],
//   },
//   plugins: [new VueLoaderPlugin()],
// };
