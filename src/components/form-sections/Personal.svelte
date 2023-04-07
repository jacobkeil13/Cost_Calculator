<script>
	import { personal } from '../../store.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';
	import AddButtonGroup from '../form-inputs/AddButtonGroup.svelte';
	import DoubleNumberField from '../form-inputs/DoubleNumberField.svelte';

	let calc_data = $personal;
	let expense_list = Object.keys(calc_data);
	let expenses = [
		'Takeout & Coffee?',
		'Groceries?',
		'Cell Phone Bill?',
		'Subscriptions & Memberships?'
	];

	$: {
		personal.set(calc_data);
	}

	function handleAdd(data) {
		if (data.detail.type === 'expense') {
			calc_data.custom_expenses.push({
				name: data.detail.name === '' ? 'Expense' : data.detail.name,
				amount: data.detail.amount || 0,
				concurrency: data.detail.concurrency === 'nothing' ? 'semesterly' : data.detail.concurrency
			});
		}
		calc_data = calc_data;
		personal.set(calc_data);
	}

	function handleDelete(index, type) {
		if (type === 'expense') {
			calc_data.custom_expenses.splice(index, 1);
		}
		calc_data = calc_data;
		personal.set(calc_data);
	}
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<h2 class="text-xl underline">What do you plan to spend from these areas?</h2>

	{#each expenses as expense, index}
		<RangeMoneyField
			label={expense}
			bind:value={calc_data[expense_list[index]]}
			min="0"
			max="500"
			step="5"
			concurrency="per month"
		/>
	{/each}
	<AddButtonGroup
		label="List other expenses:"
		button="Add Expense"
		type="expense"
		on:add={handleAdd}
	/>
	{#if calc_data.custom_expenses.length != 0}
		{#each calc_data.custom_expenses as expense, index}
			<div class="flex items-center">
				<RangeMoneyField
					label={expense.name}
					bind:value={expense.amount}
					min="0"
					max="5000"
					step="100"
					concurrency="per {expense.concurrency === 'monthly' ? 'month' : 'semester'}"
				/>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<box-icon
					on:click={() => handleDelete(index, 'expense')}
					name="x"
					class="fill-black hover:fill-red-700 ml-4 mt-2 cursor-pointer"
				/>
			</div>
		{/each}
	{/if}
</div>
