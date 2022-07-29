<script>
	import Card from '../components/Card.svelte';
	import InnerHeader from '../components/InnerHeader.svelte';
	export let payload;
</script>

<div class="container">
	<InnerHeader />
	{#each payload as content, index}
		<div class="section">
			<h4>{content?.name}</h4>
			<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
				{#each content?.topics as card, index}
					<a href={`/${content?.name}/${card?.fileName}`}>
						<Card {card} {index} />
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.section {
		@apply py-7;
		h4 {
			font-family: Barlow, sans-serif;
			font-weight: 600;
			font-size: 1.5rem;
			line-height: 42px;
			margin-top: 10px;
			@apply lg:mb-7 mb-3;
			color: #fffffffa;
		}
	}
</style>
