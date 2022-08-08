/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url, params }) {
	const endpoint = `${url.origin}/apis/filter/${params.lang}`;
	const response = await fetch(endpoint).then((res) => res.json());
	let nextTopic: any;
	Object.values(response?.payload)?.map((x: any) => {
		x?.map((y: any, i) => {
			if (y?.name === params.fileName.replace('/', '')) {
				nextTopic = x[i + 1];
			}
		});
	});
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: nextTopic
	};
}
