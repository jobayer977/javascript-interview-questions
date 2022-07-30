import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		// mdsvex({
		// 	extensions: ['.svelte.md', '.md', '.svx'],
		// 	highlight: {
		// 		alias: { js: 'javascript' }
		// 	},
		// 	layout: './src/lib/BlogLayout.svelte'
		// })
		mdsvex({
			extensions: ['.md']
		})
	]
};
export default config;
