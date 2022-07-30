import metadataParser from 'markdown-yaml-metadata-parser';
import path from 'path';
import { readFileSync } from 'fs';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const CWD = process.cwd();
	const ROUTES_DIR = path.resolve(CWD, 'src/routes');
	const folders = await import('fs');
	const foldersPaths = folders.readdirSync(ROUTES_DIR);
	const payload: any = [];
	try {
		await Promise.all(
			foldersPaths.map(async (folder: any) => {
				if (isNaN(folder.charAt(0))) return;
				const files = folders.readdirSync(path.resolve(ROUTES_DIR, folder));
				const content = {};
				content.name = folder;
				content.topics = [];
				await Promise.all(
					files.map(async (file) => {
						const filePath = `${ROUTES_DIR}/${folder}/${file}`;
						const fileContentString = await readFileSync(filePath, 'utf8');
						const result = metadataParser(fileContentString)?.metadata;
						const topic = {
							title: result?.title,
							fileName: file.split('.')[0],
							questions: result?.questions
						};
						content.topics.push(topic);
					})
				);
				payload.push(content);
				return content;
			})
		);
	} catch (error) {
		return {
			status: 500,
			body: {
				payload: []
			}
		};
	}
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			payload
		}
	};
}
