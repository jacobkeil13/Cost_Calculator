<script>
	import { cc_data, dropdownOptions } from '../../store.js';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let funding = $dropdownOptions.funding;
	let calc_data = $cc_data.transportation;
</script>

<SelectionField
	label="Are you bringing a vehicle to campus?"
	options={funding.fl_prepaid}
	bind:value={calc_data.vehicle.has_vehicle}
/>

{#if calc_data.vehicle.has_vehicle === 'vehicle-yes'}
	<RangeMoneyField
		label="How much is your parking pass?"
		bind:value={calc_data.vehicle.parking_pass}
		min="0"
		max="500"
		step="5"
		concurrency="per semester"
	/>
	<RangeMoneyField
		label="How much is your car payment?"
		bind:value={calc_data.vehicle.car_payment}
		min="0"
		max="750"
		step="5"
		concurrency="per month"
	/>
	<RangeMoneyField
		label="How much is your car insurance?"
		bind:value={calc_data.vehicle.insurance}
		min="0"
		max="750"
		step="5"
		concurrency="per month"
	/>
	<RangeMoneyField
		label="How much do you spend on gas?"
		bind:value={calc_data.vehicle.gas}
		min="0"
		max="300"
		step="5"
		concurrency="per month"
	/>
	<RangeMoneyField
		label="How much are you spending on car maintenance?"
		bind:value={calc_data.vehicle.maintenance}
		min="0"
		max="750"
		step="5"
		concurrency="per month"
	/>
{/if}

{#if calc_data.vehicle.has_vehicle === 'vehicle-no'}
	<RangeMoneyField
		label="What other transportation do you have?"
		bind:value={calc_data.other_transport}
		min="0"
		max="750"
		step="5"
		concurrency="per month"
	/>
{/if}
