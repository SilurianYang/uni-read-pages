const TransformPages = require('./common/uni-pages-routes-bundle')
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
