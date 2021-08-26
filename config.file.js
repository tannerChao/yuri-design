/*
 * @Description:
 * @Autor: botter
 * @Date: 2021-08-23 00:45:20
 * @LastEditTime: 2021-08-26 17:17:13
 */
const fs = require('fs');
const path = require('path');

/**
 * @name: rootDir
 * @msg: 根目录
 */
const rootDir = path.resolve(__dirname, './');

/**
 * @name: cModuleNames
 * @msg: component url
 */
const componentDir = 'src/components';

/**
 * @name: cModuleNames
 * @msg: output module name
 */
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
/**
 * @name: outputDir
 * @msg: output module file
 */
const outputDir = path.resolve(__dirname, 'dist');

/**
 * @name: cModuleMap
 * @msg: output module url
 */
const cModuleMap = cModuleNames.reduce((prev, name) => {
  if (name !== '.DS_Store') {
    prev[name] = path.join(rootDir, `${componentDir}/${name}/index.ts`);
  }
  return prev;
}, {});

/**
 * @name: externals
 * @msg: 外部依赖包
 */

module.exports = {
  cModuleMap,
  outputDir,
  cModuleNames,
  rootDir,
};
