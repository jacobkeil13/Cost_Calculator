<script>
	import { tuition_fees, student_information } from '../../store.js';
	import { static_vars } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import RangeField from '../form-inputs/RangeField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $tuition_fees;

	$: {
		tuition_fees.set(calc_data);
	}
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<RangeField
		tooltip_text="Enter your expected/current number of credit hours."
		label="How many credit hours are you taking?"
		bind:value={calc_data.credit_hours}
		min="1"
		max="18"
		step="1"
	/>
	<RangeMoneyField
		tooltip_text="Enter lab fee costs, if applicable. These are included in your registration in OASIS."
		label="Do you have any lab fees?"
		bind:value={calc_data.lab_fees}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		tooltip_text="e.g. Excess credit hours, Repeat course surcharges, Distance learning, etc."
		label="Do you have any additional fees?"
		bind:value={calc_data.other_fees}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		tooltip_text="Automatic flat fee for campus."
		disabled
		label="Campus flat fees:"
		value={$static_vars.flat_fees.value}
		min="0"
		max="100"
		step="5"
		concurrency="per semester"
	/>
</div>
