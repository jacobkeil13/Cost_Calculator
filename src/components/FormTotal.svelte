<script>
	import { fly } from 'svelte/transition';
	import { tooltip } from './misc/tooltip.js';
	import {
		total,
		current_step,
		tuition_fees_total,
		housing_food_total,
		books_supplies_total,
		transportation_total,
		personal_total,
		funding_total,
		validated,
		housing_food,
		notes
	} from '../store.js';
	import { goto } from '$app/navigation';
	import MobileSteps from './MobileSteps.svelte';
	import { food_plan_cost, steps } from '../constants.js';
	import FloatingIcons from './FloatingIcons.svelte';
	import Notes from './form-inputs/Notes.svelte';
	export let clientX,
		quickAccessIsOpen = true;

	$: sections = [
		{ name: 'Student Information', id: 0, amount: 0 },
		{ name: 'Tuition & Fees', id: 1, amount: $tuition_fees_total },
		{
			name: 'Housing',
			id: 2,
			amount: $housing_food_total - $food_plan_cost[$housing_food.food_plan]
		},
		{ name: 'Food', id: 2, amount: $food_plan_cost[$housing_food.food_plan] },
		{ name: 'Books & Supplies', id: 3, amount: $books_supplies_total },
		{ name: 'Transportation', id: 4, amount: $transportation_total },
		{ name: 'Personal', id: 5, amount: $personal_total },
		{ name: 'Funding', id: 6, amount: $funding_total },
		{ name: 'Summary', id: 7, amount: 0 }
	];

	$: {
		notes.set($notes);
	}

	function switchStep(step_num) {
		if (Object.keys($validated).length != 0) {
			return;
		}
		current_step.set(step_num);
		setTimeout(() => {
			goto('#start-content');
		}, 50);
	}
</script>

<div
	class="{clientX < 960 ? 'bg-[#006747]' : ''} {clientX < 960 ? 'p-6 w-screen' : 'border-l-2 pl-6'}"
>
	<div class="flex justify-center space-x-1">
		{#if $total < 0}
			<h1
				class="text-center text-xl {clientX < 960
					? 'text-white font-medium'
					: 'text-black font-semibold'}"
			>
				Total Semester Surplus
			</h1>
			<box-icon
				class="w-[20px] pt-[6px] {clientX < 960 ? 'fill-white' : 'text-green-800'} cursor-pointer"
				title="Estimate of how much extra money you have after expenses."
				name="help-circle"
				use:tooltip
			/>
		{:else if $total > 0}
			<h1
				class="text-center text-xl {clientX < 960
					? 'text-white font-medium'
					: 'text-black font-semibold'}"
			>
				Total Semester Shortfall
			</h1>
			<box-icon
				class="w-[20px] pt-[6px] {clientX < 960 ? 'fill-white' : 'text-green-800'} cursor-pointer"
				title="Estimate of how much money you still need after expenses."
				name="help-circle"
				use:tooltip
			/>
		{/if}
	</div>
	<h1
		class="text-center text-5xl rounded-md {$total < 1
			? clientX < 960
				? 'text-[#8cdd78]'
				: 'text-[#2a990e]'
			: clientX < 960
			? 'text-red-300'
			: 'text-red-700'}"
	>
		${($total < 0 ? $total * -1 : $total).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})}
	</h1>
	{#if clientX > 960}
		<div class="my-10 space-y-3">
			{#each sections as section}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="validate flex justify-between items-center cursor-pointer"
					on:click={() => switchStep(section.id)}
				>
					<h1
						class="validate text-xl font-semibold {$current_step === section.id
							? 'text-[#006747]'
							: ''}"
					>
						{section.name}{section.name != 'Student Information' && section.name != 'Summary'
							? ':'
							: ''}
					</h1>
					<h1
						class="validate text-xl {section.id === 6
							? 'text-[#2a990e]'
							: 'text-[#000000]'} font-semibold"
					>
						{#if section.name != 'Student Information' && section.name != 'Summary'}
							${section.amount.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})}
						{/if}
					</h1>
				</div>
			{/each}
		</div>
		{#if $current_step !== $steps.indexOf('Summary')}
			<Notes />
		{/if}
	{/if}
	{#if clientX < 960}
		<MobileSteps />
	{/if}
	{#if clientX < 960 && quickAccessIsOpen}
		<div in:fly={{ y: 100, duration: 100 }} class="flex flex-col pt-6">
			{#each sections as section}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="flex justify-between items-center cursor-pointer">
					<h1 class="text-2xl text-[#ebebeb] font-medium">
						{section.name}{section.name != 'Student Information' && section.name != 'Summary'
							? ':'
							: ''}
					</h1>
					<h1
						class="text-2xl {section.id === 6 ? 'text-[#83ff9c]' : 'text-[#ebebeb]'} font-semibold"
					>
						{#if section.name != 'Student Information' && section.name != 'Summary'}
							${section.amount.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})}
						{/if}
					</h1>
				</div>
			{/each}
		</div>
	{/if}

	<FloatingIcons {clientX} step={$current_step} />
</div>
