/* eslint-disable global-require, import/no-dynamic-require */
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

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

const paths = {
  appBuild: resolveApp("build"),
  appEnv: resolveApp("./.env"),
  appJsConfig: resolveApp("./jsconfig.json"),
  appHtml: resolveApp(path.join(__dirname, "public", "index.html")),
  appIndexJs: resolveApp("./index.jsx"),
  appFavicon: resolveApp(path.join(__dirname, "public", "favicon.ico")),
  appNodeModules: resolveApp("./node_modules"),
};

/**
 * @description Возвращает compilerOptions из jsconfig.json
 */
const getCompilerOptions = () => {
  const hasJsConfig = fs.existsSync(paths.appJsConfig);

  if (!hasJsConfig) throw new Error("Конфиг jsconfig.json отсутствует. Пожалуйста, добавьте jsconfig.json");

  const config = require(paths.appJsConfig);

  return config?.compilerOptions || {};
};

const moduleFileExtensions = [
  "js",
  "jsx",
];

module.exports = ({ mode }) => {
  const isProductionMode = mode === "production";
  const compilerOptions = getCompilerOptions();

  return {
    mode,
    entry: paths.appIndexJs,
    output: {
      assetModuleFilename: "images/[name][ext]",
      clean: true,
      filename: "bundle.js",
      path: paths.appBuild,
    },
    resolve: {
      alias: {
        ...(compilerOptions.paths || {}),
      },
      extensions: moduleFileExtensions.map((ext) => `.${ext}`)
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            isProductionMode ? { loader: MiniCssExtractPlugin.loader, options: { suorceMap: true } } : "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.woff2$/i,
          type: "asset/resource",
        }
      ].filter(Boolean),
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: paths.appFavicon,
        minify: isProductionMode ? {
          collapseWhitespace: true
        } : false,
        template: paths.appHtml,
      }),
      new Dotenv({ path: paths.appEnv }),
      // new CopyWebpackPlugin({
      //   patterns: [{ from: "public/image", to: "build/image" }],
      // }),
      isProductionMode && new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new ESLintPlugin({
        extensions: moduleFileExtensions,
        failOnError: true,
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProductionMode,
      // minimizer: ["...", new CssMinimizerPlugin()],
    },
    devServer: {
      compress: isProductionMode,
      hot: true,
      port: 3000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*"
      },
      historyApiFallback: true
    },
    devtool: "inline-source-map",
  };
};
