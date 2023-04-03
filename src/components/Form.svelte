<script>
	import { current_step, resetCalculator } from '../store.js';
	import { steps } from '../constants.js';
	import BooksSupplies from './form-sections/BooksSupplies.svelte';
	import Funding from './form-sections/Funding.svelte';
	import HousingFood from './form-sections/HousingFood.svelte';
	import Personal from './form-sections/Personal.svelte';
	import StudentInfo from './form-sections/StudentInfo.svelte';
	import Transportation from './form-sections/Transportation.svelte';
	import TuitionFees from './form-sections/TuitionFees.svelte';
	import FormControls from './FormControls.svelte';
	import Summary from './form-sections/Summary.svelte';

	$: step_name = $steps[$current_step];
</script>

<div id="form" class="w-full">
	<div class="flex justify-between py-4">
		<h1 class="text-3xl font-medium text-[#006747] rounded-sm">{step_name}</h1>
		<button
			on:click={resetCalculator}
			class="px-2 py-1 bg-[#a71b26] hover:bg-[#cf2836] text-white rounded-sm">Reset</button
		>
	</div>
	{#if $current_step === $steps.indexOf('Student Information')}
		<StudentInfo />
	{:else if $current_step === $steps.indexOf('Tuition & Fees')}
		<TuitionFees />
	{:else if $current_step === $steps.indexOf('Housing & Food')}
		<HousingFood />
	{:else if $current_step === $steps.indexOf('Books & Supplies')}
		<BooksSupplies />
	{:else if $current_step === $steps.indexOf('Transportation')}
		<Transportation />
	{:else if $current_step === $steps.indexOf('Personal')}
		<Personal />
	{:else if $current_step === $steps.indexOf('Funding')}
		<Funding />
	{:else if $current_step === $steps.indexOf('Summary')}
		<Summary />
	{/if}
	<FormControls />
</div>
