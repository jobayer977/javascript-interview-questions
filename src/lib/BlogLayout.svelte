<script>
	import InnerHeader from '../components/InnerHeader.svelte';
</script>

<div class="container">
	<InnerHeader />
	<article class="blog">
		<div class="markdown-body markdown-body--dark">
			<slot />
		</div>
	</article>
</div>
