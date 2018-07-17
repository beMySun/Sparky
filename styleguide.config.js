
const packageInfo = require('./package.json');
const propsParser = require('react-docgen-typescript');

module.exports = {
  title: `🐶 UI  v${packageInfo.version}`,
  defaultExample: true,
  components: 'src/components/**/index.{ts, tsx}',
  propsParser: propsParser.withCustomConfig('./tsconfig.json').parse,
  // usageMode: true,
  skipComponentsWithoutExample: true,
  ignore: [
    '**/*.internal.js',
    '**/iconfont.js',
  ],
  // template: 'src/templates/index.html',
};