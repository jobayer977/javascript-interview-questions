<script>
	import SeoHead from '../components/SeoHead.svelte';
	import InnerHeader from '../components/InnerHeader.svelte';
	import Quiz from '../components/Quiz.svelte';
	import { page } from '$app/stores';
	export let title = '';
	export let questions = '';
</script>

<SeoHead {title} />
<div class="container">
	<InnerHeader />
	<article class="blog">
		<div class="edit-on-github flex justify-end w-full">
			<a
				href={`https://github.com/jobayer977/js.jobayer.dev/blob/main/src/routes/${$page.url.pathname}/index.md`}
				target="_blank"
				class="flex items-center text-sm underline"
			>
				Edit on GitHub <img src="/github.svg" class="ml-2 h-5" />
			</a>
		</div>
		<div class="markdown-body markdown-body--dark">
			<slot />
		</div>
	</article>
	{#if questions.length}
		<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
			<div class=" col-span-1">
				<div class="text-left">
					<h2 class="text-[2rem] font-medium mb-10">Exercises and Quizzes</h2>
				</div>
				<Quiz {questions} />
			</div>
		</div>
	{/if}
</div>
