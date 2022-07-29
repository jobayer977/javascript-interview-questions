<script>
	import InnerHeader from '../components/InnerHeader.svelte';
</script>

<InnerHeader />
<article class="blog">
	<div class="container">
		<div class="markdown-body markdown-body--dark">
			<slot />
		</div>
	</div>
</article>
