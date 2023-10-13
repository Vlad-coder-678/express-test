/* eslint-disable global-require, import/no-dynamic-require */
// external importa
const fs = require("fs");

// internal imports
const paths = require("./paths");

const hasJsConfig = fs.existsSync(paths.appJsConfig);

const getCompilerOptions = () => {
  if (!hasJsConfig) throw new Error("Конфиг jsconfig.json отсутствует. Пожалуйста, добавьте jsconfig.json");

  const config = require(paths.appJsConfig);

  return config?.compilerOptions || {};
};

module.exports = {
  getCompilerOptions,
};
