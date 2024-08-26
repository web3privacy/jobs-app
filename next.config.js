/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: config => {
		config.externals.push('encoding', 'pino-pretty')
		config.resolve.fallback = { fs: false, net: false, tls: false }
		return config
	},
}

module.exports = nextConfig
