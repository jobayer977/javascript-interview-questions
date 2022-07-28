<script>
	import Card from '../components/Card.svelte';
</script>

<div class="container">
	<div class="section">
		<h4>01. An introduction</h4>
		<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
			<Card isDone />
			<Card isDone />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
	<div class="section">
		<h4>An introduction</h4>
		<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
	<div class="section">
		<h4>An introduction</h4>
		<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
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
