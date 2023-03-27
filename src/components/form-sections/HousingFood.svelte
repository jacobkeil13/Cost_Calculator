<script>
	import { cc_data, dropdownOptions } from '../../store.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import SelectionTieredField from '../form-inputs/SelectionTieredField.svelte';

	let housingFood = $dropdownOptions.housing_food;
	let calc_data = $cc_data.housing_food;
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<SelectionField
		label="Where are you living during the semester?"
		options={housingFood.living}
		bind:value={calc_data.living.living_plan}
	/>

	{#if calc_data.living.living_plan === 'on_campus'}
		<SelectionTieredField
			label="What housing are you staying in?"
			options={housingFood.housing[$cc_data.student_information.campus]}
			bind:value={calc_data.living.on_campus.housing}
		/>
		<SelectionField
			label="What Living Learning Community are you a part of?"
			options={housingFood.llc}
			bind:value={calc_data.living.on_campus.llc}
		/>
	{/if}

	<SelectionTieredField
		label="What food plan are you going to have?"
		options={housingFood.food_plan[$cc_data.student_information.campus]}
		bind:value={calc_data.food_plan}
	/>
</div>
