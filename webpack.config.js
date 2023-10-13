// external imports
const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const autoprefixer = require("autoprefixer");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

// internal imports
const paths = require("./settings/paths");
const {
  cssRegex,
  cssModuleRegex,
  sassRegex,
  sassModuleRegex,
} = require("./settings/regexes");

const useTypeScript = fs.existsSync(paths.appTsConfig);

module.exports = ({ mode }) => {
  const isProduction = mode === "production";

  return {
    mode,
    entry: paths.appIndexJs,
    output: {
      assetModuleFilename: "images/[name][hash][ext]",
      clean: true,
      filename: "[name].js",
      path: paths.appBuild,
    },
    resolve: {
      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`).filter((ext) => useTypeScript || !ext.includes("ts")),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        useTypeScript && {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: [
            isProduction ? { loader: MiniCssExtractPlugin.loader, options: { suorceMap: true } } : "style-loader",
            "css-loader",
          ]
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: [
            isProduction ? { loader: MiniCssExtractPlugin.loader, options: { suorceMap: true } } : "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpe?g|gif|mp3|woff2?|ttf|eot)$/i,
          type: "assets/resource",
        }
      ].filter(Boolean),
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: path.join(__dirname, "public", "favicon.ico"),
        minify: isProduction ? {
          collapseWhitespace: true
        } : false,
        template: path.join(__dirname, "public", "index.html"),
      }),
      new Dotenv({
        path: "./.env",
      }),
      // new CopyWebpackPlugin({
      //   patterns: [{ from: "public/image", to: "build/image" }],
      // }),
      isProduction && new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        failOnError: true,
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      // minimizer: ["...", new CssMinimizerPlugin()],
    },
    devServer: {
      compress: isProduction, // сжатие gzip
      hot: true, // горячая перезагрузка при изменении в файле
      port: 3000, // номер порта для прослушивания запросов
      // применение заголовков ко всем ответам
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Methods": "*" },
      // для использования API history
      // Сюда же в качестве объекта можно передать параметры для реарйтов https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
      historyApiFallback: true
    },
    devtool: "inline-source-map",
  };
};
