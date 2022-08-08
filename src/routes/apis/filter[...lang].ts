import { fromDir } from '../../utils';
import fs from 'fs';
import metadataParser from 'markdown-yaml-metadata-parser';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	const contents: any = {};
	fromDir(`./src/routes/${params['lang']}/`, '.md', (filename: any) => {
		const res = filename.split('/');
		const currentLanguage = res[2];
		const currentSectionName = res[3];
		const currentFileName = res[4];
		const fileContentString = fs.readFileSync(filename, 'utf8');
		const result = metadataParser(fileContentString)?.metadata;
		const payload = {
			section: currentSectionName,
			name: currentFileName,
			meta: result,
			language: currentLanguage
		};
		contents[currentSectionName] = [...(contents[currentSectionName] || []), payload];
	});
	const total = Object.keys(contents).reduce((acc, curr) => {
		return acc + contents[curr].length;
	}, 0);
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			payload: Object.keys(contents).length ? contents : null,
			total: total
		}
	};
}
