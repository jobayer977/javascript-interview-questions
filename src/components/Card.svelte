<script lang="ts">
	export let card: any = {};
	export let index = 0;
</script>

<div class="card" class:done={card?.isDone}>
	<div class="status">
		<img src="./check.svg" alt="" />
	</div>
	<h5>{index + 1 + '  '}.{card?.title}</h5>
</div>

<style lang="postcss">
	.card {
		min-height: 150px;
		background: #161627;
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px #0000003d, 0 1px 3px #0000001f;
		padding: 15px;
		border-width: 3px;
		@apply border-solid relative border-white border-opacity-10 transition-all hover:scale-105;
		.status {
			@apply absolute right-3 top-3 h-5;
			img {
				@apply h-full w-full opacity-10;
				filter: grayscale(100%);
			}
		}
		h5 {
			font-family: Barlow, sans-serif;
			font-weight: 500;
			font-size: 1rem;
			line-height: 26px;
			text-decoration: none;
			cursor: pointer;
			padding-right: 20px;
		}
		p {
			font-family: Barlow, sans-serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 24px;
			color: ffffffc7;
			margin: 10px 0px !important;
		}
		&.done {
			@apply border-white border-opacity-90;
			.status {
				img {
					@apply opacity-90 fill-red-600;
				}
				svg {
					@apply hidden;
				}
			}
		}
	}
</style>
