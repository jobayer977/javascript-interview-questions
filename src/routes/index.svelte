<script>
	import Card from '../components/Card.svelte';
	const contents = {
		'01. An Introduction': [
			{
				title: 'What are the possible ways to create objects in JavaScript',
				fileName: '1.1-an-introduction',
				isDone: true
			},
			{
				title: 'What is a prototype chain',
				fileName: '1.2-variables'
			},
			{
				title: 'What is the difference between Call, Apply and Bind',
				fileName: '1.3-functions'
			},
			{
				title: 'What is JSON and its common operations',
				fileName: '1.4-arrays'
			}
		],
		'02. JavaScript Fundamentals': [
			{
				title: 'What is the purpose of the array slice method',
				fileName: '1.1-an-introduction'
			},
			{
				title: 'What is the purpose of the array splice method',
				fileName: '1.2-variables'
			},
			{
				title: 'What is the difference between slice and splice',
				fileName: '1.3-functions'
			},
			{
				title: 'How do you compare Object and Map',
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
				{#each content[1] as card, index}
					<a href={`/en/${card?.fileName}`}>
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
			font-weight: 700;
			font-size: 1.5rem;
			line-height: 42px;
			grid-column: 1 / 5;
			margin-top: 10px;
			margin-bottom: 35px;
		}
	}
</style>
