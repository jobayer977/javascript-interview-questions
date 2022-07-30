<script>
</script>

<div class="quiz ">
	<p class="text-lg font-medium pb-2">1/2</p>
	<h2>What is the purpose of the array splice method?</h2>
	<div class="options">
		<div class="option">
			<span>A</span>
			<h4>Removes array elements</h4>
		</div>
		<div class="option selected">
			<span>B</span>
			<h4>Overwrites the original array.</h4>
		</div>
		<div class="option">
			<span>C</span>
			<h4>Overwrites the original array.</h4>
		</div>
		<div class="option">
			<span>D</span>
			<h4>
				Callback function once for each array element. Callback function once for each array
				element.
			</h4>
		</div>
	</div>
	<div class="actions">
		<button class="btn submit">Next</button>
		<!-- <button class="btn reset">Reset</button> -->
	</div>
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
