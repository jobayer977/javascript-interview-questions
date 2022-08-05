/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url, params }) {
	const endpoint = `${url.origin}/__data.json`;
	const response = await fetch(endpoint).then((res) => res.json());
	let topic: any;
	try {
		response?.payload?.map((x) => {
			x.topics.map((y, i) => {
				if (y.fileName === params.fileName.replace('/', '')) {
					topic = { ...x.topics[i + 1], folderName: x?.folderName };
				}
			});
		});
	} catch (error) {
		return {
			status: 500,
			body: null
		};
	}
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: topic
	};
}
