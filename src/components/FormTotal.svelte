<script>
	import {
		total,
		current_step,
		student_information,
		tuition_fees_total,
		housing_food_total,
		books_supplies_total,
		transportation_total,
		personal_total,
		funding_total
	} from '../store.js';
	export let clientX;

	let bg_color = 'bg-[#006747] text-white py-1 px-3 rounded-sm font-medium';
	$: sections = [
		{ name: 'Student Information', id: 0, amount: 0 },
		{ name: 'Tuition & Fees', id: 1, amount: $tuition_fees_total },
		{ name: 'Housing & Food', id: 2, amount: $housing_food_total },
		{ name: 'Books & Supplies', id: 3, amount: $books_supplies_total },
		{ name: 'Transportation', id: 4, amount: $transportation_total },
		{ name: 'Personal', id: 5, amount: $personal_total },
		{ name: 'Funding', id: 6, amount: $funding_total },
		{ name: 'Summary', id: 7, amount: 0 }
	];

	function switchStep(step_num) {
		if (
			$student_information.campus === 'nothing' ||
			$student_information.level === 'nothing' ||
			$student_information.tuition === 'nothing' ||
			$student_information.semester === 'nothing'
		) {
			return;
		}
		current_step.set(step_num);
	}
</script>

<div
	class="{clientX < 960 ? 'p-6 w-screen' : 'border-l-2 pl-6'} {clientX < 960
		? Math.round($total) < 0
			? 'bg-[#006747]'
			: 'bg-red-700'
		: ''}"
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
					<h1 class="text-xl {$current_step === section.id ? bg_color : 'font-semibold'}">
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
	{/if}
</div>
