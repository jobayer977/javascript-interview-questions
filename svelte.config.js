import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
	kit: {
		adapter: adapter(),
		package: {
			files: (file) => !file.includes('site')
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			highlight: {
				alias: { js: 'javascript' }
			},
			layout: './src/lib/BlogLayout.svelte'
		})
	]
};
export default config;
