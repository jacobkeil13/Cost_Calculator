<script>
	import { total, funding, current_step } from '../store.js';
	export let clientX;

	// $: console.log($semester_months[$student_information.semester]);
	let bg_color = 'bg-[#006747] text-white py-1 px-3 rounded-sm';
	let sections = [
		{ name: 'Tuition & Fees', id: 1 },
		{ name: 'Housing & Food', id: 2 },
		{ name: 'Books & Supplies', id: 3 },
		{ name: 'Transportation', id: 4 },
		{ name: 'Personal', id: 5 },
		{ name: 'Funding', id: 6 }
	];

	function switchStep(step_num) {
		current_step.set(step_num);
	}

	$: console.log($funding);
</script>

<div class="{clientX < 960 ? 'py-6 mt-6 bg-gray-200' : 'border-l-2'} px-6">
	<h2 class="text-center text-lg font-bold">
		Total Semester {$total < 0 ? 'Surplus' : 'Shortfall'}
	</h2>
	<h1 class="text-center text-5xl {$total < 0 ? 'text-[#2a990e]' : 'text-red-700'}">
		${Math.round($total < 0 ? $total * -1 : $total)}
	</h1>
	<div class="my-10 space-y-3">
		{#each sections as section}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="flex justify-between items-center cursor-pointer"
				on:click={() => switchStep(section.id)}
			>
				<h1 class="text-xl font-semibold {$current_step === section.id ? bg_color : ''}">
					{section.name}:
				</h1>
				<h1 class="text-xl {section.id === 6 ? 'text-[#2a990e]' : 'text-[#000000]'} font-semibold">
					$0
				</h1>
			</div>
		{/each}
	</div>
</div>
