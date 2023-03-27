<script>
	import { books_supplies, total } from '../../store.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $books_supplies;

	$: {
		books_supplies.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<RangeMoneyField
		label="How much are you planning to spend on books?"
		bind:value={calc_data.books}
		min="0"
		max="1000"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		label="How much are you planning to spend on course-specific supplies?"
		bind:value={calc_data.supplies}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
</div>
