const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents.html'),
            filename: 'pages/continents.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages','countries.html'),
            filename: 'pages/countries.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages','manual.html'),
            filename: 'pages/manual.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'products.html'),
            filename: 'pages/products.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'africa.html'),
            filename: 'pages/continents/africa.html',

            minify: devMode ? false : true,
        }),
         new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'asia.html'),
            filename: 'pages/continents/asia.html',

            minify: devMode ? false : true,
         }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'north-america.html'),
            filename: 'pages/continents/north-america.html',

            minify: devMode ? false : true,
          }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'south-america.html'),
            filename: 'pages/continents/south-america.html',

            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'europe.html'),
            filename: 'pages/continents/europe.html',

            minify: devMode ? false : true,
        }),
         new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'australia.html'),
            filename: 'pages/continents/australia.html',

            minify: devMode ? false : true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.woff|ttf$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                 plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },

            {
                test: /\.(?:js|mjs|cjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', '@babel/preset-react'
                        ]
                    }
                }
            },
            {
        test: /\.(png|jpg|jpeg|gif)$/i, // Регулярное выражение для проверки расширений файлов
        use: [
          {
            loader: 'image-webpack-loader', // Используемый загрузчик для оптимизации изображений
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Качество JPEG изображения (0 - 100)
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9], // Качество PNG изображения (0 - 1)
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75, // Качество WebP изображения (0 - 100)
              },
            },
          },
                ],
        type: 'asset/resource',
          },
    
       
    
    ],
  },
}