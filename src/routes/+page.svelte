<script>
	import Form from '../components/Form.svelte';
	import FormInstructions from '../components/FormInstructions.svelte';
	import FormTotal from '../components/FormTotal.svelte';
	import { cc_data } from '../store.js';

	// $: console.log($cc_data);
</script>

<main>
	<div class="grid grid-cols-[2fr_1fr] gap-4 pt-6">
		<section class="pr-12">
			<FormInstructions />
			<Form />
		</section>
		<FormTotal />
	</div>
</main>
