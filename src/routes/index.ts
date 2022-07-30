// import path from 'path';
// /** @type {import('@sveltejs/kit').RequestHandler} */
// export async function GET() {
// 	const CWD = process.cwd();
// 	const ROUTES_DIR = path.resolve(CWD, 'src/routes');
// 	const folders = await import('fs');
// 	const foldersPaths = folders.readdirSync(ROUTES_DIR);
// 	const payload: any = [];
// 	await Promise.all(
// 		foldersPaths.map(async (folder: any) => {
// 			if (isNaN(folder.charAt(0))) return;
// 			const files = folders.readdirSync(path.resolve(ROUTES_DIR, folder));
// 			const content = {};
// 			content.name = folder;
// 			content.topics = [];
// 			await Promise.all(
// 				files.map(async (file) => {
// 					const filePath = path.resolve(ROUTES_DIR, folder, file);
// 					return import(filePath).then((module) => {
// 						const topic = {
// 							title: module?.metadata?.title,
// 							fileName: file.split('.')[0],
// 							questions: module?.metadata?.questions
// 						};
// 						content.topics.push(topic);
// 						return topic;
// 					});
// 				})
// 			);
// 			payload.push(content);
// 			return content;
// 		})
// 	);
// 	return {
// 		status: 200,
// 		headers: {
// 			'access-control-allow-origin': '*'
// 		},
// 		body: {
// 			number: Math.random(),
// 			payload
// 		}
// 	};
// }
import { slugFromPath } from '../utils/index';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	const folders = import.meta;
	console.log('folders', folders);
	const modules = import.meta.glob('./*/*.{md,svx,svelte.md}');
	const postPromises = [];
	for (const [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post) => ({
			slug,
			...post.metadata
		}));
		postPromises.push(promise);
	}
	const posts = await Promise.all(postPromises);
	return {
		body: {
			payload: posts
		}
	};
}
