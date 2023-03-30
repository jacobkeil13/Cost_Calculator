<script>
	import { transportation } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let transportation_options = $dropdownOptions.transportation;
	let calc_data = $transportation;

	$: {
		transportation.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Are you bringing a vehicle to campus?"
		options={transportation_options}
		bind:value={calc_data.has_vehicle}
	/>

	{#if calc_data.has_vehicle === 'vehicle_yes'}
		<RangeMoneyField
			label="How much is your parking pass?"
			bind:value={calc_data.parking_pass}
			min="0"
			max="500"
			step="5"
			concurrency="per semester"
		/>
		<RangeMoneyField
			label="How much is your car payment?"
			bind:value={calc_data.car_payment}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
			label="How much is your car insurance?"
			bind:value={calc_data.insurance}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
			label="How much do you spend on gas?"
			bind:value={calc_data.gas}
			min="0"
			max="300"
			step="5"
			concurrency="per month"
		/>
		<RangeMoneyField
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
			label="What other transportation do you have?"
			bind:value={calc_data.other_transport}
			min="0"
			max="750"
			step="5"
			concurrency="per month"
		/>
	{/if}
</div>
