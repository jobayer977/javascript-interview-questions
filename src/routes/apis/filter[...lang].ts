import metadataParser from 'markdown-yaml-metadata-parser';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	const fromDir = async (startPath: string, filter: string, callback: any) => {
		const fs = await import('fs');
		console.log(`fromDir: ${startPath}`);
		if (!fs.existsSync(startPath)) {
			console.log('no dir ', startPath);
			return;
		}
		const files = fs.readdirSync(startPath);
		for (let i = 0; i < files.length; i++) {
			const filename = `${startPath}/${files[i]}`;
			const stat = fs.lstatSync(filename);
			if (stat.isDirectory()) {
				fromDir(filename, filter, (res: any) => {
					callback?.(res);
				});
			} else if (filename.endsWith(filter)) {
				callback?.(filename);
			}
		}
	};
	const contents: any = {};
	await fromDir(`./src/routes${params['lang']}`, '.md', (filename: any) => {
		const res = filename.split('/');
		console.log('res', res);
		const currentLanguage = res[3];
		const currentSectionName = res[4];
		const currentFileName = res[5];
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
