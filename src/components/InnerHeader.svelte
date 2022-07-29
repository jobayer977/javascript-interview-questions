<div class="container">
	<div class="hero-blk">
		<a href="/" class="hero_info_blk">
			<div class="flex justify-center mr-10">
				<img class="h-24" src="/logo.svg" alt="" />
			</div>
			<div>
				<h1>Decode Javascript</h1>
				<p>Join 100,000+ tech professionals. Unsubscribe anytime.</p>
			</div>
		</a>
		<!-- {#if $page.url.pathname === '/'}
			<div>
				<div class="search">
					<input type="text" placeholder="Search" />
				</div>
			</div>
		{/if} -->
	</div>
</div>

<style lang="postcss">
	.hero-blk {
		@apply flex justify-between items-center;
	}
	.hero_info_blk {
		@apply flex items-center;
		h1 {
			margin: 0px;
			font-family: Barlow, sans-serif;
			font-weight: 700;
			font-size: 2rem;
			margin: 0;
		}
		p {
			font-family: Barlow, sans-serif;
			font-weight: 400;
			font-size: 14px;
		}
	}
	.search {
		@apply flex items-center relative;
		input {
			font-size: 16px;
			padding: 10px 20px;
			height: 46px;
			width: 100%;
			-webkit-box-align: center;
			align-items: center;
			border-radius: 999px;
			display: inline-block;
			margin-right: 10px;
			margin-bottom: 10px;
			background-color: #161627;
			border: 1px solid rgb(148, 148, 148);
			color: rgb(99, 99, 99) !important;
			&:focus {
				outline: none;
			}
		}
	}
</style>
