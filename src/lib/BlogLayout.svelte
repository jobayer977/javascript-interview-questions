<script>
	import SeoHead from '../components/SeoHead.svelte';
	import InnerHeader from '../components/InnerHeader.svelte';
	import Quiz from '../components/Quiz.svelte';
	export let title = '';
</script>

<SeoHead {title} />
<div class="container">
	<InnerHeader />
	<article class="blog">
		<div class="markdown-body markdown-body--dark">
			<slot />
		</div>
	</article>
	<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
		<div class=" col-span-1">
			<div class="text-left">
				<h2 class="text-[2rem] font-medium mb-10">Exercises and Quizzes</h2>
			</div>
			<Quiz />
		</div>
	</div>
</div>
