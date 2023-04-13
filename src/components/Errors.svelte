<script>
	import {
		current_step,
		student_information,
		tuition_fees,
		housing_food,
		funding
	} from '../store.js';
	import { steps } from '../constants.js';
	import ErrorItem from './form-display/ErrorItem.svelte';

	$: ggEligible =
		$funding.has_fl_prepaid === 'prepaid_no' &&
		($student_information.tuition === 'out_of_state' ||
			$student_information.tuition === 'international') &&
		$tuition_fees.credit_hours > 11;
</script>

<ul class="pl-5 list-disc text-red-700 font-medium">
	{#if $current_step === $steps.indexOf('Funding') || $current_step === $steps.indexOf('Summary')}
		{#if $tuition_fees.credit_hours === 0}
			<ErrorItem
				text="You have zero credit hours chosen for the semester."
				section="Tuition & Fees"
			/>
		{/if}
	{/if}
	{#if $current_step === $steps.indexOf('Summary')}
		{#if $housing_food.on_campus.housing === 'nothing' && $housing_food.living_plan === 'nothing'}
			<ErrorItem
				text="You have not chosen where you will be living during the semester."
				section="Housing & Food"
			/>
		{/if}
		{#if $housing_food.on_campus.housing === 'nothing' && $housing_food.living_plan === 'on_campus'}
			<ErrorItem
				text="You have not chosen a housing option but opted to live on campus."
				section="Housing & Food"
			/>
		{/if}
		{#if $housing_food.on_campus.llc === 'nothing' && $housing_food.living_plan === 'on_campus'}
			<ErrorItem text="You have not chosen an LLC." section="Housing & Food" />
		{/if}
		{#if $housing_food.food_plan === 'nothing' && $student_information.campus !== 'sarasota'}
			<ErrorItem text="You have not chosen a food plan." section="Housing & Food" />
		{/if}
		{#if $funding.has_fl_prepaid === 'nothing'}
			<ErrorItem text="Florida prepaid option has not been selected." section="Funding" />
		{/if}
		{#if $funding.has_fl_prepaid !== 'nothing' && $funding.has_fl_prepaid === 'prepaid_yes' && $funding.when_purchased === 'nothing'}
			<ErrorItem
				text="Florida prepaid is selected but when it was purchased is not selected."
				section="Funding"
			/>
		{/if}
		{#if $funding.when_purchased !== 'nothing' && $funding.has_fl_prepaid === 'prepaid_yes' && $funding.prepaid_plan === 'nothing'}
			<ErrorItem
				text="Florida prepaid contract date is selected but no plan was selected."
				section="Funding"
			/>
		{/if}
		{#if $funding.bright_futures === 'nothing' && $student_information.tuition === 'in_state'}
			<ErrorItem text="Bright futures option was not selected." section="Funding" />
		{/if}
		{#if ggEligible && $funding.has_green_gold === 'nothing'}
			<ErrorItem text="Choice of Green & Gold or Sholarship not selected." section="Funding" />
		{/if}
		{#if ggEligible && $funding.has_green_gold !== 'nothing' && $funding.green_gold_award === 'nothing'}
			<ErrorItem text="Green & Gold or Scholarship award needs to be selected." section="Funding" />
		{/if}
	{/if}
</ul>
