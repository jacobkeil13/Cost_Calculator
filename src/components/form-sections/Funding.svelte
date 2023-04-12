<script>
	import { funding, student_information, tuition_fees } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import AddButtonGroup from '../form-inputs/AddButtonGroup.svelte';
	import DoubleNumberField from '../form-inputs/DoubleNumberField.svelte';

	let funding_options = $dropdownOptions.funding;
	let calc_data = $funding;
	$: gg_eligible =
		calc_data.has_fl_prepaid === 'prepaid_no' &&
		$student_information.tuition === 'out_of_state' &&
		$student_information.level === 'undergraduate' &&
		($student_information.semester === 'fall' || $student_information.semester === 'spring') &&
		$tuition_fees.credit_hours > 11;

	$: plans =
		calc_data.when_purchased === 'prepaid_plan_before'
			? funding_options.prepaid_plan_before
			: funding_options.prepaid_plan_after;

	$: {
		// console.log(gg_eligible);
		funding.set(calc_data);
	}

	function handleAdd(data) {
		if (data.detail.type === 'scholarship') {
			calc_data.scholarships.push({
				name: data.detail.name === '' ? 'Scholarship' : data.detail.name,
				amount: data.detail.amount || 0,
				concurrency: 'semesterly'
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

<div in:fly={{ y: -10, duration: 200 }}>
	<SelectionField
		tooltip_text="Need more information? Click the external link."
		link="https://www.myfloridaprepaid.com/"
		label="Do you have a Florida prepaid plan?"
		options={funding_options.fl_prepaid}
		bind:value={calc_data.has_fl_prepaid}
	/>

	{#if gg_eligible}
		<SelectionField
			tooltip_text="Fall 2018 admitted students and beyond. Merit based scholarship from the Office of Admissions"
			link="https://www.usf.edu/admissions/freshmen/admissions-scholarships/nonflorida.aspx"
			label="Are you receiving a USF Green and Gold Waiver or International Scholarship?"
			options={funding_options.gg_scholarship.has_scholarship}
			bind:value={calc_data.has_green_gold}
		/>
		{#if calc_data.has_green_gold === 'gg_yes'}
			<SelectionField
				tooltip_text="Refer to your terms and conditions in OASIS."
				label="Which USF Green and Gold Scholarship are you receiving?"
				options={funding_options.gg_scholarship.gg_options}
				bind:value={calc_data.green_gold_award}
			/>
		{/if}
	{/if}
	{#if calc_data.has_fl_prepaid === 'prepaid_yes'}
		<SelectionField
			tooltip_text="Contracts purchased before 1/1/07 are exempt from paying the tuition differential fee."
			label="When did you purchase your Florida prepaid plan?"
			options={funding_options.prepaid_purchase}
			bind:value={calc_data.when_purchased}
		/>
		<SelectionField
			tooltip_text="Review your contract to determine your plan type."
			label="Which plan did you purchase?"
			options={plans}
			bind:value={calc_data.prepaid_plan}
		/>
	{/if}

	{#if $student_information.tuition === 'in_state'}
		<SelectionField
			tooltip_text="Need more information? Click the external link."
			link="https://www.usf.edu/financial-aid/brightfutures/index.aspx"
			label="Do you qualify for the Bright Futures Award?"
			options={funding_options.bright_futures}
			bind:value={calc_data.bright_futures}
		/>
	{/if}

	<RangeMoneyField
		tooltip_text="Need more information? Click the external link."
		link="https://www.usf.edu/financial-aid/grants/index.aspx"
		label="Do you have any grants?"
		bind:value={calc_data.grants}
		min="0"
		max="10000"
		step="100"
		concurrency="per semester"
	/>

	<RangeMoneyField
		tooltip_text="Need more information? Click the external link."
		link="https://www.usf.edu/financial-aid/loans/index.aspx"
		label="Do you have any loans?"
		bind:value={calc_data.loans}
		min="0"
		max="20500"
		step="100"
		concurrency="per semester"
	/>

	<div class="space-y-6">
		<AddButtonGroup
			tooltip_text="Need more information? Click the external link."
			link="https://www.usf.edu/financial-aid/scholarships/"
			label="List scholarships:"
			type="scholarship"
			on:add={handleAdd}
		/>

		{#if calc_data.scholarships.length != 0}
			{#each calc_data.scholarships as scholarship, index}
				<div class="flex items-center">
					<RangeMoneyField
						canDelete="true"
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

		<AddButtonGroup label="List jobs:" type="job" on:add={handleAdd} />

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
