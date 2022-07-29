<script lang="ts">
	export let card: any = {};
</script>

<div class="card" class:done={card?.isDone}>
	<div class="status">
		<img src="./check.svg" alt="" />
	</div>
	<h5>{card?.title}</h5>
	<!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore.</p> -->
</div>

<style lang="postcss">
	.card {
		background-color: rgb(255, 255, 255);
		border-radius: 3px;
		border-width: 3px;
		padding: 15px;
		@apply rounded-md   border-solid relative;
		.status {
			@apply absolute right-1 top-1 h-5;
			img {
				@apply h-full w-full opacity-10;
				filter: grayscale(100%);
			}
		}
		h5 {
			font-family: Barlow, sans-serif;
			font-weight: 700;
			font-size: 18px;
			line-height: 26px;
			color: rgb(0, 0, 0);
			text-decoration: none;
			cursor: pointer;
		}
		p {
			font-family: Barlow, sans-serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 24px;
			color: rgb(55, 63, 73);
			margin: 10px 0px !important;
		}
		&.done {
			@apply border-black;
			.status {
				img {
					@apply opacity-100 fill-red-600;
					filter: grayscale(0%);
				}
				svg {
					@apply hidden;
				}
			}
		}
	}
</style>
