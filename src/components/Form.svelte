<script>
	import { current_step } from '../store.js';
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

	function print() {
		window.print();
	}
</script>

<div id="form" class="w-full">
	<div class="flex justify-between py-4">
		<div class="flex space-x-3">
			<h1 class="text-3xl font-medium text-[#006747]">{step_name}</h1>
			{#if $current_step === $steps.indexOf('Summary')}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<box-icon
					on:click={print}
					type="solid"
					name="printer"
					class="fill-[#05553c] cursor-pointer mt-2"
				/>
			{/if}
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => location.reload()} id="start-over" class="flex items-center space-x-1">
			<h1 class="font-semibold">Start over</h1>
			<box-icon name="reset" />
		</div>
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

<style>
	#start-over:hover > h1 {
		font-weight: 600;
		color: rgb(185 28 28);
		opacity: 1;
	}
	#start-over:hover > box-icon {
		fill: rgb(185 28 28);
	}
	#start-over {
		cursor: pointer;
	}
	#start-over > h1 {
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}
	#start-over > box-icon {
		transition: all 0.2s ease-in-out;
	}
</style>
