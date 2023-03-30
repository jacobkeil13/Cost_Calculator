<script>
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';

	let clientX;
</script>

<svelte:window bind:outerWidth={clientX} />

<main class="relative h-screen">
	{#if clientX >= 960}
		<div class="grid grid-cols-[2fr_1fr] gap-4 p-6">
			<section class="pr-3">
				<FormInstructions />
				<Form />
			</section>
			<div class="sticky top-6 self-start">
				<FormTotal {clientX} />
			</div>
		</div>
	{/if}
	{#if clientX < 960}
		<div class="p-6">
			<!-- <FormInstructions /> -->
			<Form />
		</div>
		<div class="h-32" />
		<div class="fixed bottom-0">
			<FormTotal {clientX} />
		</div>
	{/if}
</main>
