<script>
	import { createEventDispatcher } from 'svelte';
	export let label, button, type;
	const dispatch = createEventDispatcher();

	function addEvent() {
		dispatch('add', data);
		data.name = '';
		data.amount = undefined;
		data.concurrency = 'semesterly';
		data.hours = undefined;
	}

	$: data = {
		type,
		name: '',
		amount: undefined,
		concurrency: 'semesterly',
		hours: undefined
	};
</script>

<div class="form-control">
	<h1>{label}</h1>
	<div name="button-row" class="flex justify-between space-x-3">
		<input
			placeholder="Name..."
			type="text"
			name="name"
			id="name"
			class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			bind:value={data.name}
		/>
		<input
			placeholder={data.type === 'job' ? 'Hours per week...' : 'Amount...'}
			type="number"
			name="amount"
			id="amount"
			min="0"
			class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			bind:value={data.amount}
		/>
		{#if type === 'scholarship'}
			<select
				bind:value={data.concurrency}
				name="type"
				class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			>
				<option value="monthly">Monthly</option>
				<option selected value="semesterly">Semesterly</option>
			</select>
		{/if}
		{#if type === 'job'}
			<input
				bind:value={data.hours}
				placeholder="Amount per hour..."
				type="number"
				name="hours"
				id="hours"
				min="0"
				class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			/>
		{/if}
	</div>
	<button class="px-2 py-1 bg-[#006747] text-white rounded-sm mt-2" on:click={addEvent}
		>{button}</button
	>
</div>
