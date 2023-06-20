<script>
	import { transportation, student_information } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let calc_data = $transportation;

	$: {
		transportation.set(calc_data);
	}
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<SelectionField
		label="Are you bringing a vehicle to campus?"
		options={$dropdownOptions.transportation.has_car}
		bind:value={calc_data.has_vehicle}
	/>

	{#if calc_data.has_vehicle === 'vehicle_yes'}
		<SelectionField
			tooltip_text="All vehicles on campus must have a parking permit. Expenses not included in cost of attendance for financial aid purposes."
			tooltip_text_link="Parking and Transportation Services web page"
			link="https://www.usf.edu/administrative-services/parking/"
			label="Which parking pass do you have?"
			options={$dropdownOptions.transportation.parking_permits[$student_information.campus]}
			bind:value={calc_data.parking_pass}
		/>
		<RangeMoneyField
			tooltip_text="Enter zero if paid by others. Expenses not included in cost of attendance for financial aid purposes."
			label="How much is your car payment?"
			bind:value={calc_data.car_payment}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
			tooltip_text="Enter zero if paid by others. Expenses not included in cost of attendance for financial aid purposes."
			label="How much is your car insurance?"
			bind:value={calc_data.insurance}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
			tooltip_text="Enter zero if paid by others. Expenses not included in cost of attendance for financial aid purposes."
			label="How much do you spend on gas?"
			bind:value={calc_data.gas}
			min="0"
			max="300"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
			tooltip_text="e.g. oil changes, tire replacements, etc. Expenses not included in cost of attendance for financial aid purposes."
			label="How much are you spending on car maintenance?"
			bind:value={calc_data.maintenance}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
	{/if}

	{#if calc_data.has_vehicle === 'vehicle_no'}
		<RangeMoneyField
			tooltip_text="e.g. Uber, Lyft, etc. Expenses not included in cost of attendance for financial aid purposes."
			label="What other transportation do you have?"
			bind:value={calc_data.other_transport}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
	{/if}
</div>
