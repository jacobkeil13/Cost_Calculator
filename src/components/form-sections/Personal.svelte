<script>
	import { cc_data } from '../../store.js';
	import { fly } from 'svelte/transition';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $cc_data.personal_expenses;
	let expense_list = Object.keys(calc_data);
	let expenses = [
		'Takeout & Coffee?',
		'Groceries?',
		'Health Care?',
		'Personal Care?',
		'Cell Phone Bill?',
		'Entertainment & Social Life?',
		'Travel & Trips?',
		'Subscriptions & Memberships?',
		'Clothing & Accessories?',
		'Family Expenses?',
		'Organization Dues?',
		'Hobbies?',
		'Pets?',
		'Holidays & Gifts?',
		'Laundry?'
	];
</script>

<div in:fly={{ x: -10, duration: 500 }}>
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
</div>
