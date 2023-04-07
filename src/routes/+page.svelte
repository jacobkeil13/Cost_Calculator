<script>
	import { current_step } from '../store.js';
	import { steps } from '../constants.js';
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';

	let clientX;
</script>

<svelte:window bind:outerWidth={clientX} />

<main class="relative">
	{#if clientX >= 960}
		<div class="grid grid-cols-[2fr_1fr] gap-4 p-6">
			<section class="pr-3">
				{#if $current_step === $steps.indexOf('Student Information')}
					<FormInstructions />
				{/if}
				<Form />
			</section>
			<div class="sticky top-6 self-start">
				<FormTotal {clientX} />
			</div>
		</div>
	{/if}
	{#if clientX < 960}
		<div class="p-6">
			<Form />
		</div>
		<div class="h-[165px]" />
		<div class="fixed bottom-0">
			<FormTotal {clientX} />
		</div>
	{/if}
</main>
