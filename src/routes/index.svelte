<script>
	import Card from '../components/Card.svelte';
	const contents = {
		'01. An Introduction': [
			{
				title: 'An Introduction to JavaScript',
				fileName: '1.1-an-introduction'
			},
			{
				title: 'Variables',
				fileName: '1.2-variables'
			},
			{
				title: 'Functions',
				fileName: '1.3-functions'
			},
			{
				title: 'Arrays',
				fileName: '1.4-arrays'
			}
		],
		'02. JavaScript Fundamentals': [
			{
				title: 'An Introduction to JavaScript',
				fileName: '1.1-an-introduction'
			},
			{
				title: 'Variables',
				fileName: '1.2-variables'
			},
			{
				title: 'Functions',
				fileName: '1.3-functions'
			},
			{
				title: 'Arrays',
				fileName: '1.4-arrays'
			}
		]
	};
</script>

<div class="container">
	{#each Object.entries(contents) as content, index}
		<div class="section">
			<h4>{content[0]}</h4>
			<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
				{#each content[1] as card}
					<a href={`/en/${card?.fileName}`}>
						<Card {card} />
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
			font-weight: 700;
			font-size: 32px;
			line-height: 42px;
			color: rgb(0, 0, 0);
			grid-column: 1 / 5;
			margin-top: 10px;
			margin-bottom: 35px;
		}
	}
</style>
