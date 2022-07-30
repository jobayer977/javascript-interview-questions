<script lang="ts">
	import type { IQuestion } from '../models/interfaces';
	import { getAlphabets } from '../utils/index';
	export let questions: IQuestion[] = [];
	let selectedAnswer: string = '';
	$: currentQuestionIndex = 0;
	$: currentQuestion = questions[currentQuestionIndex];
	const onSubmit = () => {
		if (currentQuestionIndex <= questions.length - 1) {
			currentQuestion.isCorrect = currentQuestion.correctAnswer === selectedAnswer;
			questions[currentQuestionIndex] = currentQuestion;
			currentQuestionIndex = currentQuestionIndex + 1;
		}
		selectedAnswer = '';
	};
	const onReset = () => {
		currentQuestionIndex = 0;
		questions = questions.map((question) => {
			question.isCorrect = false;
			return question;
		});
	};
</script>

<div class="quiz ">
	{#if currentQuestionIndex <= questions.length - 1}
		<p class="text-lg font-medium pb-2">{currentQuestionIndex + 1}/{questions?.length}</p>
		<h2>{currentQuestion?.question}</h2>
		<div class="options">
			{#each currentQuestion?.answer || [] as answer, index}
				<div
					class="option"
					class:selected={answer === selectedAnswer}
					on:click={() => {
						selectedAnswer = answer;
					}}
				>
					<span>{getAlphabets(index)}</span>
					<h4>{answer}</h4>
				</div>
			{/each}
		</div>
		<div class="actions">
			<button class="btn submit" on:click={onSubmit}>Next</button>
		</div>
	{:else}
		<div class="result">
			<h2>Result</h2>
			{#each questions as question, index}
				<div class="card mb-4">
					<h4 class="text-base font-medium">{index + 1}. {question?.question}</h4>
					<p
						class="ml-3 text-sm"
						class:text-red-600={!question?.isCorrect}
						class:text-green-600={question?.isCorrect}
					>
						Ans: {question.correctAnswer}
					</p>
				</div>
			{/each}
			<div class="actions">
				<button class="btn reset" on:click={onReset}>Reset</button>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.quiz {
		@apply bg-[#161627] p-5 rounded-md;
		h2 {
			@apply text-xl font-semibold mb-7 text-left;
		}
		.option {
			border-width: 1.5px;
			@apply border-solid  border-white border-opacity-50 rounded-md p-3 mb-3 cursor-pointer flex items-center  transition-all hover:scale-105 relative;
			h4 {
				@apply text-[#eaeaea] font-medium;
			}
			span {
				@apply bg-[#0445AF] py-1 px-2 inline-block text-center rounded-sm mr-3 font-semibold text-sm;
			}
			.icon {
				top: 50%;
				transform: translateY(-50%);
				@apply absolute right-2 h-8;
			}
			&.selected {
				@apply border-[#0445AF] bg-blue-500;
				span {
					@apply bg-[#0445AF] text-white;
				}
			}
		}
		.actions {
			@apply flex justify-end mt-5;
			.btn {
				@apply bg-[#0445AF] text-white font-medium px-5 py-2 rounded-md mr-3;
				&.reset {
					@apply bg-[#161627] border-[#0445AF] border-2;
				}
			}
		}
	}
</style>
