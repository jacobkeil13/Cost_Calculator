<script>
	import { current_step, validated } from '../store.js';
	import { goto } from '$app/navigation';
	import { steps } from '../constants.js';

	function incStep() {
		if (Object.keys($validated).length !== 0) {
			return;
		}
		if ($current_step !== $steps.length - 1) {
			$current_step = $current_step + 1;
			setTimeout(() => {
				goto('#start-content');
			}, 50);
		}
	}

	function decStep() {
		if ($current_step !== 0) {
			$current_step = $current_step - 1;
			setTimeout(() => {
				goto('#start-content');
			}, 50);
		}
	}

	function print() {
		goto('#start-content');
		setTimeout(() => {
			window.print();
		}, 1000);
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
			class="validate flex justify-between items-center px-3 py-2 bg-[#006747] text-white rounded-md"
			>{$steps[$current_step + 1]}
			<box-icon name="chevron-right" class="validate fill-white" /></button
		>
	{/if}
	{#if $current_step === $steps.indexOf('Summary')}
		<button
			on:click={print}
			class="flex justify-between items-center px-3 py-2 bg-[#006747] text-white rounded-md"
			>Print Summary</button
		>
	{/if}
</div>
