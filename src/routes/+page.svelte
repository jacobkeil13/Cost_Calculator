<script>
	import { current_step } from '../store.js';
	import { steps } from '../constants.js';
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';
	import Errors from '../components/Errors.svelte';

	let clientX;
	let quickAccessIsOpen = false;

	function toggleQuickAccess() {
		quickAccessIsOpen = !quickAccessIsOpen;
	}
</script>

<svelte:window bind:outerWidth={clientX} />

<main id="start-content" class="relative">
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
				{#if $current_step === $steps.indexOf('Summary')}
					<Errors />
				{/if}
			</div>
		</div>
	{/if}
	{#if clientX < 960}
		<div class="p-6">
			<Form />
		</div>
		<div class="fixed bottom-0 border-t-2 border-[#20795e] h-auto">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			{#if quickAccessIsOpen}
				<box-icon
					on:click={toggleQuickAccess}
					name="chevron-down"
					class="absolute top-2 right-2 w-8 h-8 z-10 fill-white cursor-pointer"
				/>
			{:else}
				<box-icon
					on:click={toggleQuickAccess}
					name="chevron-up"
					class="absolute top-2 right-2 w-8 h-8 z-10 fill-white cursor-pointer"
				/>
			{/if}

			<FormTotal {clientX} {quickAccessIsOpen} />
		</div>
	{/if}
</main>
