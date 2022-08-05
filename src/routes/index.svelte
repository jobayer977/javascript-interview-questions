<script lang="ts">
	import Card from '../components/Card.svelte';
	import InnerHeader from '../components/InnerHeader.svelte';
	import SeoHead from '../components/SeoHead.svelte';
	export let payload: any[] = [];
</script>

<SeoHead />
<div class="container " style="min-height: 75vh">
	<InnerHeader />
	{#if payload?.length}
		{#each payload || [] as content, index}
			<div class="section">
				<h4>{content?.folderName}</h4>
				<div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
					{#each content?.topics as card, index}
						<Card {card} {index} {content} />
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="postcss">
	.section {
		@apply py-2;
		h4 {
			font-family: Barlow, sans-serif;
			font-weight: 600;
			font-size: 1.5rem;
			line-height: 42px;
			margin-top: 10px;
			@apply mb-3;
			color: #fffffffa;
		}
	}
</style>
