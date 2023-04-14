<script>
	import { books_supplies } from '../../store.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $books_supplies;

	$: {
		books_supplies.set(calc_data);
	}
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<RangeMoneyField
		tooltip_text="Use USF Bookstore website to find the best prices."
		tooltip_text_link="TAP (Textbook Affordability Project) web page."
		link="https://tap.usf.edu/"
		label="How much are you planning to spend on books?"
		bind:value={calc_data.books}
		min="0"
		max="1000"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		tooltip_text="e.g. laptop, pens, pencils, calculators, clickers, etc."
		label="How much are you planning to spend on course-specific supplies?"
		bind:value={calc_data.supplies}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
</div>
