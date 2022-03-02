/* eslint-disable import/no-extraneous-dependencies */
const { addBeforeLoader, loaderByName, whenDev } = require('@craco/craco');
const sortMediaQueries = require('postcss-sort-media-queries');

let isDev;
whenDev(() => isDev = true);

module.exports = {
	style: {
		modules: {
			localIdentName: `${isDev ? '[name]_[local]__' : ''}[hash:base64:5]`
		},
		postcss: {
			loaderOptions: postcssLoaderConfig => {
				postcssLoaderConfig.postcssOptions.plugins.push(sortMediaQueries());
				return postcssLoaderConfig;
			}
		}
	},
	webpack: {
		configure: webpackConfig => {
			if (!isDev) {
				addBeforeLoader(webpackConfig, loaderByName('resolve-url-loader'), {
					loader: 'clean-css-loader',
					options: { level: 2 }
				});
			}
			return webpackConfig;
		}
	}
};
