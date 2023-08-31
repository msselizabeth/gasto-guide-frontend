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
    entry: {
           index: path.resolve(__dirname, 'src', 'pages', 'index', 'index.js'),
           countries: path.resolve(__dirname, 'src', 'pages', 'countries', 'countries.js'),
           products: path.resolve(__dirname, 'src', 'pages', 'products', 'products.js'),
           southAmerica: path.resolve(__dirname, 'src', 'pages', 'south-america', 'southAmerica.js'),
           northAmerica: path.resolve(__dirname, 'src', 'pages', 'north-america', 'northAmerica.js'),
           country: path.resolve(__dirname, 'src', 'pages', 'country-page', 'country.js'),
           recipe: path.resolve(__dirname, 'src', 'pages', 'recipe-page', 'recipe.js'),
    },
    // entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'index', 'index.html'),
            chunks: ['index'],
            filename: 'index.html',
            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'continents', 'index.html'),
            chunks: ['index'],
            filename: 'continents/index.html',
            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'countries','index.html'),
            chunks: ['countries'],
            filename: 'countries/index.html',
            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'manual', 'index.html'),
            chunks: ['index'],
            filename: 'manual/index.html',
            minify: devMode ? false : true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'products', 'index.html'),
            filename: 'products/index.html',
            chunks:['products'],
            minify: devMode ? false : true,
        }),
         new HtmlWebpackPlugin({
             template: path.resolve(__dirname, 'src', 'pages','country-page', 'index.html'),
             chunks: ['country'],
             filename: 'country-page/index.html',
             minify: devMode ? false : true,
         }),
         new HtmlWebpackPlugin({
             template: path.resolve(__dirname, 'src', 'pages', 'recipe-page', 'index.html'),
             chunks:['recipe'],
            filename: 'recipe-page/index.html',
            minify: devMode ? false : true,
        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'pages', 'continents', 'africa.html'),
        //     filename: 'pages/continents/africa.html',

        //     minify: devMode ? false : true,
        // }),
        //  new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'pages', 'continents', 'asia.html'),
        //     filename: 'pages/continents/asia.html',

        //     minify: devMode ? false : true,
        //  }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'north-america', 'index.html'),
            chunks:['northAmerica'],
            filename: 'north-america/index.html',
            minify: devMode ? false : true,
          }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'pages', 'south-america', 'index.html'),
            chunks:['southAmerica'],
            filename: 'south-america/index.html',
            minify: devMode ? false : true,
        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'pages', 'continents', 'europe.html'),
        //     filename: 'pages/continents/europe.html',

        //     minify: devMode ? false : true,
        // }),
        //  new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'pages', 'continents', 'australia.html'),
        //     filename: 'pages/continents/australia.html',

        //     minify: devMode ? false : true,
        // }),
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