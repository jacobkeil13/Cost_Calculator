<script>
	import { funding, student_information } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import AddButtonGroup from '../form-inputs/AddButtonGroup.svelte';
	import DoubleNumberField from '../form-inputs/DoubleNumberField.svelte';

	let funding_options = $dropdownOptions.funding;
	let calc_data = $funding;

	$: plans =
		calc_data.when_purchased === 'prepaid_plan_before'
			? funding_options.prepaid_plan_before
			: funding_options.prepaid_plan_after;

	$: {
		funding.set(calc_data);
	}

	function handleAdd(data) {
		if (data.detail.type === 'scholarship') {
			calc_data.scholarships.push({
				name: data.detail.name === '' ? 'Scholarship' : data.detail.name,
				amount: data.detail.amount || 0,
				concurrency: data.detail.concurrency === 'nothing' ? 'semesterly' : data.detail.concurrency
			});
		}
		if (data.detail.type === 'job') {
			calc_data.jobs.push({
				name: data.detail.name === '' ? 'Job' : data.detail.name,
				amount: data.detail.amount || 0,
				hours: data.detail.hours || 0
			});
		}
		calc_data = calc_data;
		funding.set(calc_data);
	}

	function handleDelete(index, type) {
		if (type === 'scholarship') {
			calc_data.scholarships.splice(index, 1);
		}
		if (type === 'job') {
			calc_data.jobs.splice(index, 1);
		}
		calc_data = calc_data;
		funding.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Do you have a Florida prepaid plan?"
		options={funding_options.fl_prepaid}
		bind:value={calc_data.has_fl_prepaid}
	/>

	{#if calc_data.has_fl_prepaid === 'prepaid_no' && $student_information.tuition === 'out_of_state' && $student_information.level === 'undergraduate'}
		<SelectionField
			label="Are you receiving a USF Green and Gold Scholarship?"
			options={funding_options.gg_scholarship.has_scholarship}
			bind:value={calc_data.has_green_gold}
		/>
		{#if calc_data.has_green_gold === 'gg_yes'}
			<SelectionField
				label="Which USF Green and Gold Scholarship are you receiving?"
				options={funding_options.gg_scholarship.gg_options}
				bind:value={calc_data.green_gold_award}
			/>
		{/if}
	{/if}
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

	{#if $student_information.tuition === 'in_state'}
		<SelectionField
			label="Do you qualify for the Bright Futures Award??"
			options={funding_options.bright_futures}
			bind:value={calc_data.bright_futures}
		/>
	{/if}

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
				<div class="flex items-center">
					<RangeMoneyField
						label={scholarship.name}
						bind:value={scholarship.amount}
						min="0"
						max="5000"
						step="100"
						concurrency="per {scholarship.concurrency === 'monthly' ? 'month' : 'semester'}"
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<box-icon
						on:click={() => handleDelete(index, 'scholarship')}
						name="x"
						class="fill-black hover:fill-red-700 ml-4 mt-2 cursor-pointer"
					/>
				</div>
			{/each}
		{/if}

		<AddButtonGroup label="List jobs:" button="Add Job" type="job" on:add={handleAdd} />

		{#if calc_data.jobs.length != 0}
			{#each calc_data.jobs as job, index}
				<div class="flex items-center">
					<DoubleNumberField bind:value={calc_data.jobs[index]} />
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<box-icon
						on:click={() => handleDelete(index, 'job')}
						name="x"
						class="fill-black hover:fill-red-700 ml-4 mt-2 cursor-pointer"
					/>
				</div>
			{/each}
		{/if}
	</div>
</div>
