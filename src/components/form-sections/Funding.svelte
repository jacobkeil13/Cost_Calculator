<script>
	import { funding, dropdownOptions } from '../../store.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import AddButtonGroup from '../form-inputs/AddButtonGroup.svelte';

	let funding_options = $dropdownOptions.funding;
	let calc_data = $funding;

	$: plans =
		calc_data.when_purchased === 'before_date'
			? funding_options.prepaid_plan_before
			: funding_options.prepaid_plan_after;

	$: {
		funding.set(calc_data);
	}

	function handleAdd(data) {
		console.log('Add Scholarship Pressed', data.detail);
		if (data.detail.type === 'scholarship') {
			calc_data.scholarships.push({
				name: data.detail.name,
				amount: data.detail.amount,
				concurrency: data.detail.concurrency
			});
		}
		if (data.detail.type === 'job') {
			calc_data.jobs.push({
				name: data.detail.name,
				amount: data.detail.amount,
				hours: data.detail.hours
			});
		}
		funding.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Do you have a Florida prepaid plan?"
		options={funding_options.fl_prepaid}
		bind:value={calc_data.has_fl_prepaid}
	/>

	{#if calc_data.has_fl_prepaid === 'prepaid_yes'}
		<SelectionField
			label="When did you purchase your Florida prepaid plan?"
			options={funding_options.prepaid_purchase}
			bind:value={calc_data.when_purchased}
		/>
		<SelectionField
			label="Which plan did you purchase?"
			options={plans}
			bind:value={calc_data.prepaid_plan}
		/>
	{/if}

	<SelectionField
		label="Do you qualify for the Bright Futures Award??"
		options={funding_options.bright_futures}
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

	<div class="space-y-6">
		<AddButtonGroup
			label="List scholarships:"
			button="Add Scholarship"
			type="scholarship"
			on:add={handleAdd}
		/>

		{#if calc_data.scholarships.length != 0}
			{#each calc_data.scholarships as scholarship, index}
				<RangeMoneyField
					label={scholarship.name}
					bind:value={calc_data.scholarships[index].amount}
					min="0"
					max="5000"
					step="100"
					concurrency="per {scholarship.concurrency === 'monthly' ? 'month' : 'semester'}"
				/>
			{/each}
		{/if}

		<AddButtonGroup label="List jobs:" button="Add Job" type="job" on:add={handleAdd} />
	</div>
</div>
