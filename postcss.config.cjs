const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssUrl = require('postcss-url')

const dev = process.argv.includes('dev')

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
		postcssUrl({
			url: asset => {
				const base = dev ? '/' : '/voicegpt-web'
				return asset.url.startsWith(base) ? asset.url : `${base}/${asset.url}`
			},
		}),
	],
}

module.exports = config
