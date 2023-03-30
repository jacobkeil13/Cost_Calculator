<script>
	import { current_step } from '../store.js';
	import { steps } from '../constants.js';

	function incStep() {
		if ($current_step !== $steps.length - 1) {
			$current_step = $current_step + 1;
		}
	}

	function decStep() {
		if ($current_step !== 0) {
			$current_step = $current_step - 1;
		}
	}
</script>

<div class="flex {$current_step === 0 ? 'justify-end' : 'justify-between'} w-full mt-10">
	{#if $current_step !== 0}
		<button
			on:click={decStep}
			class="flex justify-between items-center px-3 py-2 bg-[#006747] text-white rounded-md"
			><box-icon name="chevron-left" class="fill-white" /> {$steps[$current_step - 1]}</button
		>
	{/if}
	{#if $current_step !== $steps.length - 1}
		<button
			on:click={incStep}
			class="flex justify-between items-center px-3 py-2 bg-[#006747] text-white rounded-md"
			>{$steps[$current_step + 1]} <box-icon name="chevron-right" class="fill-white" /></button
		>
	{/if}
</div>
