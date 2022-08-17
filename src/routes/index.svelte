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
	console.log('topics', topics);
</script>

<div class="container">
	<InnerHeader />
</div>
<div class="container">
	<div class="content">
		{#if topics.length > 0}
			{#each topics as item, index}
				<a href={`/sss`} class="card " class:done={false}>
					<div class="status">
						<img src="./check.svg" alt="" />
					</div>
					<h5>{index + 1 + '  '}. {item?.title}</h5>
				</a>
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-radius: 48px;
		cursor: pointer;
		.status {
			@apply absolute right-3 top-3 h-5;
			img {
				@apply h-full w-full;
				filter: grayscale(100%);
			}
		}
		h5 {
			align-items: center;
			font-weight: 600;
			font-size: 16px;
			color: #001e00;
			line-height: 22px;
		}
		p {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 24px;
			color: #001e00;
			margin: 10px 0px !important;
		}
		&.done {
			@apply border-theme bg-secondary  border-opacity-50;
			.status {
				img {
					@apply opacity-90 fill-red-600;
					filter: grayscale(0%);
				}
				svg {
					@apply hidden;
				}
			}
		}
	}
</style>
