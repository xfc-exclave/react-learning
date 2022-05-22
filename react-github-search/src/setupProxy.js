const {createProxyMiddleware: proxy} = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/api', {
			target: 'https://api.github.com',
			changeOrigin: true,
			pathRewrite: { '^/api': '' }
		}),
		proxy('/dev', {
			target: 'http://localhost:8080',
			changeOrigin: true,
			pathRewrite: { '^/dev': '' }
		})
	)
}