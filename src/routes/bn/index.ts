/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	const response = await fetch(`${url.origin}/apis/filter/bn`);
	const data = await response.json();
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: data
	};
}
