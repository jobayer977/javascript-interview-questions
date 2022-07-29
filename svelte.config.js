import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';
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
		mdsvex({
			extensions: ['.svelte', '.md'],
			highlight: {
				alias: { js: 'javascript' }
			},
			layout: './src/lib/BlogLayout.svelte'
		})
	]
};
export default config;
