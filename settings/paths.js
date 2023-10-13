const path = require("path");

const moduleFileExtensions = [
  "js",
  "jsx",
  "ts",
  "tsx",
];

module.exports = {
  appBuild: path.resolve(__dirname, "/build"),
  appHtml: path.resolve("public/index.html"),
  appIndexJs: path.resolve("./index.jsx"),
  appJsConfig: path.resolve("jsconfig.json"),
  appTsConfig: path.resolve("tsconfig.json"),
  moduleFileExtensions,
};
