<script>
	import { tuition_fees } from '../../store.js';
	import { fly } from 'svelte/transition';
	import RangeField from '../form-inputs/RangeField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $tuition_fees;

	$: {
		tuition_fees.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 200 }}>
	<RangeField
		label="How many credit hours are you taking?"
		bind:value={calc_data.credit_hours}
		min="1"
		max="18"
		step="1"
	/>
	<RangeMoneyField
		label="Do you have any lab fees?"
		bind:value={calc_data.lab_fees}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		label="Do you have any additional fees?"
		bind:value={calc_data.other_fees}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
</div>
