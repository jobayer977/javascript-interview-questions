<script context="module">
	export async function load({ fetch }) {
		const url = `https://raw.githubusercontent.com/jobayer977/Javascript-Interview-Questions/main/json/topics.json`;
		try {
			const response = await fetch(url).then((r) => r.json());
			return {
				props: {
					topics: Object.values(response).flat(Infinity) || []
				}
			};
		} catch (error) {
			return {
				props: {
					topics: []
				}
			};
		}
	}
</script>

<script>
	export let topics = [];
	import InnerHeader from '../components/InnerHeader.svelte';
	import Topic from '../components/Topic.svelte';
	let searchTerm = '';
	$: sortedTopics = topics?.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="container">
	<InnerHeader
		totalTopics={topics.length}
		on:search={(e) => {
			searchTerm = e.detail;
		}}
	/>
</div>
<div class="container">
	<div class="content">
		{#if sortedTopics.length > 0}
			{#each sortedTopics as item, index}
				<Topic {index} {item} />
			{/each}
		{:else}
			<div class="p-8 text-center">
				<h3>No Topics Found</h3>
			</div>
		{/if}
	</div>
</div>
