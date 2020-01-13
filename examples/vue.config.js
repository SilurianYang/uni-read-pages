const TransformPages = require('./common/uni-read-pages-bundle')
const tfPages = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new tfPages.webpack.DefinePlugin({
				ROUTES: JSON.stringify(tfPages.routes)
			})
		]
	}
}
