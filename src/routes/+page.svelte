<script>
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';

	let clientX;
</script>

<svelte:window bind:outerWidth={clientX} />

<main>
	{#if clientX >= 960}
		<div class="grid grid-cols-[2fr_1fr] gap-4 py-6">
			<section class="pr-12">
				<FormInstructions />
				<Form />
			</section>
			<FormTotal {clientX} />
		</div>
	{/if}
	{#if clientX < 960}
		<div class="py-6">
			<FormInstructions />
			<FormTotal {clientX} />
			<Form />
		</div>
	{/if}
</main>
