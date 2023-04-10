<script>
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
		housing_food
	} from '../store.js';
	import { goto } from '$app/navigation';
	import MobileSteps from './MobileSteps.svelte';
	import { food_plan_cost } from '../constants.js';
	import FloatingIcons from './FloatingIcons.svelte';
	export let clientX,
		quickAccessIsOpen = true;

	let bg_color = 'bg-[#006747] text-white py-1 px-3 rounded-sm font-medium';
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
	<h2
		class="text-center text-lg {clientX < 960 ? 'text-white font-medium' : 'text-black font-bold'}"
	>
		Total Semester {$total < 0 ? 'Surplus' : 'Shortfall'}
	</h2>
	<h1
		class="text-center text-5xl rounded-md {$total < 1
			? clientX < 960
				? 'text-white'
				: 'text-[#2a990e]'
			: clientX < 960
			? 'text-white'
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
					class="flex justify-between items-center cursor-pointer"
					on:click={() => switchStep(section.id)}
				>
					<h1 class="text-xl font-semibold {$current_step === section.id ? 'text-[#006747]' : ''}">
						{section.name}{section.name != 'Student Information' && section.name != 'Summary'
							? ':'
							: ''}
					</h1>
					<h1
						class="text-xl {section.id === 6 ? 'text-[#2a990e]' : 'text-[#000000]'} font-semibold"
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
		<div>
			<h1 class="text-2xl font-medium text-[#006747] mb-2">Notes</h1>
			<textarea class="border-2 border-gray-300 w-full rounded-md p-2 h-32 focus:outline-none" />
		</div>
	{/if}
	{#if clientX < 960}
		<MobileSteps />
	{/if}
	{#if clientX < 960 && quickAccessIsOpen}
		<div class="flex flex-col pt-6">
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
