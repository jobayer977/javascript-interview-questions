import { sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000
	},
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
	}
};
export default config;
