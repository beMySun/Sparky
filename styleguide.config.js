const webpackConfig = require('./webpack.config');
const packageInfo = require('./package.json');
const custom = require('./styleguide.custom');

module.exports = {
	title: `🐶 Sparky UI v${packageInfo.version}`,
	components: 'src/components/**/*.{js, jsx, ts, tsx}',
	webpackConfig,
	compilerConfig: {
    objectAssign: 'Object.assign',
    transforms: {
      dangerousTaggedTemplateString: true,
    },
	},
	sections: [
		{
      name: 'Introduction',
      content: './src/docs/introduction.md',
		},
		{
      name: 'Installation',
      content: './src/docs/install.md',
    },
    {
      name: 'Documentation',
      content: 'Readme.md'
    },
    {
      name: 'Components',
      components: './src/components/**/[A-Z]*.js'
    }
	],
	theme: custom.theme,
  styles: custom.styles,
};
