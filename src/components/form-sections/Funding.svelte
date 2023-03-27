<script>
	import { cc_data, dropdownOptions } from '../../store.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let funding = $dropdownOptions.funding;
	let calc_data = $cc_data.funding;

	$: plans =
		calc_data.fl_prepaid.when_purchased === 'before_date'
			? funding.prepaid_plan_before
			: funding.prepaid_plan_after;
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Do you have a Florida prepaid plan?"
		options={funding.fl_prepaid}
		bind:value={calc_data.fl_prepaid.has_fl_prepaid}
	/>

	{#if calc_data.fl_prepaid.has_fl_prepaid === 'prepaid_yes'}
		<SelectionField
			label="When did you purchase your Florida prepaid plan?"
			options={funding.prepaid_purchase}
			bind:value={calc_data.fl_prepaid.when_purchased}
		/>
		<SelectionField
			label="Which plan did you purchase?"
			options={plans}
			bind:value={calc_data.fl_prepaid.prepaid_plan}
		/>
	{/if}

	<SelectionField
		label="Do you qualify for the Bright Futures Award??"
		options={funding.bright_futures}
		bind:value={calc_data.bright_futures}
	/>

	<RangeMoneyField
		label="Do you have any grants?"
		bind:value={calc_data.grants}
		min="0"
		max="750"
		step="5"
		concurrency="per semester"
	/>

	<RangeMoneyField
		label="Do you have any loans?"
		bind:value={calc_data.loans}
		min="0"
		max="5000"
		step="100"
		concurrency="per semester"
	/>
</div>
