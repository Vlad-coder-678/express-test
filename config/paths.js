const path = require("path");

const resolveApp = (appPath) => path.resolve(__dirname, appPath);

const moduleFileExtensions = [
  "js",
  "jsx",
];

module.exports = {
  appBuild: resolveApp("build"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("../index.jsx"),
  appJsConfig: resolveApp("../jsconfig.json"),
  appNodeModules: resolveApp("../node_modules"),
  moduleFileExtensions,
};
