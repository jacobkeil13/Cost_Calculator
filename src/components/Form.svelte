<script>
	import { goto } from '$app/navigation';
	import { steps, current_step } from '../store.js';
	import BooksSupplies from './form-sections/BooksSupplies.svelte';
	import Funding from './form-sections/Funding.svelte';
	import HousingFood from './form-sections/HousingFood.svelte';
	import Personal from './form-sections/Personal.svelte';
	import Review from './form-sections/Review.svelte';
	import StudentInfo from './form-sections/StudentInfo.svelte';
	import Transportation from './form-sections/Transportation.svelte';
	import TuitionFees from './form-sections/TuitionFees.svelte';
	import FormControls from './FormControls.svelte';

	$: step_name = $steps[$current_step];

	function reset() {
		goto('/');
	}
</script>

<div class="w-full">
	<div class="flex justify-between py-4">
		<h1 class="text-2xl">{step_name}</h1>
		<button class="px-2 py-1 bg-[#a71b26] text-white rounded-sm"><a href="/">Reset</a></button>
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
	{:else if $current_step === $steps.indexOf('Review')}
		<Review />
	{/if}
	<FormControls />
</div>
