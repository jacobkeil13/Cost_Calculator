<script>
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';
</script>

<main>
	<div class="grid grid-cols-[2fr_1fr] gap-4 py-6">
		<section class="pr-12">
			<FormInstructions />
			<Form />
		</section>
		<FormTotal />
	</div>
</main>
