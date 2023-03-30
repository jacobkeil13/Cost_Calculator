<script>
	import { housing_food, student_information } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import SelectionTieredField from '../form-inputs/SelectionTieredField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let housingFood = $dropdownOptions.housing_food;
	let calc_data = $housing_food;

	let housing_alone = Object.keys(calc_data.off_campus_alone);

	$: {
		housing_food.set(calc_data);
	}
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Where are you living during the semester?"
		options={housingFood.living}
		bind:value={calc_data.living_plan}
	/>

	{#if calc_data.living_plan === 'on_campus'}
		<SelectionTieredField
			label="What housing are you staying in?"
			options={housingFood.housing[$student_information.campus]}
			bind:value={calc_data.on_campus.housing}
		/>
		<SelectionField
			label="What Living Learning Community are you a part of?"
			options={housingFood.llc}
			bind:value={calc_data.on_campus.llc}
		/>
	{/if}

	{#if calc_data.living_plan === 'off_campus_parents'}
		<RangeMoneyField
			label="How much are you paying for rent & utilities?"
			bind:value={calc_data.off_campus_parents.utility_fees}
			min="0"
			max="1000"
			step="25"
			concurrency="per month"
		/>
	{/if}

	{#if calc_data.living_plan === 'off_campus_alone'}
		<h2 class="text-xl underline">What do you plan to spend from these areas?</h2>
		{#each housing_alone as option}
			<RangeMoneyField
				label="{option.charAt(0).toUpperCase() + option.slice(1).replace('_', ' ')}?"
				bind:value={calc_data.off_campus_alone[option]}
				min="0"
				max="500"
				step="5"
				concurrency="per month"
			/>
		{/each}
	{/if}

	<SelectionTieredField
		label="What food plan are you going to have?"
		extra_option={{ label: 'No Food Plan', value: 'no_food_plan', style: 'text-red-600' }}
		options={housingFood.food_plan[$student_information.campus]}
		bind:value={calc_data.food_plan}
	/>
</div>
